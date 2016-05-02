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
    'portfolio' : {
        get: rest.getAll,
        delete: rest.deleteAll,
        post: rest.update,
        put: rest.update
    },
    'portfolio/:resource' : {
        get: rest.get,
        post: rest.update,
        delete: rest.delete,
        put: rest.update
    }
};
