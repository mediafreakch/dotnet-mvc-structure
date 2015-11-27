'use strict';

var fs = require('fs'),
    browserify = require('browserify'),
    factor = require('factor-bundle');

var bundle = browserify({
    entries: ['./Components/main-bootstrap.js', './Components/admin-bootstrap.js'],
    debug: true
});

// Group common dependencies
// -o outputs the entry files without the common dependencies
bundle.plugin('factor-bundle', {
    o: ['./Components/dist/main.js',
        './Components/dist/admin.js']
});

// Create Write Stream
var dest = fs.createWriteStream('./Components/dist/common.js');

// Bundle
var stream = bundle.bundle().pipe(dest);
