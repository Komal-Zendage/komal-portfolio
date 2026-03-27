import { FaLightbulb, FaPaintBrush, FaCode, FaReact, FaServer, FaMobileAlt, FaTools, FaNodeJs, FaStripe, FaVuejs, FaFire, FaDatabase, FaCloud, FaRobot } from 'react-icons/fa';

import projectImg1 from '/project1.png';
import projectImg2 from '/project2.png';



// export const assets = {
//     profileImg,
// }


export const aboutInfo = [
    {
      icon: FaLightbulb,
      title: 'Innovative',
      description: 'I love creating unique solutions to complex problems with cutting-edge technologies.',
      color: 'text-purple'
    },
    {
      icon: FaPaintBrush,
      title: 'Design Oriented',
      description: 'Beautiful design and user experience are at the heart of everything I create.',
      color: 'text-pink'
    },
    {
      icon: FaCode,
      title: 'Clean Code',
      description: 'I write maintainable, efficient code following best practices and modern patterns.',
      color: 'text-blue'
    }
  ];



export const skills = [
  {
    title: 'Frontend Development',
    icon: FaReact,
    description: 'Build responsive, interactive UIs with modern frontend tools and smooth animations. ',
    tags: ['HTML', 'CSS', 'JavaScript', 'React','Tailwind CSS','Bootstrap']
  },
  {
    title: 'Backend Development',
    icon: FaServer,
    description: 'Develop scalable server-side applications with Java and PHP, implementing REST APIs.',
    tags: ['Java','PHP']
  },
  {
    title: 'Database Management',
    icon: FaDatabase,
    description: 'Design and manage MySQL databases with optimized queries, normalization, and secure data handling.',
    tags: ['MySQL']
  },
  //{
  //   title: 'Cloud & DevOps',
  //   icon: FaCloud,
  //   description: 'Manage version control and collaboration using Git and GitHub with structured workflows and clean commit practices.',
  //   tags: ['AWS', 'Docker']
  // },
  {
    title: 'Tools & Technologies',
    icon: FaTools,
    description: 'Use modern tools like Vite and Framer Motion, with Git and GitHub for efficient development and version control.',
    tags: ['Git & GitHub']
  }
];



export const projects = [
  {
    title: "E-Commerce Platform",
    description: "Developed a responsive eCommerce website with product browsing, cart system, checkout flow, and admin dashboard with dynamic database integration.",
    image: projectImg1,
    tech: ["HTML", "CSS", "Bootstrap", "PHP" ,"MySQL"],
    icons: [FaReact, FaNodeJs, FaDatabase , FaStripe],
    demo: "#",
    code: "#",
  },
 
  {
    title: "Portfolio Website",
    description: "Responsive React portfolio with component-based architecture and clean user experience.",
    image: projectImg2,
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    icons: [FaReact, FaCloud],
    demo: "#",
    code: "#",
  },


];


export const workData = [
  {
    role: "Senior Frontend Developer",
    company: "TechCorp Inc.",
    duration: "2020 - Present",
    description:
      "Leading frontend development for enterprise clients, implementing modern frameworks, and mentoring junior developers.",
    color: "purple"
  },
  {
    role: "Web Developer",
    company: "Digital Solutions LLC",
    duration: "2018 - 2020",
    description:
      "Developed and maintained web applications for various clients, focusing on responsive design and performance optimization.",
    color: "pink"
  },
  {
    role: "Junior Developer",
    company: "StartUp Ventures",
    duration: "2016 - 2018",
    description:
      "Started my career building basic websites and gradually took on more complex projects as I expanded my skill set.",
    color: "blue"
  }
];
