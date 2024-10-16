import React from "react";
import ProjectItem from "./ProjectItem";
import ProjectList from "./ProjectList";

const Projects: React.FC = () => {


  return (
    <div>
      <section
        id="projects"
        className="w-full md:py-6 lg:py-8 py-6 px-6 md:px-8 lg:px-10"
      >
        <div>
          <h2 className="text-2xl font-bold text-gray-50 ">
            Projects
          </h2>
          <p className="text-gray-400 ]">
            A collection of my recent projects.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2 lg:grid-cols-3">
        {ProjectList.map((project) => (
            <ProjectItem key={project.id} {...project} />
           ))
          }
      
       
        </div>

      </section>
    </div>
  );
};

export default Projects;
