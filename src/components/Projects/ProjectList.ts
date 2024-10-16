
export interface Project {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    tags: string[];
    projectLink: string;
    additionalDetails: string;

  }
const ProjectList: Project[] = [
    {
        id: 1,
      title: 'noteNexus',
      description: 'A platform for placement preparation with features like live editing and commenting.',
      imageUrl: '/pawanbondre.svg',
      tags: ['Angular', 'JWT', 'TypeScript', 'Node', 'Express', 'MySQL'],
      projectLink: 'https://pawanbondre.github.io/noteNexus/',
      additionalDetails: 'This project includes features such as real-time collaboration, code highlighting, and more.'

    },

    {
        id: 2,
      title: 'traveltrail',
      description: 'A platform for placement preparation with features like live editing and commenting.',
      imageUrl: '/pawanbondre.svg',
      tags: ['Angular', 'JWT', 'TypeScript', 'Node', 'Express', 'MySQL'],
      projectLink: 'https://traveltrail19.netlify.app',
      additionalDetails: 'This project includes features such as real-time collaboration, code highlighting, and more.'
    },
    {
        id: 3,
      title: 'Shopkaroo WebApp',
      description: 'A platform for placement preparation with features like live editing and commenting.',
      imageUrl: '/pawanbondre.svg',
      tags: ['Angular', 'JWT', 'TypeScript', 'Node', 'Express', 'MySQL'],
      projectLink: 'https://pawanbondre.github.io/noteNexus/',
      additionalDetails: 'This project includes features such as real-time collaboration, code highlighting, and more.'

    },

];

export default ProjectList;