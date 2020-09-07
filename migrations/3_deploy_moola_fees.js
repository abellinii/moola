
let FeeProvider = artifacts.require("FeeProvider")
let tokenDistributor = artifacts.require("tokenDistributor")

module.exports = async function (deployer) {
    try {
        await deployer.deploy(tokenDistributor)
        await deployer.deploy(FeeProvider)
 
    } catch (e) {
        console.log(`Error in migration: ${e.message}`)
    }
}