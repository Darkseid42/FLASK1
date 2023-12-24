"use client"
import { Button } from "../ui/button"

const ActionLearn = () => {
    return (
        <div className="flex w-100 h-36 justify-center items-center mt-20">
            <div className="w-1/2 flex-col justify-start p-5">
                <div className="font-bold subpixel-antialiased">
                    Automate your trading.
                </div>
                <p className="py-1 line-clamp-2">
                    Make use of AI and algorithms based bots to automate your all <br></br> trading on different exchanges.
                </p>
            </div>
            <div className="p-4 justify-center items-center gap-10">
                <button className="mt-3 px-4 py-2 bg-green-600 text-white rounded-xl justify-end items-center cursor-pointer">
                    Learn & Explore Now
                </button>
            </div>
        </div>


    )
}

export default ActionLearn