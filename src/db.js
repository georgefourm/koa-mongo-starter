const config   = require('config').get('db')
const mongoose = require('mongoose')

const build_conn_string = () => {
	let string = "mongodb://"
	if (config.has('username') && config.has('password')) {
		string += `${config.get('username')}:${config.get('password')}`
	}

	string += `${config.get('host')}`

	if (config.has('database')) {
		string += `${config.get('database')}`
	}

	return string
}

mongoose.connect(build_conn_string(), { 
	useMongoClient: true, 
	promiseLibrary: Promise
})

module.exports = mongoose