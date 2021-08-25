This is to demo solidity smart contract library versus interface.

The contracts are deployed and tested using hardhat.

I follow the url below to link library to contract.
https://hardhat.org/plugins/nomiclabs-hardhat-ethers.html#library-linking
```
const contractFactory = await this.env.ethers.getContractFactory("Example", {
  libraries: {
    ExampleLib: "0x...",
  },
});
```

while this url below gives wrong information.
https://hardhat.org/plugins/hardhat-deploy.html
```
const example = await deploy("Example", {
    from: <deployer>
    args: ["example string argument for the 'Example' contract constructor"],
    libraries: {
        ExampleLibrary: exampleLibrary.address
    }
});
```