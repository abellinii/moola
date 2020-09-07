let MockLendingPoolCore = artifacts.require("MockLendingPoolCore")



module.exports = async function (deployer) {
    try {
        await deployer.deploy(MockLendingPoolCore)
        
    } catch (e) {
        console.log(`Error in migration: ${e.message}`)
    }
}