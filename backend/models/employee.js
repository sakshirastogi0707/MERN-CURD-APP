const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment')
const employeeSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    skills: {
        type: String,
        required: true
    },
    profile: {
        type: String,
        required: true
    },
    designation: {
        type: String,
        required: true
    },
    salary: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    experience:{
        type:Number,
        required:true
    },
    phone:{
        type:Number,
        required:true
    }
},
    { timestamps: true }

);
autoIncrement.initialize(mongoose.connection)
employeeSchema.plugin(autoIncrement.plugin,'Employee')
module.exports = mongoose.model('Employee', employeeSchema);