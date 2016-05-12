// ----------------------------------------------------------------------------
// easter-egg run config
app.run(['$http', '$window', function( $http, $window ) {
    var easters = [
        { name: /John Cena/i,        link: 'assets/cena.mp3' },
        { name: /David Hasselhoff/i, link: 'assets/hasselhoff.mp3' }
    ];

    $http.get( 'user/public_name' ).then( function( res ) {
        if( res.status == 200 ) {
            for( var i in easters ) {
                if( easters[i].name.test( res.data )) {
                    var audio = $window.document.createElement( 'audio' );

                    audio.src              = easters[i].link;
                    audio.autoplay         = 'autoplay';
                    audio.style.visibility = 'hidden';

                    $window.document.querySelector( 'body' ).appendChild( audio );

                    break;
                }
            }
        }
    });
}]);