//librerias a utilizar
const express = require('express')
const app = express()
//seteamos el puerto para produccion y test
const port = 8080||process.env.PORT

//peticiones
app.get('/', (req,res) => {
	res.status(200).send("asdasd mundo")
})

//lanzar servidor en puerto 8080
app.listen(port,()=> {
	console.log(`Servidor corriendo en puerto : ${port}`)
})
