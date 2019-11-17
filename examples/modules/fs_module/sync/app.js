const fs = require('fs');

//the sync way

const fileData = fs.readFileSync('file.txt', 'utf8');

console.log(fileData);

fs.writeFileSync('writteFile.txt', 'This data was written to file');