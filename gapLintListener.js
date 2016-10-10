var antlr4 = require('antlr4/index');

var errors = [];
var GAPLintListener = function () {
  antlr4.error.ErrorListener.call(this);
  errors = [];
  return this;
};

GAPLintListener.prototype = Object.create(antlr4.error.ErrorListener.prototype);
GAPLintListener.prototype.constructor = GAPLintListener;
GAPLintListener.prototype.syntaxError = function (recognizer, offendingSymbol, line, column, msg, e) {
  errors.push({
    line: line-1,
    column: column,
    message: 'line ' + line + ':' + column + ' - ' +  msg,
    type: "error"
  });
};
GAPLintListener.prototype.getErrors = function () {
  return errors;
};

exports.GAPLintListener = GAPLintListener;
