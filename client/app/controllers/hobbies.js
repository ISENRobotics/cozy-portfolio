// ----------------------------------------------------------------------------
// define controller
app.controller( 'hobbies', ['$scope', function( $scope ) {
    $scope.hobbies = [];

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
    };

    $scope.add();
}]);