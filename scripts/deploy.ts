import { ethers } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  const nftAddress = "0x123..."; // Replace with your ERC721 contract address

  const crowdFund = await ethers.deployContract("CrowdFund", [deployer.address]);
  await crowdFund.waitForDeployment();

  console.log("CrowdFund address:", await crowdFund.getAddress());
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
