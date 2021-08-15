pragma solidity ^0.5.0;

import "./MYDToken.sol";

contract MYDTokenSale{
    address admin;
    MYDToken public tokenContract;
    uint256 public tokenPrice;

    constructor(MYDToken _tokenContract, uint256 _tokenPrice) public {
        admin = msg.sender;
        tokenContract = _tokenContract;
        tokenPrice = _tokenPrice;
    }
}