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
// Overrides DELETE and PUT methods
logger.info( 'Load americano methodOverride for old browsers' );
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
    { syml: '/vendor/angular', real: 'node_modules/angular' },
    { syml: '/vendor/angular', real: 'node_modules/angular-aria' },
    { syml: '/vendor/angular', real: 'node_modules/angular-route' },
    { syml: '/vendor/angular', real: 'node_modules/angular-sanitize' },
    { syml: '/vendor/angular', real: 'node_modules/angular-translate/dist' },
    { syml: '/vendor/angular', real: 'node_modules/ng-file-upload/dist' },
    { syml: '/stylesheets',    real: 'node_modules/normalize-css' },
    { syml: '/',               real: 'client/' }
];

for( var i in routes ) {
    logger.info( 'Load route : ' + routes[i].syml + ' -> ' + routes[i].real );

    extensions.push( router.use( routes[i].syml, americano.static( path.join( __dirname, '..', routes[i].real ))));
}

// ----------------------------------------------------------------------------
// dynamic routing for themes
extensions.push( require( './controllers/dynamic' ));

// ----------------------------------------------------------------------------
// upload cv
extensions.push( require( './controllers/upload' ));

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
