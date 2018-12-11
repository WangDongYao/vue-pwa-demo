let baseUrl = '/'
switch (process.env.BUILD_ENV) {
  case 'production':
    baseUrl = `https://www.cdn.com/vuetify/app/${process.env.APP_VERSION}`
    break
  case 'test':
    baseUrl = `https://www.cdn.com/vuetify-test/app/${process.env.APP_VERSION}`
    break
  default:
    baseUrl = `/`
    break
}

module.exports = {
  baseUrl,
  pwa: {
    name: 'Vuetify',
    themeColor: '#FFFFFF',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    workboxOptions: {
      skipWaiting: true,
      importWorkboxFrom: 'local'
    }
  },
  devServer: {
    open: true,
    port: 6910,
    compress: true,
    proxy: {
      '/api': {
        target: 'http://localhost:6911',
        changeOrigin: true
      }
    }
  },
  productionSourceMap: false
}
