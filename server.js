// -----------------------------------------------------------------------------
// server configuration
// -----------------------------------------------------------------------------

// -----------------------------------------------------------------------------
// requirements
var americano   = require( 'americano' );
var app         = americano();
var path        = require( 'path' );
var uuid        = require( 'uuid' );
var helmet      = require( 'helmet' );
var bparser     = require( 'body-parser' );
var cparser     = require( 'cookie-parser' );
var compression = require( 'compression' );
var morgan      = require( 'morgan' );

var logger      = require( './server/models/logger' );
var secret      = uuid.v4();

// -----------------------------------------------------------------------------
// special event
logger.info( 'Bind process events' );
logger.info( 'Bind process event : "uncaughtException"' );
process.on( 'uncaughtException', function( e ) {
    logger.error( e.message );
});

// -----------------------------------------------------------------------------
// configs
logger.info( 'Load configurations' );
app.set( 'views', path.join( __dirname, 'views' ));
app.set( 'view engine', 'html' );

app.use( helmet());
app.use( morgan( 'dev' ));
app.use( compression());
app.use( bparser.urlencoded({ extended: true }));
app.use( bparser.json());
app.use( cparser( secret ));

// -----------------------------------------------------------------------------
// static files
logger.info( 'Bind static routes' );

var routes = [
    { real: 'client', syml: '/' }
];

for( var i in routes ) {
    logger.info( 'Bind static route : ' + routes[i].real + ' -> ' + routes[i].syml );
    app.use( routes[i].syml, americano.static( routes[i].real ));
}

// -----------------------------------------------------------------------------
// server
var server = app.listen( process.env.PORT || 9200, function() {
    logger.info( 'Launch at %s:%s', server.address().address, server.address().port );
});