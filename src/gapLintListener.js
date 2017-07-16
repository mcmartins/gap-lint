var antlr4 = require('antlr4/index');

var errors = [];
var GAPLintListener = function GAPLintListener() {
  antlr4.error.ErrorListener.call(this);
  errors = [];
  return this;
};

GAPLintListener.prototype = Object.create(antlr4.error.ErrorListener.prototype);
GAPLintListener.prototype.constructor = GAPLintListener;
GAPLintListener.prototype.syntaxError = function syntaxError(recognizer, offendingSymbol, line, column, msg, e) {
  errors.push({
    line: line-1,
    column: column,
    message: msg,
    type: "error"
  });
};
GAPLintListener.prototype.getErrors = function getErrors() {
  return errors;
};

exports.GAPLintListener = GAPLintListener;
