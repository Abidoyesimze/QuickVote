'use client';

interface WalletButtonProps {
  onConnect?: () => void;
  address?: string;
  isConnected?: boolean;
}

export default function WalletButton({ 
  onConnect, 
  address, 
  isConnected = false 
}: WalletButtonProps) {
  const formatAddress = (addr: string) => {
    return `${addr.slice(0, 6)}...${addr.slice(-4)}`;
  };

  return (
    <button
      onClick={onConnect}
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
          <span className="w-2 h-2 bg-white rounded-full"></span>
          {formatAddress(address || '')}
        </span>
      ) : (
        'Connect Wallet'
      )}
    </button>
  );
}

