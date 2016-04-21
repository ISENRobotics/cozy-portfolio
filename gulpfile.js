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
    gulp.watch(['client/stylesheets/**/*.scss'], ['build:scss']);
});

// ----------------------------------------------------------------------------
// build task
gulp.task( 'build', ['build:scss']);

// ----------------------------------------------------------------------------
// build:scss
gulp.task( 'build:scss', function() {
    return gulp.src(['client/stylesheets/**/*.scss'])
               .pipe( plugins.plumberNotifier())
               .pipe( plugins.sass.sync())
               .pipe( plugins.autoprefixer())
               .pipe( gulp.dest( 'client/stylesheets/dist/' ))
               .pipe( plugins.cssnano())
               .pipe( plugins.rename({ suffix: '.min' }))
               .pipe( gulp.dest( 'client/stylesheets/dist/' ));
});
