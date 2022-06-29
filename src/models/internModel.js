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
        lowercase:true
    },
    mobile: {
        type: String,
        required: true,
        unique: true,
        validate: {validator: function validatePhoneNumber(mobile) 
        {
            var re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
        
            return re.test(mobile);
        }
    }

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