var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('concat', function() {
   gulp.src(['1','2'])
      .pipe(concat('result.txt'))
      .pipe(gulp.dest('./build'));
});