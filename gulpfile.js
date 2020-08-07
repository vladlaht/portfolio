var gulp = require("gulp");
var browserSync = require("browser-sync").create();

function watch() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch('./*.html').on("change", browserSync.reload);
    gulp.watch('./css/*.css').on("change", browserSync.reload);
}

exports.watch = watch;