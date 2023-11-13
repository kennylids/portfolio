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
  bashfularts
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
    text: "I'm a skilled software engineer with experience in ML and data engineering and expertise in languages like Python, SQL, React, Next.js and C#. I'm a quick learner and collaborate closely with clients to create efficient and user-friendly solutions. Let's work together to bring your ideas to life!"
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
    title: "Lead Engineer (Data)",
    company_name: "The Hong Kong Polytechnic Unversity",
    icon: polyu,
    iconBg: "#E6DEDD",
    date: "June 2023 - Present",
    points: [
      "Developing Next.js and FastAPI applications for service delivery and Open API initiatives on Docker, utilizing GitLab, Dockerfile, and OpenShift configurations.",
      "Developing a FastAPI backend using Python, pydantic, SQLAlchemy, pyodbc running on uvicorn and deployed with Docker.",
      "Writing Dockerfile and OpenShift configuration files to establish network configuration and system image setup, ensuring efficient and scalable deployment.",
      "Creating C#, PowerShell, Python programs, and SQL stored procedures to automate tasks and streamline data pipelines.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Leading a high-performing software engineering team, driving successful project outcomes through clear vision, collaboration, and agile methodologies.",
    ],
  },
  {
    title: "Data Engineer",
    company_name: "The Hong Kong Polytechnic Unversity",
    icon: polyu,
    iconBg: "#E6DEDD",
    date: "June 2022 - Present",
    points: [
      "Builiding automation programs and data pipelines using SQL, C#, Python, Selenium, requests, Powershell and .NET.",
      "Utilized Python, Selenium, and Requests libraries for web scraping, extracting data from educational websites to support analysis and integration into internal systems.",
      "Leading a team in data mining and building advanced analytics.",
      "Developing ML models for T&L using LightGBM and Python.",
      "Designing and building full-stack applications and data management system.",
      "Coaching team members to enhance their technical skills, problem-solving abilities, and domain knowledge. Facilitated knowledge sharing and collaboration, enabling the team to leverage cutting-edge techniques and tools in data mining and analytics.",
    ],
  },
  // {
  //   title: "Data Analyst",
  //   company_name: "OKX",
  //   icon: okx,
  //   iconBg: "#FFFFFF",
  //   date: "March 2022 - June 2022",
  //   points: [
  //     "Led research efforts on user profiling by utilizing Python to implement unsupervised machine learning models for user segmentation.",
  //     "Sharing research with key department heads to deliver valuable insights in product design.",
  //     "Communicating with marketing departments with relevant data to support decision-making processes and marketing",
  //   ],
  // },
  {
    title: "Business Intelligence Engineer",
    company_name: "APM Monaco",
    icon: apm,
    iconBg: "#FFFFFF",
    date: "Aug 2021 - June 2022",
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
      "I thought it would take a long time to build a beautiful and functional e-commerce website, but Ken managed to build it for a couple of weeks and now the shop is online!",
    name: "Teddy Apr",
    designation: "COO",
    company: "bashfulArts",
    image: "https://eshop-jade.vercel.app/favicon.ico",
  },
  {
    testimonial:
      "Great help in building fulfilment order automation. Saved me a lot of manual work.",
    name: "Jason Pong",
    designation: "CEO",
    company: "WakeValley Hong Kong",
    image: "https://pps.whatsapp.net/v/t61.24694-24/211766646_2955395458079414_6631635263188823136_n.jpg?ccb=11-4&oh=01_AdQnk5tXU0T9HOKwYf0_mMgYfD7HEMUcGoKjYGeMTbVj-w&oe=6554F10A&_nc_sid=e6ed6c&_nc_cat=103",
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
    name: "3D-powered Ecommerce website",
    description:
      "Next.js website powered with three.js to display and sell artful products online. ",
    tags: [
      {
        name: "Next.js",
        color: "pink-text-gradient",
      },
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "three.js",
        color: "green-text-gradient",
      },
      
    ],
    image: bashfularts,
    source_code_link: "https://eshop-jade.vercel.app/",
  },  
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
