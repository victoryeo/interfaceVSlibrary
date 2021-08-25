// SPDX-License-Identifier: Unlicensed
pragma solidity ^0.8.4;

import './IStorage.sol';

contract ActionWithInterface {
    IStorage public storageContract;

    constructor(address _storageContract) {
        storageContract = IStorage(_storageContract);
    }

    function doSth() public view returns (uint) {
        uint returnData = storageContract.getData();
        returnData += 1;
        return returnData;
    }
}