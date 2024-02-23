const {src,dest,series,parallel}=require('gulp');
const cssmin = require("gulp-cssmin");
const processhtml = require("gulp-processhtml");
const sass=require('gulp-dart-sass');
const rename=require('gulp-rename');
function compilar(){
    return src('assets/sass/styles.scss')
        .pipe(sass())
        .pipe(dest("assets/css/"))
}

function minimizar(){
    return src("./assets/css/styles.css")
    .pipe(cssmin())
    .pipe(rename({suffix:".min",extname:".css"}))
    .pipe(dest("./assets/css/"));
}

function todo(){
    return src("./assets/css/styles.css")
        .pipe(sass())
        .pipe(cssmin())
        .pipe(rename({
            suffix:".min",
            extname:".css"
        }))
        .pipe(dest("github/assets/css/"))
}

function html(){
    return src(".html")
    .pipe(processhtml())
    .pipe(dest("github/"))
}

exports.todo=todo;
exports.compiler=compilar;
exports.minimizar=minimizar;
exports.html=html;