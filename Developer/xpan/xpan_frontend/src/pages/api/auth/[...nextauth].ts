
import NextAuth from "next-auth";
import type { NextAuthOptions } from "next-auth";
import { Account, User } from "next-auth";
import { NextApiRequest, NextApiResponse } from "next";
import GoogleProvider from 'next-auth/providers/google';
import GithubProvider from 'next-auth/providers/github';


interface CustomToken extends Record<string, any> {
    accessToken?: string;
    userId?: string; 
}

interface Session {
    user?: {
        id?: string | null | undefined;
        name?: string | null | undefined;
        email?: string | null | undefined;
        image?: string | null | undefined;
    };
    expires?: string | Date | undefined; // Make it consistent with DefaultSession
}

interface DefaultSession extends Session {
    expires: string; // Adjust the type to match your requirements
}


interface AdapterUser {
    id: string;
    // other properties...
}


export const authOptions: NextAuthOptions = {
    // Configure one or more authentication providers
    // secret: process.env.NEXT_PUBLIC_GOOGLE_OAUTH_CLIENT_SECRET!,
    providers: [
        GoogleProvider({
            clientId: process.env.NEXT_PUBLIC_GOOGLE_OAUTH_CLIENT_ID as string,
            clientSecret: process.env.NEXT_PUBLIC_GOOGLE_OAUTH_CLIENT_SECRET as string,
          
        }),
        GithubProvider({
            clientId: process.env.NEXT_PUBLIC_GITHUB_OAUTH_CLIENT_ID as string,
            clientSecret: process.env.NEXT_PUBLIC_GITHUB_OAUTH_CLIENT_SECRET as string,
        })
    ],

    callbacks: {
        async jwt({ token, account, user }: { token: CustomToken; account: Account | null; user: User | AdapterUser }): Promise<CustomToken> {
            // Persist the OAuth access_token to the token right after signin
            if (account) {
                token.accessToken = account.access_token;
            }
            if (user) {
                token.userId = user.id;
            }

            return token;
        },

        async redirect({ url, baseUrl }: { url: string; baseUrl: string }) {
            return baseUrl;
        },
        async session({ session, token }: { session: Session; token: CustomToken }): Promise<Session> {
            if (token.userId) {
                // Explicitly set session.user with the 'id' property
                session.user = { id: token.userId };
            }

            return session;
        }

    },
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    await NextAuth(req, res, authOptions);
}

