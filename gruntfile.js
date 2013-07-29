module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['js/**/*.js'],
        dest: 'www/js/*.js'
      }
    },
    uglify: {
      dist: {
        files: {
          'www/js/min/main.min.js': ['<%= concat.dist.dest %>']
        }
      }
    },
    qunit: {
      files: ['test/**/*.html']
    },
    jshint: {
      files: ['gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
      options: {
        // options here to override JSHint defaults
        globals: {
          jQuery: true,
          console: true,
          module: true,
          document: true
        }
      }
    },
   compass: {
      dist: {
        options: {
          sassDir: 'scss',
          cssDir: 'www/css'
        }
      }
    },
    watch: {
      options: {
        livereload: true
      },
      css: {
        files: ['scss/*.scss'],
        tasks: ['compass:dist']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-compass');

  grunt.registerTask('test', ['jshint']);

  grunt.registerTask('default', ['jshint', 'compass', 'concat', 'uglify']);

};