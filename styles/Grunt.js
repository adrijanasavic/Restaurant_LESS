


module.exports = function (grunt) {
    require("jit-grunt")(grunt);
    grunt.initConfig({
      less: {
        development: {
          options: {
            compress: true,
            yuicompress: true,
            optimization: 2,
          },
          files: {
            "css/style.css": "less/style.less", // destination file and sourcefile
          },
        },
      },
      watch: {
        styles: {
          files: ["less/**/*.less"], // which files to watch
          tasks: ["less"],
          options: {
            nospawn: true,
          },
        },
      },
    },
    gulp.pipe(less({
        paths: [
            '.',
            './node_modules/bootstrap-less'
        ]
    })));
    grunt.registerTask("default", ["less", "watch"]);
  };
  