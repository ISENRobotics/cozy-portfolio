// ----------------------------------------------------------------------------
// requirements
var walk   = require( 'walk' );
var path   = require( 'path' );
var qunit  = require( 'qunitjs' );
var logger = require( './server/models/logger' );

// ----------------------------------------------------------------------------
// walk over fs tree
var walker = walk.walk( 'server', {
    followLinks: false
});

// ----------------------------------------------------------------------------
// walk over fs
logger.info( 'Detect files' );

walker.on( 'file', function( root, fileStats, next ) {
    // ----------------------------------------------------------------------------
    // pass test for only file ending by .test.js
    if( /\.test\.js$/.test( fileStats.name )) {
        logger.info( 'file detected : ' + path.join( root, fileStats.name ));

        require( path.join( __dirname, root, fileStats.name ))( qunit );
    }

    next();
});

// ----------------------------------------------------------------------------
// launch qunit test
walker.on( 'end', function() {
    qunit.done( function( details ) {
        logger.info( 'Number of test : ' + details.total );
        logger.info( 'Passed : ' + details.passed );
        logger.info( 'failed : ' + details.failed );
        logger.info( 'During : ' + details.runtime + ' ms' );

        process.exit( details.failed );
    });

    logger.info( 'Launch QUnit test' );
    qunit.load();
});
