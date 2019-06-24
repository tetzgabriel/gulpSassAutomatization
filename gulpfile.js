const gulp = require('gulp');
const { watch } = require('gulp');
const sass = require('gulp-sass');
const livereload = require('gulp-livereload');


const reloadHtml = () => {
   return gulp.src('./index.html')
       .pipe(livereload({start:true}));
};

const compileSass = () => {
    return gulp.src('./assets/sass/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./assets/css'))
        .pipe(livereload({start:true}));
 };

exports.default = () => {
    watch('./assets/sass/*.scss', { ignoreInitial: false }, compileSass);
    watch('./*.html', { ignoreInitial: false }, reloadHtml);
};