const { ethers } = require('hardhat');

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);
  console.log("Account balance:", (await deployer.getBalance()).toString());

  const ConSto = await ethers.getContractFactory("StorageContract");
  //console.log(Lib)
  console.log('Deploying ...');
  const conSto = await ConSto.deploy();
  console.log("StorageContract address:", conSto.address);

  const Lib = await ethers.getContractFactory("StorageLib");
  //console.log(Lib)
  console.log('Deploying ...');
  const lib = await Lib.deploy();
  console.log("lib address:", lib.address);

  const ConAction = await ethers.getContractFactory("ActionWithLib", {libraries:{StorageLib: lib.address}});
  //console.log(ConAction)
  console.log('Deploying ...');
  const conAc = await ConAction.deploy(conSto.address);
  console.log("ActionWithLib address:", conAc.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
