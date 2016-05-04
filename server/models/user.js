var cozydb = require('cozydb');

var user = cozydb.getModel('User', {
    'email' : {
        type: Object
    },

    'public_name' : {
        type: Object
    }
});

// Make this model available from other files.
module.exports = user;
