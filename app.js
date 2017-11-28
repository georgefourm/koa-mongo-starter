require('app-module-path').addPath(__dirname + '/src')

const Koa        = require('koa')
const bodyparser = require('koa-bodyparser')
const json       = require('koa-json')
const logger     = require('koa-logger')
const router     = require('router')
const errors	 = require('middleware/errors')

const app = new Koa()
app
.use(bodyparser())
.use(json())
.use(errors)
.use(logger())
.use(router.routes())
.use(router.allowedMethods())

const PORT = process.env.PORT || 9000;
app.listen(PORT,function(){
	console.log("Server listening on port "+PORT)
});