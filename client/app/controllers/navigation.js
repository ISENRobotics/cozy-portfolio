// ----------------------------------------------------------------------------
// define controller
app.controller( 'navigation', ['$scope', function( $scope ) {
    $scope.menu = [
        { link: '/banner',       translate: 'navigation.banner' },
        { link: '/presentation', translate: 'navigation.presentation' },
        { link: '/education',    translate: 'navigation.education' },
        { link: '/skills',       translate: 'navigation.skills' },
        { link: '/experiences',  translate: 'navigation.experiences' },
        { link: '/hobbies',      translate: 'navigation.hobbies' }
    ];

    $scope.setActive = function( index ) {
        for( var i in $scope.menu ) {
            if( $scope.menu[i].link == index ) {
                $scope.menu[i].active = true;
            } else {
                $scope.menu[i].active = false;
            }
        }
    };

    $scope.save = function() {

    };

    $scope.setActive( '/banner' );
}]);