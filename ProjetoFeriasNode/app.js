const express = require("express")
const cors = require("cors")
const path = require('path');
const app = express()
const PORTA =3000

app.use(express.static('C:/Users/thiag/Desktop/ProjetoFeriasNode/src/index.html'));
var indexRouter = require("./router/index");
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src'));


app.use(cors())
app.use(express.json())

app.use("/", indexRouter);


app.listen(PORTA,()=>{
    console.log(`Servidor rodando na porta http://localhost:${PORTA}`)
})
