const withCSS = require('@zeit/next-css');

module.exports = withCSS(),
{
  exportPathMap: async function(defaultPathMap) {
    return {
      '/': { page: '/' },
      '/contact': { page: '/contact' },
      '/skills': { page: '/skills' },
      '/projects': { page: '/projects' }
    };
  }
}

