const gulp              = require('gulp');
const gulpSourcemaps    = require('gulp-sourcemaps');
const gulpBabel         = require('gulp-babel');
const gulpConcat        = require('gulp-concat');

gulp.task('default', ['build'], function () {
    gulp.start('build:watch');
});

gulp.task('build:watch', function () {
    const filePatterns = [
        'js/**/*.*'
    ];

    gulp.watch(filePatterns, ['build']);
});


gulp.task('build', () => {
    return gulp.src('js/**/*.js')
        .pipe(gulpSourcemaps.init())
        .pipe(gulpBabel({ presets: ['es2015'] }))
        .pipe(gulpConcat('all.js'))
        .pipe(gulpSourcemaps.write('.'))
        .pipe(gulp.dest('build/js'));
});