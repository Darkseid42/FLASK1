"use client"
import Footer from "@/components/homepage/Footer";
import Navbar from "@/components/homepage/Navbar";
import React, { useState, ReactNode } from "react";


interface ItemProps {
    title: string;
    children: ReactNode;
}
const Item: React.FC<ItemProps> = ({ title, children })  => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <div className="border-b">
        <button
          type="button"
          aria-label="Open item"
          title="Open item"
          className="flex items-center justify-between w-full p-4 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <p className="text-lg font-medium">{title}</p>
          <svg
            viewBox="0 0 24 24"
            className={`w-3 text-gray-600 transform transition-transform duration-200 ${
              isOpen ? 'rotate-180' : ''
            }`}
          >
            <polyline
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeMiterlimit="10"
              points="2,7 12,17 22,7"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        {isOpen && (
          <div className="p-4 pt-0">
            <p className="text-gray-700">{children}</p>
          </div>
        )}
      </div>
    );
  };


const faq = () => {

  return (
    <>
      <Navbar />

      <div className="bg-white">
        <div className="relative isolate px-6 pt-14 lg:px-8">
          {/* gradient bg div up */}
          <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#ffebab] opacity-50 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>

          {/* FAQs Element */}

          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 ">
            <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
              <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                <div>
                  <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                    Brand new
                  </p>
                </div>
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                  <span className="relative inline-block">
                    <svg
                      viewBox="0 0 52 24"
                      fill="currentColor"
                      className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                    >
                      <defs>
                        <pattern
                          id="232db96b-4aa2-422f-9086-5a77996d1df1"
                          x="0"
                          y="0"
                          width=".135"
                          height=".30"
                        >
                          <circle cx="1" cy="1" r=".7" />
                        </pattern>
                      </defs>
                      <rect
                        fill="url(#232db96b-4aa2-422f-9086-5a77996d1df1)"
                        width="52"
                        height="24"
                      />
                    </svg>
                    <span className="relative">The</span>
                  </span>{" "}
                  quick, brown fox jumps over a lazy dog
                </h2>
                <p className="text-base text-gray-700 md:text-lg ">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque rem aperiam, eaque ipsa quae.
                </p>
              </div>
              <div className="space-y-4">
                <Item title="The quick, brown fox jumps over a lazy dog?">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque rem aperiam, eaque ipsa quae.
                </Item>
                <Item title="The first mate and his Skipper too will do?">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque rem aperiam, eaque ipsa quae.
                </Item>
                <Item title="Is the Space Pope reptilian!?">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque rem aperiam, eaque ipsa quae.
                </Item>
                <Item title="How much money you got on you?">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque rem aperiam, eaque ipsa quae.
                </Item>
              </div>
            </div>
          </div>

          {/* gradient bg div down */}
          <div
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-50 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default faq;
