var gulp = require('gulp')
  , concat = require('gulp-concat')
  , del = require('del')
  , uglify = require('gulp-uglifyjs')
  , pkg = require('./package.json')
  , util = require('util');

var filename = util.format('%s-%s.js', pkg.name, pkg.version)
  , dest = 'dist/' + filename;

gulp.task('build', ['concat', 'uglify']);
gulp.task('default', ['concat', 'uglify']);


gulp.task('clean', function(done) {
  del('./dist', done);
});

gulp.task('concat', [ 'clean' ], function() {
  return gulp.src('./src/*.js')
    .pipe(concat(filename))
    .pipe(gulp.dest('./dist'));
});

gulp.task('uglify', [ 'clean', 'concat' ], function() {
  return gulp.src('./dist/*.js')
    .pipe(uglify(dest.replace(/\.js$/, '.min.js')))
    .pipe(gulp.dest('./'));
});
