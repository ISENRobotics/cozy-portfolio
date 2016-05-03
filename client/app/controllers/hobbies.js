// ----------------------------------------------------------------------------
// define controller
app.controller( 'hobbies', ['$scope', '$http', function( $scope, $http ) {
    $scope.hobbies = [];

    // ----------------------------------------------------------------------------
    // get data provide by cozydb
    $http.get( 'portfolio/hobbies' ).then( function( res ) {
        if( res.status == 200 && !require( 'empty-value' )( res.data )) {
            $scope.hobbies = res.data[0];
        }
    });

    // ----------------------------------------------------------------------------
    // ng change listener
    $scope.change = function() {
        $http.post( 'portfolio/hobbies', $scope.hobbies ).then( function( res ) {
            if( res.status != 200 ) {
                // insert error logs here
            }
        });
    };

    // ----------------------------------------------------------------------------
    // add an element
    $scope.add = function( element ) {
        if( !element ) {
            element = {
                title: '',
                date: '',
                content:''
            };
        }

        $scope.hobbies.push( element );
    };

    // ----------------------------------------------------------------------------
    // remove an element
    $scope.remove = function( $index ) {
        $scope.hobbies = $scope.hobbies.filter( function( element, index ) {
            return index != $index;
        });

        if( !$scope.hobbies.length ) {
            $scope.add();
        }

        $scope.change();
    };

    // ----------------------------------------------------------------------------
    // default case
    $scope.add();
}]);