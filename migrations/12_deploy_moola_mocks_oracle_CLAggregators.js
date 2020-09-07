let MockAggregatorBase = artifacts.require("MockAggregatorBase")



module.exports = async function (deployer) {
    try {
        await deployer.deploy(MockAggregatorBase)
        
    } catch (e) {
        console.log(`Error in migration: ${e.message}`)
    }
}