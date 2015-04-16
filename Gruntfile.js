module.exports = function(grunt) {
  
  var jsFiles = ['**/*.js', '!**/*.min.js' ,'!public/bower_components/**' , '!node_modules/**'];
  var cssFiles = ['public/src/**/*.css', '!**/*.min.css'];
  var htmlFiles = ['public/src/**/*.html', '!public/dist/**/*.html'];

  grunt.initConfig({
    package: grunt.file.readJSON('package.json'),

    jshint: {
      scripts: jsFiles,
      options: {
        reporter: require('jshint-stylish')
      }
    },

    csslint: {
      strict: {
        src: ['public/src/css/*.css']
      }
    },

    htmlangular: {
      files: {
        src: ['public/src/views/index.html']
      },
      options: {
        reportpath: null
      }
    },

    concurrent: {
      lint: {
        tasks: ['watch:scripts', 'watch:style', 'watch:markup'],
        options: {
          logConcurrentOutput: true
        }
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
              'public/dist/js/*.js'  , '!public/dist/js/*.min.js', '!public/dist/js/analytics*']
      },
      newbuild: {
        src: ['public/dist/**/*', 'public/dist']
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
          'public/dist/js/main.min.js': ['public/dist/js/main.js', 'public/dist/js/directives.js']
        }
      }
    },

    imagemin: {
      images: {
        files: {
          'public/dist/img/bg.jpeg': 'public/src/img/bg.jpeg'
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
          'public/dist/views/index.html': 'public/dist/views/index.html',
          'public/dist/views/main.html' : 'public/dist/views/main.html'
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
        tasks: 'jshint:scripts'
      },
      style: {
        files: cssFiles,
        tasks: 'csslint:strict'
      },
      markup: {
        files: htmlFiles,
        tasks: 'htmlangular:files'
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-html-angular-validate');
  grunt.loadNpmTasks('grunt-concurrent');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-processhtml');


  grunt.registerTask('lint', [
    'concurrent:lint'
  ]);

  grunt.registerTask('build', [
    'clean:newbuild',
    'copy:files',
    'cssmin:minify',
    'uglify:scripts',
    'processhtml:change',
    'htmlmin:minify',
    'clean:files'
  ]);

};