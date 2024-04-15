import { FaGithub, FaLinkedin, FaInstagram, FaRProject } from "react-icons/fa";
import { SiKingstontechnology } from "react-icons/si";
import { AiOutlineRise } from "react-icons/ai";
import { MdComputer } from "react-icons/md";
import LogoJavascript from "./techstacks/icon-javascript.svg";
import LogoTypescript from "./techstacks/icon-typescript.svg";
import LogoReact from "./techstacks/icon-react.svg";
import LogoNextjs from "./techstacks/icon-nextjs.svg";
import LogoNodejs from "./techstacks/icon-nodejs.svg";
import LogoExpress from "./techstacks/icon-express.svg";
import LogoNest from "./techstacks/icon-nest.svg";
import LogoSocket from "./techstacks/icon-socket.svg";
import LogoPostgreSQL from "./techstacks/icon-postgresql.svg";
import LogoMongoDB from "./techstacks/icon-mongodb.svg";
import LogoGit from "./techstacks/icon-git.svg";

export const PROJECT_NAME = "Johnstagram";

export const USER_NAME = `its_me_john`;

export const MY_SOCIAL_MEDIA = [
  { ICON: FaGithub, LINK: "https://github.com/" },
  { ICON: FaLinkedin, LINK: "https://linkedin.com/" },
  { ICON: FaInstagram, LINK: "https://instagram.com/" },
];

export const ABOUT_MENU = [
  { TITLE: "TechStacks", NUMBER: 11, LINK: "tech" },
  { TITLE: "Experiences", NUMBER: 3, LINK: "experiences" },
  { TITLE: "Projects", NUMBER: 5, LINK: "projects" },
];

export const ME = {
  INTRO_1: `Hi, I'm John`,
  INTRO_2: `I'm a passionate and dedicated full-stack developer specializing in the MERN (MongoDB, Express.js, React.js, Node.js) stack.`,
  INTRO_3: `With a total of 3<sup style="color:green">+yrs</sup>  of hands-on experience in the field, I have successfully delivered more than 4 projects, showcasing my proficiency in creating robust and scalable web applications.`,
  INTRO_4: `My journey in the world of development began with a curiosity that has grown into a deep-seated love for crafting innovative solutions.`,
  INTRO_5: `I thrive on challenges and am committed to delivering high-quality, user-centric applications that exceed expectations.`,
};

export const ExperiencesDetails = [
  {
    logo: "https://seeklogo.com/images/E/e-letter-digital-media-company-logo-03BA4A5AE3-seeklogo.com.png",
    label: "Company1",
    role: "Associate Software Engineer",
    from: "Aug 2022",
    to: "Present",
    responsiblities: [
      "Worked on various projects",
      "Engaged in debugging and bug resolution",
      "Acquired proficiency in Angular.js",
      "Utilized diverse technologies such as TypeScript, Nest.js, and integrated payment systems with Stripe",
      "Employed databases like PostgreSQL, MySQL, and DynamoDB",
    ],
  },
  {
    logo: "https://seeklogo.com/images/E/e-letter-digital-media-company-logo-03BA4A5AE3-seeklogo.com.png",
    role: "Internship",
    label: "Company1",
    from: "May 2022",
    to: "Aug 2022",
    responsiblities: [
      "Learned TypeScript, PostgreSQL, and Nest.js",
      "Built a demo project with Node.js, Express.js, & EJS",
      "Contributed to a live project",
    ],
  },
  {
    logo: "https://seeklogo.com/images/E/e-letter-digital-media-company-logo-03BA4A5AE3-seeklogo.com.png",
    role: "Product Engineering",
    label: "Company2",
    from: "Nov 2021",
    to: "Apr 2022",
    responsiblities: [
      "Learned MERN Stack",
      "Built a demo project with MERN Stack (E-Learning)",
    ],
  },
];

export const MY_PROJECTS = [
  {
    banner:
      "https://mir-s3-cdn-cf.behance.net/project_modules/disp/03a712158604085.638eef3437ac1.png",
    title: "Dummy Project 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat justo sit amet odio scelerisque, at vehicula sapien vehicula. Nullam quis libero et elit fermentum hendrerit.",
    tech: ["HTML", "CSS", "JavaScript"],
    live_link: "https://example.com",
    github_link: "https://github.com/example/project1",
  },
  {
    banner:
      "https://mir-s3-cdn-cf.behance.net/project_modules/disp/03a712158604085.638eef3437ac1.png",
    title: "Dummy Project 2",
    description:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus id ipsum id quam tempor lacinia eget eu nunc. Ut sit amet enim vel ipsum blandit bibendum non eget nunc.",
    tech: ["React", "Node.js", "Express.js"],
    live_link: "https://example.com",
  },
  {
    banner:
      "https://mir-s3-cdn-cf.behance.net/project_modules/disp/03a712158604085.638eef3437ac1.png",
    title: "Dummy Project 3",
    description:
      "Integer sed tortor ac odio molestie laoreet. Fusce non urna id odio vestibulum lobortis. Curabitur vitae dui at turpis sagittis fermentum. Donec sed tortor a risus tincidunt finibus.",
    tech: ["Vue.js", "Firebase", "Tailwind CSS"],
    live_link: "https://example.com",
    github_link: "https://github.com/example/project3",
  },
];

export const SIDE_MENU = [
  {
    to: "/",
    icon: SiKingstontechnology,
    text: "Me",
  },
  {
    to: "/experiences",
    icon: AiOutlineRise,
    text: "Experiences",
  },
  {
    to: "/projects",
    icon: FaRProject,
    text: "Projects",
  },
  {
    to: "/tech",
    icon: MdComputer,
    text: "TechStacks",
  },
];

export const TechDetails = [
  {
    label: "Javascript",
    logo: LogoJavascript,
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    label: "Typescript",
    logo: LogoTypescript,
    url: "https://www.typescriptlang.org/",
  },
  {
    label: "React",
    logo: LogoReact,
    url: "https://react.dev/",
  },
  {
    label: "Next.js",
    logo: LogoNextjs,
    url: "https://nextjs.org/",
  },

  {
    label: "Node.js",
    logo: LogoNodejs,
    url: "https://nodejs.org/en",
  },
  {
    label: "Express.Js",
    logo: LogoExpress,
    url: "https://expressjs.com/",
  },
  {
    label: "Nest.js",
    logo: LogoNest,
    url: "https://nestjs.com/",
  },
  {
    label: "PostgreSQL",
    logo: LogoPostgreSQL,
    url: "https://www.postgresql.org/",
  },
  {
    label: "MongoDB",
    logo: LogoMongoDB,
    url: "https://www.mongodb.com/",
  },
  {
    label: "Git",
    logo: LogoGit,
    url: "https://git-scm.com/",
  },
  {
    label: "Socket.io",
    logo: LogoSocket,
    url: "https://socket.io/",
  },
];
