// Modules

const names = require('./4-names')
const sayHi = require('./5-second_module')
//console.log(names)
const anything = require('./6-alternative-flavors')

// this shows what is returned from that module
// console.log(anything)
require('./7-mind-grenade')

sayHi('susan')
sayHi(names.john)
sayHi(names.peter)
