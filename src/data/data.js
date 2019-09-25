const data = {
  
  navLinks: [
    {
      name: 'Home',
      link: '/'
    },
    {
      name: 'Skills',
      link: '/Skills'
    },
    {
      name: 'Projects',
      link: '/Projects'
    },
    {
      name: 'Contact',
      link: '/Contact'
    }
  ],

  footerLinks: [
    {
      name: 'Github',
      link: 'https://github.com/phernandoe'
    },
    {
      name: 'Bēhance',
      link: 'https://www.behance.net/bFernando'
    },
    {
      name: 'Linkedin',
      link: 'https://www.linkedin.com/in/fernando-barreto-696968161/'
    }
  ],

  skills: { 
    languages: {
      title: 'Languages & Frameworks',
      items: [
        'Python',
        'Javascript',
        'Java',
        'HTML',
        'CSS',
        'React.js'
      ]
    },
    design: {
      title: 'Design',
      items: [
        'Illustrator',
        'Photoshop',
        'Indesign',
        'Figma'
      ]
    }
  },

  projects: [
    {
      title: 'TECMap',
      tools: ['NLP', 'Maven', 'Java', 'Jsoup', 'HTML', 'CSS'],
      desc: 'Implemented a backend system used to scan and format .txt files into objects in a concept map along with an automated tagging system. Also developed an API and an interface to visualize these objects.',
      link: 'https://github.com/tobydragon/tecmap'
    },
    {
      title: 'Fernando Barreto',
      tools: ['React', 'HTML', 'CSS', 'Netlify', 'Gatsby', 'Figma'],
      desc: "This portfolio and it's many interations, built from scratch by myself.",
      link: 'https://fernandobarreto.netlify.com/'
    },
    {
      title: "Can't Decide",
      tools: ['HTML', 'CSS', 'Three.js'],
      desc: 'Developed a small web app that takes user input and generates a 3-dimensional cube containing the input on each side, then simulates a dice roll. Created exclusively to make decisions for me. ',
      link: 'https://phernandoe.github.io/CantDecide/'
    },
    {
      title: "What's My Winrate?",
      tools: ['HTML', 'CSS', 'Next.js', 'React', 'Express'],
      desc: "Developed a tool that calculates the win rate of League of Legends’ accounts using the Riot Games API and displays it in a single page.",
      link: 'https://github.com/phernandoe/WhatsMyWinrate'
    }
  ]
}

export default data;