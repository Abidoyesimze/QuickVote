'use client';

import { useAppKit } from '@reown/appkit/react';
import { useAppKitAccount } from '@reown/appkit/react';

export default function WalletButton() {
  const { open } = useAppKit();
  const { address, isConnected, chainId } = useAppKitAccount();

  const formatAddress = (addr: string) => {
    if (!addr) return '';
    return `${addr.slice(0, 6)}...${addr.slice(-4)}`;
  };

  const handleClick = () => {
    if (!isConnected) {
      open();
    }
  };

  const isCorrectNetwork = chainId === 84532; // Base Sepolia

  return (
    <div className="flex items-center gap-2">
      {isConnected && !isCorrectNetwork && (
        <span className="text-xs text-red-600 font-medium px-2 py-1 bg-red-50 rounded-lg">
          Wrong Network
        </span>
      )}
      <button
        onClick={handleClick}
        className={`
          px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105
          ${isConnected
            ? 'bg-gradient-to-r from-green-500 to-green-600 text-white hover:from-green-600 hover:to-green-700 shadow-lg hover:shadow-xl'
            : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl'
          }
        `}
      >
        {isConnected ? (
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
            {formatAddress(address || '')}
          </span>
        ) : (
          'Connect Wallet'
        )}
      </button>
      {isConnected && (
        <button
          onClick={() => open({ view: 'Account' })}
          className="px-3 py-2 text-gray-600 hover:text-gray-800 text-sm font-medium"
          title="Account Settings"
        >
          ⚙️
        </button>
      )}
    </div>
  );
}

