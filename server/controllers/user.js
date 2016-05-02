var logger = require( '../models/logger' );
var cozyinstance = require('../models/cozyinstance');

var getLocale = function( callback ) {
    cozyinstance.request('all', function(err, instance) {
        if(err) {
            /* If error, log and return it */
            logger.error( err.message );
            callback( err );
        } else if ( !instance ) {
            logger.info( "Oups ! Cannot find cozyinstance ! :S" );
        } else {
            logger.info( "Return locale" );
            callback( null, " "+instance );
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
