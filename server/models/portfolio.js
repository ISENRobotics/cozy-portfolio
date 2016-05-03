var cozydb = require('cozydb');

var portfolio = cozydb.getModel( 'portfolio', {
    'banner': {
        default: {
            title: '',
            icon: '',
            content: '',
            avatar: ''
        },

        type: Object
    },

    'presentation': {
        default: {
            title: '',
            content: ''
        },

        type: Object
    },

    'contact': {
        default: {},

        type: Object
    },

    'educations': {
        default: [],

        type: Array
    },

    'experiences': {
        default: [],

        type: Array
    },

    'hobbies': {
        default: [],

        type: Array
    },

    'skills': {
        default: [],

        type: Array
    },

    type: Object
});

// Make this model available from other files.
module.exports = portfolio;
