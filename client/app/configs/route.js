// -----------------------------------------------------------------------------
// bind routes
app.config(["$routeProvider", function( $routeProvider ) {
    // -----------------------------------------------------------------------------
    // define routes
    var routes = [
        { link: '/home',         templateUrl: 'views/home.html',         controller: 'home' },
        { link: '/banner',       templateUrl: 'views/banner.html',       controller: 'banner' },
        { link: '/presentation', templateUrl: 'views/presentation.html', controller: 'presentation' },
        { link: '/education',    templateUrl: 'views/educations.html',    controller: 'educations' },
        { link: '/skills',       templateUrl: 'views/skills.html',       controller: 'skills' },
        { link: '/experiences',  templateUrl: 'views/experiences.html',  controller: 'experiences' },
        { link: '/hobbies',      templateUrl: 'views/hobbies.html',      controller: 'hobbies' },
        { link: '/contact',      templateUrl: 'views/contact.html',      controller: 'contact' },
        { link: '/settings',     templateUrl: 'views/settings.html',     controller: 'settings' }
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
    $routeProvider.otherwise( "/home" );
}]);
