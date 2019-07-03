const withCSS = require('@zeit/next-css');
module.exports = withCSS();

module.exports = {
  exportPathMap: async function(defaultPathMap) {
    return {
      '/': { page: '/' },
      '/contact': { page: '/contact' },
      '/skills': { page: '/skills' },
      '/projects': { page: '/projects' }
    };
  }
}

