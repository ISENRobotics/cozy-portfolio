// ----------------------------------------------------------------------------
// define controller
app.controller( 'settings', ['$scope', '$http', '$translate', '$window', function( $scope, $http, $translate, $window ) {
    $http.get( 'themes' ).then( function( res ) {
        $scope.themes = res.data;
    });

    $http.get( 'portfolio/settings' ).then( function( res ) {
        $scope.settings = res.data;
    });

    $scope.change = function() {
        $http.post( 'portfolio/settings', $scope.settings );
    };

    $scope.destroy = function() {
        $http.delete( 'portfolio' ).then( function() {
            $translate( 'settings.destroy.success' ).then( function( trad ) {
                $window.alert( trad );
                $window.document.location.reload( true );
            });
        });
    };
}]);