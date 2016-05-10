var cozydb = require('cozydb');

var portfolio = cozydb.getModel( 'portfolio', {
    'banner': {
        default: {},

        type: Object
    },

    'presentation': {
        default: {},

        type: Object
    },

    'contact': {
        default: {},

        type: Object
    },

    'educations': {
        default: {},

        type: Object
    },

    'experiences': {
        default: {},

        type: Object
    },

    'hobbies': {
        default: {},

        type: Object
    },

    'skills': {
        default: {},

        type: Object
    },

    'settings': {
        default: {
            theme: "default"
        },

        type: Object
    },

    type: Object
});

// Make this model available from other files.
module.exports = portfolio;
