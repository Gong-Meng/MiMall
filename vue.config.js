module.exports = {
    devServer: {
        host: 'localhost',
        port: 8080,
        proxy: {
            '/api': {
                target: 'http://mall-pre.springboot.cn',
                changeOrigin: true,
                pathRewrite: {
                    '/api': ''
                }
            }
        }
    },
    // publicPath: '/app', // 访问根路径
    outputDir: 'dist', // 打包输出目录
    // indexPath: 'index2.html', // 根页面名称
    lintOnSave: true, // eslint语法校验开关
    // productionSourceMap: false, // sourceMap调试开关
    chainWebpack: (config) => {
        config.plugins.delete('prefetch')
    }
}