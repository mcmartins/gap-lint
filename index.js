var antlr4 = require('antlr4/index');
var GapLexer = require('./src/gapLexer').gapLexer;
var GapParser = require('./src/gapParser').gapParser;
var GAPLintListener = require('./src/gapLintListener').GAPLintListener;

var GAPLint = {
  validate: function validate(input) {
    var chars = new antlr4.InputStream(input);
    var lexer = new GapLexer(chars);
    var tokens = new antlr4.CommonTokenStream(lexer);
    var parser = new GapParser(tokens);
    var listener = new GAPLintListener();
    parser.removeErrorListeners();
    parser.addErrorListener(listener);
    parser.parse();
    return listener;
  }
};

// for the browser
//if (window) {
// / console.log(window);
//  window.GAPLint = GAPLint;
//}

// for node js
if (exports) {
  exports.GAPLint = GAPLint;
}