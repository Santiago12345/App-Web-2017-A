/**
 * Created by USRDEL on 3/6/17.
 */
const fs = require('fs');

fs.readFile('texto.txt','utf8', function(err, data){
    if (err) throw err;
console.log(data);
});