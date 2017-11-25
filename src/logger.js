const winston = require('winston')

const logger = winston.createLogger({
  transports: [
    new winston.transports.File({ filename: `${__dirname}/logs/error.log`, level: 'error'}),
    new winston.transports.File({ filename: `${__dirname}/logs/debug.log`, level: 'info' }),
    new winston.transports.Console({ format: winston.format.simple() 	 , level: 'debug'})
  ]
})

module.exports = logger