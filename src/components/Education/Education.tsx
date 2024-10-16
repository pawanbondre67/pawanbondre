import React from "react";

const Education: React.FC = () => {
    return (
        <div>
            <section id="education" className="w-full md:py-6 lg:py-8 py-6 px-6 md:px-8 lg:px-10">
                <div className="flex flex-col gap-4">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-50">
                            Education
                        </h2>
                        <p className="text-gray-400 ">
                            Details about my educational background.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="rounded-xl bg-card text-card-foreground w-full border bg-gray-950 dark:border-gray-800 styles_borderColor__A7_2y styles_bgPrimary__rsRCo">
                            <div className="p-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 flex-shrink-0">
                                        <img
                                            alt="B.Tech"
                                            loading="lazy"
                                            width="50"
                                            height="50"
                                            decoding="async"
                                            data-nimg="1"
                                            className="rounded-full object-cover"
                                            src="/vite.svg"
                                        />
                                    </div>
                                    <div className="flex-grow">
                                        <h3 className="text-lg font-semibold text-gray-200">
                                            B.Tech - JSPM's Rajarshi Shahu College of Engineering
                                        </h3>
                                        <p className=" text-gray-400 ml-auto">
                                            2021 - Present
                                        </p>
                                    </div>
                                </div>
                                <p className="text-gray-400 mt-2">
                                    CGPA: 8.2
                                </p>
                            </div>
                        </div>
                        <div className="rounded-xl bg-card text-card-foreground w-full border bg-gray-950 border-gray-800  ">
                            <div className="p-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 flex-shrink-0">
                                        <img
                                            alt="Senior Secondary"
                                            loading="lazy"
                                            width="50"
                                            height="50"
                                            decoding="async"
                                            data-nimg="1"
                                            className="rounded-full object-cover"
                                            src="/vite.svg"
                                        />
                                    </div>
                                    <div className="flex-grow">
                                        <h3 className="text-lg font-semibold text-gray-200">
                                            Senior Secondary - Maharashtra State Board
                                        </h3>
                                        <p className=" text-gray-400 ml-auto">
                                            2019 - 2021
                                        </p>
                                    </div>
                                </div>
                                <p className="text-gray-400 mt-2">
                                    Percentage: 90.83%
                                </p>
                            </div>
                        </div>
                        <div className="rounded-xl bg-card text-card-foreground w-full border bg-gray-950 border-gray-800  ">
                            <div className="p-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 flex-shrink-0">
                                        <img
                                            alt="Secondary"
                                            loading="lazy"
                                            width="50"
                                            height="50"
                                            decoding="async"
                                            data-nimg="1"
                                            className="rounded-full object-cover"
                                            src="/vite.svg"
                                        />
                                    </div>
                                    <div className="flex-grow">
                                        <h3 className="text-lg font-semibold text-gray-200">
                                            Secondary - Maharashtra State Board
                                        </h3>
                                        <p className="text-gray-400 ml-auto">
                                            2017 - 2019
                                        </p>
                                    </div>
                                </div>
                                <p className="text-gray-400 mt-2">
                                    Percentage: 94.20%
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Education;
