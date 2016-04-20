// -----------------------------------------------------------------------------
// requirements
var winston = require( 'winston' );

// -----------------------------------------------------------------------------
// exports
module.exports = new winston.Logger({
    transports: [
        new winston.transports.Console()
    ]
});
