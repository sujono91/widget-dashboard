const gulp = require('gulp');
const gzip = require('gulp-gzip');

gulp.task('compress', function() {
  gulp.src(['./dist/**/*.*'])
      .pipe(gzip())
      .pipe(gulp.dest('./dist'));
});
