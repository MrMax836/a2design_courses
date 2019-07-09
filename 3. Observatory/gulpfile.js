var gulp = require('gulp'),
    stylus = require('gulp-stylus');

var path = {
    build: {
        html: 'build/templates',
        css: 'build/css',
        js: 'build/js',
        img: 'build/images',
        fonts: 'build/fonts'
    },
    src: {
        html: 'src/templates/*.html',
        style: 'src/stylus/main.styl',
        js: 'src/js/*.js',
        img: 'src/images/**/*.*',
        fonts: 'src/fonts/**/*.*'
    },
    watch: {
        html: 'src/templates/**/*.html',
        style: 'src/stylus/**/*.styl',
        js: 'src/js/**/*.js',
        img: 'src/images/**/*.*',
        fonts: 'src/fonts/**/*.*'
    },
    clean: './build'
};

gulp.task('stylus:build', function() {
    return gulp.src(path.src.style)
        .pipe( stylus({'include css': true}) )
        .pipe (gulp.dest(path.build.css) );
});

gulp.task('html:build', function() {
    return gulp.src(path.src.html)
        .pipe( gulp.dest(path.build.html) );
});

gulp.task('img:build', function() {
    return gulp.src(path.src.img)
        .pipe( gulp.dest(path.build.img) );
});

gulp.task('fonts:build', function() {
    return gulp.src(path.src.fonts)
        .pipe( gulp.dest(path.build.fonts) );
});
gulp.task('js:build', function() {
    return gulp.src(path.src.js)
        .pipe( gulp.dest(path.build.js) );
});

gulp.task('watch:html', function () {
    return gulp.watch(path.watch.html, gulp.series('html:build'));
});
gulp.task('watch:stylus', function () {
    return gulp.watch(path.watch.style, gulp.series('stylus:build'));
});
gulp.task('watch:img', function () {
    return gulp.watch(path.watch.img, gulp.series('img:build'));
});
gulp.task('watch:fonts', function () {
    return gulp.watch(path.watch.fonts, gulp.series('fonts:build'));
});
gulp.task('watch:js', function () {
    return gulp.watch(path.watch.js, gulp.series('js:build'));
});

gulp.task('watch-all',
    gulp.parallel('watch:html', 'watch:stylus', 'watch:img', 'watch:fonts', 'watch:js')
);
