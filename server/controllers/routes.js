// ----------------------------------------------------------------------------
// this files register all routes of this application
// ----------------------------------------------------------------------------

// ----------------------------------------------------------------------------
// example :
// 
// {
//    '/path/of/your/route/:params': {
//          get: function() {},
//          post: function() {},
//          put: function() {},
//          delete: function() {}
//    }
// }

module.exports = {
      '/': {
          get: function( req, res ) {
              res.status(200).send('hrllo');
          }
      }
};