/* 
* @Author: Marte
* @Date:   2018-04-04 16:07:06
* @Last Modified by:   Marte
* @Last Modified time: 2018-04-06 02:50:49
*/

let gulp = require('gulp');//{task(),}
let sass = require('gulp-sass');//fn


// sass->css
gulp.task('compileSass',function(){
    // 先查找sass文件所在目录
    gulp.src('./src/sass/*.scss') // 返回文件流（液体，文件在内存中的状态）

    // scss->css
    .pipe(sass({outputStyle:'expanded'}).on('error', sass.logError))

    // 输出到硬盘
    .pipe(gulp.dest('./src/css/'))
});


// 监听文件修改，自动执行编译任务
gulp.task('jtSass',function(){
    gulp.watch('./src/sass/*.scss',['compileSass'])
})



var browserSync = require('browser-sync');

gulp.task('server',function(){
    // 启动一个自动刷新的服务器
    browserSync({
        //创建一个静态服务器
        // server:'./src',

        // 指定端口
        port:1008,

        // 代理服务器
        // 用browserSync代理php服务器
        //  * 识别php
        //  * 自动刷新
        proxy:'http://localhost:1937',

        // 监听文件修改
        files:['./src/**/*.html','./src/css/*.css','./src/api/*.php','./src/js/*.js']
    });

    // 监听sass修改
    gulp.watch('./src/sass/*.scss',['compileSass']);
});
