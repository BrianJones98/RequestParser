const mongoose = require('mongoose');

const GroupSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Group name is required"]
    },
    terms: {
        type: Array
    }
}, {timestamps: true});

module.exports = mongoose.model('Group', GroupSchema);