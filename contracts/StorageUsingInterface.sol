// SPDX-License-Identifier: Unlicensed
pragma solidity ^0.8.4;

import './IStorage.sol';

contract StorageUsingInterface is IStorage {
    uint private data = 1;

    function getData() public view override returns (uint) {
        return data;
    }
}