// ----------------------------------------------------------------------------
// define controller
app.controller( 'navigation', ['$scope', '$location', function( $scope, $location ) {
    $scope.menu = [
        { link: '/home',         translate: 'navigation.home' },
        { link: '/banner',       translate: 'navigation.banner' },
        { link: '/presentation', translate: 'navigation.presentation' },
        { link: '/education',    translate: 'navigation.education' },
        { link: '/skills',       translate: 'navigation.skills' },
        { link: '/experiences',  translate: 'navigation.experiences' },
        { link: '/hobbies',      translate: 'navigation.hobbies' },
        { link: '/contact',      translate: 'navigation.contact' }
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

    $scope.setActive( $location.path());
}]);