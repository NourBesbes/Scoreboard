fs = require('fs');
var m = JSON.parse(fs.readFileSync('../../config.json').toString());
m.team_home="nour"
fs.writeFile('../../config.json', JSON.stringify(m));

