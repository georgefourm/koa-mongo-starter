const config = require('config')
const jwt = require('jsonwebtoken')

module.exports = async (ctx,next) => {
    ctx.jwt = (token = null) => {
        
        if (token == null) {
            const header = ctx.get('Authorization')
            if (!header) {
                ctx.throw(400,"Token not provided")
            }
            
            const headerParts = header.split(" ")
            if (headerParts.length != 2) {
                ctx.throw(400,"Malformed Authorization header")
            }
            
            token = headerParts[1]
        }

        const jwtSecret = config.get('jwt.secret')
        
        return new Promise((resolve,reject)=>{
            jwt.verify(token, jwtSecret,
                function(err, decoded) {
                    if(err) return reject(err)
                    return resolve(decoded)
                }
            )
        })
    }
    await next()
}
