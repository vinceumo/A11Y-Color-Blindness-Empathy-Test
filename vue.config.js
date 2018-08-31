const path = require('path')

module.exports = {
  chainWebpack: config => {
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(type => addStyleResource(config.module.rule('scss').oneOf(type)))
  },
  baseUrl: process.env.NODE_ENV === 'production'
      ? '/A11Y-Color-Blindness-Empathy-Test/'
      : '/',
  pwa: {
    name: 'A11Y Color Blindness Empathy Test',
    themeColor: '#212121',
    msTileColor: '#212121',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    iconPaths: {
      favicon32: 'img/icons/favicon-32x32.png',
      favicon16: 'img/icons/favicon-16x16.png',
      appleTouchIcon: 'img/icons/apple-touch-icon.png',
      maskIcon: 'img/icons/safari-pinned-tab.svg',
      msTileImage: 'img/icons/mstile-icon-150x150.png'
    }
  }
}

function addStyleResource (rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/styles/vendors/_family.scss'),
        path.resolve(__dirname, './src/styles/functions/*.scss'),
        path.resolve(__dirname, './src/styles/mixins/*.scss'),
        path.resolve(__dirname, './src/styles/variables/*.scss'),
      ],
    })
}