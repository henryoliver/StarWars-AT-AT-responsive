'use strict';

var bouncy = require('bouncy');

var server = bouncy(function (req, res, bounce) {
    if (req.headers.host === 'polen.is') {
        bounce(8001);
    }
    else if (req.headers.host === 'app.polen.is') {
        bounce(8002);
    }
    else {
        res.statusCode = 404;
        res.end('Bouncy says: no such host');
    }
});
server.listen(8000);