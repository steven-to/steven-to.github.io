var gulp = require('gulp'),
    sass = require('gulp-sass'),
    jade = require('gulp-jade'),
    uglify = require('gulp-uglify'),
    browserSync = require('browser-sync').create(),
    cp = require('child_process');



// Build Jekyll site
gulp.task('jekyll-build', function (done){
  return cp.spawn('jekyll.bat', ['build'], {stdio: 'inherit'})
        .on('close', done);
});



// Rebuild Jekyll site
gulp.task('jekyll-rebuild', ['jekyll-build'], function(){
  browserSync.reload();
});



// Compile Jade files into HTML files
gulp.task('jade', function(){
  return gulp.src('_jadefiles/*.jade')
        .pipe(jade({ pretty: true }))
        .pipe(gulp.dest('_includes/'))
});



// Compile SASS files into CSS files
gulp.task('sass', function(){
  return gulp.src('assets/css/main.sass')
        .pipe(sass())
        .pipe(gulp.dest('_site/assets/css/'))
        .pipe(browserSync.reload({stream:true}))
        .pipe(gulp.dest('assets/css/'))
});

gulp.task('uglify', function(){
  return gulp.src('assets/js/script.js')
        .pipe(uglify())
        .pipe(gulp.dest('assets/js/min/'))
});

gulp.task('articleCom', function(){
  return gulp.src('assets/css/article.sass')
        .pipe(sass())
        .pipe(gulp.dest('_site/assets/css/'))
        .pipe(browserSync.reload({stream:true}))
        .pipe(gulp.dest('assets/css/'))
});

// Watch files changes and act
gulp.task('watch', function(){
  gulp.watch('_jadefiles/*.jade', ['jade']);
  gulp.watch('assets/css/**', ['sass']);
  gulp.watch('assets/css/article.sass', ['articleCom']);
  gulp.watch('assets/js/script.js', ['uglify']);
  gulp.watch(['*.html', '_includes/*', '_layouts/*.html', 'assets/js/script.js', '_posts/**'], ['jekyll-rebuild']);
});


// Serve a local server with browser sync.
gulp.task('serve', ['jekyll-build'], function(){
  browserSync.init({
    server: '_site/'
  });
});

gulp.task('default', ['serve', 'watch']);
