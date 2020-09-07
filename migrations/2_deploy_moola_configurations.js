let AddressStorage = artifacts.require("AddressStorage")
let LendingPoolAddressProvider = artifacts.require("LendingPoolAddressesProvider")
let LendingPoolParametersProvider = artifacts.require("LendingPoolParametersProvider")
let UintStorage = artifacts.require("UintStorage")

module.exports = async function (deployer) {
    try {
        await deployer.deploy(AddressStorage)
        await deployer.deploy(LendingPoolAddressProvider)
        await deployer.deploy(LendingPoolParametersProvider)
        await deployer.deploy(UintStorage)
    } catch (e) {
        console.log(`Error in migration: ${e.message}`)
    }
}