const { ethers } = require("hardhat")
const rockMusicNFT_JSON= require("../artifacts/contracts/RockMusicNFT.sol/RockMusicNFT.json")

async function main() {
  const abi = rockMusicNFT_JSON.abi

  const provider = new ethers.providers.AlchemyProvider("maticmum", process.env.ALCHEMY_MUMBAI_API_KEY)
  const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider)
  const signer = wallet.connect(provider)
  // SMF 
  const rockMusicNFT = new ethers.Contract(process.env.ALCHEMY_MUMBAI_CONTRACT_ADDRESS, abi, signer)
  await rockMusicNFT.mint("https://ipfs.io/ipfs/QmVKwU2miZzK6yEtz1tYukj2xRXDhhaAv9b8nBwVdUsTSq")

  console.log('NFT minted by Alchemy API')
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
