const mongoose = require('mongoose');

const teamTemplate = new mongoose.Schema({
    Name: String,
    YearFounded: Number,
    Crest: String,
    IsFavorite: Boolean
});

module.exports = mongoose.model('teams', teamTemplate)