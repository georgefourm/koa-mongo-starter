const config = require('config')
const jwt = require('jsonwebtoken')

const AUTH_HEADER = 'Authorization'
const TOKEN_PREFIX = 'Bearer '

const parseAuthHeader = ctx => {
    const header = ctx.get(AUTH_HEADER)
    if (!header) {
        ctx.throw(400,"Missing Authorization header")
    }
    
    if (!header.startsWith(TOKEN_PREFIX)) {
        ctx.throw(400,"Malformed Authorization header")
    }
    
    return header.substr(TOKEN_PREFIX.length)
}

module.exports = async (ctx,next) => {
    ctx.jwt = ((token = null) => {
        
        if (token == null) {
            token = parseAuthHeader(ctx)
        }

        const jwtSecret = config.get('jwt.secret')
        
        return new Promise((resolve,reject)=>{
            jwt.verify(token, jwtSecret,
                (err, decoded) => {
                    if(err) return reject(err)
                    return resolve(decoded)
                }
            )
        })
    })()
    await next()
}
