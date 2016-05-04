// ----------------------------------------------------------------------------
// define controller
app.controller( 'educations', ['$scope', '$http', function( $scope, $http ) {
    $scope.data = {
        contents: []
    };

    // ----------------------------------------------------------------------------
    // get data provide by cozydb
    $http.get( 'portfolio/educations' ).then( function( res ) {
        if( res.status == 200 && !require( 'empty-value' )( res.data )) {
            $scope.data = res.data;
        }
    });

    // ----------------------------------------------------------------------------
    // ng change listener
    $scope.change = function() {
        $http.post( 'portfolio/educations', $scope.data ).then( function( res ) {
            if( res.status != 200 ) {
                // insert error logs here
            }
        });
    };

    // ----------------------------------------------------------------------------
    // add an element
    $scope.add = function( element ) {
        if( !element ) {
            element = {};
        }

        $scope.data.contents.push( element );
    };

    // ----------------------------------------------------------------------------
    // remove an element
    $scope.remove = function( $index ) {
        $scope.data.contents = $scope.data.contents.filter( function( element, index ) {
            return index != $index;
        });

        if( !$scope.data.contents.length ) {
            $scope.add();
        }

        $scope.change();
    };

    // ----------------------------------------------------------------------------
    // default case
    $scope.add();
}]);