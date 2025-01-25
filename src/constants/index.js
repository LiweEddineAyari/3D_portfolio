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
    steg,
    beeCoders,
    reactbecoders,
    symfony,
    php,
    qt,
    sdl,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "Works",
      title: "Work",
    },
    {
      id: "Contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Front Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Mobile Developer",
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
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Backend Developer",
      company_name: "STEG Tunisia",
      icon: steg,
      iconBg: "#383E56",
      date: "Jul 2022 - Aug 2022",
      points: [
        "Backend Development: Worked on server-side functionalities using PHP and MySQL, enabling seamless integration with existing databases and systems.",
        "Maintained comprehensive documentation for all developed modules, ensuring clarity and ease of future maintenance",
      ],
    },
    {
      title: "Full Stack Developer",
      company_name: "Bee Coders · Internship",
      icon: beeCoders,
      iconBg: "#E6DEDD",
      date: "Jun 2024 - Aug 2024",
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
      name: "SoccerTm",
      description:
      "SoccerTm is an interactive web platform designed for soccer enthusiasts to manage their teams and schedule matches effortlessly. Whether you're creating your own soccer team, selecting opponents, or organizing matches in various terrains, SoccerTm makes the process seamless and enjoyable.",
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
          name: "Express Js",
          color: "pink-text-gradient",
        },
      ],
      image: reactbecoders,
      source_code_link: "https://github.com/LiweEddineAyari/Soccer-TM-intership-project-2024-",
    },
    {
      name: "FitHub",
      description:
      "FitHub is a fitness platform with a Symfony PHP website and a JavaFX desktop app. Users can join fitness courses, chat with coaches, buy gym equipment, access filtered exercises, and generate custom workout plans based on preferences, training days, fitness level, and body/mental state.",
      tags: [
        {
          name: "symfony",
          color: "blue-text-gradient",
        },
        {
          name: "JavaFX",
          color: "green-text-gradient",
        },
        {
          name: "Php",
          color: "pink-text-gradient",
        },
      ],
      image: symfony,
      source_code_link: "https://github.com/LiweEddineAyari/Pidev3A30",
    },
    {
      name: "BookFlix",
      description:
      "BookFlix is a PHP-based e-commerce platform designed to provide users with a seamless online experience for purchasing books and participating in cultural events. ",
      tags: [
        {
          name: "Php",
          color: "blue-text-gradient",
        },
        {
          name: "JavaScript",
          color: "green-text-gradient",
        },
        {
          name: "MySQL",
          color: "pink-text-gradient",
        },
      ],
      image: php,
      source_code_link: "https://github.com/LiweEddineAyari/",
    },       
    {
      name: "Travel Tastic",
      description:
      "Travel Tastic is a C++ admin application built with Qt Creator, designed for travel agencies to manage client data and streamline operations efficiently",
      tags: [
        {
          name: "C++",
          color: "blue-text-gradient",
        },
        {
          name: "Qt Creator",
          color: "green-text-gradient",
        },
        {
          name: "Oracle SQL Developer",
          color: "pink-text-gradient",
        },
      ],
      image: qt ,
      source_code_link: "https://github.com/LiweEddineAyari/projet_cpp",
    },
    {
      name: "Spooky Museum 2D Game",
      description:
      "Spooky Museum is an exciting 2D adventure game where players control a boy who unexpectedly finds himself trapped in a haunted museum",
      tags: [
        {
          name: "C (Programming Language)",
          color: "blue-text-gradient",
        },
        {
          name: "SDL Library ( C Programming Language )",
          color: "green-text-gradient",
        },
        {
          name: "Adobe Illustrator · Adobe Photoshop ",
          color: "pink-text-gradient",
        },
      ],
      image: sdl ,
      source_code_link: "https://github.com/LiweEddineAyari/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };