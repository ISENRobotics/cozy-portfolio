var logger = require( '../models/logger' );
var cozyinstance = require('../models/cozyinstance');

/* config */
var defaultLocale = 'en';

var getLocale = function( callback ) {
    cozyinstance.request('all', function(err, instances) {
        if(err) {
            /* If error, log and return it */
            logger.error( err.message );
            callback( err );
        } else if ( !instances ) {
            logger.info( 'Oups ! Cannot find cozyinstance ! :S' );
        } else {
            logger.info( 'Return locale from cozyinstance' );

            if( !instances[0] ) {
                callback( null, defaultLocale );
            }
            else {
                if( !instances[0].locale ) {
                    callback( null, defaultLocale );
                }
                else {
                    /* If locale exists, we have to parse all letters together */
                    var locale = '';
                    for (var i in instances[0].locale) {
                        locale += instances[0].locale[i];
                    }
                    callback( null, locale );
                }
            }
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
