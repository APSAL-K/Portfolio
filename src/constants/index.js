import { l } from "maath/dist/misc-7d870b3c.esm";
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
  Gilbert,
  Laravel,
  FormBuilder
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
    id: "education",
    title: "Education",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: reactjs,
  },
  {
    title: ".NET Core Developer",
    icon: csharp,
  },
  {
    title: "REST API Developer",
    icon: backend,
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
  },
  {
    name: 'Laravel',
    icon: Laravel
  }
];

const experiences = [
  {
    title: "Web Development Intern",
    company_name: "DevBee Inc",
    icon: devbee,
    iconBg: "#383E56",
    date: "Jan 2024 - Mar 2024",
    points: [
      "Completed a 3-month intensive program in HTML, CSS, JavaScript, and React — building component-based UIs and REST API integrations.",
      "Promoted to full-time Junior Developer upon completion of the program.",
    ],
  },
  {
    title: "Junior Software Developer",
    company_name: "DevBee Inc",
    icon: devbee,
    iconBg: "#383E56",
    date: "Apr 2024 - Present",
    points: [
      "Built React dashboards + ASP.NET APIs for the BAT global platform, integrating 5+ REST endpoints to manage business data across 17 countries — eliminating manual regional reporting workflows.",
      "Architected JWT-based RBAC for the NIHR clinical trial system supporting 3 access tiers across 12 recruitment sites; built 9 recruitment and 3 assessment forms with full validation and PostgreSQL persistence.",
      "Delivered full-stack features across React, ASP.NET Core, Laravel, and PHP codebases — maintaining cross-browser compatibility and production-level performance standards.",
      "Participated in code reviews and collaborated with designers and PMs to consistently ship production-ready features on schedule.",
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
    image: FormBuilder,
    live_link: "https://form.io/",
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
    live_link: "http://194.238.23.147:6100",
  },
  {
    name: "Aamer - Enterprise Portal Suite",
    description:
      "Aamer is a multi-portal enterprise system built with React and ASP.NET Core. It integrates core business APIs and a token-based queue system to reduce customer wait times and improve operational efficiency. I built the multi-portal architecture, role-based access flows, and the real-time queue engine that keeps each portal in sync.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: ".NET Core",
        color: "blue-text-gradient",
      },
      {
        name: "MySQL",
        color: "green-text-gradient",
      },
    ],
    image: flowmazon,
    live_link: "#",
  },
  {
    name: "Gilbert - Logistics Platform",
    description:
    "Gilbert is a Laravel-based logistics and order management system with role-based access for 4 user types (Admins, Partners, Clients, Delivery Men). It features a real-time bidding/tracking engine, subscription plans, and secure Stripe payment integration — all from a single Laravel codebase.",
    tags: [
      {
        name: "PHP",
        color: "blue-text-gradient",
      },
      {
        name: "Laravel",
        color: "green-text-gradient",
      },
      {
        name: "MySQL",
        color: "blue-text-gradient",
      },
      {
        name: "Stripe",
        color: "pink-text-gradient",
      },
    ],
    image: Gilbert,
    live_link: "http://147.79.66.44/logistics/frontend-section",
  },

];

const education = [
  {
    degree: "M.Sc. Computer Science",
    institution: "Texcity Arts and Science College",
    date: "2024 - 2026",
    location: "Coimbatore, Tamil Nadu",
  },
];

const certifications = [
  "Microsoft Azure - Computer Vision App with Azure Cognitive Services",
  "Debugging - Certificate of Completion",
  "NCC 'B' Certificate Holder",
  "Design Thinking - International Webinar",
];

const languages = ["Tamil", "English", "Malayalam"];

export {
  experiences,
  projects,
  services,
  technologies,
  testimonials,
  education,
  certifications,
  languages,
};
