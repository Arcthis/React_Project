const mongoose = require('mongoose');

const prodsSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    genre: { type: String, required: true },
    audioSrc: { type: String, required: false, unique: true}
});

module.exports = mongoose.model('Production', prodsSchema);