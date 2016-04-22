// ----------------------------------------------------------------------------
// declaration languages
var languages    = ['en', 'fr'];
var translations = {};

// ----------------------------------------------------------------------------
// load languages
for( var i in languages ) {
    translations[ languages[i]] = require( "./languages/" + languages[i] + '.lang' );
}

// -----------------------------------------------------------------------------
// create config for transtations
app.config(["$translateProvider", function( $translateProvider ) {
    // -----------------------------------------------------------------------------
    // load languages
    for( var i in translations ) {
        $translateProvider.translations( i, translations[i] );
    }

    $translateProvider.useSanitizeValueStrategy( 'sanitize' );
    $translateProvider.preferredLanguage( 'en' );
    $translateProvider.fallbackLanguage( 'en' );
}]);
