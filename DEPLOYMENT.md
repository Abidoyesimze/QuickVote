# Deployment Guide for Base Sepolia

## Prerequisites

1. **Base Sepolia ETH**: You need Base Sepolia testnet ETH to deploy. Get it from:
   - [Base Sepolia Faucet](https://www.coinbase.com/faucets/base-ethereum-sepolia-faucet)
   - [Alchemy Base Sepolia Faucet](https://www.alchemy.com/overviews/get-base-sepolia-eth)

2. **Environment Variables**: Create a `.env` file in the `smartcontract` directory:
   ```bash
   cd smartcontract
   cp .env.example .env
   ```

   Then edit `.env` and add your:
   - `PRIVATE_KEY`: Your wallet private key (starts with 0x)
   - `BASE_SEPOLIA_RPC_URL`: `https://sepolia.base.org` (already set)
   - `BASESCAN_API_KEY`: (Optional) For contract verification on BaseScan

## Deployment Steps

1. **Compile the contract**:
   ```bash
   cd smartcontract
   npm install
   npx hardhat compile
   ```

2. **Deploy to Base Sepolia**:
   ```bash
   npx hardhat ignition deploy ./ignition/modules/VotingContract.ts --network baseSepolia
   ```

3. **Verify the deployment**:
   - The deployment script will output the contract address
   - Visit [BaseScan Sepolia](https://sepolia.basescan.org) and search for the contract address

4. **Verify the contract** (optional, if you have BaseScan API key):
   ```bash
   npx hardhat verify --network baseSepolia <CONTRACT_ADDRESS>
   ```

## Post-Deployment

After deployment, save the contract address for use in the frontend. The address will be saved in:
- `smartcontract/ignition/deployments/chain-84532/`

## Security Notes

- ⚠️ **NEVER commit your `.env` file to git** - it contains your private key!
- The `.env` file is already in `.gitignore`
- Only use testnet ETH for deployment

