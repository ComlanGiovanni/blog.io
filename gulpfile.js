var gulp = require('gulp'),
    html2jade = require('gulp-html2jade'),
    livereload = require('gulp-livereload');

var options = {nspaces:2};

gulp.task('html2jade', function(){
  return gulp.src('views/html/*.html')
    .pipe(html2jade(options))
    .pipe(gulp.dest('views'))
    .pipe(livereload());
});

gulp.task('default', ['html2jade'] , function(){
  
});

gulp.task('watch', function(){
    var server = livereload();
    gulp.watch('views/html/*.html', ['html2jade']);
        
    gulp.watch(['views/html/*.html', 'views/*.jade']).on(['change', 'delete'], function(event){ 
        server.changed(event.path);
    })
})

//Rajouter dans tout les .jade extends layout