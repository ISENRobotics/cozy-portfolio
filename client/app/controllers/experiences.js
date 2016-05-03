// ----------------------------------------------------------------------------
// define controller
app.controller( 'experiences', ['$scope', '$http', function( $scope, $http ) {
    $scope.experiences = [];

    // ----------------------------------------------------------------------------
    // get data provide by cozydb
    $http.get( 'portfolio/experiences' ).then( function( res ) {
        if( res.status == 200 && !require( 'empty-value' )( res.data )) {
            $scope.experiences = res.data[0];
        }
    });

    // ----------------------------------------------------------------------------
    // ng change listener
    $scope.change = function() {
        $http.post( 'portfolio/experiences', $scope.experiences ).then( function( res ) {
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

        $scope.experiences.push( element );
    };

    // ----------------------------------------------------------------------------
    // remove an element
    $scope.remove = function( $index ) {
        $scope.experiences = $scope.experiences.filter( function( element, index ) {
            return index != $index;
        });

        if( !$scope.experiences.length ) {
            $scope.add();
        }

        $scope.change();
    };

    // ----------------------------------------------------------------------------
    // default case
    $scope.add();
}]);