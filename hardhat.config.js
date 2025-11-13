require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: {
    version: "0.8.19",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  networks: {
    teaTestnet: {
      url: "https://tea-sepolia.g.alchemy.com/public", // Ganti dengan RPC TEA actual
      accounts: [process.env.PRIVATE_KEY], // Private key dari wallet
      chainId: 10218 // Ganti dengan chainId TEA testnet
    },
    localhost: {
      url: "http://127.0.0.1:8545"
    }
  },
  mocha: {
    timeout: 40000
  }
};
