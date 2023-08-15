'use strict';

require('dotenv').config();

const sendOk = async (req, res, next) => {
	try {
		let message = '';
		if (process.env.GREETINGS === undefined) {
			message = `${process.env.DEFAULT}`;
		} else {
			message = `${process.env.GREETINGS}`;
		}
		res.send(message);
	} catch (err) {
		next(err);
	}
};

module.exports = sendOk;
