import Image from "next/image"

export function Swap() {
    return (
        <div className="space-y-8 p-2 gap-4 grid grid-cols-1 border shadow-xl -ml-8 px-5 mr-5">
            <h2 className="font-bold p-6 pb-4">Swap</h2>
            <div className="flex items-center rounded-sm shadow-xl border p-2">
                <div className="h-9 w-9 space-y-1">
                    <Image
                        src="/assets/crypto/Ethereum.svg"
                        alt=""
                        priority
                        width="30"
                        height="30"
                    />
                </div>
                <div className="ml-4 space-y-1 text-center">
                    <p className="text-md font-medium leading-none">Ethereum</p>
                </div>
                <div className="ml-auto font-medium relative">
                    <div className="inline-block">
                        {/* Your original content */}
                        <div className="ml-auto font-medium">+$1,999.00</div>

                        {/* Dropdown content */}
                        <div className="absolute hidden mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                            {/* Dropdown items */}
                            <div className="py-1">
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Option 1</a>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Option 2</a>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Option 3</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="flex items-center border shadow-xl p-6 rounded-md">
                <div className="ml-4 space-y-1">
                    <p className="text-md font-medium leading-none">Pay</p>
                    <p className="text-lg font-medium leading-none">0</p>
                    <p className="text-md font-medium leading-none">= $ 0.00</p>
                    <p className="text-sm text-muted-foreground">Balance: 0.002356 ETH</p>
                </div>
                <div className="flex items-center justify-center space-y-0 border ml-4 p-3 rounded-md ">
                    <Image src="/assets/crypto/Ethereum.svg" alt="Avatar" width="50" height="50" />
                    <div className="ml-4">ETH</div>
                </div>
            </div>
            <div className="flex items-center border shadow-xl p-6 rounded-md">
                <div className="ml-4 space-y-1">
                    <p className="text-md font-medium leading-none">Get</p>
                    <p className="text-lg font-medium leading-none">0</p>
                    <p className="text-md font-medium leading-none">= $ 0.00</p>
                    <p className="text-sm text-muted-foreground">Balance: 0.002356 ETH</p>
                </div>
                <div className="flex items-center justify-center space-y-0 border ml-4 p-3 rounded-md ">
                    <Image src="/assets/crypto/Ethereum.svg" alt="Avatar" width="50" height="50" />
                    <div className="ml-4">ETH</div>
                </div>
            </div>
            <div className="flex items-center">
                {/* <div className="h-9 w-9">
                    <Image src="/avatars/03.png" alt="Avatar" width="50" height="50" />
                    <div>IN</div>
                </div> */}
                <div className="ml-4 space-y-1">
                    <p className="text-sm font-medium leading-none">1 ETH = 1,326.00 USDT</p>
                    {/* <p className="text-sm text-muted-foreground">
                        isabella.nguyen@email.com
                    </p> */}
                </div>
                <div className="ml-auto font-medium">Gas: $ 6.00</div>
            </div>
            <div className="flex items-center">
                {/* <div className="h-9 w-9">
                    <Image src="/avatars/04.png" alt="Avatar" width="50" height="50" />
                    <div>WK</div>
                </div> */}
                <div className="ml-4 space-y-1">
                    <p className="text-sm font-medium leading-none">Expected Amount</p>

                </div>
                <div className="ml-auto font-medium">0 USDT</div>
            </div>
            <div className="flex items-center">
                {/* <div className="h-9 w-9">
                    <Image src="/avatars/04.png" alt="Avatar" width="50" height="50" />
                    <div>WK</div>
                </div> */}
                <div className="ml-4 space-y-1">
                    <p className="text-sm font-medium leading-none">Slippage</p>
                    {/* <p className="text-sm text-muted-foreground">will@email.com</p> */}
                </div>
                <div className="ml-auto font-medium">1% </div>
            </div>
            <div className="flex items-center justify-center">
                <button className="text-center">More details</button>
            </div>
            <div className="flex items-center justify-center -mt-2">
                <button className="text-center rounded-xl border shadow-xl p-4">Swap</button>
            </div>
        </div>
    )
}