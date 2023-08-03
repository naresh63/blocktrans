import React from "react";
const ethers = require("ethers");
const ETH_MAIN =
  "https://mainnet.infura.io/v3/448893adf466452f8119284681c3a026";
const provider =
  window.ethereum != null
    ? new ethers.providers.Web3Provider(window.ethereum)
    : ethers.providers.getDefaultProvider();
// can also use metamask for quick and easy provider
// const queryBlockchain = async () => {
//   const crtBlock = await provider.getBlockNumber();
//   console.log("--crt", crtBlock);
// };
// queryBlockchain();

// Listen for new blocks, and retrieve all transactions in each block
provider.on("block", async (blockNumber) => {
  const block = await provider.getBlock(blockNumber);
  console.log("New block:", block);
  //   console.log("Transactions:", block.transactions);
});



function BlockPage() {
  return (
    <div>
      <h3> Blockpage </h3>
    </div>
  );
}

export default BlockPage;
