const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let Articolo = new Schema({
    Data: {
        type: Date
    },
    Titolo: {
        type: String
    },
    Testo: {
        type:String
    },
    Sottotitolo:{
        type:String
    },
    Immagine:{
        type: String
    }

});
module.exports = mongoose.model('Articolo', Articolo);