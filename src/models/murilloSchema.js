const mongoose = require('mongoose');

const murilloSchema = new mongoose.Schema({
    firstname:{
        type:String,
        required:true
    },
    lastname :{
        type:String,
        require:true
    },
    email :{
        type:String,
        require:true,
        unique:true
    },
    phone :{
        type:Number,
        require:true,
        unique:true,
    },
    message :{
        type:String,
        require:true
    },
})

const Register = new mongoose.model('Register', murilloSchema);

module.exports = Register;