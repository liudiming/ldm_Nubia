const gulp = require('gulp')
const del = require('del')
const  autoprefixer = require('gulp-autoprefixer')
const htmlmin = require('gulp-htmlmin')
const cssmin = require('gulp-cssmin')
const uglify = require('gulp-uglify')
const webserver = require('gulp-webserver')
const babel = require('gulp-babel')

const libHandler = ()=>{
    return gulp.src('./src/lib/*.js').pipe(gulp.dest('./dist/lib'))
}

const delHandler = ()=>{
    return del(['./dist'])
}

const htmlHandler = ()=>{
    return gulp.src('./src/pages/*.html')
    .pipe(htmlmin({
        removeAttributeQuotes:true,
        removeComments:true,
        collapseWhitespace:true,
        minifyCSS:true,
        minifyJS:true,
        collapseBooleanAttributes:true
    }))
    .pipe(gulp.dest('./dist/pages'))
}

const cssHandler =()=>{
    return gulp.src('./src/css/*css')
    
    .pipe(autoprefixer())
    .pipe(cssmin())
    .pipe(gulp.dest('./dist/css'))

}

const imagesHandler =  ()=>{
    return gulp.src('./src/images/**')
    .pipe(gulp.dest('./dist/iamges'))
}

const jsHandler = ()=>{
    return gulp.src('./src/js/*.js')
    .pipe(babel({
        presets:['@babel/env']
    }))
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js'))
}

const phpHandler = ()=>{
    return gulp.src('./src/php/*.php')
    .pipe(gulp.dest('./dist/php'))
}

const iconfontHandler = ()=>{
    return gulp.src('./src/iconfont/**')
    .pipe(gulp.dest("./dist/iconfont"))
}


const webserverHandler = ()=>{
    return gulp.src('./dist')
    .pipe(webserver({
        port:8090,
        open:"./pages/index.html",
        livereload:true,  //热更新，就是当dist里面的代码有变化时，会及时更新
        proxies:[
            {
                source:"/ldm",
                target:'https://www.nubia.com/show/page/intelligence/'
            },{
                source:'/nubia_search',
                target:'https://www.nubia.com/show/search/normal_search/'
            }
        ]


    }))
}

// 书写自动监控任务
const watchHandler = ()=>{
    gulp.watch('./src/css/*.css',cssHandler)
    gulp.watch('./src/js/*.js',jsHandler)
    gulp.watch('./src/pages/*.html',htmlHandler)
    gulp.watch('./src/lib/*.js',libHandler)
    gulp.watch('./src/images/**',imagesHandler)
    gulp.watch('./src/php/*.php',phpHandler)
    gulp.watch('./src/iconfont/**',iconfontHandler)
    

}


module.exports.default = gulp.series(
    delHandler,
    gulp.parallel(
        cssHandler,htmlHandler,jsHandler,imagesHandler,libHandler
        ,phpHandler,iconfontHandler
    )
    ,webserverHandler
    ,watchHandler
)
// module.exports.server = webserverHandler