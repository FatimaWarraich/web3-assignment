const Web3 = require('web3')
const web3 = new Web3('https://ropsten.infura.io/v3/6f6b89c434f94ab68a1f252f4a8a874f')

const getBlock_number= async()=>{

    try{
        const blockNumber= await web3.eth.getBlockNumber();
        console.log("block Number is",blockNumber);
    }
    catch(e){
        console.log("error",e);
    }
}
const getlatest_block= async()=>{

    try{
        const latestblock= await web3.eth.getBlock('latest');
        console.log("latest block is",latestblock);
    }
    catch(e){
        console.log("error",e)
    }
}
const getLastBlocks = async (count) => {
    try {
        const latestBlockNumber = await web3.eth.getBlockNumber();

        for (var i = 0; i < count; i++) {
            const block = await web3.eth.getBlock(latestBlockNumber - i);
            console.log('Block Number (Hash):', `${block.number} (${block.hash})`);
        }
    } catch (e) {
        console.log('Error: ', e);
    }
}
getBlock_number();
getlatest_block();
getLastBlocks(3);