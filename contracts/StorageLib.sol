// SPDX-License-Identifier: Unlicensed
pragma solidity ^0.8.4;

import './StorageWithLib.sol';
import "hardhat/console.sol";

library StorageLib {
    function getData(address _storageContract) public view returns (uint) {
        console.log("StorageLib getData");
        return StorageWithLib(_storageContract).getData();
    }
}