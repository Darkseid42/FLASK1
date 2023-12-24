export interface Cryptocurrency {
    asset: string;
    icon: string;
    price: number;
    percentage: number;
    balance: number;
    fluctuation: number;

}

export const cryptoList: Cryptocurrency[] = [
    {
        asset: "Bitcoin",
        icon: "/assets/crypto/BTC.svg",
        price: 10000,
        percentage: 8.5,
        balance: 555,
        fluctuation: 6.5,
    },
    {
        asset: "Ethereum",
        icon: "/assets/crypto/Ethereum.svg",
        price: 50000,
        percentage: 6.5,
        balance: 5555,
        fluctuation: 5.46,
    },
    {
        asset: "BNB",
        icon: "/assets/crypto/BnB.svg",
        price: 1000,
        percentage: 3.5,
        balance: 55,
        fluctuation: 2.6,
    },
    {
        asset: "USDT",
        icon: "/assets/crypto/USDT.svg",
        price: 70000,
        percentage: 5.33,
        balance: 5,
        fluctuation: 1.6,
    },
    {
        asset: "Solana",
        icon: "/assets/crypto/Solana.svg",
        price: 700,
        percentage: 0.33,
        balance: 79,
        fluctuation: 336,
    },
    {
        asset: "USDC",
        icon: "/assets/crypto/USDC.svg",
        price: 35260,
        percentage: 3.88,
        balance: 50,
        fluctuation: 9,
    },
]