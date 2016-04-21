// -----------------------------------------------------------------------------
// requirements
var winston = require( 'winston' );
var printit = require( 'printit' );
var log     = printit({
    prefix: "portfolio",
    date: true 
});

log.log = function( level, message ) {
   if( log[level] ) {
       return log[level]( message );
   } 
   
   log.info( message );
};

// -----------------------------------------------------------------------------
// exports
module.exports = new winston.Logger({
    transports: [
        log
    ]
});
