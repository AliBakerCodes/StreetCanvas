const { Schema, model } = require('mongoose');

const PinSchema = new Schema({

    username: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },

    title: {
        type: String,
        require: true
    },

    //use regex
    thumbnail: {
        type: String,
    },

    description: {
        type: String,
    },

    lat: {
        type: String,
        required: true
    },

    lon: {
        type: String,
        required: true
    },

    radius: {
        type: String,
        required: true
    },

    //use regex 
    glb: {
        type: String,
        required: true
    },

    usdz: {
        type: String,
        required: true
    },


},
    { timestamps: true }
)

const Pin = model('Pin', PinSchema);

module.exports = Pin;