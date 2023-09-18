import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
 
  csharp, 
  dotnet, 
  fastapi, 
  lightgbm, 
  python, 
  sklearn, 
  sql, 
  pandas,

  polyu,
  apm,
  caton,
  okx,

  eth,

  logo,
  
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
    title: "Fullstack Backend Engineer",
    icon: mobile,
  },

  {
    title: "Data Engineer",
    icon: web,
  },

  {
    title: "ML Practitioner",
    icon: backend,
  },
  {
    title: "Analytics Lead",
    icon: creator,
  },
];

const intro = [
  {
    text: "I'm a skilled software engineer with experience in ML and data engineering and expertise in languages like Python, SQL, React, and C#. I'm a quick learner and collaborate closely with clients to create efficient and user-friendly solutions that solve real-world problems. Let's work together to bring your ideas to life!"
  }
];

const technologies = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "C#",
    icon: csharp,
  },
  {
    name: "Pandas",
    icon: pandas,
  },
  {
    name: "sckit-learn",
    icon: sklearn,
  },
  {
    name: "LightGBM",
    icon: lightgbm,
  },
  {
    name: "FastAPI",
    icon: fastapi,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
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
];

const experiences = [
  {
    title: "Software Engineer",
    company_name: "The Hong Kong Polytechnic Unversity",
    icon: polyu,
    iconBg: "#E6DEDD",
    date: "June 2023 - Present",
    points: [
      "Developing and maintaining web applications and backend API using React.js, Python, FastAPI and other related technologies.",
      "Designed and implemented automated and AI/data solutions.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Defined and implemented streamlined team workflow standards, optimizing efficiency, collaboration, and software delivery.",
      "Led and empowered a high-performing software engineering team, driving successful project outcomes through clear vision, collaboration, and agile methodologies.",
    ],
  },
  {
    title: "ML/Data Engineer",
    company_name: "The Hong Kong Polytechnic Unversity",
    icon: polyu,
    iconBg: "#E6DEDD",
    date: "June 2022 - Present",
    points: [
      "Developing ML models for T&L using LightGBM and Python.",
      "Builiding automation programs and data pipelines using SQL, C#, Python, Selenium, requests, Powershell and .NET.",
      "Leading a team in data mining and building advanced analytics.",
      "Designing and building full-stack applications and data management system.",
      "Mentored and coached team members to enhance their technical skills, problem-solving abilities, and domain knowledge. Facilitated knowledge sharing and collaboration, enabling the team to leverage cutting-edge techniques and tools in data mining and analytics.",
    ],
  },
  {
    title: "Data Analyst",
    company_name: "OKX",
    icon: okx,
    iconBg: "#FFFFFF",
    date: "March 2022 - June 2022",
    points: [
      "Led research efforts on user profiling by utilizing Python to implement unsupervised machine learning models for user segmentation.",
      "Sharing research with key department heads to deliver valuable insights.",
      "Communicating with marketing and PR departments wiht relevant data to support decision-making processes and publish marketing materials.",
    ],
  },
  {
    title: "Business Intelligence Engineer",
    company_name: "APM Monaco",
    icon: apm,
    iconBg: "#FFFFFF",
    date: "Aug 2021 - February 2022",
    points: [
      "Designing and developing advanced analytics on business operations, using SQL and PowerBI",
      "Replacing and improving data pipelies and quality of data infrastructure, in SSMS",
      "Conducting Data mining to discover useful insights from company data with Python.",
      "Designing and building full-stack applications and data management system.",
    ],
  },
  {
    title: "Data Engineer",
    company_name: "Contracted in other companies, Caton Tech and HKSAR",
    icon: caton,
    iconBg: "#E6DEDD",
    date: "Mar 2020 - July 2021",
    points: [
      "Designing and developing anlaytic reports.",
      "Designing, developing, and maintaining data pipelines and databases.",
      "Conducting data profiling and business requirement translation.",
      "Collaborated with cross-functional teams to discuss data requests and data analytics issues",
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
const project_sum = [
  {
    summary:"Following projects showcases my skills and experience through\
    demos of my work. Each project is briefly described with\
    links to code repositories. It reflects my\
    ability to solve complex problems, work with different technologies,\
    and manage projects effectively."
  }
]

const projects = [
  {
    name: "React website",
    description:
      "React website with three.js to introduce myself and some cute 3D objects.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "three.js",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: logo,
    source_code_link: "https://github.com/kennylids/portfolio",
  },
  {
    name: "FastAPI Backend",
    description:
      "A thorough demonstration of building a python FastAPI backend with testing and CI/CD workflows.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "fastapi",
        color: "green-text-gradient",
      },
      {
        name: "pytest",
        color: "pink-text-gradient",
      },
      {
        name: "GitHub workflow",
        color: "orange-text-gradient",
      },
    ],
    image: fastapi,
    source_code_link: "https://github.com/kennylids/fastapi-backend-demo",
  },
  {
    name: "Ethereum DeFi Network Analysis",
    description:
      "A comprehensive analysis that delves into network properties of DeFi application in Ethereum.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "bigquery",
        color: "green-text-gradient",
      },
      {
        name: "pandas",
        color: "pink-text-gradient",
      },
      {
        name: "igraph",
        color: "orange-text-gradient",
      },
    ],
    image: eth,
    source_code_link: "https://github.com/kennylids/Ethereum-DeFi-Networks-Analysis_2021",
  },
];

export { intro, services, technologies, experiences, testimonials, projects, project_sum };
