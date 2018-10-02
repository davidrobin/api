const fs = require('fs');

module.exports = (filename, content) => {
  fs.writeFile(filename, content, (e) => {
    if (e) throw e;
    console.log('The file has been saved!');
  });
};
