module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://118.25.59.147:8080',
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''  //通过pathRewrite重写地址，将前缀/api转为/
                }
            }
        }
    }
}