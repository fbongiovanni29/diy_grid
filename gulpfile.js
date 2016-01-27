var gulp = require("gulp");
var sass = require("gulp-sass");
var watch = require("gulp-watch");
var webserver = require('gulp-webserver')
//var browserSync = require("browser-sync");
//var reload = browserSync.reload;

gulp.task('webserver', function() {
  gulp.src('./')
  .pipe(webserver({
    livereload: true,
  }));
});

gulp.task('sass', function(){
  gulp.src('sass/main.scss')
  .pipe(sass({
    includePaths: ['sass']
  }))
  .pipe(gulp.dest("."))
});

//pair programming
/*gulp.task('serve', function(){
  browserSync.init(['main.css', '*.html'], {
    server: {
      baseDir: './',
    },
    **The Hub's security workaround**
    //tunnel: "francis"
  });
});*/

gulp.task('watch', ['sass', 'webserver'], function(){
  gulp.watch(['sass/*.scss', '*.html'], ['sass']);
})
