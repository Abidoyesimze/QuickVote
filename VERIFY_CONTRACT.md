# Contract Verification Instructions

## Contract Details
- **Contract Address:** `0x0c8cF958759f547a9Cc53Edceb428a8244aF4586`
- **Network:** Base Sepolia (Chain ID: 84532)
- **BaseScan:** https://sepolia.basescan.org/address/0x0c8cF958759f547a9Cc53Edceb428a8244aF4586

## Automated Verification

Try using Hardhat's verify plugin:
```bash
cd smartcontract
npx hardhat verify --network baseSepolia 0x0c8cF958759f547a9Cc53Edceb428a8244aF4586
```

**Note:** If you encounter the "deprecated V1 endpoint" warning, you may need to:
1. Wait a few minutes for the contract to be indexed on BaseScan
2. Try manual verification (see below)

## Manual Verification via BaseScan

1. Visit: https://sepolia.basescan.org/address/0x0c8cF958759f547a9Cc53Edceb428a8244aF4586#code

2. Click on the "Contract" tab

3. Click "Verify and Publish"

4. Fill in the verification form:
   - **Compiler Type:** Solidity (Single file) or Solidity (Standard JSON Input)
   - **Compiler Version:** v0.8.27+commit.40a35a09
   - **License:** MIT
   - **Open Source License Type:** MIT License

5. Copy the contract source code from: `smartcontract/contracts/vote.sol`

6. Paste it into the "Enter the Solidity Contract Code below" field

7. **Optimization:** No (optimizer was disabled)

8. Click "Verify and Publish"

9. If successful, your contract will be verified and the source code will be visible on BaseScan!

## Contract Constructor Arguments

The `VotingContract` has an empty constructor (no arguments), so you don't need to provide any constructor parameters during verification.

## Troubleshooting

If verification fails:
- Ensure the compiler version matches exactly (v0.8.27)
- Make sure the source code matches exactly what was deployed
- Try using "Standard JSON Input" format instead
- The contract ABI is available in: `smartcontract/artifacts/contracts/vote.sol/VotingContract.json`

