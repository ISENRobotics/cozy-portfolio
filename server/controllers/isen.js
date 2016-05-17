var logger = require( '../models/logger' );
var portfolio = require( '../controllers/portfolio' );
var casModule = require( '../controllers/cas' );
var rp = require('request-promise');

var getDataFromWebService = function( cas, callback ) {

    var post_options = {
        method: 'POST',
        uri: 'https://web.isen-bretagne.fr/cc/jsonStudentData',
        form: {
            login: cas.login,
            password: cas.password
        }
    };

    rp(post_options).then( function (parsedBody) {
        logger.info( 'Successfully download data from ISEN WS' );
        callback(null, JSON.parse( parsedBody ) );
        // if error or not json
    }).catch( function (err) {
        logger.error( "Request : " + cas.login + " ; " + cas.password );
        logger.error(err.message);
        logger.error("Maybe wrong password or login :'(");
        callback(err);
    });

};

var setExperiences = function( experiences, callback ) {
    portfolio.getPortfolio( function( err, pfolioInstance ) {
        if(err) {
            /* If error, log and return it */
            logger.error( err.message );
            callback( err );
        } else {
            logger.info("Write experiences in data system");

            if(pfolioInstance.experiences && pfolioInstance.experiences.contents) {

                var contentSave = [];
                for (var i = 0; i < pfolioInstance.experiences.contents.length; i++) {
                    // god is ok for that :
                    if( ! (
                        (pfolioInstance.experiences.contents[i].type == null || pfolioInstance.experiences.contents[i].type === "") &&
                        (pfolioInstance.experiences.contents[i].date == null || pfolioInstance.experiences.contents[i].date === "") &&
                        (pfolioInstance.experiences.contents[i].title == null || pfolioInstance.experiences.contents[i].title === "") &&
                        (pfolioInstance.experiences.contents[i].content == null || pfolioInstance.experiences.contents[i].content === "")
                    )) {
                        contentSave.push( pfolioInstance.experiences.contents[i] );
                    }
                }
                pfolioInstance.experiences.contents = contentSave;

                for (i = 0; i < experiences.length; i++) {
                    pfolioInstance.experiences.contents.push({
                        "type" : experiences[i].type,
                        "date" : experiences[i].startDate + " -> " + experiences[i].endDate,
                        "title" : experiences[i].title,
                        "content" : experiences[i].topic
                    });
                }
            } else {
                logger.error( err.message );
                callback( err );
            }

            pfolioInstance.updateAttributes( pfolioInstance, function(err) {
                if(err) {
                    logger.error( err.message );
                    callback( err );
                } else {
                    logger.info( 'Update attributes for : experiences' );
                    callback( null );
                }
            });
        }
    });
};


module.exports = {
    setIsenStudentDatas: function( req, res ) {
        casModule.get( function( err, caslogin ) {
            if(err) {
                logger.error( err.message );
                res.sendStatus(500);
            } else {
                logger.info("Starting to get data from ISEN WS");
                getDataFromWebService( caslogin, function( err, data ) {
                    if(err) {
                        logger.error( err.message );
                        res.sendStatus(500);
                    } else {
                        setExperiences( data.experiences, function( err ) {
                            if(err) {
                                logger.error( err.message );
                                res.sendStatus(500);
                            } else {
                                res.sendStatus(200);
                            }
                        });
                    }
                });
            }
        });
    },
    isIsenAppInstalled: function( req, res ) {
        casModule.get( function( err ) {
            if(err) {
                res.json( { "isIsenAppInstalled" : false } );
            } else {
                res.json( { "isIsenAppInstalled" : true } );
            }
        });
    }
};
