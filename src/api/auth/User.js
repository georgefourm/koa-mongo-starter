const { mongoose } = require('db')

const userSchema = mongoose.Schema({
    name  : String,
    email : String,
    phone : String
})

module.exports = mongoose.model('User',userSchema)