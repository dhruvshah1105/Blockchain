var MYDToken = artifacts.require("./MYDToken.sol");
var MYDTokenSale = artifacts.require("./MYDTokenSale.sol");

module.exports = function(deployer) {
    deployer.deploy(MYDToken,1000000).then(function(){

        var tokenPrice = 1000000000000000;
        return deployer.deploy(MYDTokenSale, MYDToken.address, tokenPrice);
    });
};