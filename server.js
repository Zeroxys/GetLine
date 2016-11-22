//librerias a utilizar
const express = require('express')
const app = express()
//seteamos el puerto para produccion y test
const port = 8080||process.env.PORT
	
//Middlewares
app.use(express.static('app'))

//peticiones
app.get('/', (req,res) => {
	res.status(200).sendFile(__dirname + '/app/' + 'index.html');
})

app.get('/bienvenido', (req,res) => {
	res.status(200).send("asddasd");
})

//lanzar servidor en puerto 8080
app.listen(port,()=> {
	console.log(`Servidor corriendo en puerto : ${port}`)
})
