const ghpages = require('gh-pages');
 
ghpages.publish('dist', {
  repo: 'git@github.com:BigLiao/blog.git'
}, function(err) {
  if (err) {
    console.error(err);
  }
  console.log('success');
});