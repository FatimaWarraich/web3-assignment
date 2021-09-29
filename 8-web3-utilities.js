const Web3 = require('web3')
const web3 = new Web3('https://ropsten.infura.io/v3/6f6b89c434f94ab68a1f252f4a8a874f')
const _ = require("underscore");

const getAverageGasPrice = async () => {
    try {
        const gasPrice = await web3.eth.getGasPrice();
        console.log('Gas (wei): ', gasPrice);
        console.log('Gas (gwei): ', web3.utils.fromWei(gasPrice, 'gwei'));
    } catch (e) {
        console.log('Error: ', e);
    }
}

const hashGenerator = (stringToEncode) => {
    try {
        console.log('sha3:', web3.utils.sha3(stringToEncode));
        console.log('keccak256:', web3.utils.keccak256(stringToEncode));
    } catch (e) {
        console.log('Error: ', e);
    }
}

const generateRandomHex = (bytes) => {
    try {
        console.log('Random Hex:', web3.utils.randomHex(bytes));
    } catch (e) {
        console.log('Error: ', e);
    }
}

const useUnderscore_Library = () => {
    try {
        
        var evens = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
        console.log("even Numbers are",evens);
        var keys= _.keys({one: 1, two: 2, three: 3});
        console.log("keys",keys);
    }
     catch (e) {
        console.log('Error: ', e);
    }
}

getAverageGasPrice();

hashGenerator('Fatima Warraich');

generateRandomHex(11);

useUnderscore_Library();