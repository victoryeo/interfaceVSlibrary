const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Test BalanceChecker contract", function () {
  let checker
  beforeEach(async function () {
    const BalanceChecker = await ethers.getContractFactory("BalanceChecker");
    console.log('Deploying ...');
    checker = await BalanceChecker.deploy();
    console.log("BalanceChecker address:", checker.address);
  })

  it('get one value', async function () {
    let address = "0xeaf7d8395cce52daef138d39a1cefa51b97c15ae";
    let result = await checker.oneBalance(address);
    console.log(result)
  });

  it('get some value', async function () {
    let array = [
      "0xeaf7d8395cce52daef138d39a1cefa51b97c15ae", 
      "0x8fdd9d7929588f2b6097c2b2f1470939aedfcbc5"
    ];
    let result = await checker.balances(array);
    console.log(result)
  });
})