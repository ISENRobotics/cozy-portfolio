// ----------------------------------------------------------------------------
// declare controller
app.controller( 'contact', ['$scope', '$http', function( $scope, $http ) {
    // ----------------------------------------------------------------------------
    // get data provide by cozydb
    $http.get( 'user/email' ).then( function( res ) {
        if( res.status == 200 && !require( 'empty-value' )( res.data )) {
            $scope.email = res.data;
        }
    });
}]);