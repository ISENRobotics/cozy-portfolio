// ----------------------------------------------------------------------------
// create default template
var portfolio = angular.module( 'portfolio', ['ngAria', 'ngRoute', 'ngSanitize']);

// ----------------------------------------------------------------------------
// controller
portfolio.controller( 'head', ['$scope', '$http', function( $scope, $http ) {
    $http.get( 'portfolio/banner' ).then( function( res ) {
        if( res.status == 200 ) {
            $scope.banner = res.data;
        }
    });
}]);

// ----------------------------------------------------------------------------
// controller
portfolio.controller( 'banner', ['$scope', '$http', function( $scope, $http ) {
    $http.get( 'user/public_name' ).then( function( res ) {
        if( res.status == 200 ) {
            $scope.name = res.data;
        }
    });

    $http.get( 'portfolio/banner' ).then( function( res ) {
        if( res.status == 200 ) {
            $scope.banner = res.data;
        }
    });
}]);