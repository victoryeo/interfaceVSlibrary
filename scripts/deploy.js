const { ethers } = require('hardhat');

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);
  console.log("Account balance:", (await deployer.getBalance()).toString());

  // deploy library
  const ConSto = await ethers.getContractFactory("StorageContract");
  console.log('Deploying ...');
  const conSto = await ConSto.deploy();
  console.log("StorageContract address:", conSto.address);

  const Lib = await ethers.getContractFactory("StorageLib");
  //console.log(Lib)
  console.log('Deploying ...');
  const lib = await Lib.deploy();
  console.log("Library address:", lib.address);

  const ConAction = await ethers.getContractFactory("ActionWithLib", {libraries:{StorageLib: lib.address}});
  //console.log(ConAction)
  console.log('Deploying ...');
  const conAc = await ConAction.deploy(conSto.address);
  console.log("ActionWithLib address:", conAc.address);

  // deploy interface
  const ConStoInt = await ethers.getContractFactory("StorageUsingInterface");
  console.log('Deploying ...');
  const conStoInt = await ConStoInt.deploy();
  console.log("StorageUsingInterface address:", conStoInt.address);

  const ConInt = await ethers.getContractFactory("ActionWithInterface");
  //console.log(ConInt)
  console.log('Deploying ...');
  conInt = await ConInt.deploy(conSto.address);
  console.log("ActionWithInterface address:", conInt.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
