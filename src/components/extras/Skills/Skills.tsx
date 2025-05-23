import React from "react";

const Skills: React.FC = () => {
  return (
    <div>
      <section
        id="skills"
        className=" text-white w-full md:py-8 lg:py-8 py-6 px-6 md:px-8 lg:px-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-50 ">
              Skills
            </h2>
            <p className="text-gray-400 ">
              A showcase of my Skills.
            </p>
          </div>
          <div className="rounded-xl border  border-gray-800 bg-gray-950">
            <div className="flex flex-col space-y-1.5 p-6">
              <h2 className="text-2xl font-bold tracking-tight">Frontend</h2>
            </div>
            <div className="p-6 pt-0">
              <div className="flex flex-wrap gap-2">
                <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary  hover:bg-secondary/80 styles_bgSecondary__GmarO dark:text-black dark:bg-gray-200">
                  HTML
                </div>
                <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary  hover:bg-secondary/80 styles_bgSecondary__GmarO dark:text-black dark:bg-gray-200">
                  CSS
                </div>
                <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary hover:bg-secondary/80 styles_bgSecondary__GmarO dark:text-black dark:bg-gray-200">
                  TailwindCSS
                </div>
                <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary  hover:bg-secondary/80 styles_bgSecondary__GmarO dark:text-black dark:bg-gray-200">
                  JavaScript
                </div>
                <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary hover:bg-secondary/80 styles_bgSecondary__GmarO dark:text-black dark:bg-gray-200">
                  TypeScript
                </div>
                <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary  hover:bg-secondary/80 styles_bgSecondary__GmarO dark:text-black dark:bg-gray-200">
                  Angular
                </div>
                <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary  hover:bg-secondary/80 styles_bgSecondary__GmarO dark:text-black dark:bg-gray-200">
                  React
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-xl border  border-gray-800 bg-gray-950">
            <div className="flex flex-col space-y-1.5 p-6">
              <h2 className="text-2xl font-bold tracking-tight">Backend</h2>
            </div>
            <div className="p-6 pt-0">
              <div className="flex flex-wrap gap-2">
               
                <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary hover:bg-secondary/80 styles_bgSecondary__GmarO dark:text-black dark:bg-gray-200">
                  Node.js
                </div>
                <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary  hover:bg-secondary/80 styles_bgSecondary__GmarO dark:text-black dark:bg-gray-200">
                  MySQL
                </div>
                <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary  hover:bg-secondary/80 styles_bgSecondary__GmarO dark:text-black dark:bg-gray-200">
                  MongoDB
                </div>
              </div>
            </div>
          </div>


          <div className="rounded-xl border  border-gray-800 bg-gray-950">
            <div className="flex flex-col space-y-1.5 p-6">
              <h2 className="text-2xl font-bold tracking-tight"> 
                Tools &amp; Others
              </h2>
            </div>
            <div className="p-6 pt-0">
              <div className="flex flex-wrap gap-2">
                <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary  hover:bg-secondary/80 styles_bgSecondary__GmarO dark:text-black dark:bg-gray-200">
                  GitHub
                </div>
                <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary  hover:bg-secondary/80 styles_bgSecondary__GmarO dark:text-black dark:bg-gray-200">
                  Docker
                </div>
                <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary hover:bg-secondary/80 styles_bgSecondary__GmarO dark:text-black dark:bg-gray-200">
                  FireBase
                </div>
                <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary  hover:bg-secondary/80 styles_bgSecondary__GmarO dark:text-black dark:bg-gray-200">
                  Canva
                </div>
                <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary hover:bg-secondary/80 styles_bgSecondary__GmarO dark:text-black dark:bg-gray-200">
                  Figma
                </div>
                <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary  hover:bg-secondary/80 styles_bgSecondary__GmarO dark:text-black dark:bg-gray-200">
                  Postman
                </div>
              </div>
            </div>
          </div>





          {/* <div className="rounded-xl border bg-card text-card-foreground styles_bgPrimary__rsRCo styles_borderColor__A7_2y dark:border-gray-800 dark:bg-gray-950">
            <div className="flex flex-col space-y-1.5 p-6">
              <h2 className="text-2xl font-bold tracking-tight">
                Tools &amp; Others
              </h2>
            </div>
            
            <div className="p-6 pt-0">
              <div className="flex flex-wrap gap-2">
                <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 styles_bgSecondary__GmarO dark:text-black dark:bg-gray-200">
                  GitHub
                </div>
                <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 styles_bgSecondary__GmarO dark:text-black dark:bg-gray-200">
                  Docker
                </div>
                <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 styles_bgSecondary__GmarO dark:text-black dark:bg-gray-200">
                  Canva
                </div>
                <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 styles_bgSecondary__GmarO dark:text-black dark:bg-gray-200">
                  Figma
                </div>
                <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 styles_bgSecondary__GmarO dark:text-black dark:bg-gray-200">
                  Postman
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default Skills;
