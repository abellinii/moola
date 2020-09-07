let IChainlinkAggregator = artifacts.require("IChainlinkAggregator")
let IFeeProvider = artifacts.require("IFeeProvider")
let IKyberNetworkProxyInterface = artifacts.require("IKyberNetworkProxyInterface")
let ILendingPoolAddressProvider = artifacts.require("ILendingPoolAddressProvider")
let ILendingRateOracle = artifacts.require("ILendingRateOracle")
let IPriceOracle = artifacts.require("IPriceOracle")
let IPriceOracleGetter = artifacts.require("IPriceOracleGetter")
let IPriceOracleGetter = artifacts.require("IReserveInterestRateStrategy")

module.exports = async function (deployer) {
    try {
        await deployer.deploy(IChainlinkAggregator)
        await deployer.deploy(IFeeProvider)
        await deployer.deploy(IKyberNetworkProxyInterface)
        await deployer.deploy(ILendingPoolAddressProvider)
        await deployer.deploy(ILendingRateOracle)
        await deployer.deploy(IPriceOracle)
        await deployer.deploy(IPriceOracleGetter)
        await deployer.deploy(IReserveInterestRateStrategy)
 
    } catch (e) {
        console.log(`Error in migration: ${e.message}`)
    }
}