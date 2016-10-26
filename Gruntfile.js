module.exports = function (grunt) {

  // TODO find a way to compress all files maintaining the same directory structure without mentioning one by one
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/* <%= pkg.name %> v<%= pkg.version %>, <%= pkg.author %> - Generated on <%= grunt.template.today("dd-mm-yyyy") %> */\n',
        mangle: false
      },
      dist: {
        files: {
          'dist/gapParser.js': ['src/gapParser.js'],
          'dist/gapLexer.js': ['src/gapLexer.js'],
          'dist/gapLintListener.js': ['src/gapLintListener.js'],
          'dist/index.js': ['src/index.js'],
          'dist/antlr4/atn/ATN.js': ['lib/antlr4/atn/ATN.js'],
          'dist/antlr4/atn/ATNConfig.js': ['lib/antlr4/atn/ATNConfig.js'],
          'dist/antlr4/atn/ATNConfigSet.js': ['lib/antlr4/atn/ATNConfigSet.js'],
          'dist/antlr4/atn/ATNDeserializationOptions.js': ['lib/antlr4/atn/ATNDeserializationOptions.js'],
          'dist/antlr4/atn/ATNDeserializer.js': ['lib/antlr4/atn/ATNDeserializer.js'],
          'dist/antlr4/atn/ATNSimulator.js': ['lib/antlr4/atn/ATNSimulator.js'],
          'dist/antlr4/atn/ATNState.js': ['lib/antlr4/atn/ATNState.js'],
          'dist/antlr4/atn/ATNType.js': ['lib/antlr4/atn/ATNType.js'],
          'dist/antlr4/atn/index.js': ['lib/antlr4/atn/index.js'],
          'dist/antlr4/atn/LexerAction.js': ['lib/antlr4/atn/LexerAction.js'],
          'dist/antlr4/atn/LexerActionExecutor.js': ['lib/antlr4/atn/LexerActionExecutor.js'],
          'dist/antlr4/atn/LexerATNSimulator.js': ['lib/antlr4/atn/LexerATNSimulator.js'],
          'dist/antlr4/atn/ParserATNSimulator.js': ['lib/antlr4/atn/ParserATNSimulator.js'],
          'dist/antlr4/atn/PredictionMode.js': ['lib/antlr4/atn/PredictionMode.js'],
          'dist/antlr4/atn/SemanticContext.js': ['lib/antlr4/atn/SemanticContext.js'],
          'dist/antlr4/atn/Transition.js': ['lib/antlr4/atn/Transition.js'],
          'dist/antlr4/BufferedTokenStream.js': ['lib/antlr4/BufferedTokenStream.js'],
          'dist/antlr4/CommonTokenFactory.js': ['lib/antlr4/CommonTokenFactory.js'],
          'dist/antlr4/CommonTokenStream.js': ['lib/antlr4/CommonTokenStream.js'],
          'dist/antlr4/dfa/DFA.js': ['lib/antlr4/dfa/DFA.js'],
          'dist/antlr4/dfa/DFASerializer.js': ['lib/antlr4/dfa/DFASerializer.js'],
          'dist/antlr4/dfa/DFAState.js': ['lib/antlr4/dfa/DFAState.js'],
          'dist/antlr4/dfa/index.js': ['lib/antlr4/dfa/index.js'],
          'dist/antlr4/error/DiagnosticErrorListener.js': ['lib/antlr4/error/DiagnosticErrorListener.js'],
          'dist/antlr4/error/ErrorListener.js': ['lib/antlr4/error/ErrorListener.js'],
          'dist/antlr4/error/Errors.js': ['lib/antlr4/error/Errors.js'],
          'dist/antlr4/error/ErrorStrategy.js': ['lib/antlr4/error/ErrorStrategy.js'],
          'dist/antlr4/error/index.js': ['lib/antlr4/error/index.js'],
          'dist/antlr4/FileStream.js': ['lib/antlr4/FileStream.js'],
          'dist/antlr4/index.js': ['lib/antlr4/index.js'],
          'dist/antlr4/InputStream.js': ['lib/antlr4/InputStream.js'],
          'dist/antlr4/IntervalSet.js': ['lib/antlr4/IntervalSet.js'],
          'dist/antlr4/Lexer.js': ['lib/antlr4/Lexer.js'],
          'dist/antlr4/LL1Analyzer.js': ['lib/antlr4/LL1Analyzer.js'],
          'dist/antlr4/Parser.js': ['lib/antlr4/Parser.js'],
          'dist/antlr4/ParserRuleContext.js': ['lib/antlr4/ParserRuleContext.js'],
          'dist/antlr4/PredictionContext.js': ['lib/antlr4/PredictionContext.js'],
          'dist/antlr4/Recognizer.js': ['lib/antlr4/Recognizer.js'],
          'dist/antlr4/RuleContext.js': ['lib/antlr4/RuleContext.js'],
          'dist/antlr4/Token.js': ['lib/antlr4/Token.js'],
          'dist/antlr4/tree/index.js': ['lib/antlr4/tree/index.js'],
          'dist/antlr4/tree/Tree.js': ['lib/antlr4/tree/Tree.js'],
          'dist/antlr4/tree/Trees.js': ['lib/antlr4/tree/Trees.js'],
          'dist/antlr4/Utils.js': ['lib/antlr4/Utils.js']
        }
      }
    },
    replace: {
      another_example: {
        src: ['dist/**.js'],
        overwrite: true,                 // overwrite matched source files
        replacements: [{
          from: 'require("',
          to: 'require("dist/'
        }]
      }
    }
  });

  grunt.loadNpmTasks('grunt-text-replace');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['replace', 'uglify']);

};