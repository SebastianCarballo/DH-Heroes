let express = require ('express');
const path = require('path');
const app = express();
const port = 3030;

app.use(express.static(path.join(__dirname,'public')));

app.get('/',(req,res) => res.send('Bienvenidos'));

app.listen(port,() => console.log(`Se levanto con exito el servidor en http://localhost:${port}`));