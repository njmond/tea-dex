const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with account:", deployer.address);
  console.log("Account balance:", (await deployer.getBalance()).toString());

  // Deploy Factory
  const Factory = await ethers.getContractFactory("TEAFactory");
  const factory = await Factory.deploy();
  await factory.deployed();
  console.log("Factory deployed to:", factory.address);

  // Deploy Router
  const Router = await ethers.getContractFactory("TEARouter");
  const router = await Router.deploy(factory.address);
  await router.deployed();
  console.log("Router deployed to:", router.address);

  // Simpan addresses ke file
  const fs = require("fs");
  const addresses = {
    factory: factory.address,
    router: router.address,
    deployer: deployer.address
  };

  fs.writeFileSync("deployment-addresses.json", JSON.stringify(addresses, null, 2));
  console.log("Addresses saved to deployment-addresses.json");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
