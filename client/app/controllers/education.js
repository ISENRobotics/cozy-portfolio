// ----------------------------------------------------------------------------
// define controller
app.controller( 'education', ['$scope', '$http', function( $scope, $http ) {
    $scope.educations = [];

    // ----------------------------------------------------------------------------
    // get data provide by cozydb
    $http.get( 'portfolio/education' ).then( function( res ) {
        if( res.status == 200 && !require( 'empty-value' )( res.data )) {
            $scope.educations = res.data[0];
        }
    });

    // ----------------------------------------------------------------------------
    // ng change listener
    $scope.change = function() {
        $http.post( 'portfolio/education', $scope.educations ).then( function( res ) {
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

        $scope.educations.push( element );
    };

    // ----------------------------------------------------------------------------
    // remove an element
    $scope.remove = function( $index ) {
        $scope.educations = $scope.educations.filter( function( element, index ) {
            return index != $index;
        });

        if( !$scope.educations.length ) {
            $scope.add();
        }
    };

    // ----------------------------------------------------------------------------
    // default case
    $scope.add();
}]);