module.exports = function (grunt) {

  // TODO find a way to compress all files maintaining the same directory structure without mentioning one by one
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/* <%= pkg.name %> v<%= pkg.version %>, <%= pkg.author %> - Generated on <%= grunt.template.today("dd-mm-yyyy") %> */\n',
        mangle: true
      },
      dist: {
        files: {
          'dist/gapParser.js': ['gapParser.js'],
          'dist/gapLexer.js': ['gapLexer.js'],
          'dist/gapLintListener.js': ['gapLintListener.js'],
          'dist/index.js': ['index.js'],
          'dist/antlr4/atn/ATN.js': ['antlr4/atn/ATN.js'],
          'dist/antlr4/atn/ATNConfig.js': ['antlr4/atn/ATNConfig.js'],
          'dist/antlr4/atn/ATNConfigSet.js': ['antlr4/atn/ATNConfigSet.js'],
          'dist/antlr4/atn/ATNDeserializationOptions.js': ['antlr4/atn/ATNDeserializationOptions.js'],
          'dist/antlr4/atn/ATNDeserializer.js': ['antlr4/atn/ATNDeserializer.js'],
          'dist/antlr4/atn/ATNSimulator.js': ['antlr4/atn/ATNSimulator.js'],
          'dist/antlr4/atn/ATNState.js': ['antlr4/atn/ATNState.js'],
          'dist/antlr4/atn/ATNType.js': ['antlr4/atn/ATNType.js'],
          'dist/antlr4/atn/index.js': ['antlr4/atn/index.js'],
          'dist/antlr4/atn/LexerAction.js': ['antlr4/atn/LexerAction.js'],
          'dist/antlr4/atn/LexerActionExecutor.js': ['antlr4/atn/LexerActionExecutor.js'],
          'dist/antlr4/atn/LexerATNSimulator.js': ['antlr4/atn/LexerATNSimulator.js'],
          'dist/antlr4/atn/ParserATNSimulator.js': ['antlr4/atn/ParserATNSimulator.js'],
          'dist/antlr4/atn/PredictionMode.js': ['antlr4/atn/PredictionMode.js'],
          'dist/antlr4/atn/SemanticContext.js': ['antlr4/atn/SemanticContext.js'],
          'dist/antlr4/atn/Transition.js': ['antlr4/atn/Transition.js'],
          'dist/antlr4/BufferedTokenStream.js': ['antlr4/BufferedTokenStream.js'],
          'dist/antlr4/CommonTokenFactory.js': ['antlr4/CommonTokenFactory.js'],
          'dist/antlr4/CommonTokenStream.js': ['antlr4/CommonTokenStream.js'],
          'dist/antlr4/dfa/DFA.js': ['antlr4/dfa/DFA.js'],
          'dist/antlr4/dfa/DFASerializer.js': ['antlr4/dfa/DFASerializer.js'],
          'dist/antlr4/dfa/DFAState.js': ['antlr4/dfa/DFAState.js'],
          'dist/antlr4/dfa/index.js': ['antlr4/dfa/index.js'],
          'dist/antlr4/error/DiagnosticErrorListener.js': ['antlr4/error/DiagnosticErrorListener.js'],
          'dist/antlr4/error/ErrorListener.js': ['antlr4/error/ErrorListener.js'],
          'dist/antlr4/error/Errors.js': ['antlr4/error/Errors.js'],
          'dist/antlr4/error/ErrorStrategy.js': ['antlr4/error/ErrorStrategy.js'],
          'dist/antlr4/error/index.js': ['antlr4/error/index.js'],
          'dist/antlr4/FileStream.js': ['antlr4/FileStream.js'],
          'dist/antlr4/index.js': ['antlr4/index.js'],
          'dist/antlr4/InputStream.js': ['antlr4/InputStream.js'],
          'dist/antlr4/IntervalSet.js': ['antlr4/IntervalSet.js'],
          'dist/antlr4/Lexer.js': ['antlr4/Lexer.js'],
          'dist/antlr4/LL1Analyzer.js': ['antlr4/LL1Analyzer.js'],
          'dist/antlr4/Parser.js': ['antlr4/Parser.js'],
          'dist/antlr4/ParserRuleContext.js': ['antlr4/ParserRuleContext.js'],
          'dist/antlr4/PredictionContext.js': ['antlr4/PredictionContext.js'],
          'dist/antlr4/Recognizer.js': ['antlr4/Recognizer.js'],
          'dist/antlr4/RuleContext.js': ['antlr4/RuleContext.js'],
          'dist/antlr4/Token.js': ['antlr4/Token.js'],
          'dist/antlr4/tree/index.js': ['antlr4/tree/index.js'],
          'dist/antlr4/tree/Tree.js': ['antlr4/tree/Tree.js'],
          'dist/antlr4/tree/Trees.js': ['antlr4/tree/Trees.js'],
          'dist/antlr4/Utils.js': ['antlr4/Utils.js']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['uglify']);

};