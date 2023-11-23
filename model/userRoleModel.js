// require mongoose
//from mongoose , we would use a mthod called schema. thos defines d structure of the document that we would store in the collection. model is used to wrap the schema and then send it to d DB

const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const validator = require("validator")

// create schema for user model
const UserRoleSchema = new Schema({
    name: { 
        type: String, 
        required: [true, 'name is required'], trim:true 
    },
    email: { 
        type: String, 
        required: [true, 'email is required'],
        unique: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Email is valid")
        }}
         
    },
    profession: { 
        type: String, 
        required: [true, 'role is required'], trim:true 
    },
    gender:{
          type: String,
         enum: ['male', 'female'],
         required: [true, 'select a gender']
    },
    date:{
        type:Date,
        default:Date.now(),

    }
}, {timestamps:true})

const USER_ROLE = mongoose.model('User', UserRoleSchema)
module.exports = USER_ROLE