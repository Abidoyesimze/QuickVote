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
        px-6 py-2.5 rounded-lg font-medium transition-all duration-200
        ${isConnected
          ? 'bg-green-500 text-white hover:bg-green-600'
          : 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-xl'
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

