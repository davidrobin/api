const f = require('./functions.js');
const fs = require('fs');
const request = require('request');

let results = '';
let url = 'https://www.googleapis.com/customsearch/v1?key=AIzaSyAwPYxNWR5Us4rcGsbkDYJgBjnCAjzS2zA&cx=004085096796780912783:7hrytn6ygiq&q=site:*.bouyguestelecom.fr&start=1';

request({
  method: 'GET',
  uri: url,
  json: true
}, (e,r,b) => {
  if (e) throw e;
  if (r && r.statusCode === 200) {
    console.log(b.queries.request[0].startIndex);
    b.items.forEach((result, index) => {
      results += index + ';' + result.title + ';' + result.link + '\n';
    });
    console.log(results);
    try {
      fs.appendFileSync('results-' + f.dateTime() + '.txt', results);
    } catch (error) {
      throw error;
    }
  } else {
    console.log('No response or response status code different from 200');
  }
});

f.helloWorld('Test Hello World');
f.writeCSV('test.csv', f.sanitizeStringForCSV('|', '|fefefef|dzedzdzd'));
