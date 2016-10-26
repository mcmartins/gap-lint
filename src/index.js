var antlr4 = require('antlr4/index');
var GapLexer = require('gapLexer').gapLexer;
var GapParser = require('gapParser').gapParser;
var GAPLintListener = require('gapLintListener').GAPLintListener;

window.GapLint = {
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
