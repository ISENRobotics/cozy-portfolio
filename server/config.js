// ----------------------------------------------------------------------------
// requirements
var americano   = require( 'americano' );
var path        = require( 'path' );
var uuid        = require( 'uuid' );
var helmet      = require( 'helmet' );
var bparser     = require( 'body-parser' );
var cparser     = require( 'cookie-parser' );
var compression = require( 'compression' );
var morgan      = require( 'morgan' );
var logger      = require( './models/logger' );

// ----------------------------------------------------------------------------
// utils
var router      = americano.Router();
var secret      = uuid.v4();

// ----------------------------------------------------------------------------
// common configs
var extensions = [];

// ----------------------------------------------------------------------------
// ?? - I don't know what it does
logger.info( 'Load americano methodOverride' );
extensions.push( americano.methodOverride());

// ----------------------------------------------------------------------------
// active httpd configs
logger.info( 'Load server configurations' );
extensions.push( helmet());
extensions.push( compression());
extensions.push( bparser.urlencoded({ extended: true }));
extensions.push( bparser.json());
extensions.push( cparser( secret ));

// ----------------------------------------------------------------------------
// Bind static routes
logger.info( 'Load static routes' );
var routes = [
    { syml: '/public/vendor/angular', real: 'node_modules/angular' },
    { syml: '/public/vendor/angular', real: 'node_modules/angular-aria' },
    { syml: '/public/vendor/angular', real: 'node_modules/angular-route' },
    { syml: '/public/vendor/angular', real: 'node_modules/angular-sanitize' },
    { syml: '/public/vendor/angular', real: 'node_modules/angular-translate/dist' },
    { syml: '/public/stylesheets',    real: 'client/stylesheets/dist' },
    { syml: '/public/assets',         real: 'client/assets' },
    { syml: '/',                      real: 'client/interface' }
];

for( var i in routes ) {
    extensions.push( router.use( routes[i].syml, americano.static( path.join( __dirname, '..', routes[i].real ))));
}

// ----------------------------------------------------------------------------
// create settings
logger.info( 'Export configurations settings' );
module.exports = {
    common: {
        use: extensions,
        
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