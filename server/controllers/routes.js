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

var rest = require('./rest');

module.exports = {
    ':resource' : {
        get: rest.get,
        post: rest.post,
        delete: rest.delete,
        put: rest.update
    }
};
