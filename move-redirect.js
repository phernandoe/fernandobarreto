const fs = require('fs');

fs.copyFile('_redirects', './out/_next/static/_redirects', err => {
  if (err) {
    console.log('There was an error moving the _redirect file', err);
    throw err;
  } 
  
  console.log('_redirects was copied to ./out/_redirects');
});