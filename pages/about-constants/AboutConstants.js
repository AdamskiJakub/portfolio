import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from "react-icons/si";

//Services icons

import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
} from "react-icons/rx";

//  About data
export const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <SiNextdotjs />,
          <SiFramer />,
          <FaWordpress />,
        ],
      },
      {
        title: "Project Manager",
        about: [
          {
            title: 'Jira, Scrum, Waterfall'
          }
        ],
      },
      {
        title: "Production Leader",
        about: [
          {
            title: 'Streamlabs OBS, CMS, SplashTop, Slack, MSTeams, Discord, Adobe Photoshop, ProView'
          }
        ],
      },
    ],
  },
  {
    title: "Courses",
    info: [
      {
        title: "lorem for now",
        stage: "2016 - 2018",
      },
      {
        title: "lorem for now",
        stage: "2018 - 2019",
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "lorem for now",
        stage: "2018 - 2020",
      },
      {
        title: "lorem for now",
        stage: "2021 - 2022",
      },
      {
        title: "lorem for now",
        stage: "2022 - 2023",
      },
    ],
  },
  {
    title: "credentials",
    info: [
      {
        title: "lorem for now",
        stage: "2011",
      },
      {
        title: "lorem for now",
        stage: "2009",
      },
      {
        title: "lorem for now",
        stage: "2006",
      },
    ],
  },
];

// Services Slider

export const serviceData = [
  {
    icon: <RxCrop />,
    title: "Branding",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: <RxPencil2 />,
    title: "Design",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: <RxDesktop />,
    title: "Development",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: <RxReader />,
    title: "Copywriting",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: <RxRocket />,
    title: "SEO",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];
