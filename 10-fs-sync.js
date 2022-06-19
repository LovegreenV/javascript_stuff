const {readFileSync, writeFileSync} = require('fs');

console.log('Start');

//need to provide a path
const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/second.txt','utf8')

console.log(first, second);

// file name and value we want to pass
writeFileSync(
    './content/result-sync.txt',
    `Here is the result ${first},${second}`,
    { flag: 'a'}
    )
// to upend add an object {flag: 'a'}

console.log('done with this task');
console.log('strating the next one');
