// 现在开始进行打包

// 1. 导入 gulp 第三方模块
const gulp = require('gulp')
const cssmin = require('gulp-cssmin')
const autoprefixer = require('gulp-autoprefixer')
const sass = require('gulp-sass')

// 用来压缩 js 文件
const uglify = require('gulp-uglify')

// 用来转换 es6 语法
const babel = require('gulp-babel')

const htmlmin = require('gulp-htmlmin')

// 公共部分引入
const fileinclude = require('gulp-file-include')

// 图片导入，无损压缩
// const imagemin = require('gulp-imagemin')

const del = require('del')

const webserver = require('gulp-webserver')

// const removeUseStrict = require('gulp-remove-use-strict')

gulp.task('css', function () {
    return gulp
    .src('./src/css/*.css') // 找到文件
    .pipe(autoprefixer())   // 自动添加前缀
    .pipe(cssmin())         // 执行压缩
    .pipe(gulp.dest('./dist/css'))  // 放到 dist 目录
})

gulp.task('sass', function () {
    return gulp
    .src('./src/sass/*.scss')
    .pipe(sass())   // sass 转换成 css
    .pipe(autoprefixer())   // 自动添加前缀
    .pipe(cssmin()) // 执行压缩
    .pipe(gulp.dest('./dist/css'))  // 放到 dist 目录
})


// 去除了压缩，去除了严格模式，因为无法识别时间倒计时
gulp.task('js', function () {
    return gulp
    .src('./src/js/*.js')
    // .pipe(babel({
    //     presets: ['@babel/env', {
    //         "sourceType": "script"
    //     }],
    //     "plugins": [
    //         "transform-remove-strict-mode"
    //     ]
    // }))
    // .pipe(removeUseStrict())
    .pipe(gulp.dest('./dist/js'))
})

gulp.task('html', function () {
    return gulp
    .src('./src/pages/*.html')
    .pipe(fileinclude({
        // 关键字
        prefix: '-roy-',
        // 基础路径
        basepath: './src/components',
    })) // 引入组件内容
    .pipe(htmlmin({
        // 移出空格和换行
        // collapseWhitespace: true,
        // 移出注释
        // removeComments: true,
        // 移出空原生属性
        removeEmptyAttributes: true,
        // 移出为布尔值的属性
        collapseBooleanAttributes: true,
        // 移出属性值上面的双引号
        removeAttributeQuotes: true,
        // 移出 style 和 link 标签上的 type 属性
        removeStyleLinkTypeAttributes: true,
        // 移出 script 标签上的 type 属性
        removeScriptTypeAttributes: true,
        // 压缩页面内 style 标签里面的内容
        minifyCSS: true,
        // 压缩页面内 js 标签里面的内容
        minifyJS: true,
    }))
    .pipe(gulp.dest('./dist/pages'))
})

gulp.task('image', function () {
    return gulp
    .src('./src/images/**')
    .pipe(gulp.dest('./dist/images'))
})

gulp.task('icon', function () {
    return gulp
    .src('./src/icon/**')
    .pipe(gulp.dest('./dist/icon'))
})

gulp.task('video', function () {
    return gulp
    .src('./src/videos/**')
    .pipe(gulp.dest('./dist/videos'))
})

gulp.task('audio', function () {
    return gulp
    .src('./src/audios/**')
    .pipe(gulp.dest('./dist/audios'))
})

gulp.task('data', function () {
    return gulp
    .src('./src/data/**')
    .pipe(gulp.dest('./dist/data'))
})

gulp.task('server', function () {
    return gulp
    .src('./src/server/**')
    .pipe(gulp.dest('./dist/server'))
})

// del 任务不能和打包任务并行
gulp.task('del', function () {
    return del('./dist')
})

// 自动在浏览器打开的任务
gulp.task('webserver', function () {
    return gulp
    .src('./dist') // 打开 dist 目录
    .pipe(webserver({
        host: 'www.roy.com',    // 域名
        port: 2019,   // 端口号
        open: '/pages/index.html',  // 默认打开的文件
        livereload: true,   // 自动刷新浏览器
        proxies: [
            {
                source: 'http://localhost:80/login.php', // 代理的地址
                target: '/xiaomi', // 请求的代理标识符
            }
        ]
    }))
})

// 监控目录改变的任务
gulp.task('watch', function () {
    gulp.watch('./src/css/*.css', gulp.series('css'))
    gulp.watch('./src/sass/*.scss', gulp.series('sass'))
    gulp.watch('./src/js/*.js', gulp.series('js'))
    gulp.watch('./src/pages/*.html', gulp.series('html'))
    gulp.watch('./src/images/**', gulp.series('image'))
    gulp.watch('./src/icon/**', gulp.series('icon'))
    gulp.watch('./src/videos/**', gulp.series('video'))
    gulp.watch('./src/audios/**', gulp.series('audio'))
    gulp.watch('./src/data/**', gulp.series('data'))
    gulp.watch('./src/server/**', gulp.series('server'))
})

// 默认任务，默认执行以上任务
gulp.task('default', gulp.series(
    'del',
    gulp.parallel('css', 'sass', 'js', 'image', 'icon', 'html', 'video', 'audio', 'data', 'server'),
    'webserver',
    'watch'
))