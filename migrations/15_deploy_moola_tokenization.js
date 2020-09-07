let AToken = artifacts.require("AToken")



module.exports = async function (deployer) {
    try {
        await deployer.deploy(AToken)
        
    } catch (e) {
        console.log(`Error in migration: ${e.message}`)
    }
}