var logger = require( '../models/logger' );
var cas = require( '../models/cas' );

var getCas = function( callback ) {
    cas.request('all', function(err, CASLogin) {
        if(err) {
            /* If error, log and return it */
            logger.error( err.message );
            callback( err );
        } else {
            if( CASLogin && CASLogin.username && CASLogin.password ) {
                logger.info( 'Successfully found CASLogin data' );
                callback( null, { 'login' : CASLogin.username, 'password' : CASLogin.password } );
            } else {
                callback( new Error("No CASLogin username or password") );
            }
        }
    });
};

module.exports = {
    get: function( callback ) {
        getCas( function( err, cas ) {
            if(err) {
                callback(err);
            } else {
                callback(null, cas);
            }
        });
    }
};
