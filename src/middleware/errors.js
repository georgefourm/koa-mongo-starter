const logger = require('lib/logger')

module.exports = async (ctx, next) => {
  try {
    await next();
  } catch (err) {
  	// Http status code
    ctx.status = err.statusCode || err.status || 500

    //Only log 5xx errors
  	if (ctx.status >= 500) {	
	  	logger.log(
	  		'error',
	  		err.message,{
				error: err,
				path: ctx.path,
				method: ctx.method,
				params:{
					query: ctx.query,
					body: ctx.request.body
				}
	  		}
	  	)
  	}

  	//Render the error
    ctx.body = {
      error: err.name || "InternalError",
      message: err.message,
      payload: err.properties || null
    }
  }
}