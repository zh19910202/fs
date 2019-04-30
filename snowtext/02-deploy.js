let {bytecode,interface} = require('./01-complie')


console.log(bytecode)
console.log(interface)

let Web3 = require('web3')

let web3 = new Web3()

web3.setProvider('http://localhost:7545')
console.log(web3.version)
console.log(web3.currentProvider)

let contract = new web3.eth.Contract(JSON.parse(interface))

const account = '0x1e90d3b17fe388c032481153b17fe2156e59f718'

contract.deploy({
    data:bytecode,
    arguments:['helloworld']
}).send({
    from:account,
    gas:'3000000',
    gasPrice:'1',
}).then(instance => {
    console.log('address:',instance.options.address)
})