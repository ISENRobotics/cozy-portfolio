// ----------------------------------------------------------------------------
// manage themes

// ----------------------------------------------------------------------------
// requirements
var fs     = require( 'fs' );
var logger = require( '../models/logger' );

// ----------------------------------------------------------------------------
// exports
module.exports = {
    get: function( req, res ) {
        fs.readdir( 'client/public/templates', function( err, themes ) {
            if( err ) {
                logger.error( err.message );

                res.sendStatus( 500 );
            } else {
                res.json( themes );
            }
        });
    }
};