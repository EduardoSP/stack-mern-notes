require('dotenv').config();

const app = require('./app');
require('./database');

async function main(){
    //await ejecuta la siguiente linea luego de que se ejecute el listen es un callback
    await app.listen(app.get('port'));
    console.log('server on port ', app.get('port'));
}

main();
