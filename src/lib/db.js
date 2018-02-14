const config   = require('config').get('db')
const mongoose = require('mongoose')

const build_conn_string = () => {
	let string = "mongodb://"
	if (config.has('username') && config.has('password')) {
		string += `${config.get('username')}:${config.get('password')}`
	}

	string += `@${config.get('host')}`

	if (config.has('database')) {
		string += `/${config.get('database')}`
	}else{
		string += '/'
	}
	
	string += "?authSource=admin"
	return string
}

mongoose.Promise = Promise

mongoose.connect(build_conn_string())

module.exports = { mongoose, build_conn_string }
