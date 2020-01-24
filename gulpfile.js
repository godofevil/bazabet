const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('scss', () =>
    gulp.src('app/scss/**/*.sass')
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(autoprefixer({browsers: 'last 10 versions'}))
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({stream: true}))
);

gulp.task('html', () =>
    gulp.src('app/**/*.html')
    .pipe(browserSync.reload({stream: true}))
);

gulp.task('browser-sync', () =>
    browserSync.init({
        server: {
            baseDir: 'app/'
        }
    })
);

gulp.task('watch', () => {
    gulp.watch('app/scss/**/*.sass', gulp.parallel('scss'));
    gulp.watch('app/**/*.html', gulp.parallel('html'))
});

gulp.task('default', gulp.parallel('browser-sync', 'watch'));
