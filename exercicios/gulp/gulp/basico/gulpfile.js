const gulp = require('gulp')

gulp.task('default', () => {
    gulp.start('copiar', 'fim')
})

gulp.task('copiar', ['antes1', 'antes2'], () => {
    //gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt'])
    gulp.src(['pastaA/* .txt'])
    .pipe(watch('pastaA/* .txt'))
    .pipe(gulp.dest('pastaB'))
})

gulp.task('antes1', () => {

})

gulp.task('antes2', () => {

})

gulp.task('fim', () => {

})