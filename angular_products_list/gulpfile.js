var gulp = require('gulp');
var connect = require('gulp-connect');
var livereload = require('gulp-livereload');
var stylus = require('gulp-stylus');
var nib = require('nib');

//gulp.task('default', function() {
//    // place code for your default task here
//});


//gulp.task('css', function() {
//    gulp.src('css/*.css')
//        .pipe(concatCss('bundle.css'))
//        .pipe(gulp.dest('web/'))
//        .pipe(livereload({ start: true }));
//});
//
//gulp.task('watch', function() {
//    gulp.watch('css/*.css', ['css']);
//});
//
//gulp.task('default', ['css', 'watch']);






gulp.task('connect', function() {
    connect.server({
        root: 'web',
        livereload: true
    });
});

gulp.task('html', function() {
    gulp.src('src/index.html')
        .pipe(gulp.dest('web/'))
        .pipe(connect.reload());
});

// gulp.task('html', function() {
//     gulp.src('src/register.html')
//         .pipe(gulp.dest('web/'))
//         .pipe(connect.reload());
// });

gulp.task('css', function() {
    gulp.src('src/stylesheets/*.css')
        //.pipe(concatCss('bundle.css'))
        .pipe(gulp.dest('web/stylesheets/'))
        .pipe(connect.reload());
});

gulp.task('js', function() {
    gulp.src('src/scripts/*.js')
        .pipe(gulp.dest('web/scripts/'))
        .pipe(connect.reload());
});

gulp.task('css', function () {
    gulp.src('src/stylesheets/*.styl')
        .pipe(stylus({
            use: nib()
        }))
        .pipe(gulp.dest('web/stylesheets/'))
        .pipe(connect.reload());
        
    gulp.src('src/stylesheets/*.css')   
        .pipe(gulp.dest('web/stylesheets/'))
        .pipe(connect.reload());
});

gulp.task('watch', function() {
    gulp.watch('src/stylesheets/*.*', ['css']);
    gulp.watch('src/scripts/*.js', ['js']);
    gulp.watch('src/*.html', ['html']);
});

gulp.task('default', ['connect', 'html', 'css', 'js', 'watch']);

