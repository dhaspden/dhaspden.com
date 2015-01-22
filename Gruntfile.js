module.exports = function(grunt) {
  
  var jsFiles = ['**/*.js', '!**/*.min.js' ,'!public/bower_components/**' , '!node_modules/**'];

  grunt.initConfig({
    package: grunt.file.readJSON('package.json'),

    jshint: {
      scripts: jsFiles,
      options: {
        reporter: require('jshint-stylish')
      }
    },

    copy: {
      files: {
        expand: true,
        cwd: 'public/src',
        src: '**',
        dest: 'public/dist/'
      }
    },

    clean: {
      files: {
        src: ['public/dist/css/*.css', '!public/dist/css/*.min.css',
              'public/dist/js/*.js'  , '!public/dist/js/*.min.js']
      }
    },

    cssmin: {
      minify: {
        expand: true,
        cwd: 'public/dist/css',
        src: 'style.css',
        dest: 'public/dist/css',
        ext: '.min.css'
      }
    },

    uglify: {
      scripts: {
        files: {
          'public/dist/js/main.min.js': 'public/dist/js/main.js'
        }
      }
    },

    htmlmin: {
      minify: {
        options: {
          removeComments: true,
          collapseWhitespace: true,
        },
        files: {
          'public/dist/views/index.html': 'public/dist/views/index.html'
        }
      }
    },

    processhtml: {
      change: {
        files: {
          'public/dist/views/index.html': ['public/dist/views/index.html']
        }
      }
    },

    watch: {
      scripts: {
        files: jsFiles,
        tasks: 'jshint'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-processhtml');

  grunt.registerTask('build', [
    'copy:files',
    'cssmin:minify',
    'uglify:scripts',
    'processhtml:change',
    'htmlmin:minify',
    'clean:files'
  ]);

};