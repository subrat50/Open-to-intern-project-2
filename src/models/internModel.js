const mongoose = require('mongoose');


const internSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true

    },
    mobile: {
        type: String,
        required: true,
        unique: true

    },
    collegeId:{
        type: mongoose.Types.ObjectId,
        ref: "College"
    },
    isDeleted:{
        type: Boolean,
        default: false
    }


}, { timestamps: true });

module.exports = mongoose.model('Intern', internSchema)