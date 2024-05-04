const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

const tokenName = "Asset";
const tokenSymbol = "Asset";

const AssetModule = buildModule("AssetModule", (m: any) => {
  const tokenN = m.getParameter("name", tokenName);
  const symbolN = m.getParameter("symbol", tokenSymbol);

  const token = m.contract("Asset", [tokenN, symbolN]);

  return { token };
});

module.exports = AssetModule;