module.exports = () => {
    return async function (ctx,next) {
        const startTime = Date.now();
        await next();
        reportTime(Date.now() - startTime)
    }
}
