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
          'dist/antlr4/atn/ATN.js': ['node_modules/antlr4/atn/ATN.js'],
          'dist/antlr4/atn/ATNConfig.js': ['node_modules/antlr4/atn/ATNConfig.js'],
          'dist/antlr4/atn/ATNConfigSet.js': ['node_modules/antlr4/atn/ATNConfigSet.js'],
          'dist/antlr4/atn/ATNDeserializationOptions.js': ['node_modules/antlr4/atn/ATNDeserializationOptions.js'],
          'dist/antlr4/atn/ATNDeserializer.js': ['node_modules/antlr4/atn/ATNDeserializer.js'],
          'dist/antlr4/atn/ATNSimulator.js': ['node_modules/antlr4/atn/ATNSimulator.js'],
          'dist/antlr4/atn/ATNState.js': ['node_modules/antlr4/atn/ATNState.js'],
          'dist/antlr4/atn/ATNType.js': ['node_modules/antlr4/atn/ATNType.js'],
          'dist/antlr4/atn/index.js': ['node_modules/antlr4/atn/index.js'],
          'dist/antlr4/atn/LexerAction.js': ['node_modules/antlr4/atn/LexerAction.js'],
          'dist/antlr4/atn/LexerActionExecutor.js': ['node_modules/antlr4/atn/LexerActionExecutor.js'],
          'dist/antlr4/atn/LexerATNSimulator.js': ['node_modules/antlr4/atn/LexerATNSimulator.js'],
          'dist/antlr4/atn/ParserATNSimulator.js': ['node_modules/antlr4/atn/ParserATNSimulator.js'],
          'dist/antlr4/atn/PredictionMode.js': ['node_modules/antlr4/atn/PredictionMode.js'],
          'dist/antlr4/atn/SemanticContext.js': ['node_modules/antlr4/atn/SemanticContext.js'],
          'dist/antlr4/atn/Transition.js': ['node_modules/antlr4/atn/Transition.js'],
          'dist/antlr4/BufferedTokenStream.js': ['node_modules/antlr4/BufferedTokenStream.js'],
          'dist/antlr4/CommonTokenFactory.js': ['node_modules/antlr4/CommonTokenFactory.js'],
          'dist/antlr4/CommonTokenStream.js': ['node_modules/antlr4/CommonTokenStream.js'],
          'dist/antlr4/dfa/DFA.js': ['node_modules/antlr4/dfa/DFA.js'],
          'dist/antlr4/dfa/DFASerializer.js': ['node_modules/antlr4/dfa/DFASerializer.js'],
          'dist/antlr4/dfa/DFAState.js': ['node_modules/antlr4/dfa/DFAState.js'],
          'dist/antlr4/dfa/index.js': ['node_modules/antlr4/dfa/index.js'],
          'dist/antlr4/error/DiagnosticErrorListener.js': ['node_modules/antlr4/error/DiagnosticErrorListener.js'],
          'dist/antlr4/error/ErrorListener.js': ['node_modules/antlr4/error/ErrorListener.js'],
          'dist/antlr4/error/Errors.js': ['node_modules/antlr4/error/Errors.js'],
          'dist/antlr4/error/ErrorStrategy.js': ['node_modules/antlr4/error/ErrorStrategy.js'],
          'dist/antlr4/error/index.js': ['node_modules/antlr4/error/index.js'],
          'dist/antlr4/FileStream.js': ['node_modules/antlr4/FileStream.js'],
          'dist/antlr4/index.js': ['node_modules/antlr4/index.js'],
          'dist/antlr4/InputStream.js': ['node_modules/antlr4/InputStream.js'],
          'dist/antlr4/IntervalSet.js': ['node_modules/antlr4/IntervalSet.js'],
          'dist/antlr4/Lexer.js': ['node_modules/antlr4/Lexer.js'],
          'dist/antlr4/LL1Analyzer.js': ['node_modules/antlr4/LL1Analyzer.js'],
          'dist/antlr4/Parser.js': ['node_modules/antlr4/Parser.js'],
          'dist/antlr4/ParserRuleContext.js': ['node_modules/antlr4/ParserRuleContext.js'],
          'dist/antlr4/PredictionContext.js': ['node_modules/antlr4/PredictionContext.js'],
          'dist/antlr4/Recognizer.js': ['node_modules/antlr4/Recognizer.js'],
          'dist/antlr4/RuleContext.js': ['node_modules/antlr4/RuleContext.js'],
          'dist/antlr4/Token.js': ['node_modules/antlr4/Token.js'],
          'dist/antlr4/tree/index.js': ['node_modules/antlr4/tree/index.js'],
          'dist/antlr4/tree/Tree.js': ['node_modules/antlr4/tree/Tree.js'],
          'dist/antlr4/tree/Trees.js': ['node_modules/antlr4/tree/Trees.js'],
          'dist/antlr4/Utils.js': ['node_modules/antlr4/Utils.js']
        }
      }
    },
    replace: {
      relative_path: {
        src: ['src/**.js'],
        overwrite: true,                 // overwrite matched source files
        replacements: [{
          from: 'require("antlr4',
          to: 'require("./antlr4'
        }]
      }
    }
  });

  grunt.loadNpmTasks('grunt-text-replace');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['replace', 'uglify']);

};