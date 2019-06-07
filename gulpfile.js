var gulp = require("gulp");
// var gutil = require("gulp-util");
// var sass = require("gulp-sass");
// var uglify = require("gulp-uglify");
// var concat = require("gulp-concat");
// var sequence = require("gulp-sequence");
var connect = require("gulp-connect");

// gulp.task("sass", function() {
//   return gulp
//     .src("sass/main.scss")
//     .pipe(sass({ style: "expanded" }))
//     .on("error", gutil.log)
//     .pipe(gulp.dest("css"));
// });

gulp.task("connect", function () {
  connect.server({
    root: "client",
    livereload: true,
    port: 4200
  });
});