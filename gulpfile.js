const srcProject = 'homework/src';
const buildProject = 'homework/dist';

const path = {
    src: {
        html: [srcProject + '/*.html', '!' + srcProject + '/_*.html'],
        css: srcProject + '/scss/style.scss',
        js: srcProject + '/js/*.js',
        img: srcProject + '/img/*.{jpg,png,svg,gif,ico,webp}'
    },
    build: {
        html: buildProject + '/',
        css: buildProject + '/css/',
        js: buildProject + '/js/',
        img: buildProject + '/img/'
    },
    watch: {
        html: srcProject + '/**/*.html',
        css: srcProject + '/scss/**/*.scss',
        js: srcProject + '/js/**/*.js',
        img: srcProject + '/img/*.{jpg,png,svg,gif,ico,webp}'
    },
    clean: './' + buildProject  + '/'
}

let {src, dest} = require('gulp'),
gulp = require('gulp'),
browsersync = require('browser-sync').create(),
fileinclude = require('gulp-file-include'),
del = require('del'),
scss = require('gulp-sass'),
concat = require('gulp-concat'),
uglify = require('gulp-uglify-es').default,
imagemin = require('gulp-imagemin');

function browserSync () {
    browsersync.init({
        server: {
            baseDir:  './' + buildProject  + '/'
        },
        port: 3000,
        notify: false
    })
}


function html() {
    return src(path.src.html)
    .pipe(fileinclude())
    .pipe(dest(path.build.html))
    .pipe(browsersync.stream())
}

function css() {
    return src(path.src.css)
    .pipe(scss({
        outputStyle: 'expanded'
    }))
    .pipe(fileinclude())
    .pipe(dest(path.build.css))
    .pipe(browsersync.stream())
}

function concatJs() {
    return src(path.src.js)
    .pipe(concat(
        'app.js', {
            newLine: ';'
        }
    ))
    .pipe(uglify())
    .pipe(dest(path.build.js))
    .pipe(browsersync.stream());
}

function images() {
    return src(path.src.img)
    .pipe(imagemin({
        progressive: true,
        interlaced: true,
        optimizationLevel: 3
    }))
    .pipe(dest(path.build.img))
    .pipe(browsersync.stream())
}

function watchFiles() {
    gulp.watch([path.watch.html], html);
    gulp.watch([path.watch.css], css);
    gulp.watch([path.watch.js], concatJs);
}

function clean() {
    return del(path.clean);
}

let build = gulp.series(clean, gulp.parallel(html, css, concatJs, images));
let watch = gulp.parallel(build, watchFiles, browserSync);

exports.imagemin = images;
exports.concat = concatJs;
exports.css = css;
exports.html = html;
exports.build = build;
exports.watch = watch;
exports.default = watch;