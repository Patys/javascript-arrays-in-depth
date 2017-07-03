let whitelist = ['.css', '.js'];

let events = [
  {file: 'css/core.css'},
  {file: 'js/app.js'},
  {file: 'index.html'}
];

let filtered = events.filter(event => {
  let ext = require('path').extname(event.file);
  return whitelist.indexOf(ext) > -1;
});

console.log(filtered);
