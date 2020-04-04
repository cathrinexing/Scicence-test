
// 整合js files


var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var cssMin = require('gulp-css');
var autoprefixer = require('gulp-autoprefixer');
var browserslist = require('browserslist');


gulp.task('scripts', function(done) {
  gulp.src(['./js/raw/fullpage.js', './js/raw/my.js'])
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./js'));
    done()
});

gulp.task('default', gulp.parallel( 'scripts'));

// gulp.task('css', function(done) {
//   gulp.src(['./css/raw/fullpage.css','./css/raw/style-bootstrap.css'])
//     .pipe(concat('mian.css'))
//     .pipe(cssMin())
//   //   .pipe(autoprefixer({
//   //   Browserslist: ['last 10 versions', 'ie >= 9'],
//   //   cascade: false
//   //
//   // }))
//     .pipe(autoprefixer({
//     cascade: false
//   }))
//     .pipe(gulp.dest('./css'));
//      done()
// });




// gulp.task('default', gulp.parallel('css', 'scripts'));
