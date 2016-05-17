// ----------------------------------------------------------------------------
// requirements
var fs     = require( 'fs' );
var path   = require( 'path' );
var logger = require( '../models/logger' );

module.exports = {
    get: function( req, res ) {
        fs.readdir( path.join( __dirname, '../..', 'client/public' ), function( error, files ) {
            if( error ) {
                logger.error( error.message );

                res.sendStatus( 500 );

                throw error;
            }

            if( files.indexOf( 'cv.pdf' ) !== -1 ) {
                res.sendFile( path.join( __dirname, '../..', 'client/public/cv.pdf' ));
            } else {
                res.sendStatus( 404 );
            }
        });
    }
};