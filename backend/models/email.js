const mongoose = require('mongoose');
const Schema = new mongoose.Schema({
    email: String,
    status:{
        type: Boolean,
        default: 1
    }
})

module.exports = mongoose.model('Email', Schema)