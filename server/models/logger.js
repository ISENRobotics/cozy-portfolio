// -----------------------------------------------------------------------------
// requirements
var winston = require( 'winston' );
var printit = require( 'printit' );
var log     = printit({
    prefix: "portfolio",
    date: true 
});

log.log = function( level, message ) {
    switch( level ) {
        case 'error': {
            log.error( message );
            
            break;
        }
        
        case 'debug': {
            log.debug( message );
            
            break;
        }
        
        case 'warn': {
            log.warn( message );
            
            break;
        }
        
        default: {
            log.info( message );   
        
            break;
        }
    }  
};

// -----------------------------------------------------------------------------
// exports
module.exports = new winston.Logger({
    transports: [
        log
    ]
});
