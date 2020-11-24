module.exports = {
    publicPath: './',
    outputDir: 'dist',
    assetsDir: 'public',
    filenameHashing: true,
    // eslint-loader 是否在保存的时候检查
    lintOnSave: false,
    // 是否使用包含运行时编译器的Vue核心的构建
    runtimeCompiler: false,
    // 默认情况下 babel-loader 忽略其中的所有文件 node_modules
    // transpileDependencies: ['normalize-url', 'prepend-http', 'sort-keys'], // 兼容IE
    transpileDependencies: ['pinyin'], // 兼容IE
    // 生产环境 sourceMap
    productionSourceMap: false,
    // cors 相关 https://jakearchibald.com/2017/es-modules-in-browsers/#always-cors
    // corsUseCredentials: false,
    devServer: {
      open: true,
      host: '0.0.0.0',
      port: 8080,
      https: false,
      hotOnly: false,
      proxy: {
        '/api': {
          changeOrigin: true, // 如果接口跨域，需要进行这个参数配置
          ws: true, // proxy websockets
          //pathRewrite方法重写url
          pathRewrite: {
            '^/api': '/',
          },
          //pathRewrite: {'^/api': '/'} 重写之后url为 http://192.168.1.16:8085/xxxx
          //pathRewrite: {'^/api': '/api'} 重写之后url为 http://192.168.1.16:8085/api/xxxx
        },
      },
      before: (app) => {},
    }
  };