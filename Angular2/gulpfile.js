/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007

    https://www.typescriptlang.org/docs/handbook/gulp.html
    https://www.npmjs.com/package/gulp-typescript
*/

var gulp = require('gulp');
var mainBowerFiles = require('gulp-main-bower-files');
var uglify = require('gulp-uglify');
var ts = require("gulp-typescript");
var tsProject = ts.createProject('tsconfig.json');
/*  http://palantir.github.io/tslint/usage/tslint-json/ */
var tslint = require("gulp-tslint");


var paths = {
    scripts: "Scripts",
    bowerComponents: "bower_components",
    build: "./Scripts/build",
    app: "Scripts/app",
    typescript: "./app/**/*.ts"
};

gulp.task('uglify', function () {
    return gulp.src('./bower.json')
        .pipe(mainBowerFiles())
        .pipe(uglify())
        .pipe(gulp.dest(paths.build));
});

gulp.task('main-bower-files', function() {
    return gulp.src('./bower.json')
        .pipe(mainBowerFiles())
        .pipe(gulp.dest(paths.build));
});

gulp.task('type-script', function () {
    return tsProject.src() // instead of gulp.src(...) 
        .pipe(ts(tsProject));
});

gulp.task("tslint", function() {    
    return gulp.src(paths.typescript)
        .pipe(tslint())
        .pipe(tslint.report("verbose"));

});

gulp.task('default', ["main-bower-files"], function () {
    // place code for your default task here
});