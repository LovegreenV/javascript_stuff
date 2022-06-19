//npm - global comes with node
// npm --version

// local dependecy means only for this project
//npm i <package name>

//global use it in any dependency
//npm install -g <packageName>
// sudo npm install -g <packageName> (mac)

//package.json - manifest file (stores info about package)
//manual - create package.json in the root, create properties etc
//npm init  (step by step, press enter to skip)
// npm init - y (everything default)


const _ = require('lodash');

const items = [1,[2,[3,[4]]]]
const newItems = _.flattenDeep(items);

console.log(newItems);