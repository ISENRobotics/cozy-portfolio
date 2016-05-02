// ----------------------------------------------------------------------------
// define controller
app.controller( 'banner', ['$scope', '$http', function( $scope, $http ) {
    $http.get( 'portfolio/banner' ).then( function( res ) {
        if( res.status == 200 ) {
            $scope.banner = res.data;
        }
    });

    $scope.change = function() {
      $http.post( 'portfolio/banner', $scope.banner ).then( function( res ) {
          if( res.status != 200 ) {
              // insert error log here
          }
      });
    };
}]);