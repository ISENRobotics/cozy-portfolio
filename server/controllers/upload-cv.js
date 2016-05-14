// ----------------------------------------------------------------------------
// requirements
var router = require( 'express' ).Router();
var multer = require( 'multer' );
var path   = require( 'path' );
var logger = require( 'logger' );
var upload = multer({
    dest: path.join( __dirname, '..', 'uploads' )
});

// ----------------------------------------------------------------------------
// functions
function getCV( req, res ) {
    res.sendFile( path.join( __dirname, '..', 'uploads', 'cv.pdf' ));
}

// ----------------------------------------------------------------------------
// routes
router.get( '/portfolio/cv.pdf', getCV )
      .get( '/public/portfolio/cv.pdf', getCV );

router.post( 'portfolio/cv.pdf', upload.single( 'cv' ), function( req, res ) {
    logger.info( 'Upload new CV' );
    logger.info( req.body );

    res.sendStatus( 200 );
});

// ----------------------------------------------------------------------------
// exports routes
module.exports = router;