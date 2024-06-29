import hre from "hardhat";
import path from "path";
import fs from "fs";

async function main() {
  const MyToken = await hre.ethers.getContractFactory("MyToken");
  const contract = await MyToken.deploy();

  const contractAddress = await contract.waitForDeployment();

  console.log(`Token deployed to ${contract.target}`);

  const filePath = path.join(__dirname, "deployedContractAddress.json");

  // Check if the file exists
  if (fs.existsSync(filePath)) {
    console.log(
      "File already exists. Updating the file with the new contract address."
    );
  } else {
    console.log(
      "File does not exist. Creating a new file with the contract address."
    );
  }

  // Save the contract address to a JSON file
  const addressData = {
    TOKEN_ADDRESS: contractAddress.target,
  };

  fs.writeFileSync(filePath, JSON.stringify(addressData, null, 2));

  console.log("Contract address saved to deployedContractAddress.json");
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
