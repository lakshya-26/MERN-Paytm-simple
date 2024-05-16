const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({
    path: './.env'
})

mongoose.connect(`${process.env.MONGODB_URL}`)

const userSchema = mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        trim: true,
        maxLength: 50
    },
    lastName:{
        type:String,
        required:true,
        trim: true,
        maxLength: 50
    },
    username:{
        type:String,
        required:true,
        unique:true,
        trim: true,
        lowercase:true,
        minLength: 3,
        maxLength: 30
    }, 
    password:{
        type:String,
        required:true,
        minLength: 6

    },
    email: {
        type: String,
        required: true,
        unique: true
    },
})

const User = mongoose.model("User", userSchema);

module.exports ={
    User
};