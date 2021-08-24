const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Test contract", function () {
  it("Deployment", async function () {
    const [owner] = await ethers.getSigners();

    const Con1 = await ethers.getContractFactory("ActionWithLib");

    const con1 = await Con1.deploy();

  });

});
