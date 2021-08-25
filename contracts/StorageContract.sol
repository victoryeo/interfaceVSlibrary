// SPDX-License-Identifier: Unlicensed
pragma solidity ^0.8.4;

contract StorageContract {
    uint private data;

    function getData() public view returns (uint) {
        return data;
    }
}