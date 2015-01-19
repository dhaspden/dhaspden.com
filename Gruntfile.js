module.exports = function(grunt) {
  
  var jsFiles = ['**/*.js', '!bower_components/**' , '!node_modules/**'];
  var htmlFiles = ['public/src/views/*'];

  grunt.initConfig({
    package: grunt.file.readJSON('package.json'),

    jshint: {
      scripts: jsFiles,
      options: {
        reporter: require('jshint-stylish')
      }
    },

    copy: {
      main: {
        expand: true, cwd: 'public/src', src: '*', dest: 'public/dist/'
      }
    },

    htmlmin: {
      controlHtml: {
        options: {
          removeComments: true,
          collapseWhitespace: true
        },
        files: {
          'public/dist/views/index.min.html': 'public/src/views/index.html'
        }
      }
    },

    watch: {
      scripts: {
        files: [jsFiles, htmlFiles],
        tasks: ['copy', 'htmlmin', 'jshint']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-watch');

};