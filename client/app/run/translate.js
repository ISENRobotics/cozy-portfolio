// ----------------------------------------------------------------------------
// change language on run
app.run(['$http', '$translate', function( $http, $translate ) {
    $http.get( 'user/cozylocale' ).then( function( res ) {
        if( res.status == 200 ) {
            $translate.use( res.data );
        }
    });
}]);