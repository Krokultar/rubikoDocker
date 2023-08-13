'use strict';

const sendOk = async (req, res, next) => {
	try {
		res.send('OK');
	} catch (err) {
		next(err);
	}
};

module.exports = sendOk;
