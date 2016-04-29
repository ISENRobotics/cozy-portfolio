var logger = require( '../models/logger' );
var portfolio = require('../models/portfolio');

module.exports = {
    get: function() {

        portfolio.create({}, function(err, data) {
            if(err) {
                logger.error( err.msg );
            } else {
                logger.info( "Add data : " + data );
            }
        });

        // var ban = banner.find('', function(err, ban) {
        //     if(err) {
        //         logger.info(err);
        //     } else {
        //         return ban;
        //     }
        // });

        // logger.info(ban);
    }
};
