// "use client"
import React, { useState } from 'react';
import Image from "next/image";
import axios from "axios";
import 'dotenv/config';
import { useRouter } from 'next/navigation';
import { signIn, getProviders } from "next-auth/react"
import { useSession,  signOut } from 'next-auth/react';


// function generateRandomState(): string {
//   const stateLength = 16;
//   const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//   let state = '';

//   for (let i = 0; i < stateLength; i++) {
//     const randomIndex = Math.floor(Math.random() * characters.length);
//     state += characters.charAt(randomIndex);
//   }

//   return state;
// }

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
  // const router = useRouter();
  const [opacity, setOpacity] = React.useState(0);
  // const {data: session} = useSession


  React.useEffect(() => {
    if (isOpen) {
      // Fade in
      setOpacity(1);
    } else {
      // Fade out
      setOpacity(0);
    }
  }, [isOpen]);

  if (!isOpen && opacity === 0) return null;


  // API integration

  // const getGoogleUrl = async (from: string | undefined): Promise<string> => {
  //   try {
  //     const client_id = process.env.NEXT_PUBLIC_GOOGLE_OAUTH_CLIENT_ID;
  //     const redirect_uri = process.env.NEXT_PUBLIC_GOOGLE_OAUTH_REDIRECT_URL;


  //     // if (!client_id || !redirect_uri || !secret) {
  //     //   throw new Error('Google OAuth client_id, redirect_uri, or client_secret is missing');
  //     // }

  //     const root_url = 'https://accounts.google.com/o/oauth2/v2/auth';

  //     const options = {
  //       redirect_uri,
  //       client_id,
  //       access_type: 'offline',
  //       response_type: 'code',
  //       prompt: 'consent',
  //       scope:
  //         'https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email',
  //       state: from || generateRandomState(),
  //     } as Record<string, string>;

  //     const url = `${root_url}?${new URLSearchParams(options).toString()}`;
  //     return url;
  //   } catch (error) {
  //     console.error('Error while generating Google URL:', error);
  //     throw error;
  //   }
  // };

  // const handleGoogleLogin = async (): Promise<void> => {
  //   try {

  //     const stateValue = generateRandomState();

  //     const url = await getGoogleUrl(stateValue);

  //     console.log('Generated Google URL:', url);

  //     const response = await axios.post('http://localhost:8000/api/auth/login', {

  //       state: stateValue,
  //     });

  //     console.log('Response from Google API:', response.data);
  //     if (response.data.success) {
  //       router.push('/Dashboard')
  //     }
  //   } catch (error) {
  //     console.error('Error:', error);
  //   }
  // };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm z-50 flex justify-center items-center transition-opacity duration-250"
      style={{ opacity: opacity }}
      onClick={onClose}
    >
      <div
        className="flex bg-white rounded-2xl shadow-2xl overflow-hidden transition-opacity duration-300"
        style={{ width: "800px", height: "650px", opacity: opacity }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image Container */}
        <div className="hidden lg:block w-1/2">
          <Image
            src="/assets/login-icon/loginpagepic.png"
            alt="Decorative"
            className="object-cover h-full w-full"
            width="150"
            height="40"
          />
        </div>

        {/* Login Options Container */}
        <div className="w-full lg:w-1/2 flex flex-col justify-between p-8">

          <div>
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
              Continue to Xpan
            </h2>

            {/* Google Button */}
            <button
              className="mb-3 py-2 px-4 w-full text-sm font-semibold text-gray-800 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 flex items-center justify-center gap-3 shadow-sm"
              onClick={() => {
                signIn()
              }}
            >
              <Image
                src="/assets/login-icon/google.png"
                alt="Google"
                className="w-5 h-5"
                width="50"
                height="50"
                priority
              />
              <span className="flex-grow text-center">
                Continue with Google
              </span>
            </button>

            {/* Message about sign-in options */}
            <p className="text-center text-gray-500 mb-6">
              These below sign-in options will be available soon, sorry for the
              inconvenience.
            </p>
          </div>
          <button
            disabled
            className="mb-3 py-2 px-4 w-full text-sm font-semibold text-gray-800 bg-gray-300 rounded-lg border border-gray-300 hover:bg-gray-300 flex items-center justify-start gap-3 shadow-sm"
          >
            <Image
              src="/assets/login-icon/apple.png"
              alt="Apple"
              className="w-5 h-5"
              width="50"
              height="50"
            />
            <span className="flex-grow text-center">Continue with Apple</span>
          </button>

          <button
            disabled
            className="mb-3 py-2 px-4 w-full text-sm font-semibold text-gray-800 bg-gray-300 rounded-lg border border-gray-300 hover:bg-gray-300 flex items-center justify-start gap-3 shadow-sm"
          >
            <Image
              src="/assets/login-icon/facebook.png"
              alt="Google"
              className="w-6 h-6"
              width="50"
              height="50"
            />
            <span className="flex-grow text-center">
              Continue with Facebook
            </span>
          </button>

          <button
            disabled
            className="mb-3 py-2 px-4 w-full text-sm font-semibold text-gray-800 bg-gray-300 rounded-lg border border-gray-300 hover:bg-gray-300 flex items-center justify-start gap-3 shadow-sm"
          >
            <Image
              src="/assets/login-icon/microsoft.png"
              alt="Google"
              className="w-6 h-6"
              width="50"
              height="50"
            />
            <span className="flex-grow text-center">
              Continue with Microsoft
            </span>
          </button>

          <button
            disabled
            className="mb-3 py-2 px-4 w-full text-sm font-semibold text-gray-800 bg-gray-300 rounded-lg border border-gray-300 hover:bg-gray-300 flex items-center justify-start gap-3 shadow-sm"
          >
            <Image
              src="/assets/login-icon/linkedin.png"
              alt="Google"
              className="w-6 h-6"
              width="50"
              height="50"
            />
            <span className="flex-grow text-center">
              Continue with Linkedin
            </span>
          </button>

          <button
            disabled
            className="mb-3 py-2 px-4 w-full text-sm font-semibold text-gray-800 bg-gray-300 rounded-lg border border-gray-300 hover:bg-gray-300 flex items-center justify-start gap-3 shadow-sm"
          >
            <Image
              src="/assets/login-icon/github.png"
              alt="Google"
              className="w-6 h-6"
              width="50"
              height="50"
            />
            <span className="flex-grow text-center">Continue with Github</span>
          </button>

          <button
            disabled
            className="mb-3 py-2 px-4 w-full text-sm font-semibold text-gray-800 bg-gray-300 rounded-lg border border-gray-300 hover:bg-gray-300 flex items-center justify-start gap-3 shadow-sm"
          >
            <Image
              src="/assets/login-icon/email.png"
              alt="Email"
              className="w-5 h-5"
              width="50"
              height="50"
            />
            <span className="flex-grow text-center">Continue with Email</span>
          </button>

          <button
            disabled
            className="mb-3 py-2 px-4 w-full text-sm font-semibold text-gray-800 bg-gray-300 rounded-lg border border-gray-300 hover:bg-gray-300 flex items-center justify-start gap-3 shadow-sm"
          >
            <Image
              src="/assets/login-icon/mobile.png"
              alt="Mobile"
              className="w-5 h-5"
              width="50"
              height="50"
            />
            <span className="flex-grow text-center">Log in with Mobile</span>
          </button>

          <button
            onClick={onClose}
            className="text-gray-600 hover:text-gray-800 absolute top-0 right-0 mt-4 mr-4"
          >
            <span className="text-2xl">&times;</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;