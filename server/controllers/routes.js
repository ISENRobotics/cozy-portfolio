// ----------------------------------------------------------------------------
// this files register all routes of this application
// ----------------------------------------------------------------------------

// ----------------------------------------------------------------------------
// example :
//
// {
//    'path/of/your/route/from/slash/:params': {
//          get: function() {},
//          post: function() {},
//          put: function() {},
//          delete: function() {}
//    }
// }

var portfolio = require( './portfolio' );
var user      = require( './user' );
var themes    = require( './themes' );

module.exports = {
    'portfolio' : {
        get: portfolio.getAll,
        delete: portfolio.deleteAll,
        post: portfolio.update,
        put: portfolio.update
    },

    'portfolio/:resource' : {
        get: portfolio.get,
        post: portfolio.update,
        put: portfolio.update
    },

    'public/portfolio/:resource' : {
        get: portfolio.get
    },

    'user/cozylocale' : {
        get: user.getLocale
    },

    'user/email' : {
        get: user.getEmail
    },

    'user/public_name' : {
        get: user.getPublicName
    },

    'public/user/public_name' : {
        get: user.getPublicName
    },

    'themes' : {
        get: themes.get
    }
};
