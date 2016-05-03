// ----------------------------------------------------------------------------
// define controller
app.controller( 'settings', ['$scope', '$http', function( $scope, $http ) {
    $http.get( 'themes' ).then( function( res ) {
        if( res.status == 200 ) {
            $scope.themes = res.data;
        }
    });
}]);