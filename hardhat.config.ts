import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
require('dotenv').config();

const config: HardhatUserConfig = {
  defaultNetwork: "avax",
  networks: {
    hardhat: {
    },
    "avax": {
      url: "https://rpc.ankr.com/avalanche_fuji	",
      accounts: [process.env.DEPLOYER_PRIVATE_KEY as string]
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
