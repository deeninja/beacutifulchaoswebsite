

/// <binding Clean='clean' />
"use strict";

var gulp = require("gulp"),
    concat = require("gulp-concat"),
    cssmin = require("gulp-cssmin"),
    uglify = require("gulp-uglify"),
    watch = require('gulp-watch');

var paths = {
    webroot: "wwwroot/"
};

paths.js = paths.webroot + "js/**/*.js";
paths.minJs = paths.webroot + "js/**/*.min.js";
paths.css = paths.webroot + "css/**/*.css";
paths.minCss = paths.webroot + "css/**/*.min.css";
paths.concatJsDest = paths.webroot + "js/site.min.js";
paths.concatCssDest = paths.webroot + "css/site.min.css";


/*gulp.task("clean:js", function (cb) {
    rimraf(paths.concatJsDest, cb);
});

gulp.task("clean:css", function (cb) {
    rimraf(paths.concatCssDest, cb);
});

gulp.task("clean", ["clean:js", "clean:css"]);*/

gulp.task("min:js", function () {
    return gulp.src([paths.js, "!" + paths.minJs], { base: "." })
        .pipe(concat(paths.concatJsDest))
        .pipe(uglify())
        .pipe(gulp.dest("."));
});

gulp.task("min:css",
    function() {
        return gulp.src([paths.css, "!" + paths.minCss])
            .pipe(concat(paths.concatCssDest))
            .pipe(cssmin())
            .pipe(gulp.dest("."));
    });

gulp.task("min", ["min:js", "min:css"]);
gulp.task("default", ['min']);

/*
gulp.task('stream', function () {
    // Endless stream mode 
    return watch('css/*#1#*.css', { ignoreInitial: false })
        .pipe(gulp.dest('build'));
});
*/

gulp.task('watch', function () {

    // Watch .scss files
    gulp.watch(paths.css, ['min:css']);

    // Watch .js files
    gulp.watch(paths.js, ['min:js']);

});




// foundation shit

/*// compile sass
var sass = require("gulp-sass");
// where to find sass code
paths.sassSource = paths.webroot + "lib/foundation-sites/scss/*.scss";

// where to output compiled CSS code
paths.cssOutput = paths.webroot + "css";

// where to find bower resources
paths.bower_components = paths.webroot + "lib/";

gulp.task('sass', function () {
    gulp.src(paths.sassSource)
        .pipe(sass({
            includePaths: [
                paths.bower_components + 'foundation-sites/scss',
                paths.bower_components + 'motion-ui/src'
            ]
        }).on('error', sass.logError))
        .pipe(gulp.dest(paths.cssOutput));
});*/