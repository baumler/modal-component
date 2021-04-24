const {src, dest, watch, series} = require('gulp')
const sass = require('gulp-dart-sass')
const autoprefixer = require('gulp-autoprefixer')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')

function sassTask() {
  return src('src/scss/main.scss', { sourcemaps: true })
      .pipe(sass({ outputStyle: 'compressed', file: "main.css" }).on('error', sass.logError))
      .pipe(autoprefixer({
        cascade: false
      }))
      .pipe(dest('dist/', { sourcemaps: true }));
}

function jsTask() {
    return src('src/js/**/*.js', { sourcemaps: true })
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(dest('dist/', { sourcemaps: true }))
}

function watcher() {
    watch(['src/scss/**/*'], ['cssTask'])
    watch(['src/js/**/*'], ['jsTask'])
}

exports.css = sassTask
exports.js = jsTask
exports.dev = watcher
exports.prod = series(jsTask, sassTask)
