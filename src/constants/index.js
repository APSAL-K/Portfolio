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
    title: "Backend Developer",
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
    name: "Go",
    icon: golang,
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
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Assembly Engineer",
    company_name: "EMF Innovations",
    icon: emf,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - Oct 2022",
    points: [
      "Inspected completed EV motor parts and components for quality control purposes.",
      "Collaborated with other line workers and team members to assemble and repair parts.",
      "Achieve the daily production target while ensuring the motor's functionality is thoroughly inspected.",
    ],
  },
  {
    title: "Marketing Executive",
    company_name: "Sam Turbo Industry",
    icon: samturbo,
    iconBg: "#383E56",
    date: "Dec 2022 - Jul 2023",
    points: [
      "Ensure ongoing communication between our marketing team and the client's marketing team regarding product design.",
      "We aim to obtain the client's design approval within the designated timeframe of five days, in order to proceed to the manufacturing phase of the product.",
    ],
  },
  {
    title: "Lead Generation Executive",
    company_name: "V3 Data Intelligence",
    icon: v3data,
    iconBg: "#E6DEDD",
    date: "Feb 2024 - May 2024",
    points: [
      "Utilize email and LinkedIn platforms to effectively conduct marketing campaigns aimed at generating leads.",
      "Email marketing campaigns that nurtured prospects through the sales funnel, resulting in greater conversions from leads to customers.",
      "Utilized data-driven insights to refine targeting strategies, increasing qualified leads generated.",
    ],
  },
  {
    title: "Full-Stack Developer",
    company_name: "DevBee Inc",
    icon: devbee,
    iconBg: "#383E56",
    date: "June 2024 - Present",
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
    name: "Zoomcar Clone",
    description:
      "Zoomcar Clone is a car rental application designed to provide users with a seamless vehicle rental experience. Users can search and filter vehicles based on categories and budget, view availability and price details, manage bookings, and process secure payments. The app ensures a user-friendly interface, secure access, and comprehensive booking management",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "expressjs",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "daisyui",
        color: "pink-text-gradient",
      },
    ],
    image: zoomcar_mobile,
    source_code_link: "https://github.com/Selvan-S/zoomcar-clone-frontend",
    live_link: "https://zoomcar-clone-selvan.netlify.app/",
  },
  {
    name: "Flowmazon",
    description:
      "The E-commerce application was created to gain practical knowledge of Next.js' new app router, server actions, and the complexities of working with the Prisma database.",
    tags: [
      {
        name: "Nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "TypeScript",
        color: "green-text-gradient",
      },
      {
        name: "Next-Auth",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "Prisma",
        color: "white-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "daisyui",
        color: "pink-text-gradient",
      },
    ],
    image: flowmazon,
    source_code_link: "https://github.com/Selvan-S/nextjs-ecommerce",
    live_link: "https://nextjs-ecommerce-lac-six.vercel.app/",
  },
  {
    name: "Todo List App",
    description:
      "Todo List App is designed for task management, allowing you to generate checklists and divide tasks into smaller steps to help you stay organized in your daily routines.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "expressjs",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "express-session",
        color: "blue-text-gradient",
      },
      {
        name: "React Hook Form",
        color: "pink-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "pink-text-gradient",
      },
      {
        name: "React Bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: todo_list_app,
    source_code_link: "https://github.com/Selvan-S/todolistapp-frontend",
    live_link: "https://2dolist-app.netlify.app/",
  },
  {
    name: "Mentor and Student Assigning",
    description:
      "I developed a RESTful API using Node.js and Express to manage mentorship relationships between mentors and students. The API includes functionalities such as creating mentors and students, assigning students to mentors, and managing mentor assignments. It also handles dynamic mentor assignments, ensuring students without mentors are listed, and allows for easy retrieval of students assigned to a specific mentor.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "expressjs",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "daisyui",
        color: "pink-text-gradient",
      },
    ],
    image: assign_mentor_students,
    source_code_link: "https://github.com/Selvan-S/assign-mentor-frontend",
    live_link: "https://assign-mentor-selvan.netlify.app/",
  },
  {
    name: "Bookstore",
    description:
      "The Bookstore web application is specifically created to handle book records. Users have the ability to add, edit, and delete their books. Furthermore, users can provide reviews for books added by other users.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "expressjs",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: bookstore,
    source_code_link: "https://github.com/Selvan-S/bookstore-frontend",
    live_link: "https://booksstore-app.netlify.app/",
  },
];

export { experiences, projects, services, technologies, testimonials };
