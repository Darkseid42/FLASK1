import Statistics from "./Statistics";

const GetStarted = () => {
    return (

        <section className="bg-white dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
                <div className="grid mb-8 lg:mb-12 lg:grid-cols-2">
                    <figure className="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12 lg:border-r dark:bg-gray-800 dark:border-gray-700">
                        <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">How to Get Started</h3>
                            <p className="my-4">Simple and easy way to start your investment<br></br>in cryptocurrency</p>
                            <button className="mt-3 px-4 py-2 bg-green-600 text-white rounded-xl justify-end items-center cursor-pointer">
                                Get Started
                            </button>
                        </blockquote>

                    </figure>
                    <figure className="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12 dark:bg-gray-800 dark:border-gray-700">
                        <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Create Your Account</h3>
                            <p className="hover:text-gray-700 my-4">Your account and personal identity are guaranteed safe.</p>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                Connect Exchanges via API Keys
                            </h3>
                            <p className="hover:text-gray-700 my-4">
                                Connect the bank account to start transactions.
                            </p>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                Build & Manage Portfolio
                            </h3>
                            <p className="hover:text-gray-700 my-4">
                                Buy and sell popular currencies and keep track of them.
                            </p>
                        </blockquote>

                    </figure>

                </div>
                <Statistics />
                {/* <div className="text-center">
                    <a href="#" className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Show more...</a>
                </div> */}
            </div>
        </section>
    );
};

export default GetStarted;
