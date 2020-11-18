module.exports = {
    port: 8080,
    base: '/learn-vue3/',
    assetsDir: 'static',
    publicPath: '/learn-vue3/',
    proxy: {
        '/api': {
            target: "http://47.100.38.254:5001/",
            changeOrigin: true,
            rewrite: (path) => path.replace(/^\/api/, "")
        }
    }
};
