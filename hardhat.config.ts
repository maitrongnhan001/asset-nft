import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  defaultNetwork: "avax",
  networks: {
    hardhat: {
    },
    "avax": {
      url: "https://rpc.ankr.com/avalanche_fuji	",
      accounts: ["9b9cae76155d7ad9e1ea2958a95f92a8bb1f9580ddb9699354a3b9ac5f960445"]
    }
  },
  solidity: {
    version: "0.8.2",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
};

export default config;
