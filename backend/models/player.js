const mongoose = require('mongoose');
const playerSchema = mongoose.Schema({
    name: String,
    poste: String,
    age: String,
    nbr: String,
    img: String


});

const player = mongoose.model('player', playerSchema);
module.exports = player;