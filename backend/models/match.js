const mongoose = require('mongoose');
const matchSchema = mongoose.Schema({
    ScoreOne: String,
    ScoreTwo: String,
    TeamOne: String,
    TeamTwo: String

});

const match = mongoose.model('Match', matchSchema);
module.exports = match;