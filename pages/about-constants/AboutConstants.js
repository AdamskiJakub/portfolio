import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from "react-icons/fa";

import { SiNextdotjs, SiFramer } from "react-icons/si";

//Services icons

import { RxCrop, RxPencil2, RxDesktop, RxReader } from "react-icons/rx";

import {
  RiTeamLine,
  RiCustomerService2Line,
  RiBarChart2Line,
  RiCopperDiamondLine,
  RiStackLine,
  RiArrowGoForwardLine,
  RiLightbulbFlashLine,
  RiHandHeartLine,
  RiSafeLine,
} from "react-icons/ri";

//  About data
export const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [
          <FaHtml5 key="html" />,
          <FaCss3 key="css" />,
          <FaJs key="js" />,
          <FaReact key="react" />,
          <SiNextdotjs key="next" />,
          <SiFramer key="framer" />,
          <FaWordpress key="wordpress" />,
        ],
      },
      {
        title: "Project Manager",
        about: [
          {
            title: "Jira, Scrum, Waterfall",
            id: 1,
          },
        ],
      },
      {
        title: "Production Leader",
        about: [
          {
            title:
              "Streamlabs OBS, CMS, SplashTop, Slack, MSTeams, Discord, Adobe Photoshop, ProView",
            id: 2,
          },
        ],
      },
    ],
  },
  {
    title: "Courses",
    info: [
      {
        title: "Ultimate React 18 with TypeScript",
        id: 3,
      },
      {
        title: "Basic JavaScript with Mosh",
        id: 4,
      },
      {
        title: "Mastering React with Mosh",
        id: 5,
      },
      {
        title: "Advanced JavaScript with Mosh (OOP,ES6)",
        id: 6,
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "Overall experience in IT",
        stage: "2018 - till now",
        id: 7,
      },
      {
        title: "Znipe.TV - Programmer, PM, Production Leader",
        stage: "07.2018 - 05.2020",
        id: 8,
      },
      {
        title: "Practises in Court - IT Help Desk, Programmer",
        stage: "09.2022 - 11.2022",
        id: 9,
      },
      {
        title: "TMATIC Grupa Computer Plus - Programmer",
        stage: "02.2023 - 08.2023",
        id: 10,
      },
      {
        title: "SoftwareHut - Frontend Developer ( Practises )",
        stage: "09.2023 - 10.2023",
        id: 11,
      },
    ],
  },
  {
    title: "credentials",
    info: [
      {
        title:
          "Programming and ICT Technologies - Białystok University Of Technology",
        id: 12,
      },
      {
        title: "Practises in Court - IT Dyploma and recommendation letter",
        id: 13,
      },
      {
        title: "Certified Frontend Developer - SoftwhareHut",
        id: 14,
      },
    ],
  },
];

// Services Slider

export const serviceData = [
  {
    icon: <RxCrop />,
    title: "Management",
    description:
      "Managing projects and schedules, coordinating teams for effective goal achievement.",
  },
  {
    icon: <RxDesktop />,
    title: "Development",
    description:
      "Crafting innovative solutions and bringing ideas to life through development processes.",
  },
  {
    icon: <RxReader />,
    title: "Copywriting",
    description:
      "Creating compelling and engaging written content to captivate audiences.",
  },
  {
    icon: <RiTeamLine />,
    title: "Team Collaboration",
    description:
      "Fostering teamwork, managing projects, and coordinating teams for effective collaboration.",
  },
  {
    icon: <RiCustomerService2Line />,
    title: "Client Communication",
    description:
      "Building strong client relationships, understanding and interpreting client requirements.",
  },
  {
    icon: <RiBarChart2Line />,
    title: "Strategic Planning",
    description:
      "Strategically planning and executing projects, identifying and managing risks, optimizing project processes.",
  },
  {
    icon: <RiCopperDiamondLine />,
    title: "Production Oversight",
    description:
      "Overseeing production processes, ensuring quality and compliance with standards, optimizing production efficiency.",
  },
  {
    icon: <RiStackLine />,
    title: "Resource Management",
    description:
      "Effectively managing production resources, planning and allocating resources, optimizing performance.",
  },
  {
    icon: <RiArrowGoForwardLine />,
    title: "Continuous Improvement",
    description:
      "Implementing continuous improvement processes, analyzing production results, identifying areas for improvement.",
  },
  {
    icon: <RiLightbulbFlashLine />,
    title: "Innovation Strategist",
    description:
      "Developing strategies for innovative solutions, integrating new technologies into production processes.",
  },
  {
    icon: <RiHandHeartLine />,
    title: "Client Relationship Management",
    description:
      "Managing client relationships, developing long-term business partnerships.",
  },
  {
    icon: <RiSafeLine />,
    title: "Risk Management Specialist",
    description:
      "Identifying and managing project risks, preventing and resolving potential issues.",
  },
];

//WorkSlider data

export const workSlides = [
  {
    title: "Orderly AI",
    image: "/project1.png",
    link: "https://github.com/AdamskiJakub/orderly-ai-1",
  },
  {
    title: "Gaming Hub",
    image: "/project2.png",
    link: "https://github.com/AdamskiJakub/gaming-hub",
  },
  {
    title: "Modern Landing Page",
    image: "/project3.png",
    link: "https://github.com/AdamskiJakub/modern_website",
  },
  {
    title: "E-commerce website",
    image: "/project4.png",
    link: "https://github.com/AdamskiJakub/ecommerce",
  },
];
