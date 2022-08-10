const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({

    username: {
        type: String,
        default: null,
        require: true,
        min: 3,
        max: 20,
        unique: true
    },

    email: {
        type: String,
        require: true,
        max: 50,
        unique: true,
        // validate: [validateEmail, 'Please put in a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please put in a valid email address']
    },

    password: {
        type: String,
        require: true,
        min: 8,
        max: 20
    },

    token: {
        type: String
    }
},
    { timestamps: true }
)


// // set up pre-save middleware to create password
// profileSchema.pre('save', async function (next) {
//     if (this.isNew || this.isModified('password')) {
//         const saltRounds = 10;
//         this.password = await bcrypt.hash(this.password, saltRounds);
//     }

//     next();
// });

// // compare the incoming password with the hashed password
// profileSchema.methods.isCorrectPassword = async function (password) {
//     return bcrypt.compare(password, this.password);
// };


module.exports = mongoose.model("User", UserSchema)