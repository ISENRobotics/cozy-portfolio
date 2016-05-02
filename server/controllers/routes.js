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

var portfolio   = require( './portfolio' );
var user        = require( './user' );

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
    'user/cozylocale' : {
        get: user.getLocale
    }
};
