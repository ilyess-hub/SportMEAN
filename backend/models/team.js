const mongoose = require('mongoose');
const teamSchema = mongoose.Schema({
    nom: String,
    found: String,
    stad: String,
    own: String


});
const team = mongoose.model('team', teamSchema);
module.exports = team;