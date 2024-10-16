import React from 'react';
import { useNavigate } from 'react-router-dom';

interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  projectLink: string;
  additionalDetails: string;
}

const ProjectItem: React.FC<Project> = ({ id, title, description, imageUrl, tags }) => {
  const navigate = useNavigate();

  const handleViewProject = () => {
    navigate(`/projects/${id}`);
  };

  return (
    <div className="bg-card text-card-foreground rounded-lg overflow-hidden bg-gray-950 shadow-lg border-gray-800 border">
      <img
        alt="Project Image"
        loading="lazy"
        width="400"
        height="200"
        decoding="async"
        data-nimg="1"
        className="w-full object-cover"
        src={imageUrl}
        style={{ color: "transparent", aspectRatio: "400 / 200", objectFit: "cover" }}
      />
      <div className="p-4 space-y-4">
        <h3 className="text-xl font-bold mb-2 text-gray-50">
          {title}
        </h3>
        <p className="mb-4 text-gray-200">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <div key={index} className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary hover:bg-gray-500 text-black bg-gray-200">
              {tag}
            </div>
          ))}
        </div>
        <div>
          <button
            className="inline-flex text-gray-200 items-center font-medium mt-4 hover:underline cursor-pointer"
            onClick={handleViewProject}
          >
            View project
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-arrow-right ml-1 w-4 h-4"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;