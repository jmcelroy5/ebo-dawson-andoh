const gulp = require('gulp');
const nunjucks = require('gulp-nunjucks');
const data = require('gulp-data');
const rename = require('gulp-rename');
const ROUTES = require('./data/routes.json')

gulp.task('nunjucks', () =>
  gulp.src('templates/*.nunjucks')
    .pipe(data(() => (ROUTES)))
    .pipe(nunjucks.compile())
    .pipe(rename({ extname: '.html' }))
    .pipe(gulp.dest('.'))
);
