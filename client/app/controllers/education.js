// ----------------------------------------------------------------------------
// define controller
app.controller( 'education', ['$scope', function( $scope ) {
    $scope.educations = [];

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

    $scope.add();
}]);