/**
* @type import('hardhat/config').HardhatUserConfig
*/
require('dotenv').config();
require("@nomiclabs/hardhat-ethers");
// const { ALCHEMY_RINKEBY_URL,MUMBAI_URL, PRIVATE_KEY } = process.env;
module.exports = {
   solidity: "0.8.4",
   networks: {
      hardhat: {},
      mumbai: {
         url: process.env.ALCHEMY_MUMBAI_URL,
         accounts: ["0x"+process.env.PRIVATE_KEY]
      },
      // rinkeby: {
      //    url: process.env.ALCHEMY_RINKEBY_URL,
      //    accounts: ["0x"+process.env.PRIVATE_KEY]
      // },
      ropsten: {
         url: process.env.INFURA_ROPSTEN_URL,
         accounts: ["0x"+process.env.PRIVATE_KEY]
      }
   },
}