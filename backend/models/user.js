const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    nom: String,
    prenom: String,
    email: String,
    pwd: String,
    confirmpwd: String

});

const user = mongoose.model('user', userSchema);
module.exports = user;