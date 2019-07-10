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
    learning: {
      title: 'Learning',
      items: [
        'React',
        'Gatsby.js',
      ]
    },
    languages: {
      title: 'Languages',
      items: [
        'Python',
        'Javascript',
        'Java',
        'HTML',
        'CSS'
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
      tools: 'NLP, Maven, Java, Jsoup, HTML, CSS',
      desc: 'Worked with a team developing an application written primarily in Java designed to aid instructors in designing course curricula.',
      link: 'https://github.com/tobydragon/tecmap'
    },
    {
      title: 'Fernando Barreto',
      tools: 'React, HTML, CSS, Netlify, Gatsby, Figma',
      desc: "This portfolio and it's many interations!",
      link: 'https://fernandobarreto.netlify.com/'
    },
    {
      title: "Can't Decide",
      tools: 'HTML, CSS, Three.js',
      desc: 'Small web app that chooses for you.',
      link: 'https://phernandoe.github.io/CantDecide/'
    },
    {
      title: "What's my winrate?",
      tools: 'HTML, CSS, Next.js, React, Express',
      desc: "Tool that calculates the winrate of League of Legends' accounts using the Riot Games API and displays it in a single page",
      link: 'https://github.com/phernandoe/WhatsMyWinrate'
    }
  ]
}

export default data;