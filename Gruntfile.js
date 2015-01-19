module.exports = function(grunt) {
  
  var jsFiles = ['**/*.js', '!node_modules/**'];

  grunt.initConfig({
    package: grunt.file.readJSON('package.json'),

    jshint: {
      scripts: jsFiles,
      options: {
        reporter: require('jshint-stylish')
      }
    },

    watch: {
      scripts: {
        files: jsFiles,
        tasks: ['jshint']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');

};