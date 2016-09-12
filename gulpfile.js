var gulp = require('gulp');
var stylus = require('gulp-stylus');
var paths = {
	scripts: ['./dev/js/*.js'],
	stylus: ['./dev/stylus/*.styl']
};

gulp.task('stylus', function() {
  return gulp.src(paths.stylus[0])
      .pipe(stylus({
        compress : true
      }))
    .pipe(gulp.dest('./pro/css'));
});
gulp.task('scripts', function() {
  return gulp.src(paths.scripts)
    .pipe(gulp.dest('./pro/js'));
});
gulp.task('watch', function() {
  gulp.watch(paths.stylus, ['stylus']);
  gulp.watch(paths.scripts, ['scripts']);
});

gulp.task('default', ['watch','stylus','scripts']);