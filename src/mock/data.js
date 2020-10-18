import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'aravind|dev', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: 'nice to meet you.', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, I\'am',
  name: 'Aravind',
  subtitle: 'I make websites.',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'I am passionate about creating efficient and fluid digital experiences.I use React, Node, Express etc to make cool websites, and yes i really like javascript : )',
  paragraphTwo: 'I love taking pictures ,reading and hiking.',
  paragraphThree: ' . ',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'face2.jpg',
    title: 'Face detection',
    info: 'A react app that detects faces in your images.\nUses Clarifai api and a node with express backend to process information.It uses PostgressSQL to store user data and Json requests and bycypt for securing data.' ,
    info2: '',
    url: 'https://face-label.herokuapp.com/',
    repo: 'https://github.com/Aravind-pk/face-detection', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'robo.jpg',
    title: 'Robofriends',
    info: 'A fun react app that automatically generate a "robo" profile picture for users.',
    info2: '',
    url: 'https://aravind-pk.github.io/robofriends/',
    repo: 'https://github.com/Aravind-pk/robofriends', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'start.jpg',
    title: 'Startup landing page',
    info: 'A simple landing page for startups',
    info2: '',
    url: 'https://aravind-pk.github.io/first-startup/',
    repo: 'https://github.com/Aravind-pk/first-startup', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Would you like to reach out? Awsome !!',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://github.com/Aravind-pk',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://github.com/Aravind-pk',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/Aravind-pk',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
