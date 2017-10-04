var gulp = require('gulp');

gulp.task('html', function() {
  return gulp.src('client/templates/*.pug')
  .pipe(gulp.dest('build/html'))
});

gulp.task('css', function() {
  return gulp.src('client/templates/*.less')
  .pipe(gulp.dest('build/css'))
});

gulp.task('default', ['html', 'css']);
