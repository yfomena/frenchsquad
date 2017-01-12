var gulp = require('gulp'),
    minifycss = require('gulp-minify-css'),
    jshint = require('gulp-jshint'),
    stylish = require('jshint-stylish'),
    uglify = require('gulp-uglify'),
    usemin = require('gulp-usemin'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    changed = require('gulp-changed'),
    rev = require('gulp-rev'),
    browserSync = require('browser-sync'),
    del = require('del');

var ngannotate = require('gulp-ng-annotate');

gulp.task('jshint', function() {
  return gulp.src('app/scripts/**/*.js')
  .pipe(jshint())
  .pipe(jshint.reporter(stylish));
});

// Clean
gulp.task('clean', function() {
    return del(['dist']);
});

// Default task
gulp.task('default', ['clean'], function() {
    gulp.start('usemin', 'imagemin','copyfonts','copyfavicons','copyviews','browser-sync');
    //gulp.start('usemin', 'copyimages','copyfonts','copyfavicons','copyinitjs','copyviews');
});

gulp.task('usemin',['jshint'], function () {
  return gulp.src('./app/index.html')
      .pipe(usemin({
        css:[minifycss(),rev()],
        js: [ngannotate(),uglify({mangle: false}),rev()]
      }))
      .pipe(gulp.dest('dist/'));
});

// Images
gulp.task('imagemin', function() {
  return del(['dist/images']), gulp.src('app/images/**/*')
    .pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
    .pipe(gulp.dest('dist/images'))
    .pipe(notify({ message: 'Images task complete' }));
});

gulp.task('copyfonts', ['clean'], function() {
   gulp.src('./bower_components/font-awesome/fonts/**/*.{ttf,woff,eof,woff2,svg}*')
   .pipe(gulp.dest('./dist/fonts'));
   gulp.src('./bower_components/materialize/dist/fonts/**/*.{ttf,woff,woff2,eof,svg,eot}*')
   .pipe(gulp.dest('./dist/fonts'));
});

gulp.task('copyfavicons', ['clean'], function() {
   gulp.src('./app/favicons/**/*.{ico,png,json}*')
   .pipe(gulp.dest('./dist/favicons'));
});

gulp.task('copyimages', ['clean'], function() {
   gulp.src('./app/images/**/*.{png,jpg,jpeg,gif}*')
   .pipe(gulp.dest('./dist/images'));
});

gulp.task('copyviews', ['clean'], function() {
   gulp.src('./app/views/**/*')
   .pipe(gulp.dest('./dist/views'));
});

gulp.task('copyinitjs', ['clean'], function() {
   gulp.src('./app/scripts/**/init.js')
   .pipe(gulp.dest('./dist/scripts'));
});

// Watch
gulp.task('watch', ['browser-sync'], function() {
  // Watch .js files
  gulp.watch('{app/scripts/**/*.js,app/styles/**/*.css,app/**/*.html}', ['usemin']);
      // Watch image files
  gulp.watch('app/images/**/*', ['imagemin']);

});

gulp.task('browser-sync', ['default'], function () {
   var files = [
      'app/**/*.html',
      'app/styles/**/*.css',
      'app/images/**/*.png',
      'app/scripts/**/*.js',
      'dist/**/*'
   ];

   browserSync.init(files, {
      server: {
         baseDir: "dist",
         index: "index.html"
      }
   });
        // Watch any files in dist/, reload on change
  gulp.watch(['dist/**']).on('change', browserSync.reload);
});
