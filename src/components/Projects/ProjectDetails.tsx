import React from 'react';
import { useParams } from 'react-router-dom';
import ProjectList from './ProjectList';

const ProjectDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = ProjectList.find(p => p.id === parseInt(id!));

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-gray-50">{project.title}</h2>
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
          <div key={index} className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary hover:bg-gray-500 text-black bg-gray-200">
            {tag}
          </div>
        ))}
      </div>
      <div className="mt-4 text-gray-200">
        <p>{project.additionalDetails}</p>
        <a
          className="inline-flex text-gray-200 items-center font-medium mt-4 hover:underline"
          href={project.projectLink}
        >
          Visit project page
        </a>
      </div>
    </div>
  );
};

export default ProjectDetails;