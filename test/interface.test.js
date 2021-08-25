const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Test Interface contract", function () {
  let conInt;

  beforeEach(async function () {
    const [owner] = await ethers.getSigners();

    const ConSto = await ethers.getContractFactory("StorageUsingInterface");
    console.log('Deploying ...');
    const conSto = await ConSto.deploy();
    console.log("StorageUsingInterface address:", conSto.address);
  
    const ConInt = await ethers.getContractFactory("ActionWithInterface");
    //console.log(ConInt)
    console.log('Deploying ...');
    conInt = await ConInt.deploy(conSto.address);
    console.log("ActionWithInterface address:", conInt.address);
  });

  it('retrieve same value', async function () {
    let returnVal = await conInt.doSth();
    console.log(returnVal.toString())
    expect(returnVal.toString()).to.equal("2");
  });

});
