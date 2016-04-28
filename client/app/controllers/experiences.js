// ----------------------------------------------------------------------------
// define controller
app.controller( 'experiences', ['$scope', function( $scope ) {
    $scope.experiences = [];

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
    };

    $scope.add();
}]);