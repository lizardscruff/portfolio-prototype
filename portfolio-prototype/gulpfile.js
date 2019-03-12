// TODO: include an uglify step
// TODO: make it with scss/sass

const gulp = require('gulp');
const browserSync = require('browser-sync');

gulp.task('reload', function(done) {
  browserSync.reload();
  done();
});

gulp.task('serve', function(done) {
  browserSync({
    browser: ['firefox'],
    server: 'app'
  });

  gulp.watch('app/*.html', gulp.series('reload'));
  done();

  gulp.watch('app/styles/*.css', gulp.series('reload'));
  done();

  gulp.watch('app/scripts/*.js', gulp.series('reload'));
  done();
});