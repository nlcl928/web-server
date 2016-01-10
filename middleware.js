var middleware = {
	requireAuthentication: function(req, res, next) {
		console.log('privte route hit!');
		next();
	},
	logger: function(req, res, next) {
		console.log('Request: ' + new Date().toString() + ' ' + req.original);
		next();
	} 
};

module.exports = middleware;