const {Schema, model} = require('mongoose');

const noteSchema = new Schema({
    title   : String,
    content : {
        type     : String,
        required : true
    },
    author : String,
    date   : {
        type    : Date,
        default : Date.now 
    }
}, {
    timestamps : true //guarda automaticamente la fecha de creacion y de actualizacion en la base de datos
});

//en mongo db crea una colección llamada notes
module.exports = model('Note', noteSchema);