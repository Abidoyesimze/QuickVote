'use client';

import { useState } from 'react';
import WalletButton from '@/components/WalletButton';
import AdminPanel from '@/components/AdminPanel';
import VotingStatus from '@/components/VotingStatus';
import ContenderCard from '@/components/ContenderCard';
import WinnerDisplay from '@/components/WinnerDisplay';

// Mock data - will be replaced with real contract data
const mockContenders = [
  { code: 'CODE1', address: '0x1234567890123456789012345678901234567890', voteCount: 45 },
  { code: 'CODE2', address: '0x2345678901234567890123456789012345678901', voteCount: 32 },
  { code: 'CODE3', address: '0x3456789012345678901234567890123456789012', voteCount: 23 },
];

export default function Home() {
  const [isConnected, setIsConnected] = useState(false);
  const [address, setAddress] = useState<string>('');
  const [isOwner, setIsOwner] = useState(false);
  const [votingActive, setVotingActive] = useState(false);
  const [hasVoted, setHasVoted] = useState(false);
  const [winner, setWinner] = useState<{ address: string; code: string; voteCount: number } | undefined>();

  const handleConnectWallet = () => {
    // TODO: Implement wallet connection
    setIsConnected(true);
    setAddress('0x1234567890123456789012345678901234567890');
    setIsOwner(true); // Mock owner status
  };

  const handleVote = (code: string) => {
    // TODO: Implement voting
    console.log('Voting for:', code);
    setHasVoted(true);
  };

  const totalVotes = mockContenders.reduce((sum, c) => sum + c.voteCount, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                QuickVote
              </h1>
              <p className="text-sm text-gray-500">Decentralized Voting on Base</p>
            </div>
            <WalletButton
              onConnect={handleConnectWallet}
              address={address}
              isConnected={isConnected}
            />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Status Bar */}
        <div className="mb-8">
          <VotingStatus
            isActive={votingActive}
            startTime={Date.now() / 1000}
            endTime={(Date.now() / 1000) + 3600}
          />
        </div>

        {/* Winner Display */}
        {winner && (
          <div className="mb-8">
            <WinnerDisplay winner={winner} />
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Admin Panel */}
          <div className="lg:col-span-1">
            {isConnected && isOwner && (
              <div className="mb-6">
                <AdminPanel isOwner={isOwner} />
              </div>
            )}

            {/* Info Card */}
            <div className="bg-white rounded-xl shadow-md p-6 border-2 border-gray-100">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Voting Info</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Total Votes:</span>
                  <span className="font-semibold">{totalVotes}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Contenders:</span>
                  <span className="font-semibold">{mockContenders.length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Network:</span>
                  <span className="font-semibold text-blue-600">Base Sepolia</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contenders */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Contenders</h2>
              <p className="text-gray-600">
                {votingActive
                  ? hasVoted
                    ? "You've already voted. Thanks for participating!"
                    : 'Select a contender to vote'
                  : 'Voting is not active yet'}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {mockContenders.map((contender) => (
                <ContenderCard
                  key={contender.code}
                  code={contender.code}
                  address={contender.address}
                  voteCount={contender.voteCount}
                  totalVotes={totalVotes}
                  hasVoted={hasVoted}
                  onVote={handleVote}
                  isVotingActive={votingActive}
                />
              ))}
            </div>

            {!isConnected && (
              <div className="mt-8 text-center bg-blue-50 border-2 border-blue-200 rounded-xl p-8">
                <h3 className="text-xl font-semibold text-blue-800 mb-2">
                  Connect Your Wallet
                </h3>
                <p className="text-blue-600 mb-4">
                  Connect your wallet to participate in voting
                </p>
                <WalletButton onConnect={handleConnectWallet} />
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center text-gray-600 text-sm">
            <p>Contract: 0x0c8cF958759f547a9Cc53Edceb428a8244aF4586</p>
            <p className="mt-2">
              <a
                href="https://sepolia.basescan.org/address/0x0c8cF958759f547a9Cc53Edceb428a8244aF4586"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                View on BaseScan
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
