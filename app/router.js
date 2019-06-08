module.exports = app => {
    const {router, controller,middleware} = app;
    const gzip = middleware.gzip({threshold:1024});
    router.get('/',controller.home.index)
    router.get('/news',controller.news.list)
    router.get('/needgzip',gzip,controller.handler); //handler error
}
