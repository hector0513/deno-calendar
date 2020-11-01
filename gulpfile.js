/*******************************
 *           Set-up
 *******************************/

var
gulp   = require('gulp'),
{ src,dest } = require('gulp'),
babel = require('gulp-babel'),
uglify=require("gulp-uglify"),
concat=require("gulp-concat"),
sass = require('gulp-sass'),
config = require('./semantic/tasks/config/user')
;


/*******************************
 *            Tasks
 *******************************/

require('./semantic/tasks/collections/build')(gulp);
require('./semantic/tasks/collections/various')(gulp);
require('./semantic/tasks/collections/install')(gulp);

gulp.task('default', gulp.series('watch'));

/*--------------
      Docs
---------------*/

require('./semantic/tasks/collections/docs')(gulp);

/*--------------
      RTL
---------------*/

if (config.rtl) {
  require('./semantic/tasks/collections/rtl')(gulp);
}

gulp.task('sass', function () {
    return gulp.src('./sass/**/*.scss')
      .pipe(sass().on('error', sass.logError)).pipe(concat('index.css')).
      pipe(gulp.dest('./dist'));
  });
   

  gulp.task("default",function(){
    
         gulp.watch('./sass/*.scss',gulp.series("sass"))
       return
  })