// -----------------------------------------------------------------------------
// bind routes
app.config(["$routeProvider", function( $routeProvider ) {
    // -----------------------------------------------------------------------------
    // define routes
    var routes = [
        { link: '/presentation', templateUrl: 'views/presentation.html', controller: 'presentation' },
        { link: '/education', templateUrl: 'views/education.html', controller: 'education' },
        { link: '/skills', templateUrl: 'views/skills.html', controller: 'skills' },
        { link: '/experiences', templateUrl: 'views/experiences.html', controller: 'experiences' },
        { link: '/hobbies', templateUrl: 'views/hobbies.html', controller: 'hobbies' },
    ];


    // -----------------------------------------------------------------------------
    // bind routes
    for( var i in routes ) {
        $routeProvider.when( routes[i].link, {
            templateUrl: routes[i].templateUrl,
            controller: routes[i].controller
        });
    }

    // -----------------------------------------------------------------------------
    // otherwise reroute
    $routeProvider.otherwise( "/presentation" );
}]);
