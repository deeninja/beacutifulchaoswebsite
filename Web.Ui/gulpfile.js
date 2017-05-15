var gulp = require('gulp');

gulp.task('default', function() {
    // place code for your default task here
});

var minify = require('gulp-minify');

gulp.task('compress', function() {
    gulp.src('wwwroot/lib/*.js') // minify all js files in lib
        .pipe(minify({
            ext: { // output source
                src: '-debug.js',
                min: '.js' // file extension of minfied files
            },
            exclude: ['tasks'],
            ignoreFiles: ['.combo.js', '-min.js'] // ignore these file types

        }))
        .pipe(gulp.dest('wwwroot/dist')); // opens managed data stream to output result to dist
})