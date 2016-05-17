var cozydb = require('cozydb');

var cas = cozydb.getModel( 'CASLogin', {
    'username': {
        default: "",
        type: String
    },

    'password': {
        default: "",
        type: String
    },

    type: Object
});

// Make this model available from other files.
module.exports = cas;
