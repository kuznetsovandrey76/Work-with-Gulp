'use strict';

var gulp = require('gulp'),
// 	livereload = require('gulp-livereload'),
   	cleanCSS = require('gulp-clean-css');


gulp.task('html', function() {
	return gulp.src('app/index.html')  // какой файл менять
    .pipe(gulp.dest('dist')) // куда сохранить (ex: ./ - корень)
//  .pipe(livereload());
});

gulp.task('css', function() {
	return gulp.src('app/css/*.css')  
	.pipe(cleanCSS())  
    .pipe(gulp.dest('dist'))
//  .pipe(livereload());
});

gulp.task('js', function() {
	return gulp.src('app/js/*.js')  
    .pipe(gulp.dest('dist'))
//  .pipe(livereload());
});

gulp.task('watch', function() {
//  livereload.listen();
	gulp.watch('app/index.html', ['html']);
	gulp.watch('app/css/*.css', ['css']);
	gulp.watch('app/js/*.js', ['js']);
});

gulp.task('default', ['html', 'css', 'js', 'watch']); 
