const withCSS = require('@zeit/next-css');

module.exports = withCSS({
  cssModules: true,
  exportPathMap: async function(defaultPathMap) {
    return {
      '/': { page: '/index' },
      '/contact': { page: '/Contact' },
      '/skills': { page: '/Skills' },
      '/projects': { page: '/Projects' }
    };
  }
})
