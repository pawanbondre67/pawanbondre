import React from 'react';
import { useParams } from 'react-router-dom';
import ProjectList from './ProjectList';
import { Button } from '../ui/button';
import { FaArrowRight } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

const ProjectDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = ProjectList.find(p => p.id === parseInt(id!));

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-gray-50">{project.title}</h2><span className='text-red-500' >({project.status})</span>
      <img
        alt="Project Image"
        loading="lazy"
        width="400"
        height="200"
        decoding="async"
        data-nimg="1"
        className="w-full object-cover"
        src={project.imageUrl}
        style={{ color: "transparent", aspectRatio: "400 / 200", objectFit: "cover" }}
      />
      <p className="text-gray-200 mt-4">{project.description}</p>
      <div className="flex flex-wrap gap-2 mt-4">
        {project.tags.map((tag, index) => (
          <div key={index} className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs  transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-gray-800 hover:bg-gray-500 text-white">
            {tag}
          </div>
        ))}
      </div>
      <div className="mt-4 text-gray-200">
        <h1 className='font-bold text-lg mb-1'> 🧑‍💻 The Project :</h1>
        <p>{project.additionalDetails}</p>
       
       <div className='flex gap-3'>
       <a href={project.projectLink}
           target='_blank'
           
           >
                   <Button variant="outline" className=" flex gap-2 mt-2 hover:text-white bg-clip-text text-transparent"> Live Project  <FaArrowRight className='text-white' /></Button>
        </a>

        <a href={project.projectLink}
           target='_blank'
           
           >
                   <Button variant="outline" className=" flex gap-2 mt-2  hover:text-white bg-clip-text text-transparent">  Source Code<FaGithub className='text-white'/></Button>
        </a>
       </div>
      </div>
    </div>
  );
};

export default ProjectDetails;