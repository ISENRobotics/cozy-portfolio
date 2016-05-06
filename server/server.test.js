var http = require ('http');

module.exports = function( QUnit ) {
    QUnit.test( 'routes test', function( assert ) {
        assert.expect(1);
        var done = assert.async(1);

        http.get( {
            port: process.env.PORT | 9200,
            path: '/portfolio'
        },
        function( res ) {
            assert.equal( res.statusCode, 200 );
            done();
        });

    });
};
