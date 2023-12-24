import Footer from "@/components/homepage/Footer";
import Navbar from "@/components/homepage/Navbar";
import React from "react";

const meettheteam = () => {
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

          {/* Meet the team element 1 */}
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="mx-auto mb-10 lg:max-w-xl sm:text-center">
              <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                Know Our Team
              </p>
              <p className="text-base text-gray-700 md:text-lg">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium.
              </p>
            </div>
            <div className="grid gap-10 mx-auto lg:grid-cols-2 lg:max-w-screen-lg">
              <div className="grid sm:grid-cols-3">
                <div className="relative w-full h-48 max-h-full rounded shadow sm:h-auto">
                  <img
                    className="absolute object-cover w-full h-full rounded"
                    src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
                    alt="Person"
                  />
                </div>
                <div className="flex flex-col justify-center mt-5 sm:mt-0 sm:p-5 sm:col-span-2">
                  <p className="text-lg font-bold">Oliver Aguilerra</p>
                  <p className="mb-4 text-xs text-gray-800">Product Manager</p>
                  <p className="mb-4 text-sm tracking-wide text-gray-800">
                    Vincent Van Gogh’s most popular painting, The Starry Night.
                  </p>
                  <div className="flex items-center space-x-3">
                    <a
                      href="/"
                      className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-5"
                      >
                        <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
                      </svg>
                    </a>
                    <a
                      href="/"
                      className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-5"
                      >
                        <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="grid sm:grid-cols-3">
                <div className="relative w-full h-48 max-h-full rounded shadow sm:h-auto">
                  <img
                    className="absolute object-cover w-full h-full rounded"
                    src="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                    alt="Person"
                  />
                </div>
                <div className="flex flex-col justify-center mt-5 sm:mt-0 sm:p-5 sm:col-span-2">
                  <p className="text-lg font-bold">Marta Clermont</p>
                  <p className="mb-4 text-xs text-gray-800">Design Team Lead</p>
                  <p className="mb-4 text-sm tracking-wide text-gray-800">
                    Amet I love liquorice jujubes pudding croissant I love
                    pudding.
                  </p>
                  <div className="flex items-center space-x-3">
                    <a
                      href="/"
                      className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-5"
                      >
                        <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
                      </svg>
                    </a>
                    <a
                      href="/"
                      className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-5"
                      >
                        <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="grid sm:grid-cols-3">
                <div className="relative w-full h-48 max-h-full rounded shadow sm:h-auto">
                  <img
                    className="absolute object-cover w-full h-full rounded"
                    src="https://images.pexels.com/photos/3747435/pexels-photo-3747435.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                    alt="Person"
                  />
                </div>
                <div className="flex flex-col justify-center mt-5 sm:mt-0 sm:p-5 sm:col-span-2">
                  <p className="text-lg font-bold">Alice Melbourne</p>
                  <p className="mb-4 text-xs text-gray-800">Human Resources</p>
                  <p className="mb-4 text-sm tracking-wide text-gray-800">
                    Lorizzle ipsum bling bling sit amizzle, consectetuer
                    adipiscing elit.
                  </p>
                  <div className="flex items-center space-x-3">
                    <a
                      href="/"
                      className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-5"
                      >
                        <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
                      </svg>
                    </a>
                    <a
                      href="/"
                      className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-5"
                      >
                        <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="grid sm:grid-cols-3">
                <div className="relative w-full h-48 max-h-full rounded shadow sm:h-auto">
                  <img
                    className="absolute object-cover w-full h-full rounded"
                    src="https://images.pexels.com/photos/3931603/pexels-photo-3931603.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                    alt="Person"
                  />
                </div>
                <div className="flex flex-col justify-center mt-5 sm:mt-0 sm:p-5 sm:col-span-2">
                  <p className="text-lg font-bold">John Doe</p>
                  <p className="mb-4 text-xs text-gray-800">Good guy</p>
                  <p className="mb-4 text-sm tracking-wide text-gray-800">
                    Bacon ipsum dolor sit amet salami jowl corned beef,
                    andouille flank.
                  </p>
                  <div className="flex items-center space-x-3">
                    <a
                      href="/"
                      className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-5"
                      >
                        <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
                      </svg>
                    </a>
                    <a
                      href="/"
                      className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-5"
                      >
                        <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Meet the team element 2*/}

          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
              <div>
                <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                  Dream Team
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
                        id="247432cb-6e6c-4bec-9766-564ed7c230dc"
                        x="0"
                        y="0"
                        width=".135"
                        height=".30"
                      >
                        <circle cx="1" cy="1" r=".7" />
                      </pattern>
                    </defs>
                    <rect
                      fill="url(#247432cb-6e6c-4bec-9766-564ed7c230dc)"
                      width="52"
                      height="24"
                    />
                  </svg>
                  <span className="relative">Welcome</span>
                </span>{" "}
                our talented team of professionals
              </h2>
              <p className="text-base text-gray-700 md:text-lg">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque rem aperiam, eaque ipsa quae.
              </p>
            </div>
            <div className="grid gap-10 row-gap-8 mx-auto sm:row-gap-10 lg:max-w-screen-lg sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex">
                <img
                  className="object-cover w-20 h-20 mr-4 rounded-full shadow"
                  src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
                  alt="Person"
                />
                <div className="flex flex-col justify-center">
                  <p className="text-lg font-bold">Oliver Aguilerra</p>
                  <p className="text-sm text-gray-800">Product Manager</p>
                </div>
              </div>
              <div className="flex">
                <img
                  className="object-cover w-20 h-20 mr-4 rounded-full shadow"
                  src="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                  alt="Person"
                />
                <div className="flex flex-col justify-center">
                  <p className="text-lg font-bold">Marta Clermont</p>
                  <p className="text-sm text-gray-800">Design Team Lead</p>
                </div>
              </div>
              <div className="flex">
                <img
                  className="object-cover w-20 h-20 mr-4 rounded-full shadow"
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                  alt="Person"
                />
                <div className="flex flex-col justify-center">
                  <p className="text-lg font-bold">Anthony Geek</p>
                  <p className="text-sm text-gray-800">CTO, Lorem Inc.</p>
                </div>
              </div>
              <div className="flex">
                <img
                  className="object-cover w-20 h-20 mr-4 rounded-full shadow"
                  src="https://images.pexels.com/photos/3747435/pexels-photo-3747435.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                  alt="Person"
                />
                <div className="flex flex-col justify-center">
                  <p className="text-lg font-bold">Alice Melbourne</p>
                  <p className="text-sm text-gray-800">Human Resources</p>
                </div>
              </div>
              <div className="flex">
                <img
                  className="object-cover w-20 h-20 mr-4 rounded-full shadow"
                  src="https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
                  alt="Person"
                />
                <div className="flex flex-col justify-center">
                  <p className="text-lg font-bold">Martin Garix</p>
                  <p className="text-sm text-gray-800">Bad boy</p>
                </div>
              </div>
              <div className="flex">
                <img
                  className="object-cover w-20 h-20 mr-4 rounded-full shadow"
                  src="https://images.pexels.com/photos/3931603/pexels-photo-3931603.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                  alt="Person"
                />
                <div className="flex flex-col justify-center">
                  <p className="text-lg font-bold">Andrew Larkin</p>
                  <p className="text-sm text-gray-800">Backend Developer</p>
                </div>
              </div>
              <div className="flex">
                <img
                  className="object-cover w-20 h-20 mr-4 rounded-full shadow"
                  src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
                  alt="Person"
                />
                <div className="flex flex-col justify-center">
                  <p className="text-lg font-bold">Sophie Denmo</p>
                  <p className="text-sm text-gray-800">Designer UI/UX</p>
                </div>
              </div>
              <div className="flex">
                <img
                  className="object-cover w-20 h-20 mr-4 rounded-full shadow"
                  src="https://images.pexels.com/photos/3931553/pexels-photo-3931553.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                  alt="Person"
                />
                <div className="flex flex-col justify-center">
                  <p className="text-lg font-bold">Benedict Caro</p>
                  <p className="text-sm text-gray-800">Frontend Developer</p>
                </div>
              </div>
              <div className="flex">
                <img
                  className="object-cover w-20 h-20 mr-4 rounded-full shadow"
                  src="https://images.pexels.com/photos/3783255/pexels-photo-3783255.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                  alt="Person"
                />
                <div className="flex flex-col justify-center">
                  <p className="text-lg font-bold">Adam Molly</p>
                  <p className="text-sm text-gray-800">Full Stack Developer</p>
                </div>
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

export default meettheteam;
