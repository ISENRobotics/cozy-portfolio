// ----------------------------------------------------------------------------
// requirements
var gulp    = require( 'gulp' );
var plugins = require( 'gulp-load-plugins' )();

// ----------------------------------------------------------------------------
// settings
var autoprefixer = {
    browsers: ['last 3 version'],
    cascade: false
};

// ----------------------------------------------------------------------------
// default task
gulp.task( 'default', ['watch']);

// ----------------------------------------------------------------------------
// watch task
gulp.task( 'watch', ['build', 'lint-noerror'], function() {
    gulp.watch(['client/stylesheets/**/*.scss'], ['build:scss']);
    gulp.watch(['client/app/**/*.js'], ['build:js']);
    gulp.watch(['server/**/*.js', 'client/app/**/!(boot).js', 'server.js'], ['lint:js-noerror']);
    gulp.watch(['client/**/*.html'], ['lint:html-noerror']);
});

// ----------------------------------------------------------------------------
// lint task
gulp.task( 'lint', ['lint:js', 'lint:html']);

// ----------------------------------------------------------------------------
// lint:js
gulp.task( 'lint:js', function() {
   return gulp.src(['server/**/*.js', 'client/app/**/!(boot).js', 'server.js'])
              .pipe( plugins.jshint())
              .pipe( plugins.jshint.reporter( 'jshint-stylish' ))
              .pipe( plugins.jshint.reporter('fail'));
});

// ----------------------------------------------------------------------------
// lint:html
gulp.task( 'lint:html', function() {
   return gulp.src(['client/**/*.html'])
              .pipe( plugins.htmlhint( '.htmlhintrc' ))
              .pipe( plugins.htmlhint.reporter( 'htmlhint-stylish' ))
              .pipe( plugins.htmlhint.failReporter({ suppress: true }));
});

// ----------------------------------------------------------------------------
// lint-noerror
gulp.task( 'lint-noerror', ['lint:js-noerror', 'lint:html-noerror']);

// ----------------------------------------------------------------------------
// lint:js-noerror
gulp.task( 'lint:js-noerror', function() {
   return gulp.src(['server/**/*.js', 'client/app/**/!(boot).js', 'server.js'])
              .pipe( plugins.plumberNotifier())
              .pipe( plugins.jshint())
              .pipe( plugins.jshint.reporter( 'jshint-stylish' ))
              .pipe( plugins.jshint.reporter('fail'));
});


// ----------------------------------------------------------------------------
// lint:html-noerror
gulp.task( 'lint:html-noerror', function() {
   return gulp.src(['client/**/*.html'])
              .pipe( plugins.plumberNotifier())
              .pipe( plugins.htmlhint( '.htmlhintrc' ))
              .pipe( plugins.htmlhint.reporter( 'htmlhint-stylish' ))
              .pipe( plugins.htmlhint.failReporter({ suppress: true }));
});

// ----------------------------------------------------------------------------
// build task
gulp.task( 'build', ['build:scss', 'build:js']);

// ----------------------------------------------------------------------------
// build:js
gulp.task( "build:js", function() {
    return gulp.src(['client/app/**/!(*.lang).js'])
               .pipe( plugins.plumberNotifier())
               .pipe( plugins.sourcemaps.init())
               .pipe( plugins.concat( 'application.min.js' ))
               .pipe( gulp.dest( 'client' ))
               .pipe( require( 'vinyl-named' )())
               .pipe( require( 'webpack-stream' )())
               .pipe( plugins.uglify({ compress: {}}))
               .pipe( plugins.sourcemaps.init())
               .pipe( gulp.dest( 'client' ));
});

// ----------------------------------------------------------------------------
// build:scss
gulp.task( 'build:scss', function() {
    return gulp.src(['client/stylesheets/imports.scss'])
               .pipe( plugins.plumberNotifier())
               .pipe( plugins.sourcemaps.init())
               .pipe( plugins.sass.sync())
               .pipe( plugins.autoprefixer( autoprefixer ))
               .pipe( plugins.cssnano())
               .pipe( plugins.rename({ suffix: '.min' }))
               .pipe( plugins.sourcemaps.write())
               .pipe( gulp.dest( 'client/' ));
});
