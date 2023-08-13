'use strict';

require('dotenv').config();
const express = require('express');
const morgan = require('morgan');

const sendOk = require('./controllers/sendOk');

const app = express();

app.use(express.json());

app.use(morgan('dev'));

app.get('/health', sendOk);

/**
 * ########################
 * ## GESTIÓN DE ERRORES ##
 * ########################
 */

// Middleware de error.
app.use((err, req, res, next) => {
	console.error(err);

	res.status(err.statusCode || 500).send({
		status: 'error',
		message: err.message,
	});
});

// Middleware de ruta no encontrada.
app.use((req, res) => {
	res.status(404).send({
		status: 'error',
		message: 'Ruta no encontrada',
	});
});

/**
 * ##########################
 * ## ESCUCHA DEL SERVIDOR ##
 * ##########################
 */

app.listen(process.env.PORT, () => {
	console.log(`Server listening at http://localhost:${process.env.PORT}`);
});
