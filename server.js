// -----------------------------------------------------------------------------
// server configuration
// -----------------------------------------------------------------------------

// -----------------------------------------------------------------------------
// requirements
var americano = require( 'americano' );
var logger    = require( './server/models/logger' );


logger.info( 'zdsqkfsj' );
// -----------------------------------------------------------------------------
// launch americano server
americano.start({
    name: process.env.NAME || "",
    port: process.env.PORT || 9200
});