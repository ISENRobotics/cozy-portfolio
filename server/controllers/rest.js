var logger = require( '../models/logger' );
var pfolio = require('../models/portfolio');

var getPortfolio = function( callback ) {
    pfolio.request('all', function(err, portfolios) {
        if(err) {
            /* If error, log and return it */
            logger.error( err.message );
            callback( err );
        } else if ( !portfolios[0] ) {
            /* If no portfolio exists actually, init portfolio */
            logger.info( "Cannot find any portfolio, trying to initialize one ..." );
            resetPortfolio( function( err, portfolio ) {
                if(err) {
                    callback( err );
                } else {
                    callback( null, portfolio );
                }
            });
        } else {
            /* If portfolio exists, log and return it */
            logger.info( "Successfully found portfolio" );
            callback( null, portfolios[0] );
        }
    });
};

var resetPortfolio = function( callback ) {
    pfolio.request('all', function(err, portfolios) {
        if(err) {
            /* If error, log and return it */
            logger.error( err.message );
            callback( err );
        } else if ( !portfolios[0] ) {
            /* If no portfolio, create it */
            createThePortfolio( function( err, portfolio ) {
                if(err) {
                    callback( err );
                } else {
                    callback( null, portfolio );
                }
            });
        } else {
            /* Delete portfolio, then create a new */
            logger.info( "Delete portfolio" );
            if( portfolios.length > 2 ) {
                /* If a second portfolio exists, we got problems ... */
                logger.error( "More than ONE portfolio ... not possible !!!");
            }
            /* destroy portfolio 0 and rebuild a new */
            pfolio.destroy( portfolios[0].id, function( err ) {
                if(err) {
                    logger.error( err.message );
                    callback( err );
                } else {
                    logger.info( "Portfolio deleted" );
                    createThePortfolio( function( err, portfolio ) {
                        if(err) {
                            callback( err );
                        } else {
                            callback( null, portfolio );
                        }
                    });
                }
            });
        }
    });
};

var createThePortfolio = function( callback ) {
    pfolio.create( {}, function(err, portfolio) {
        if(err) {
            /* If error, log and return it */
            logger.error( err.message );
            callback( err );
        } else {
            logger.info( "Portfolio created" );
            callback( null, portfolio );
        }
    });
};

var updateResource = function( req, callback ) {
    getPortfolio( function( err, portfolio ) {
        if(err) {
            /* If error, log and return it */
            logger.error( err.message );
            callback( err );
        } else {
            /* Create a json with : Resource:dataReceived . Update it */
            var newData = {};
            if( req.params.resource ) {
                newData[ req.params.resource ] = req.body;
            } else {
                newData = req.body;
            }
            portfolio.updateAttributes( newData, function(err, dataUpdated) {
                if(err) {
                    logger.error( err.message );
                    callback( err );
                } else {
                    logger.info( "Update attributes for : " + ( req.params.resource || "all" ) );
                    callback( null, dataUpdated );
                }
            });
        }
    });
};

module.exports = {
    get: function( req, res ) {
        /* get the portfolio and return the resource */
        getPortfolio( function( err, portfolio ) {
            if(err) {
                res.sendStatus(500);
            } else {
                res.json( portfolio[req.params.resource] );
            }
        });
    },
    delete: function( req, res ) {
        /* reset the portfolio */
        resetPortfolio( function( err, portfolio ) {
            if(err) {
                res.sendStatus(500);
            } else {
                res.json( portfolio );
            }
        });
    },
    update: function( req, res ) {
        /* replace the actual content of resource by the req.body */
        updateResource( req, function( err, dataUpdated ) {
            if(err) {
                res.sendStatus(500);
            } else {
                res.json( dataUpdated );
            }
        });
    },
    getAll: function( req, res ) {
        /* get the portfolio and return it */
        getPortfolio( function( err, portfolio ) {
            if(err) {
                res.sendStatus(500);
            } else {
                res.json( portfolio );
            }
        });
    },
    deleteAll: function( req, res ) {
        /* reset the portfolio */
        resetPortfolio( function( err, portfolio ) {
            if(err) {
                res.sendStatus(500);
            } else {
                res.json( portfolio );
            }
        });
    }
};
