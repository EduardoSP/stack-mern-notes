const {Schema, model} = require('mongoose');

const userSchema = new Schema({
    username: {
        type    : String,
        required: true,
        trim    : true,
        unique  : true
    }
}, {
    timestamps : true //guarda automaticamente la fecha de creacion y de actualizacion en la base de datos
});

//en mongo db crea una colección llamada users
module.exports = model('User', userSchema); 