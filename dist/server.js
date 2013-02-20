'use strict';

var lactate = require('lactate'),
    http = require('http'),
    port = 8000,
    root = './';

var options = {
    root: root,
    from: '',
    not_found: '404.html',
    subdirs: true,
    debug: true
};

var files = lactate.dir(root, options);

var server = new http.Server();

server.addListener('request', function(req, res) {
    if (req.url === '/') {
        files.serve('index.html', req, res);
    } else {
        files.serve(req, res);
    }
});

server.listen(port);