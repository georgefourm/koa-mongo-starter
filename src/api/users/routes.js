const Router = require('koa-router')
const router = new Router()

const controller = require('api/users/controller')

router.get('/',controller.index)
router.get('/:name',controller.show)

module.exports = router