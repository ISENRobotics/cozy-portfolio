// ----------------------------------------------------------------------------
// requirements
var router = require( 'americano' ).Router();
var multer = require( 'multer' );
var path   = require( 'path' );
var fs     = require( 'fs' );
var logger = require( '../models/logger' );
var upload = multer({
    dest: path.join( __dirname, '..', 'uploads' )
});

// ----------------------------------------------------------------------------
// routes
router.post( '/upload', upload.single( 'cv' ), function( req, res ) {
    fs.readdir( path.join( __dirname, '../..', 'client/public' ), function( error, files ) {
        if( error ) {
            logger.error( error.message );

            res.sendStatus( 500 );

            throw error;
        }

        var write = function() {
            fs.rename( req.file.path, path.join( __dirname, '../..', 'client/public/cv.pdf' ), function( error ) {
                if( error ) {
                    logger.error( error.message );

                    res.sendStatus( 500 );

                    throw error;
                }

                res.sendStatus( 200 );
            });
        };

        if( files.indexOf( 'cv.pdf' ) !== -1 ) {
            fs.unlink( path.join( __dirname, '../..', 'client/public/cv.pdf' ), function( error ) {
                if( error ) {
                    logger.error( error.message );

                    res.sendStatus( 500 );

                    throw error;
                }

                write();
            });

            return;
        }

        write();
    });
});

// ----------------------------------------------------------------------------
// exports routes
module.exports = router;