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
          'dist/index.js': ['index.js'],
          'dist/lib/require.min.js': ['lib/require/require.min.js']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['uglify']);

};