// ----------------------------------------------------------------------------
// define controller
app.controller( 'banner', ['$scope', '$http', function( $scope, $http ) {
    // ----------------------------------------------------------------------------
    // get data provide by cozydb
    $http.get( 'portfolio/banner' ).then( function( res ) {
        $scope.banner = res.data;
    });

    // ----------------------------------------------------------------------------
    // ng-change listener
    $scope.change = function() {

        // ----------------------------------------------------------------------------
        // update with new data
        $http.post( 'portfolio/banner', $scope.banner );
    };
}]);