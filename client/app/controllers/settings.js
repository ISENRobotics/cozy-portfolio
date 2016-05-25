// ----------------------------------------------------------------------------
// define controller
app.controller( 'settings', ['$scope', '$http', '$translate', '$window', 'Upload', '$timeout', function( $scope, $http, $translate, $window, Upload, $timeout ) {
    $http.get( 'themes' ).then( function( res ) {
        $scope.themes = res.data;
    });

    $http.get( 'portfolio/settings' ).then( function( res ) {
        $scope.settings = res.data;
    });

    $scope.isen = false;
    $http.get( 'isen' ).then( function( res ) {
       $scope.isen = res.data.isIsenAppInstalled;
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

    $scope.import = function() {
        $scope.importInProgress = true;
        $http.post( 'isen' ).then( function() {
            $scope.importInProgress = false;
            $scope.importSuccess    = true;

            $timeout( function() {
                $scope.importSuccess = false;
            }, 5000 );

            $translate( 'settings.isen.success' ).then( function( trad ) {
                $window.alert( trad );
            });
        }, function() {
            $scope.importInProgress = false;
            $scope.importFailed     = true;

            $timeout( function() {
                $scope.importFailed = false;
            }, 5000 );

            $translate( 'settings.isen.failed' ).then( function( trad ) {
                $window.alert( trad );
            });
        });
    };

    // upload on file select or drop
    $scope.upload = function (file) {
        $scope.uploadInProgress = true;
        Upload.upload({
            url: 'upload',
            data: {
                cv: file
            }
        }).then( function() {
            $scope.uploadInProgress = false;
            $scope.uploadSuccess    = true;

            $timeout( function() {
                $scope.uploadSuccess = false;
            }, 5000 );

            // success
            $translate( 'settings.uploaded.success' ).then( function( trad ) {
                $window.alert( trad );
            });
        }, function() {
            $scope.uploadInProgress = false;
            $scope.uploadFailed    = true;

            $timeout( function() {
                $scope.uploadFailed = false;
            }, 5000 );
            // error
            $translate( 'settings.uploaded.error' ).then( function( trad ) {
                $window.alert( trad );
            });
        }, function() {
            // progress event
        });
    };
}]);