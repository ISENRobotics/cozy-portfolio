var cozydb = require('cozydb');
var logger = require('./logger');

logger.info('Load requests');

module.exports = {
    portfolio: {
        all: cozydb.defaultRequests.all
    },

    cozyinstance: {
        all: cozydb.defaultRequests.all
    }
};
