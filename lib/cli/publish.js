const ghpages = require( 'gh-pages' );

function publish() {
  ghpages.publish( 'dist', {
    // repo: 'git@github.com:BigLiao/blog.git'
  }, function ( err ) {
    if ( err ) {
      console.error( err );
    }
    console.log( 'Publish succeed!' );
  } );
}

module.exports = function() {
  console.log('Publish');
}