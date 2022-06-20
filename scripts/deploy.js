const { ethers } = require("hardhat")
//Option 

async function main(){

    const RockMusicNFT =await ethers.getContractFactory("RockMusicNFT")
    const rockMusicNFT=await RockMusicNFT.deploy("RockMusicNFT","1ROCK")
    console.log("Deployed contract successfully to "+rockMusicNFT.address)


    //0_bon_jovi_1.json to polygon mumbai by alchemy
    // npx hardhat run scripts\deploy.js --network mumbai
    const newItemId=await rockMusicNFT.mint("https://ipfs.io/ipfs/QmXbqNTwB7pb4kxnpji6BmYYWGEBvX6DmuF5aHn4iUnjAf")

        //1_dream_theather_1.json   to ropsten by infura
    //npx hardhat run scripts\deploy.js --network ropsten
    // const newItemId=await rockMusicNFT.mint("https://ipfs.io/ipfs/Qma2ZZmHZJKePMsMuL4T6PJuusoeGnyVwQgAZ23hVKpChT")

    //3_bon_jovi_1.json to polygon mumbai by alchemy
    // npx hardhat run scripts\deploy.js --network mumbai
    //const newItemId=await rockMusicNFT.mint("https://ipfs.io/ipfs/QmPWevSK6ffujzjKe6o4H3muGgRH8ozXxSLYW2qkoi9g1j")

    console.log("NFT mints successfully : "+ newItemId )
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
