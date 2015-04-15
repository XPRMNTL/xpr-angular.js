/**
 * Package Dependencies
 */
var gulp = require('gulp')
  , concat = require('gulp-concat')
  , del = require('del')
  , header = require('gulp-header')
  , uglify = require('gulp-uglifyjs')
  , pkg = require('./package.json')
  , util = require('util');

/**
 * Local Dependencies
 */
var pkg = require('./package.json');
var banner = ['/**'
  , ' * # <%= pkg.name %>'
  , ' * ## <%= pkg.description %>'
  , ' *'
  , ' * @version v<%= pkg.version %>'
  , ' * @link <%= pkg.repository.url %>'
  , ' * @license <%= pkg.license %>'
  , ' * @author <%= pkg.author %>'
  , ' */'
  , ''
  , ''].join('\n');


var filename = util.format('%s.js', pkg.name)
  , dest = 'dist/' + filename;

gulp.task('build', ['concat', 'header', 'uglify']);
gulp.task('default', ['concat', 'header', 'uglify']);


gulp.task('clean', function(done) {
  del('./dist', done);
});

gulp.task('concat', [ 'clean' ], function() {
  return gulp.src('./src/*.js')
    .pipe(concat(filename))
    .pipe(gulp.dest('./dist'));
});

gulp.task('header', [ 'concat' ], function() {
  return gulp.src('./dist/*.js')
    .pipe(header(banner, { pkg: pkg }))
    .pipe(gulp.dest('./dist'));
});

gulp.task('uglify', [ 'clean', 'concat', 'header' ], function() {
  return gulp.src('./dist/*.js')
    .pipe(uglify(dest.replace(/\.js$/, '.min.js')))
    .pipe(gulp.dest('./'));
});
