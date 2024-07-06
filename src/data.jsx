import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from "react-icons/fa";
import { FiFileText, FiUser, FiExternalLink } from "react-icons/fi";

import Work1 from "./assets/project-1.jpeg";
import Work2 from "./assets/project-2.jpg";
import Work3 from "./assets/project-3.jpeg";
import Work4 from "./assets/project-4.jpeg";
import Work5 from "./assets/project-5.jpg";
import Work6 from "./assets/project-6.jpg";

import Theme1 from "./assets/purple.png";
import Theme2 from "./assets/red.png";
import Theme3 from "./assets/blueviolet.png";
import Theme4 from "./assets/blue.png";
import Theme5 from "./assets/goldenrod.png";
import Theme6 from "./assets/magenta.png";
import Theme7 from "./assets/yellowgreen.png";
import Theme8 from "./assets/orange.png";
import Theme9 from "./assets/green.png";
import Theme10 from "./assets/yellow.png";

export const links = [
  {
    id: 1,
    name: "Home",
    icon: <FaHome className="nav__icon" />,
    path: "/",
  },

  {
    id: 2,
    name: "About",
    icon: <FaUser className="nav__icon" />,
    path: "/about",
  },

  {
    id: 3,
    name: "Portfolio",
    icon: <FaFolderOpen className="nav__icon" />,
    path: "/portfolio",
  },

  {
    id: 4,
    name: "Contact",
    icon: <FaEnvelopeOpen className="nav__icon" />,
    path: "/contact",
  },
];

export const personalInfo = [
  {
    id: 1,
    title: "First Name : ",
    description: "Jhet Andrei",
  },

  {
    id: 2,
    title: "Last Name : ",
    description: "Dizon",
  },

  {
    id: 3,
    title: "Age : ",
    description: "20 Years Old",
  },

  {
    id: 4,
    title: "Nationality : ",
    description: "Filipino",
  },

  {
    id: 6,
    title: "Address : ",
    description: "Cebu, Philippines",
  },

  {
    id: 7,
    title: "Phone : ",
    description: "+639629240211",
  },

  {
    id: 8,
    title: "Email : ",
    description: "jhetdizon41@gmail.com",
  },

  {
    id: 10,
    title: "Languages : ",
    description: "English, Tagalog, Bisaya",
  },
];

export const stats = [
  {
    id: 1,
    no: "12+",
    title: "Years of <br /> Experience",
  },

  {
    id: 2,
    no: "97+",
    title: "Completed <br /> Projects",
  },

  {
    id: 3,
    no: "81+",
    title: "Happy <br /> Customers",
  },

  {
    id: 4,
    no: "53+",
    title: " Awards <br /> Won",
  },
];

export const resume = [
  {
    id: 4,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2023-Present",
    title: "Software Engineering <span> Lithan Singapore </span>",
  },

  {
    id: 5,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2023-Present",
    title: "BSIT <span> University of Cebu </span>",
  },

  {
    id: 6,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2021-2023",
    title:
      "Senior High School <span> De La Salle Andres Soriano Memorial College </span>",
  },
];

