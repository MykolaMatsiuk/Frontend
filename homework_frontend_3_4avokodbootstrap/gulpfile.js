var gulp = require('gulp'),
    cleanCSS = require('gulp-clean-css'),
    imagemin = require('gulp-imagemin'),
    minifyCSS = require('gulp-minify-css');

gulp.task('minify-css', function() {
  return gulp.src('style.css')
  .pipe(cleanCSS({compatibility: 'ie8'}))
  .pipe(gulp.dest('build/css'))
});

gulp.task('default', function() {
  return gulp.src('images/*')
  .pipe(imagemin())
  .pipe(gulp.dest('build/images'))
});

gulp.task('minify-css', function() {
  return gulp.src('style.css')
  .pipe(minifyCSS({keepBreaks: true}))
  .pipe(gulp.dest('build/css'))
});
