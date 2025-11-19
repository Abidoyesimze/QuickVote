'use client';

interface ContenderCardProps {
  code: string;
  address: string;
  voteCount: number;
  totalVotes?: number;
  hasVoted?: boolean;
  onVote?: (code: string) => void;
  isVotingActive?: boolean;
}

export default function ContenderCard({
  code,
  address,
  voteCount,
  totalVotes = 0,
  hasVoted = false,
  onVote,
  isVotingActive = false,
}: ContenderCardProps) {
  const formatAddress = (addr: string) => {
    return `${addr.slice(0, 8)}...${addr.slice(-6)}`;
  };

  const percentage = totalVotes > 0 ? (voteCount / totalVotes) * 100 : 0;

  return (
    <div className="bg-white rounded-xl shadow-md p-6 border-2 border-gray-100 hover:border-blue-300 transition-all hover:shadow-lg">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-1">{code}</h3>
          <p className="text-sm text-gray-500 font-mono">
            {formatAddress(address)}
          </p>
        </div>
        <div className="text-right">
          <div className="text-3xl font-bold text-blue-600">{voteCount}</div>
          <div className="text-xs text-gray-500">votes</div>
        </div>
      </div>

      {/* Vote Progress Bar */}
      <div className="mb-4">
        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-300"
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>

      {/* Vote Button */}
      {isVotingActive && (
        <button
          onClick={() => onVote?.(code)}
          disabled={hasVoted}
          className={`
            w-full py-3 rounded-lg font-semibold transition-all duration-200
            ${
              hasVoted
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg'
            }
          `}
        >
          {hasVoted ? '✓ Already Voted' : 'Vote'}
        </button>
      )}
    </div>
  );
}

