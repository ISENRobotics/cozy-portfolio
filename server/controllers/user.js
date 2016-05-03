var logger = require( '../models/logger' );
var cozyinstance = require('../models/cozyinstance');
var user = require('../models/user');

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

var getUserResource = function( resource, callback ) {
    user.request('all', function(err, users) {
        if(err) {
            /* If error, log and return it */
            logger.error( err.message );
            callback( err );
        } else if ( !users ) {
            logger.info( 'Oups ! Cannot find user doctype ! :S' );
        } else {
            logger.info( 'Return data from user doctype' );

            if( !users[0] ) {
                callback( null, resource );
            }
            else {
                if( !users[0][resource] ) {
                    callback( null, resource );
                }
                else {
                    /* Return email */
                    callback( null, users[0][resource] );
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
    },
    getEmail: function( req, res ) {
        /* get the email from user doctype */
        getUserResource( "email", function( err, email ) {
            if(err) {
                res.sendStatus(500);
            } else {
                res.json( email );
            }
        });
    },
    getPublicName: function( req, res ) {
        /* get the public name from user doctype */
        getUserResource( "public_name", function( err, email ) {
            if(err) {
                res.sendStatus(500);
            } else {
                res.json( email );
            }
        });
    }
};
