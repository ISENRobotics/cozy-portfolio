// ----------------------------------------------------------------------------
// requirements
var gulp    = require( 'gulp' );
var plugins = require( 'gulp-load-plugins' )();

// ----------------------------------------------------------------------------
// default task
gulp.task( 'default', ['watch']);

// ----------------------------------------------------------------------------
// watch task
gulp.task( 'watch', ['build'], function() {
    gulp.watch(['client/stylesheets/**/*.scss'], ['build:scss']);
    gulp.watch(['client/interface/app/**/*.js'], ['build:js']);
});

// ----------------------------------------------------------------------------
// build task
gulp.task( 'build', ['build:scss', 'build:js']);

// ----------------------------------------------------------------------------
// build:js
gulp.task( "build:js", function() {
    return gulp.src(['client/interface/app/**/!(*.lang).js'])
               .pipe( plugins.plumberNotifier())
               .pipe( plugins.concat( 'application.min.js' ))
               .pipe( gulp.dest( 'client/interface' ))
               .pipe( require( 'vinyl-named' )())
               .pipe( require( 'webpack-stream' )())
               .pipe( plugins.uglify({ compress: {}}))
               .pipe( gulp.dest( 'client/interface' ));    
});

// ----------------------------------------------------------------------------
// build:scss
gulp.task( 'build:scss', function() {
    return gulp.src(['client/stylesheets/**/*.scss'])
               .pipe( plugins.plumberNotifier())
               .pipe( plugins.sass.sync())
               .pipe( plugins.autoprefixer())
               .pipe( plugins.cssnano())
               .pipe( plugins.rename({ suffix: '.min' }))
               .pipe( gulp.dest( 'client/stylesheets/dist' ));
});
