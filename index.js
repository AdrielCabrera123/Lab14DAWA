const express = require('express');
const conectarDB = require('./config/db');
const cors = require('cors');

const app = express();

conectarDB()

app.use(cors())

app.use(express.json());

app.use('/api/productos', require('./routes/producto'));

//app.get('/', (req,res)=>{ 
//    res.send("Hola Mundo")
//})

app.listen(4000, ()=>{
    console.log("el servidor esta corriendo");
})