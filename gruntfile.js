module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      files: {
        'www/js/min/main.min.js': ['www/js/main.js']
      }
    },
    smushit: {
      mygroup: {
        src: ['www/img/*.png','www/img/*.jpg'],
        dest: 'www/img/min'
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
          sassDir: 'www/scss',
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
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-smushit');

  grunt.registerTask('test', ['jshint']);

  grunt.registerTask('default', ['jshint', 'compass', 'smushit', 'uglify']);

};