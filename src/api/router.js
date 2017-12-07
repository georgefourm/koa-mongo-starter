const Router = require('koa-router')
const router = new Router()

const test = require('api/users/routes')

router.use('/users',test.routes())

module.exports = router