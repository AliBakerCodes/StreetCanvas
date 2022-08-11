const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new Schema({

    username: {
        type: String,
        require: true,
        min: 3,
        max: 20,
        unique: true,
        trim: true
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

    pins: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Pin'
        }
    ],

    token: {
        type: String
    }
},

)


// set up pre-save middleware to create password
UserSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }

    next();
});

// compare the incoming password with the hashed password
UserSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
};



const User = model('User', UserSchema);

module.exports = User;