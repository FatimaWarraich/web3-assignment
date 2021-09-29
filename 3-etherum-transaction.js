const Tx  = require('ethereumjs-tx').Transaction
const Web3 = require('web3')
const web3 = new Web3('https://ropsten.infura.io/v3/6f6b89c434f94ab68a1f252f4a8a874f')

const account1 = '0x0ED5E88B944b3354fBb53866baDD02AFD2968d91' // Your account address 1
const account2 = '0x8c04f0867D986cFed598f3863b1bE610f2e8663B' // Your account address 2

const privatekey1='4eefbf9166a5421372ca422d147272f16b354e4bd0e0e1c85b49195eb294cbd5'
const privatekey2='f0be007eb1d4201c22ff29ee43513ed750a1d4089f3c8b4cd903b8598f9fbc4e'

 const privatek1 = Buffer.from(privatekey1, 'hex')
 //const privatek2 = Buffer.from(privatekey2, 'hex')

web3.eth.getTransactionCount(account1, (err, txCount) => {
  // Build the transaction
  const txObject = {
    nonce:    web3.utils.toHex(txCount),
    to:       account2,
    value:    web3.utils.toHex(web3.utils.toWei('0.1', 'ether')),
    gasLimit: web3.utils.toHex(21000),
    gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei'))
  }

  // Sign the transaction
  const tx = new Tx(txObject,{chain:'ropsten'});
  tx.sign(privatek1)

  const serializedTx = tx.serialize()
  const raw = '0x' + serializedTx.toString('hex')

  // Broadcast the transaction
  web3.eth.sendSignedTransaction(raw, (err, txHash) => {
    console.log('txHash:', txHash)
    // Now go check etherscan to see the transaction!
  })
})