const mongoose = require('mongoose');
require('mongoose-type-url')


const collegeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique:true,
        trim: true
    },
    fullName: {
        type: String,
        required: true,
        trim: true
    },
    logoLink:{
        type: mongoose.SchemaTypes.Url,
        require: true
    },
    isDeleted:{

        type: Boolean,
        default: false
    }


}, { timestamps: true });

module.exports = mongoose.model('College', collegeSchema)