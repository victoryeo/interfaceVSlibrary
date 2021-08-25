const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Test Library contract", function () {
  let conAc;

  beforeEach(async function () {
    const [owner] = await ethers.getSigners();

    const ConSto = await ethers.getContractFactory("StorageContract");
    //console.log(Lib)
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
    conAc = await ConAction.deploy(conSto.address);
    console.log("ActionWithLib address:", conAc.address);
  });

  it('retrieve same value', async function () {
    let returnVal = await conAc.doSth();
    console.log(returnVal.toString())
    expect(returnVal.toString()).to.equal("2");
  });

});
