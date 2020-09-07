let MockFlashLoanReceiver = artifacts.require("MockFlashLoanReceiver")



module.exports = async function (deployer) {
    try {
        await deployer.deploy(MockFlashLoanReceiver)
        
    } catch (e) {
        console.log(`Error in migration: ${e.message}`)
    }
}