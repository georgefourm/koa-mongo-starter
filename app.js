require('app-module-path').addPath(__dirname + '/src')

const Koa = require('koa')
const bodyparser = require('koa-bodyparser')
const json = require('koa-json')
const router = require('router')

const app = new Koa()
app
.use(bodyparser())
.use(json())
.use(router.routes())
.use(router.allowedMethods())

const PORT = process.env.PORT || 9000;
app.listen(PORT,function(){
	console.log("Server listening on port "+PORT)
});