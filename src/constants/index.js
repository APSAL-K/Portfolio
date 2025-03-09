import {
  assign_mentor_students,
  backend,
  bookstore,
  css,
  devbee,
  docker,
  emf,
  flowmazon,
  git,
  golang,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  samturbo,
  tailwind,
  threejs,
  todo_list_app,
  typescript,
  v3data,
  web,
  zoomcar_mobile,
  csharp,
  sql,
  postGreSQL,
  BAT,
  NIHR,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: reactjs,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: ".NET",
    icon: csharp,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "postgreSQL",
    icon: postGreSQL,
  }
];

const experiences = [
  {
    title: "Internship",
    company_name: "DevBee Inc",
    icon: devbee,
    iconBg: "#383E56",
    date: "Jan 2024 - March 2024",
    points: [
      "Completed a three-month internship focused on web development and React.js.",
      "Completed the web development course in HTML, CSS, JavaScript, and React.",
    ],
  },
  {
    title: "Front-End Developer",
    company_name: "DevBee Inc",
    icon: devbee,
    iconBg: "#383E56",
    date: "Apr 2024 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "College(final year) Project - Form Builder",
    description:
      "Form creation and Data collection process. Web Based applications, created to Customized and Data’s Managing, Purpose of Survey, feedback collection and registration. The existing system of google forms. My proposed for dynamic form builder, Features of Dynamic form field options and customizable.",
    tags: [],
    image: zoomcar_mobile,
  },
  {
    name: "BAT(British American Tobacco)",
    description:
      'Global Tobacco Outlet Management Platform This project serves as the central hub for a leading tobacco outlet company, enabling seamless access to and management of data, reports, and business processes across 17 countries on a unified platform.  I contributed to this project for six months as part of Summit Solution, working on *BAT (British American Tobacco) projects. My role involved optimizing platform functionalities, enhancing data integration, and ensuring efficient workflow management to support BAT’s global operations.',
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "TypeScript",
        color: "green-text-gradient",
      },
      {
        name: "Redux Toolkit",
        color: "blue-text-gradient",
      },
      {
        name: "Ant Design",
        color: "pink-text-gradient",
      },
      {
        name: ".NET",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
    ],
    image: BAT,
    live_link: "https://backendconsole.azurewebsites.net/console/",
  },
  {
    name: "NIHR(Right4)",
    description:
    'NIHR Clinical Trial Recruitment & Assessment System The NIHR Clinical Trial Recruitment and Assessment System streamlines participant data collection and ensures compliance with eligibility criteria. It features 09 recruitment pages and 3 assessment pages, enforcing mandatory fields to prevent missing information.  I worked on this project from scratch, developing a secure and structured platform for managing user roles, sites, and recruitment data. The system enables seamless data entry, editing, and assessment, ensuring efficient clinical trial management while maintaining regulatory compliance.',
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "React Bootstrap",
        color: "pink-text-gradient",
      },
      {
        name: "postgres",
        color: "blue-text-gradient",
      },
      {
        name: '.NET',
        color: "blue-text-gradient",
      }
      
    ],
    image: NIHR,
    live_link: "http://194.238.23.147:6100/recruitment",
  },
 
];

export { experiences, projects, services, technologies, testimonials };
