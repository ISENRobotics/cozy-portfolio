// ----------------------------------------------------------------------------
// requirements
var gulp    = require( 'gulp' );
var plugins = require( 'gulp-load-plugins' )();

// ----------------------------------------------------------------------------
// default task
gulp.task( 'default', ['watch']);

// ----------------------------------------------------------------------------
// watch task
gulp.task( 'watch', function() {
    gulp.watch(['client/interface/stylesheets/**/*.scss'], ['build:scss-interface']);
});

// ----------------------------------------------------------------------------
// build task
gulp.task( 'build', ['build:scss-interface']);

// ----------------------------------------------------------------------------
// build:scss
gulp.task( 'build:scss-interface', function() {
    return gulp.src(['client/interface/stylesheets/**/*.scss'])
               .pipe( plugins.plumberNotifier())
               .pipe( plugins.sass.sync())
               .pipe( plugins.autoprefixer())
               .pipe( gulp.dest(['client/interface/stylesheets/dist/']))
               .pipe( plugins.cssnano())
               .pipe( plugins.rename({ suffix: '.min' }))
               .pipe( gulp.dest(['client/interface/stylesheets/dist/']));
});
