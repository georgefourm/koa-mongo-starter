const User = require('api/users/User')

module.exports = {
    index : async (ctx,next) => {
        const user = await User.find({})
                               .limit(10)
        ctx.body = user
    }
}