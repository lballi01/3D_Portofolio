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
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
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
      title: "Frontend Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Self-Taught",
      icon: creator,
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
      name: "React JS",
      icon: reactjs,
    },
    {
      name: ".net",
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
      name: "python",
      icon: figma,
    },
    {
      name: "C#",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Student Ambassador",
      company_name: "Sheffield Hallam University",
      icon: tesla,
      iconBg: "#383E56",
      date: "2019 - 2020",
      points: [
        "Acted as representative for the Economics Department.",
        "Cohesively worked with other representatives to create a better environment in the Business School.",
        "Course Representative",
      ],
    },
    {
      title: "Data Analysis and Market Research",
      company_name: "Uropanet Ltd.",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "2020",
      points: [
        "Conducted Market research to identify key marketing countries and sports activities for the Retina Cameras, in doing so I improved my research and reporting skills.",
        "Conducted Research on the Popularity of Sports Development tools in Mobile applications to determine on whether it is worth creating an App for the Retina cameras.",
        "I conducted Social Media Research to identify key groups that would be interested in buying the Retina Cameras.",
      ],
    },
    {
      title: "Business Administration ",
      company_name: "BALI LTD",
      icon: tesla,
      iconBg: "#383E56",
      date: "2019 - 2021",
      points: [
        "Responsible to explaining the owner of the company the financials which improved my data interpretation skills.",
        "Organized booking and supplier orders.",
        "Responsible for conducting payroll and tax return, which in turn has improved my timekeeping skills.",
        "First point of Contact between customers and owner, dealt with complaints, Payments, and bookings.",
        "Liable for filling documents to Government such as HMRC and deal with any complications.",
      ],
    },
    {
      title: "Business Development",
      company_name: "Atkins",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "2021-2022",
      points: [
        "Used Microsoft Excel and VBA to create best practice tools for the company, which improved my Microsoft Excel skills.",
        "Tested internal company software to ensure the software is working effectively.",
        "By bidding for tenders from Government projects, I have become more disciplined at following strict timetables and deadlines.",
        "Responsibility of Co-ordinating tasks to ensure that bidding processes run smoothly. In doing so I became capable of taking initiative and not shying away from crucial and stressful tasks as well as effectively communicating information across the team.",
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
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
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
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };