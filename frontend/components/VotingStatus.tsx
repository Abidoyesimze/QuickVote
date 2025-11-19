'use client';

import { useEffect, useState } from 'react';

interface VotingStatusProps {
  isActive: boolean;
  startTime?: number;
  endTime?: number;
}

export default function VotingStatus({ 
  isActive, 
  startTime, 
  endTime 
}: VotingStatusProps) {
  const [timeRemaining, setTimeRemaining] = useState<string>('');

  useEffect(() => {
    if (!isActive || !endTime) {
      setTimeRemaining('');
      return;
    }

    const updateTimer = () => {
      const now = Math.floor(Date.now() / 1000);
      const remaining = endTime - now;
      
      if (remaining <= 0) {
        setTimeRemaining('Ended');
        return;
      }
      
      const hours = Math.floor(remaining / 3600);
      const minutes = Math.floor((remaining % 3600) / 60);
      const seconds = remaining % 60;
      
      setTimeRemaining(`${hours}h ${minutes}m ${seconds}s`);
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, [isActive, endTime]);

  return (
    <div className="bg-white rounded-xl shadow-md p-6 border-2 border-gray-100">
      <h3 className="text-xl font-bold text-gray-800 mb-4">Voting Status</h3>
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-gray-600">Status:</span>
          <span
            className={`px-3 py-1 rounded-full text-sm font-semibold ${
              isActive
                ? 'bg-green-100 text-green-800'
                : 'bg-gray-100 text-gray-800'
            }`}
          >
            {isActive ? 'Active' : 'Inactive'}
          </span>
        </div>
        {isActive && endTime && timeRemaining && (
          <div className="flex items-center justify-between">
            <span className="text-gray-600">Time Remaining:</span>
            <span className="text-lg font-bold text-blue-600 font-mono">
              {timeRemaining}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

