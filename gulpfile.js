//importamos paquetes a utilizar
const gulp = require('gulp')
const livereload  = require('gulp-livereload')
const nodemon = require('gulp-nodemon')
const stylus = require('gulp-stylus')
const inject = require('gulp-inject')

//Tarea de inicializacion del servidor
gulp.task('server', () => {

  livereload.listen({start:true})
  nodemon({
    script: 'server.js',
    ext: 'js',
    env:{'NODE_ENV' : 'development'}
  }).on('restart', () => {
    gulp.src('server.js')
      .pipe(livereload())
    console.log('reiniciando....')
  })

});

gulp.task('html', () => {
  gulp.src('app/index.html')
    .pipe(livereload());
  console.log('Recargando html'); 
});

//Tarea de Stylus y comprension de css
gulp.task('stylus', () =>{
  return gulp.src('./app/assets/css/main.styl')
    .pipe(stylus({
      compress: true
    }))
    .pipe(gulp.dest('./app/assets/css/build'));
  })

//tarea inject
gulp.task('inject', () => {
  var target = gulp.src(['app/index.html']);
    var sources = gulp.src(['./app/assets/css/build/*.css', './app/assets/js/*.js']);

    return target.pipe(inject(sources, {
            ignorePath : '/app'
        }))
        .pipe(gulp.dest('./app'))
})

//Watch
gulp.task('watch', () => {
  gulp.watch(['./app/assets/css/main.styl'],['stylus'])
  gulp.watch(['./app/index.html'], ['html']);
})


gulp.task('default', ['server', 'watch','inject'])

