var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var cssmin = require('gulp-cssmin');
var concat = require('gulp-concat');

// gotta use that sass bro
gulp.task('sass', function () {
  gulp.src('src/scss/main.scss')
    .pipe(sass({
      errLogToConsole: true
    }))
    .pipe(autoprefixer({
      browsers: ['last 2 versions', 'ie 9'],
      cascade: false
    }))
    //.pipe(cssmin())
    .pipe(gulp.dest('dist'));
});

gulp.task('scripts', function(){
  gulp.src('src/js/**/*.js')
    .pipe(concat('main.js'))
    .pipe(gulp.dest('dist'))
});


gulp.task('default', ['sass', 'scripts'], function() {
  gulp.watch('src/scss/**/*', ['sass']);
  gulp.watch('src/js/**/*', ['scripts']);
});
