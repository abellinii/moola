let MintableERC20 = artifacts.require("MintableERC20")



module.exports = async function (deployer) {
    try {
        await deployer.deploy(MintableERC20)
        
    } catch (e) {
        console.log(`Error in migration: ${e.message}`)
    }
}