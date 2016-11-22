//importamos paquetes a utilizar
const gulp = require('gulp')
const livereload  = require('gulp-livereload')
const nodemon = require('gulp-nodemon')
const stylus = require('gulp-stylus')

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

gulp.task('stylus', () =>{
  return gulp.src('./css/main.styl')
    .pipe(stylus({
      compress: true
    }))
    .pipe(gulp.dest('./css/build'));
  })

gulp.task('watch', () => {
  gulp.watch(['./css/main.styl'],['stylus'])
})


gulp.task('default', ['server', 'watch'])

