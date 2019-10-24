module.exports = {
  devServer: {
    proxy: {
      '/index': {
        target: 'http://h5.jumei.com',
        changeOrigin: true
      }
    }
  }
}
