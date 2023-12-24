import Image from "next/image"

export function RecentSales() {
    return (
        <div className="space-y-8 p-2 gap-4 grid grid-cols-1 border shadow-xl rounded-lg -ml-8 px-5 mr-5">
            <h2 className="font-bold text-md p-6 pb-4">Recent Transaction</h2>
            <div className="flex items-center">
                <div className="h-12 w-12 space-y-1">
                    <Image src="/assets/crypto/Ethereum.svg" alt="Avatar" width="20" height="20" />
                    <Image src="/assets/crypto/Ethereum.svg" alt="Avatar" width="20" height="20" />
                </div>
                <div className="ml-4 space-y-4 p-2">
                    <p className="text-sm font-medium leading-none">Brought</p>
                    <p className="text-sm text-muted-foreground">
                        0.001 BTC
                    </p>
                </div>
                <div className="space-y-4 ml-auto">
                    <p className="text-sm font-medium leading-none">January 12 2022 - 11:00 AM</p>
                    <p className="text-sm text-muted-foreground text-right">
                        $ 180
                    </p>
                </div>
            </div>
            <div className="flex items-center">
                <div className="h-12 w-12 space-y-1">
                    <Image src="/assets/crypto/Ethereum.svg" alt="Avatar" width="20" height="20" />
                    <Image src="/assets/crypto/BTC.svg" alt="Avatar" width="20" height="20" />
                </div>
                <div className="ml-4 space-y-4 p-2">
                    <p className="text-sm font-medium leading-none">Staked</p>
                    <p className="text-sm text-muted-foreground">
                        0.001 BTC
                    </p>
                </div>
                <div className="space-y-4 ml-auto">
                    <p className="text-sm font-medium leading-none">January 12 2022 - 11:00 AM</p>
                    <p className="text-sm text-muted-foreground text-right">
                        $ 180
                    </p>
                </div>
            </div>
            <div className="flex items-center">
                <div className="h-12 w-12 space-y-1">
                    <Image src="/assets/crypto/Ethereum.svg" alt="Avatar" width="20" height="20" />
                    <Image src="/assets/crypto/Ethereum.svg" alt="Avatar" width="20" height="20" />
                </div>
                <div className="ml-4 space-y-4 p-2">
                    <p className="text-sm font-medium leading-none">Unstaked</p>
                    <p className="text-sm text-muted-foreground">
                        0.001 BTC
                    </p>
                </div>
                <div className="space-y-4 ml-auto">
                    <p className="text-sm font-medium leading-none">January 12 2022 - 11:00 AM</p>
                    <p className="text-sm text-muted-foreground text-right">
                        $ 180
                    </p>
                </div>
            </div>
        </div>
    )
}