var logger = require( '../models/logger' );
var cozyinstance = require('../models/cozyinstance');

var getLocale = function( callback ) {
    cozyinstance.request('all', function(err, instances) {
        if(err) {
            /* If error, log and return it */
            logger.error( err.message );
            callback( err );
        } else if ( !instances ) {
            logger.info( "Oups ! Cannot find cozyinstance ! :S" );
        } else {
            logger.info( "Return locale" );
            callback( null, instances[0] );
        }
    });
};

module.exports = {
    getLocale: function( req, res ) {
        /* get the locale in cozyinstance */
        getLocale( function( err, locale ) {
            if(err) {
                res.sendStatus(500);
            } else {
                res.json( locale );
            }
        });
    }
};
