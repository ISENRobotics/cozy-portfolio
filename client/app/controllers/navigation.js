// ----------------------------------------------------------------------------
// define controller
app.controller( 'navigation', ['$scope', function( $scope ) {
    $scope.menu = [
        { link: '/presentation', translate: 'navigation.presentation' },
        { link: '/education',    translate: 'navigation.education' },
        { link: '/skills',       translate: 'navigation.skills' },
        { link: '/experiences',  translate: 'navigation.experiences' },
        { link: '/hobbies',      translate: 'navigation.hobbies' },
    ];

    $scope.active = {
        presentation: true,
        education: false,
        skills: false,
        experiences: false,
        hobbies: false
    };

    $scope.setActive = function( index ) {
         $scope.active = {
            presentation: false,
            education: false,
            skills: false,
            experiences: false,
            hobbies: false
        };

        $scope.active[index] = true;
    };
}]);