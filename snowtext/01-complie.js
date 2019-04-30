let solc = require('solc') //导入编译器

let fs = require('fs')

let sourceCode = fs.readFileSync('./contracts/snow.sol','utf-8')


let output = solc.compile(sourceCode,1)

// console.log('output:',output)
// let {bytecode,interface} = output['contracts'][':Test']
// console.log(bytecode)
// console.log(interface)
module.exports = output['contracts'][':Test']
// console.log(module.exports = output['contracts'][':Test'])
