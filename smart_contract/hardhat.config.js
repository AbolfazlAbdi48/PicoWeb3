require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.9',
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/lEzimJttqXL4hBiHqQf_oOWC5B7MF8U9',
      accounts: ['a965df709bfd3c10ad8fe0d59ba761a263a97e48fd19e0814901bee3f4e5f632']
    }
  }
}