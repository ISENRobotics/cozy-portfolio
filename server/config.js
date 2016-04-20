var americano   = require( 'americano' );
var uuid        = require( 'uuid' );
var helmet      = require( 'helmet' );
var bparser     = require( 'body-parser' );
var cparser     = require( 'cookie-parser' );
var compression = require( 'compression' );
var morgan      = require( 'morgan' );

var secret      = uuid.v4();

module.exports = {
    common: {
        use: [
            helmet(),
            compression(),
            bparser.urlencoded({ extended: true }),
            bparser.json(),
            cparser( secret ),
            americano.methodOverride(),               
            americano.static( __dirname + '/../client' ),
            americano.static( __dirname + '/node_modules/angular' ),
            americano.static( __dirname + '/node_modules/angular-aria' ),
            americano.static( __dirname + '/node_modules/angular-route' )
        ],
        
        useAfter: [
            americano.errorHandler({
                dumpExceptions: true,
                showStack: true
            })
        ]
    },
    
    development: {
        use: [
            americano.logger( 'dev' ),
            morgan( 'dev' )            
        ],
        
        set: {
            debug: 'on'
        }
    },
    
    production: [
        americano.logger( 'short' )
    ]
};