var MYDTokenSale = artifacts.require("./MYDTokenSale.sol");

contract('MYDTokenSale', function(accounts){
    var TokenSaleInstance;
    var tokenPrice = 1000000000000000;

    it('initializes the contract with the correct values', function() {
        return MYDTokenSale.deployed().then(function(instance){
            TokenSaleInstance = instance;
            return TokenSaleInstance.address
        }).then(function(address){
            assert.notEqual(address,0x0,'has contract address');
            return TokenSaleInstance.tokenContract();
        }).then(function(address){
            assert.notEqual(address,0x0,'has token contract address');
            return TokenSaleInstance.tokenPrice();
        }).then(function(price){
            assert.equal(price, tokenPrice, 'token price is correct');
        });
    });
})