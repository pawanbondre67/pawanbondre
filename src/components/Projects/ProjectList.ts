
export interface Project {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    tags: string[];
    projectLink: string;
    githubLink?: string;
    additionalDetails: string;

    status?: string;

  }
const ProjectList: Project[] = [
        {
          id: 1,
        title: 'gofarwithme',
        description: 'A personalized travel itinerary planner web application using React ...',
        imageUrl: '/pawanbondre.svg',
        tags: ['React', 'Firebase', 'TypeScript', 'TailwindCSS', 'Gemini AI', 'Authentication'],
        projectLink: 'https://gofarwithme.netlify.app',
        githubLink : 'https://github.com/pawanbondre67/ai-based-travel-planner',
        additionalDetails: 'A personalized travel itinerary planner web application using React, Gemini AI, and Firebase. It allows users to create, categorize, and search detailed travel plans with destinations, activities, dates, and photos. The app leverages AI for trip recommendations and Firebase for backend services, providing a secure, user-specific experience.'
      },
         
      {
        id: 2,
      title: 'noteNexus',
      description: 'A platform for placement preparation with features like live editing and commenting.',
      imageUrl: '/pawanbondre.svg',
      tags: ['Angular', 'JWT', 'TypeScript', 'Node', 'Express', 'MySQL'],
      projectLink: 'https://github.com/pawanbondre67/noteNexus',
      additionalDetails: 'An educational platform for students preparing for placements, allowing for efficient note-sharing and management. Developed with Angular, TypeScript, Node.js, Express, and MySQL, it features real-time collaboration, secure JWT authentication, and an easy-to-use interface for organizing study materials. The app aims to enhance study efficiency and user engagement through interactive features.'

    },
    
    {
      id: 3,
    title: 'DigitalKissan App',
    description: ' A PWA designed to assist farmers with intelligent crop seed prediction and ...',
    imageUrl: '/pawanbondre.svg',
    tags: ['React', 'Firebase', 'TailwindCSS', 'Python', 'Machine Learning'],
    projectLink: 'https://digitalkissan16.vercel.app/',
    githubLink : "https://github.com/pawanbondre67/digitalkissan__",
    status: 'Ongoing',
    additionalDetails : ' A Web App designed to assist farmers with intelligent crop seed prediction and product purchasing. Built using React, TypeScript, Tailwind CSS, and Firebase, the app employs machine learning algorithms for crop recommendations. It enables farmers to make data-driven decisions and improve agricultural productivity, with a user-friendly interface and real-time data integration.'
    },
    {
        id: 4,
      title: 'Portfoilo Website',
      description: "A comprehensive portfolio showcasing Pawan's expertise as a full stack software engineer ...",
      imageUrl: '/pawanbondre.svg',
      tags: ['React', 'TailwindCSS', 'TypeScript'],
      projectLink: 'https://pawanbondre.vercel.app/',
      githubLink : 'https://github.com/pawanbondre67/pawanbondre',
      additionalDetails: "A comprehensive portfolio showcasing Pawan's expertise as a full stack software engineer, specializing in web and PWA development. The portfolio highlights a range of projects, from e-commerce and AI-driven apps to educational platforms and agriculture-based solutions. Built using modern web technologies like Angular, React, Node.js, and Firebase, the portfolio reflects Pawan's proficiency in creating responsive, secure, and user-centric applications. It also emphasizes Pawan's commitment to delivering intelligent digital solutions that blend human and AI capabilities to create exceptional user experiences. The portfolio serves as a testament to Pawan's dedication to continuous learning, teamwork, and innovative problem-solving in real-world projects."

    }

];

export default ProjectList;
