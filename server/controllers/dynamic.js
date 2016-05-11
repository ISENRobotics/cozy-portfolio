// ----------------------------------------------------------------------------
// requirements
var router = require( 'americano' ).Router();
var path   = require( 'path' );
var pfolio = require( '../models/portfolio' );

// ----------------------------------------------------------------------------
// bind routes
router.use( '/public/*', function( req, res, next ) {
    if( /(portfolio)|(user)/i.test( req.params[0] )) {
        return next();
    }

    // ----------------------------------------------------------------------------
    // dynamic load of routes
    // get the theme on database
    pfolio.request( 'all', function( err, portfolios ) {
        if( err ) {
            res.sendStatus( 500 );

            throw err;
        }

        if( req.params[0] === '' ) {
            req.params[0] = 'index.html';
        }

        res.sendFile( path.join( __dirname, '../..',  'client/public/templates', portfolios[0].settings.theme, req.params[0] ));
    });
});

// ----------------------------------------------------------------------------
// exports
module.exports = router;