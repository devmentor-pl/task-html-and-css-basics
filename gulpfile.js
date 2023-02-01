// SASS TO CSS

const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();

// SASS TO CSS

function style() {

    //1. where is my scss file
    return gulp.src('./scss/**/*.scss')

        //2. sass compiler
        .pipe(sass())

        //3. where do I save css
        .pipe(gulp.dest('./css'))

        //4. stream changes to all browsers
        .pipe(browserSync.stream());
}

function watch() {
    browserSync.init({
        server: {
            baseDir: './'
        }
    });

    gulp.watch('./scss/**/*.scss', style);
    gulp.watch('./*html').on('change', browserSync.reload);
    gulp.watch('./js/**/*.js').on('change', browserSync.reload);
}


exports.style = style;
exports.watch = watch;
