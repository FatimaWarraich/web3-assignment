const Tx     = require('ethereumjs-tx').Transaction
const Web3 = require('web3')
const web3 = new Web3('https://ropsten.infura.io/v3/6f6b89c434f94ab68a1f252f4a8a874f')

const account1 = '0x0ED5E88B944b3354fBb53866baDD02AFD2968d91' // Your account address 1
const account2 = '0x8c04f0867D986cFed598f3863b1bE610f2e8663B' // Your account address 2

const privateKey1 = Buffer.from('4eefbf9166a5421372ca422d147272f16b354e4bd0e0e1c85b49195eb294cbd5', 'hex')
const privateKey2 = Buffer.from('f0be007eb1d4201c22ff29ee43513ed750a1d4089f3c8b4cd903b8598f9fbc4e', 'hex')

// Read the deployed contract - get the addresss from Etherscan
const contractAddress = '0x6c2e26686f1c3670B1A9bEb8d5004a16eB71BAf1'
const abi =require('./my_abi.json');

const contract = new web3.eth.Contract(abi, contractAddress)

// Transfer some tokens
const contractDeploymentAsync= async() => {
    try {
          let txCount= await web3.eth.getTransactionCount(account1)
          // build the transaction
           const txObject = {
           nonce:    web3.utils.toHex(txCount),
           gasLimit: web3.utils.toHex(800000), // Raise the gas limit to a much higher amount
           gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei')),
           to: contractAddress,
           data: contract.methods.transfer(account2, 1000).encodeABI()
                             }
           //sign the transaction
           const tx = new Tx(txObject,{chain:'ropsten'})
            tx.sign(privateKey1)

           const serializedTx = tx.serialize()
            const raw = '0x' + serializedTx.toString('hex')
             //broadcast the transaction
            let response= await web3.eth.sendSignedTransaction(raw)
            console.log("Transaction Hash:",response)

			    const balance=await contract.methods.balanceOf(account2).call();
	        console.log("Total Supply",balance)
        }
        catch(error)
        {
          console.log("error",error)
         }    
    
     }
     contractDeploymentAsync();

     contract.methods.balanceOf(account2).call((err, balanceOf) => { console.log("balance of account 2 after transfer",balanceOf) })


  //const getBalance = async()=>{
	//  const balance=await contract.methods.balanceOf(account2).encodeABI();
	 // console.log("Balance After Transfer in Account 2",balance);
 // }
 // getBalance();