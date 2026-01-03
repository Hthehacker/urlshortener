const mongoose = require("mongoose");

const dbschema = new mongoose.Schema({
    shortID: {
        type: String,
        required: true,
        unique: true
    },
    redirectUrl: {
        type: String,
        required: true
    },
    visitHistory: [
        { timeStamp: 
            { type: Number} 
        }
    ]
}, { timestamps: true });  // auto-created createdAt and updatedAt



const dbschemas = mongoose.model('detail',dbschema)

module.exports = dbschemas