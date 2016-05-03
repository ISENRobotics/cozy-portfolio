// ----------------------------------------------------------------------------
// define controller
app.controller( 'presentation', ['$scope', '$http', function( $scope, $http ) {
    // ----------------------------------------------------------------------------
    // get data provide by the cozydb
    $http.get( 'portfolio/presentation' ).then( function( res ) {
        if( res.status == 200 ) {
            $scope.presentation = res.data;
        }
    });

    // ----------------------------------------------------------------------------
    // ng-change listener
    $scope.change = function() {

        // ----------------------------------------------------------------------------
        // post new data to update
        $http.post( 'portfolio/presentation', $scope.presentation ).then( function( res ) {
            if( res != 200 ) {
                // logs error here
            }
        });
    };
}]);