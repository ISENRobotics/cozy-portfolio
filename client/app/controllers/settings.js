// ----------------------------------------------------------------------------
// define controller
app.controller( 'settings', ['$scope', '$http', '$translate', '$window', function( $scope, $http, $translate, $window ) {
    $http.get( 'themes' ).then( function( res ) {
        if( res.status == 200 ) {
            $scope.themes = res.data;
        }
    });

    $http.get( 'portfolio/settings' ).then( function( res ) {
        if( res.status == 200 ) {
            $scope.settings = res.data;
        }
    });

    $scope.change = function() {
        $http.post( 'portfolio/settings', $scope.settings ).then( function( res ) {
           if( res.status != 200 ) {
               // insert log error
           }
        });
    };

    $scope.destroy = function() {
        $http.delete( 'portfolio' ).then( function( res ) {
            if( res.status != 200 ) {
                // insert log error
            } else {
                $translate( 'settings.destroy.success' ).then( function( trad ) {
                    $window.alert( trad );
                    $window.document.location.reload( true );
                });
            }
        });
    };
}]);