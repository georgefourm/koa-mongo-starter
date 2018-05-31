const pug = require('pug')

module.exports = async (ctx, next) => {
    ctx.render = (file,options = {}) => {
        ctx.type = 'text/html'
        ctx.body = pug.renderFile(__dirname+`/../front/templates/${file}.pug`, options)
    }
    await next()
}