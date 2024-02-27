import { ethers } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  const tokenFactory = await ethers.getContractFactory("MyToken");
  const token = await tokenFactory.deploy(1000000)
  await token.deploymentTransaction()
  console.log("MyToken address:", await token.getAddress());

  const crowdFundFactory = await ethers.getContractFactory("CrowdFund");
  const crowdFund = await crowdFundFactory.deploy(token)
  await crowdFund.deploymentTransaction()

  console.log("CrowdFund address:", await crowdFund.getAddress());
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
