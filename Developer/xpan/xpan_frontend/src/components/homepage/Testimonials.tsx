import Image from "next/image"

const Testimonials = () => {
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
                <div className="mx-auto max-w-screen-sm">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Testimonials</h2>
                    <p className="mb-8 font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">From the horses mouth</p>
                </div>
                <div className="grid mb-8 lg:mb-12 lg:grid-cols-2">
                    <figure className="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12 lg:border-r dark:bg-gray-800 dark:border-gray-700">
                        <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Speechless with how easy this was to integrate</h3>
                            <p className="my-4">Be not afraid of greatness. Some are born great, some achieve greatness, and others have greatness thrust upon them.</p>
                            <p className="my-4">Sweet are the uses of adversity which, like the toad, ugly and venomous, wears yet a precious jewel in his head.</p>
                            <p className="my-4">If you care for your time, I hands down would go with this.</p>
                        </blockquote>
                        <figcaption className="flex justify-center items-center space-x-3">
                            <Image className="w-9 h-9 rounded-full" src="/assets/login-icon/portrait.jpg" alt="profile picture" width="36" height="36" />
                            <div className="space-y-0.5 font-medium dark:text-white text-left">
                                <div>Bonnie Green</div>
                                <div className="text-sm font-light text-gray-500 dark:text-gray-400">Developer at Open AI</div>
                            </div>
                        </figcaption>
                    </figure>
                    <figure className="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12 dark:bg-gray-800 dark:border-gray-700">
                        <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Solid foundation for any project</h3>
                            <p className="my-4">Be not afraid of greatness. Some are born great, some achieve greatness, and others have greatness thrust upon them.</p>
                            <p className="my-4">Sweet are the uses of adversity which, like the toad, ugly and venomous, wears yet a precious jewel in his head.</p>
                            <p className="my-4">If you care for your time, I hands down would go with this.</p>
                        </blockquote>
                        <figcaption className="flex justify-center items-center space-x-3">
                            <Image className="w-9 h-9 rounded-full" src="/assets/login-icon/portrait.jpg" alt="profile picture" width="36" height="36" />
                            <div className="space-y-0.5 font-medium dark:text-white text-left">
                                <div>Roberta Casas</div>
                                <div className="text-sm font-light text-gray-500 dark:text-gray-400">Lead designer at Dropbox</div>
                            </div>
                        </figcaption>
                    </figure>
                    <figure className="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 lg:border-b-0 md:p-12 lg:border-r dark:bg-gray-800 dark:border-gray-700">
                        <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Mindblowing workflow and variants</h3>
                            <p className="my-4">Be not afraid of greatness. Some are born great, some achieve greatness, and others have greatness thrust upon them.</p>
                            <p className="my-4">Sweet are the uses of adversity which, like the toad, ugly and venomous, wears yet a precious jewel in his head.</p>
                            <p className="my-4">If you care for your time, I hands down would go with this.</p>
                        </blockquote>
                        <figcaption className="flex justify-center items-center space-x-3">
                            <Image className="w-9 h-9 rounded-full" src="/assets/login-icon/portrait.jpg" alt="profile picture" width="36" height="36" />
                            <div className="space-y-0.5 font-medium dark:text-white text-left">
                                <div>Jese Leos</div>
                                <div className="text-sm font-light text-gray-500 dark:text-gray-400">Software Engineer at Facebook</div>
                            </div>
                        </figcaption>
                    </figure>
                    <figure className="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-gray-200 md:p-12 dark:bg-gray-800 dark:border-gray-700">
                        <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Efficient Collaborating</h3>
                            <p className="my-4">Be not afraid of greatness. Some are born great, some achieve greatness, and others have greatness thrust upon them.</p>
                            <p className="my-4">Sweet are the uses of adversity which, like the toad, ugly and venomous, wears yet a precious jewel in his head.</p>
                            <p className="my-4">If you care for your time, I hands down would go with this.</p>
                        </blockquote>
                        <figcaption className="flex justify-center items-center space-x-3">
                            <Image className="w-9 h-9 rounded-full" src="/assets/login-icon/portrait.jpg" alt="profile picture" width="36" height="36" />
                            <div className="space-y-0.5 font-medium dark:text-white text-left">
                                <div>Joseph McFall</div>
                                <div className="text-sm font-light text-gray-500 dark:text-gray-400">CTO at Google</div>
                            </div>
                        </figcaption>
                    </figure>
                </div>
                <div className="text-center">
                    <a href="#" className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Show more...</a>
                </div>
            </div>
        </section>
    )
}

export default Testimonials