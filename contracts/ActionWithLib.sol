// SPDX-License-Identifier: Unlicensed
pragma solidity ^0.8.4;

import './StorageLib.sol';

contract ActionWithLib {
    using StorageLib for address;
    address public storageContract;

    constructor(address _storageContract) {
        storageContract = _storageContract;
    }

    function doSth() public view returns (uint) {
        uint returnData = storageContract.getData();
        returnData += 1;
        return returnData;
    }
}