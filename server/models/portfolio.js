var cozydb = require('cozydb');

var portfolio = cozydb.getModel('portfolio', {
    'banner': {
        default: {
            title: "John Doe - Portfolio",
            content: "Mon portfolio"
        },
        type: Object
    },
    ''
});

// Make this model available from other files.
module.exports = portfolio;
