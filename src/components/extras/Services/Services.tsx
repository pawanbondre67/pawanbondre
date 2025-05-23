import React from "react"


const Services : React.FC = () => {
    return (
        <div>
    <section id="services" className="w-full md:py-6 lg:py-8 py-6 px-6 md:px-8 lg:px-10">
        <div className="flex flex-col gap-4">
            <div>
                <h2 className="text-2xl font-bold text-gray-50 ">Services</h2>
                <p className="text-gray-400 ">Overview of the services I provide.</p>
            </div>
            <div className="grid gap-6 lg:grid-cols-3">
                {/* <!-- Frontend Development Service --> */}
                <div className="group overflow-hidden rounded-lg shadow-lg transition-all bg-gray-950 border border-gray-800 hover:shadow-xl ">
                    <img
                        alt="Frontend Development"
                        loading="lazy"
                        width="500"
                        height="300"
                        decoding="async"
                        data-nimg="1"
                        className="w-full aspect-[5/3] object-cover object-center group-hover:scale-105 transition-transform"
                        src="/vite.svg"
                        style={{ color: "transparent" }}
                    />
                    <div className="p-6 bg-gray-950">
                        <h3 className="text-xl font-bold text-white">Frontend Development</h3>
                        <p className="text-gray-400 mt-2">
                            Creating dynamic and responsive user interfaces using Angular and Tailwind CSS.
                        </p>
                        <a
                            className="inline-flex items-center text-gray-200  mt-4 font-medium text-primary hover:underline"
                            href="#contact"
                        >
                            Contact
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-arrow-down ml-1 w-4 h-4">
                                <path d="M12 5v14"></path>
                                <path d="m19 12-7 7-7-7"></path>
                            </svg>
                        </a>
                    </div>
                </div>


                {/* <!-- Full-Stack Development Service --> */}

                <div className="group overflow-hidden rounded-lg shadow-lg transition-all bg-gray-950 border border-gray-800 hover:shadow-xl ">
                    <img
                        alt="Full-Stack Development"
                        loading="lazy"
                        width="500"
                        height="300"
                        decoding="async"
                        data-nimg="1"
                        className="w-full aspect-[5/3] object-cover object-center group-hover:scale-105 transition-transform"
                        src="/vite.svg"
                        style={{ color: "transparent" }}
                    />
                    <div className="p-6 dark:bg-gray-950">
                        <h3 className="text-xl font-bold text-white">Full-Stack Development</h3>
                        <p className="text-gray-400 mt-2">
                            Developing complete web applications with secure authentication and efficient data handling.
                        </p>
                        <a
                            className="inline-flex items-center text-gray-200  mt-4 font-medium text-primary hover:underline"
                            href="#contact"
                        >
                            Contact
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-arrow-down ml-1 w-4 h-4">
                                <path d="M12 5v14"></path>
                                <path d="m19 12-7 7-7-7"></path>
                            </svg>
                        </a>
                    </div>
                </div>


                {/* <!-- Project Management Service --> */}
                <div className="group overflow-hidden rounded-lg shadow-lg transition-all bg-gray-950 border border-gray-800 hover:shadow-xl ">
                    <img
                        alt="Project Management"
                        loading="lazy"
                        width="500"
                        height="300"
                        decoding="async"
                        data-nimg="1"
                        className="w-full aspect-[5/3] object-cover object-center group-hover:scale-105 transition-transform"
                        src="/vite.svg"
                        style={{ color: "transparent" }}
                    />
                    <div className="p-6 bg-gray-950">
                        <h3 className="text-xl font-bold text-white">Project Management</h3>
                        <p className="text-gray-400 mt-2">
                            Leading development teams in Agile environments, managing tasks on GitHub.
                        </p>
                        <a
                            className="inline-flex items-center text-gray-200  mt-4 font-medium text-primary hover:underline"
                            href="#contact"
                        >
                            Contact
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-arrow-down ml-1 w-4 h-4">
                                <path d="M12 5v14"></path>
                                <path d="m19 12-7 7-7-7"></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>

    )
}

export default Services