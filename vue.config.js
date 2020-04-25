module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:9981',
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''  //通过pathRewrite重写地址，将前缀/api转为/
                }
            }
        }
    }
}