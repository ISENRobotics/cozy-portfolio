// -----------------------------------------------------------------------------
// server configuration
// -----------------------------------------------------------------------------

// -----------------------------------------------------------------------------
// requirements
var americano = require( 'americano' );
var cozydb    = require( 'cozydb' );

// -----------------------------------------------------------------------------
// launch americano server

cozydb.configure(__dirname, null, function() {
    americano.start({
        name: process.env.NAME || "",
        port: process.env.PORT || 9200
    });
});
