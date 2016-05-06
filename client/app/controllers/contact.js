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

    $http.get( 'portfolio/contact' ).then( function( res ) {
        if( res.status == 200 ) {
            $scope.contact = res.data;
        }
    });

    $scope.change = function() {
        $http.post( 'portfolio/contact', $scope.contact ).then( function( res ) {
            if( res.status != 200 ) {
                // insert error logs
            }
        });
    };
}]);