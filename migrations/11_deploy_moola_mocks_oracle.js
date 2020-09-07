let GenericOracleI = artifacts.require("GenericOracleI")
let LendingRateOracle = artifacts.require("LendingRateOracle")
let PriceOracle = artifacts.require("PriceOracle")


module.exports = async function (deployer) {
    try {
        await deployer.deploy(GenericOracleI)
        await deployer.deploy(LendingRateOracle)
        await deployer.deploy(PriceOracle)
        
    } catch (e) {
        console.log(`Error in migration: ${e.message}`)
    }
}