export const skills = [
  {
    id: 1,
    title: "Java",
    percentage: "83",
  },

  {
    id: 2,
    title: "HTML",
    percentage: "94",
  },

  {
    id: 3,
    title: "CSS",
    percentage: "89",
  },

  {
    id: 4,
    title: "Javascript",
    percentage: "78",
  },

  {
    id: 5,
    title: "SQL",
    percentage: "95",
  },

  {
    id: 6,
    title: "React",
    percentage: "60",
  },

  {
    id: 7,
    title: "Spring",
    percentage: "70",
  },

  {
    id: 8,
    title: "Bootstrap",
    percentage: "65",
  },
];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: "The North Sussex Judo",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "The North Sussex Judo",
      },
      {
        icon: <FiUser />,
        title: "Description : ",
        desc: "I embarked on a project where I created a Java-based program. The task involved developing software to calculate monthly training costs and manage athlete information efficiently.",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "Java",
      },
      {
        icon: <FiExternalLink />,
        title: "Github Repo : ",
        desc: (
          <a
            className="links"
            href="https://github.com/schrodinger41/The-North-Sussex-Judo"
            target="_blank"
          >
            https://github.com/schrodinger41/The-North-Sussex-Judo
          </a>
        ),
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: "Dobu Martial Arts",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Dobu Martial Arts",
      },
      {
        icon: <FiUser />,
        title: "Description : ",
        desc: "This project aimed to showcase DoBu Martial Arts, a leading studio offering diverse martial arts and fitness classes.",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "HTML, CSS, and Javascript",
      },
      {
        icon: <FiExternalLink />,
        title: "Github Repo : ",
        desc: (
          <a
            className="links"
            href="https://github.com/schrodinger41/DoBu-Website"
            target="_blank"
          >
            https://github.com/schrodinger41/DoBu-Website
          </a>
        ),
      },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: "Enomy-Finances",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Video",
      },
      {
        icon: <FiUser />,
        title: "Description : ",
        desc: "This project aims to modernize the organizations computer system, improve user experience, and meet increasing demands for comprehensive financial services.Key features included currency cost calculation tools, earnings quoting, and secure user data storage. ",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "HTML, CSS, Javascript, Spring Security, Bootstrap, and SQL",
      },
      {
        icon: <FiExternalLink />,
        title: "Github Repo : ",
        desc: (
          <a
            className="links"
            href="https://github.com/schrodinger41/enomy-finances"
            target="_blank"
          >
            https://github.com/schrodinger41/enomy-finances
          </a>
        ),
      },
    ],
  },

  {
    id: 4,
    img: Work4,
    title: "ABC Car Portal",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "ABC Car Portal",
      },
      {
        icon: <FiUser />,
        title: "Description : ",
        desc: "I developed a project call Used Car Sales Portal forour module 7 at Lithan. The portal provides users with a seamless platform to browse, search, and purchase pre-owned vehicles, while enabling sellers to list their cars for sale. ",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "HTML, CSS, Javascript, Bootstrap, Spring Security, SpringBoot, and SQL",
      },
      {
        icon: <FiExternalLink />,
        title: "Github Repo : ",
        desc: (
          <a
            className="links"
            href="https://github.com/schrodinger41/abc_portal"
            target="_blank"
          >
            https://github.com/schrodinger41/abc_portal
          </a>
        ),
      },
    ],
  },

  {
    id: 5,
    img: Work5,
    title: "BookByte",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "BookByte",
      },
      {
        icon: <FiUser />,
        title: "Description : ",
        desc: "I created a website where people can search for books they want using the OpenLibrary API",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "HTML, CSS, Javascript, Bootstrap, ReactJS, and API",
      },
      {
        icon: <FiExternalLink />,
        title: "Github Repo : ",
        desc: (
          <a
            className="links"
            href="https://github.com/schrodinger41/bookbyte"
            target="_blank"
          >
            https://github.com/schrodinger41/bookbyte
          </a>
        ),
      },
    ],
  },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: "hsl(252, 35%, 51%)",
  },

  {
    id: 2,
    img: Theme2,
    color: "hsl(4, 93%, 54%)",
  },

  {
    id: 3,
    img: Theme3,
    color: "hsl(271, 76%, 53%)",
  },

  {
    id: 4,
    img: Theme4,
    color: "hsl(225, 73%, 57%)",
  },

  {
    id: 5,
    img: Theme5,
    color: "hsl(43, 74%, 49%)",
  },

  {
    id: 6,
    img: Theme6,
    color: "hsl(339, 81%, 66%)",
  },

  {
    id: 7,
    img: Theme7,
    color: "hsl(80, 61%, 50%)",
  },

  {
    id: 8,
    img: Theme8,
    color: "hsl(19, 96%, 52%)",
  },

  {
    id: 9,
    img: Theme9,
    color: "hsl(88, 65%, 43%)",
  },

  {
    id: 10,
    img: Theme10,
    color: "hsl(42, 100%, 50%)",
  },
];
