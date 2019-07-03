const withCSS = require('@zeit/next-css');

module.exports = withCSS(),
{
  exportPathMap: async function(defaultPathMap) {
    return {
      '/': { page: '/index' },
      '/contact/': { page: '/Contact' },
      '/skills/': { page: '/Skills.js' },
      '/projects': { page: '/Projects' }
    };
  }
}

