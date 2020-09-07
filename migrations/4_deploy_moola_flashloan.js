let FlashLoanReceiverBase = artifacts.require("FlashLoanReceiverBase")
let IFlashLoanReceiver = artifacts.require("IFlashLoanReceiver")

module.exports = async function (deployer) {
    try {
        await deployer.deploy(FlashLoanReceiverBase)
        await deployer.deploy(IFlashLoanReceiver)
 
    } catch (e) {
        console.log(`Error in migration: ${e.message}`)
    }
}