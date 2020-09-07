let CoreLibrary = artifacts.require("CoreLibrary")
let EtheAddressLib = artifacts.require("EtheAddressLib")
let WadRayMath = artifacts.require("WadRayMath")
let Ownable = artifacts.require("Ownable")


module.exports = async function (deployer) {
    try {
        await deployer.deploy(CoreLibrary)
        await deployer.deploy(EtheAddressLib)
        await deployer.deploy(WadRayMath)
        await deployer.deploy(Ownable)
        
    } catch (e) {
        console.log(`Error in migration: ${e.message}`)
    }
}