let express = require ('express');
const path = require('path');
const app = express();
const port = 3030;

app.use(express.static(path.join(__dirname,'public')));

app.get('/',(req,res) => res.sendFile(path.resolve(__dirname,'views','index.html')));
app.get('/turing',(req,res) => res.sendFile(path.resolve(__dirname,'views','turing.html')));
app.get('/lovelace',(req,res) => res.sendFile(path.resolve(__dirname,'views','lovelace.html')));
app.get('/hopper',(req,res) => res.sendFile(path.resolve(__dirname,'views','hopper.html')));

app.listen(port,() => console.log(`Se levanto con exito el servidor en http://localhost:${port}`));