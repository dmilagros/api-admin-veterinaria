const express = require('express')
const mongoose = require('mongoose')

// crear el servidor
const app = express();

//conectar a mongodb
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/veterinaria',{
	useNewUrlParser: true,
	useUnifiedTopology: true,
	//useFindAndModify: false
})


//puerto y arranque el servidor del serv
app.listen(4000, () => { 
	console.log('Servidor funcionando')
})
