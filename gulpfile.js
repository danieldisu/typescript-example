var gulp = require('gulp');
var ts = require('gulp-typescript');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var concat = require('gulp-concat');

gulp.task('compile:typescript', function () {
  gulp.src('app/src/**/*.ts')
    .pipe(ts({
      declarationFiles: true,
      noExternalResolve: true,
      module: 'amd'
    }))
    .pipe(gulp.dest('dist/scripts'))
});

gulp.task('default', function () {
  gulp.watch('app/src/**/*.ts', ['compile:typescript'])
});

// Watch Files For Changes & Reload
gulp.task('serve', ['compile:typescript'], function () {
  browserSync({
    notify: false,
    server: ['dist', 'app']
  });

  gulp.watch(['app/**/*.html'], reload);
  gulp.watch(['app/src/**/*.ts'], ['compile:typescript', reload])
});
