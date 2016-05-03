// -----------------------------------------------------------------------------
// create config for transtations
app.config(["$translateProvider", function( $translateProvider ) {
    // ----------------------------------------------------------------------------
    // declaration languages
    var languages    = ['en', 'fr'];
    var translations = {};

    // ----------------------------------------------------------------------------
    // load languages
    for( var i in languages ) {
        translations[ languages[i]] = require( "./app/languages/" + languages[i] + '.lang' );
    }

    // -----------------------------------------------------------------------------
    // load languages
    for( i in translations ) {
        $translateProvider.translations( i, translations[i] );
    }

    $translateProvider.useSanitizeValueStrategy( null );
    $translateProvider.preferredLanguage( 'en' );
    $translateProvider.fallbackLanguage( 'en' );
}]);
