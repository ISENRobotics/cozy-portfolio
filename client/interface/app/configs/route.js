// -----------------------------------------------------------------------------
// define routes
var routes = [];

// -----------------------------------------------------------------------------
// bind routes
app.config(["$routeProvider", function( $routeProvider ) {
    for( var i in routes ) {
        $routeProvider.when( routes[i].link, {
            templateUrl: routes[i].templateUrl,
            controller: routes[i].controller
        });
    }

    $routeProvider.otherwise( "/home" );
}]);
