let AdminUpgradabilityProxy = artifacts.require("AdminUpgradabilityProxy")
let BaseAdminUpgradabilityProxy = artifacts.require("BaseAdminUpgradabilityProxy")
let BaseUpgradabilityProxy = artifacts.require("BaseUpgradabilityProxy")
let Intializable = artifacts.require("Intializable")
let IntializableAdminUpgradabilityProxy = artifacts.require("IntializableAdminUpgradabilityProxy")
let IntializableUpgradabilityProxy = artifacts.require("IntializableUpgradabilityProxy")
let Proxy = artifacts.require("Proxy")
let UpgradabilityProxy = artifacts.require("UpgradabilityProxy")
let VersionedInitializable = artifacts.require("VersionedInitializable")



module.exports = async function (deployer) {
    try {
        await deployer.deploy(AdminUpgradabilityProxy)
        await deployer.deploy(BaseAdminUpgradabilityProxy)
        await deployer.deploy(BaseUpgradabilityProxy)
        await deployer.deploy(Intializable)
        await deployer.deploy(IntializableAdminUpgradabilityProxy)
        await deployer.deploy(IntializableUpgradabilityProxy)
        await deployer.deploy(Proxy)
        await deployer.deploy(UpgradabilityProxy)
        await deployer.deploy(VersionedInitializable)
        
    } catch (e) {
        console.log(`Error in migration: ${e.message}`)
    }
}