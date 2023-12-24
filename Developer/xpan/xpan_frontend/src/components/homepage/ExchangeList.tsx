import React from "react";
import { exchangeList } from "@/constants/Exchanges";
import Image from "next/image";
import { MoveDown } from "lucide-react";
import { ExchangeItem } from "@/constants/Exchanges";

interface ExchangeList {
  exchangeList: ExchangeItem[];
}

const ExchangeList: React.FC<ExchangeList> = ({ exchangeList }) => {
  // Split the features into two arrays for two rows
  const featuresRow1 = exchangeList.slice(0, 5);
  const featuresRow2 = exchangeList.slice(5, 10);
  const featuresRow3 = exchangeList.slice(10, 15);
  const featuresRow4 = exchangeList.slice(15, 20);
  // const featuresRow1 = exchangeList.slice(0, 4);
  // const featuresRow2 = exchangeList.slice(4, 8);
  // const featuresRow3 = exchangeList.slice(8, 12);
  // const featuresRow4 = exchangeList.slice(12, 16);

  return (
    <>
      <div className="relative isolate px-6 -mt-20 lg:px-8">
        {/* gradient bg div up */}
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#5aece0] to-[#ffdf77] opacity-50 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>

      <div className="w-auto flex flex-col items-center justify-center mt-40 px-4 ">
        <div className="max-w-6xl mx-auto items-center justify-center">
          <h1 className="font-bold text-3xl">
            Manage all your multiple exchange accounts in one protocol
          </h1>
          <div className="mt-4 py-2">
            <Image
              src="/assets/branding/xpanlite.svg"
              width="150"
              height="48"
              alt="logo"
              priority
              className="mx-auto"
            />
          </div>
        </div>

        <div className="flex items-center justify-center mt-10">
          <MoveDown />
        </div>
        <div className="mt-2 py-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-16  flex-col items-center p-5 bg-gray-100 bg-opacity-20 backdrop-filter backdrop-blur-md rounded-lg shadow-lg  m-4">
          {/* Rows 1 and 2 Combined */}
          {[
            ...featuresRow1,
            ...featuresRow2,
            ...featuresRow3,
            ...featuresRow4,
          ].map((exchange, index) => (
            <div key={index} className="">
              {/* {exchangeList.map((exchange, index) => ( */}
              <div key={index}>
                <Image
                  src={exchange.icon}
                  alt={exchange.name}
                  width="150"
                  height="90"
                  priority
                />
                {/* <p className="text-center mt-2">{exchange.name}</p> */}
              </div>
              {/* ) */}

              {/* } */}
              {/* <p className="text-gray-700 text-sm mb-6">{feature.description}</p> */}
            </div>
          ))}
        </div>
      </div>

      {/* gradient bg div down */}
      <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#94ffc1] to-[#2374ee] opacity-50 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>
    </>
  );
};

export default ExchangeList;
