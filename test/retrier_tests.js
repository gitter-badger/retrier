var should = require('should');

var retrier = require('../retrier.js');

var times = function(times) {
	var n = 0;
	return function(cb) {
		if (n < times) {
			n++;
			return cb('error');
		}
		return cb(undefined, 'ok');
	};
};

describe('retrier', function() {
	
	it('should retry the operation if cb is called with an error', function(done) {
		retrier(2, times(2), function(error, response) {
			should.not.exist(response);
			error.should.be.equal('error');
			done();
		});
	});

	it('should not retry the operation if cb is called without an error', function(done) {
		retrier(2, times(1), function(error, response) {
			should.not.exist(error);
			response.should.be.equal('ok');
			done();
		});
	});
});