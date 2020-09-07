let ChainlinkProxyPriceProvider = artifacts.require("ChainlinkProxyPriceProvider")
let IERC20DetailedBytes = artifacts.require("IERC20DetailedBytes")
let WalletBalanceProvider = artifacts.require("WalletBalanceProvider")


module.exports = async function (deployer) {
    try {
        await deployer.deploy(ChainlinkProxyPriceProvider)
        await deployer.deploy(IERC20DetailedBytes)
        await deployer.deploy(WalletBalanceProvider)
        
    } catch (e) {
        console.log(`Error in migration: ${e.message}`)
    }
}