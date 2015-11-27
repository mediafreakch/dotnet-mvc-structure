require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({2:[function(require,module,exports){
'use strict';

var
    tiresearch = require('tiresearch'),
    qanda = require('qanda')
    ;

// do something
tiresearch.init();
qanda.init();

},{"qanda":3,"tiresearch":4}],4:[function(require,module,exports){
(function (global){
'use strict';

var
    $ = (typeof window !== "undefined" ? window['jQuery'] : typeof global !== "undefined" ? global['jQuery'] : null),
    track = require('tracking')
    ;

module.exports.init = function() {
    $('<p>tiresearch says hello</p>').appendTo(document.body);
    track.init();
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"tracking":5}],3:[function(require,module,exports){
(function (global){
'use strict';

var
    $ = (typeof window !== "undefined" ? window['jQuery'] : typeof global !== "undefined" ? global['jQuery'] : null),
    track = require('tracking')
    ;

module.exports.init = function() {
    $('<p>qanda says hello</p>').appendTo(document.body);
    track.init();
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"tracking":5}]},{},[2])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9mYWN0b3ItYnVuZGxlL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJDb21wb25lbnRzL21haW4tYm9vdHN0cmFwLmpzIiwiQ29tcG9uZW50cy9ub2RlX21vZHVsZXMvdGlyZXNlYXJjaC9pbmRleC5qcyIsIkNvbXBvbmVudHMvbm9kZV9tb2R1bGVzL3FhbmRhL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIndXNlIHN0cmljdCc7XG5cbnZhclxuICAgIHRpcmVzZWFyY2ggPSByZXF1aXJlKCd0aXJlc2VhcmNoJyksXG4gICAgcWFuZGEgPSByZXF1aXJlKCdxYW5kYScpXG4gICAgO1xuXG4vLyBkbyBzb21ldGhpbmdcbnRpcmVzZWFyY2guaW5pdCgpO1xucWFuZGEuaW5pdCgpO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXJcbiAgICAkID0gKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3dbJ2pRdWVyeSddIDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbFsnalF1ZXJ5J10gOiBudWxsKSxcbiAgICB0cmFjayA9IHJlcXVpcmUoJ3RyYWNraW5nJylcbiAgICA7XG5cbm1vZHVsZS5leHBvcnRzLmluaXQgPSBmdW5jdGlvbigpIHtcbiAgICAkKCc8cD50aXJlc2VhcmNoIHNheXMgaGVsbG88L3A+JykuYXBwZW5kVG8oZG9jdW1lbnQuYm9keSk7XG4gICAgdHJhY2suaW5pdCgpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXJcbiAgICAkID0gKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3dbJ2pRdWVyeSddIDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbFsnalF1ZXJ5J10gOiBudWxsKSxcbiAgICB0cmFjayA9IHJlcXVpcmUoJ3RyYWNraW5nJylcbiAgICA7XG5cbm1vZHVsZS5leHBvcnRzLmluaXQgPSBmdW5jdGlvbigpIHtcbiAgICAkKCc8cD5xYW5kYSBzYXlzIGhlbGxvPC9wPicpLmFwcGVuZFRvKGRvY3VtZW50LmJvZHkpO1xuICAgIHRyYWNrLmluaXQoKTtcbn1cbiJdfQ==
