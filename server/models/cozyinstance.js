var cozydb = require('cozydb');

var cozyinstance = cozydb.getModel('Cozyinstance', {
    'locale' : {
        type: Object
    }
});

// Make this model available from other files.
module.exports = cozyinstance;
