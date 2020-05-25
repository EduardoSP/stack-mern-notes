const express = require('express'); //al parecer ems6 no esta soportado en estas versiones de node. para eso se necesita babel que traduce codigo a el moderno
const cors    = require('cors');
const app     = express();

//settings
app.set('port', process.env.PORT || 4000);

//middleewares 
//funciones que se ejecutan antes de que lleguen a las rutas
app.use(cors());//cada vez que llegue una peticion al servidor va poder enviar y recibir datos
app.use(express.json());

//routes
app.use('/api/users', require('./routes/users'));
app.use('/api/notes', require('./routes/notes'));

module.exports = app;