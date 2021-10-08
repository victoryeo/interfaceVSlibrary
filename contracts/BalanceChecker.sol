// SPDX-License-Identifier: Unlicensed
pragma solidity ^0.8.4;

contract BalanceChecker {

    function balances(address[] memory users) public view returns (uint[] memory) {
        uint[] memory addrBalances = new uint[](users.length);
        for(uint i = 0; i < users.length; i++) {
          uint addrIdx = i;
          addrBalances[addrIdx] = users[i].balance;
        }
        return addrBalances;
    }

    function oneBalance(address users) public view returns (uint) {
      uint addrBalances;
 
      addrBalances = users.balance;
      
      return addrBalances;
    }
}