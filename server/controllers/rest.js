var logger = require( '../models/logger' );
var portfolio = require('../models/portfolio');

module.exports = {
    get: function( req, res ) {
        portfolio.request('all', function(err, portfolios) {
            if(err) {
                logger.error( err.message );
            } else if ( !portfolios ) {
                logger.debug( "Cannot find any portfolio, it must be undefined actually" );
                // Creer par le par-defaut
            } else {
                logger.info( "Load " + req.params.resource );
                res.json( portfolios[0][req.params.resource] );
            }
        });
    },
    post: function( req, res ) {
        // portfolio.create( {}, function(err, data) {
        //     if(err) {
        //         logger.error( err.message );
        //     } else {
        //         logger.debug( "Added data : " + data );
                res.json( {} );
        //     }
        // });
    },
    delete: function( req, res ) {
        res.json( {} );
    },
    update: function( req, res ) {
        res.json( {} );
    }
};
