// ----------------------------------------------------------------------------
// define controller
app.controller( 'skills', ['$scope', function( $scope ) {
    $scope.skills = [];

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
    };

    $scope.add();
}]);