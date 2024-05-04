const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");
require('dotenv').config();

const tokenName = process.env.TOKEN_NAME;
const tokenSymbol = process.env.TOKEN_SYMBOL;

const AssetModule = buildModule("AssetModule", (m: any) => {
  const tokenN = m.getParameter("name", tokenName);
  const symbolN = m.getParameter("symbol", tokenSymbol);

  const token = m.contract("Asset", [tokenN, symbolN]);

  return { token };
});

module.exports = AssetModule;