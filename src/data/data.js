const data = {
  
  navLinks: [
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
    },
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
        'Indesign'
      ]
    }
  },

  projects: [
    {
      title: 'TECMap',
      tools: 'NLP, Maven, Java, Web Scraping, TDD',
      desc: 'Worked with a team developing an application written primarily in Java designed to aid instructors in designing course curricula.',
      link: 'https://github.com/tobydragon/tecmap'
    },
    {
      title: 'Fernando Barreto',
      tools: 'React, CSS, NextJs, Netlify, Gatsby',
      desc: "This portfolio and it's many interations!",
      link: 'https://fernandobarreto.netlify.com/'
    },
    {
      title: "Can't Decide",
      tools: 'HTML, CSS, ThreeJs',
      desc: 'Small web app that chooses for you.',
      link: 'https://phernandoe.github.io/CantDecide/'
    }
  ]
}

export default data;