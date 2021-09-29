const Web3 = require('web3')
const rpcURL = 'https://rinkeby.infura.io/v3/6f6b89c434f94ab68a1f252f4a8a874f' // Your RCkP URL goes here
const web3 = new Web3(rpcURL)
const address = '0x0ED5E88B944b3354fBb53866baDD02AFD2968d91' // Your account address goes here
web3.eth.getBalance(address, (err, wei) => {
    console.log("balance in wei",wei);
    balance = web3.utils.fromWei(wei, 'ether') 
   console.log("balance in ethers",balance);
})