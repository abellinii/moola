let DefaultReserveInterestRateStrategy = artifacts.require("DefaultReserveInterestRateStrategy")
let LendingPool = artifacts.require("LendingPool")
let LendingPoolConfigurator = artifacts.require("LendingPoolConfigurator")
let LendingPoolCore = artifacts.require("LendingPoolCore")
let LendingPoolDataProvider = artifacts.require("LendingPoolDataProvider")
let LendingPoolLiquationManager = artifacts.require("LendingPoolLiquationManager")

module.exports = async function (deployer) {
    try {
        await deployer.deploy(DefaultReserveInterestRateStrategy)
        await deployer.deploy(LendingPool)
        await deployer.deploy(LendingPoolConfigurator)
        await deployer.deploy(LendingPoolCore)
        await deployer.deploy(LendingPoolDataProvider)
        await deployer.deploy(LendingPoolLiquationManager)
        
    } catch (e) {
        console.log(`Error in migration: ${e.message}`)
    }
}