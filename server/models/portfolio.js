var cozydb = require('cozydb');

var portfolio = cozydb.getModel('portfolio', {
    'banner': {
        default: {
            title: "John Doe - Portfolio",
            icon: "",
            content: "Mon portfolio",
            avatar: ""
        },
        type: Object
    },
    'presentation' : {
        default: {
            title: "Qui suis-je ?",
            content: "Je m'appelle INSERER UN NOM ICI, je suis ...."
        },
        type: Object
    },
    'contact' : {
        default: {
            title: "yolo"
        }
    },
    type: Object
});

// Make this model available from other files.
module.exports = portfolio;
