// ----------------------------------------------------------------------------
// define controller
app.controller( 'skills', ['$scope', '$http', function( $scope, $http ) {
    $scope.skills = [];

    // ----------------------------------------------------------------------------
    // get data provide by cozydb
    $http.get( 'portfolio/skills' ).then( function( res ) {
        if( res.status == 200 && !require( 'empty-value' )( res.data )) {
            $scope.skills = res.data[0];
        }
    });

    // ----------------------------------------------------------------------------
    // ng change listener
    $scope.change = function() {
        $http.post( 'portfolio/skills', $scope.skills ).then( function( res ) {
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

        $scope.skills.push( element );
        $scope.change();
    };

    // ----------------------------------------------------------------------------
    // remove an element
    $scope.remove = function( $index ) {
        $scope.skills = $scope.skills.filter( function( element, index ) {
            return index != $index;
        });

        if( !$scope.skills.length ) {
            $scope.add();
        }

        $scope.change();
    };

    // ----------------------------------------------------------------------------
    // default
    $scope.add();
}]);