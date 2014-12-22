module.exports = exports = function retrier(n, fx, callback) {
	fx.call(undefined, function(e, r) {
		if (e && n > 1) return retrier(n-1, fx, callback);
		return callback(e, r);
	});
};