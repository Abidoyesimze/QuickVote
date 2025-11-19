'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

export default function Home() {
  const [isConnected, setIsConnected] = useState(false);
  const [address, setAddress] = useState<string>('');

  const handleConnectWallet = () => {
    // TODO: Implement wallet connection
    setIsConnected(true);
    setAddress('0x1234567890123456789012345678901234567890');
  };

  return (
    <div className="min-h-screen">
      <Navigation
        onConnect={handleConnectWallet}
        address={address}
        isConnected={isConnected}
      />
      
      <Hero />
      <Features />
      <HowItWorks />
      <CTASection />
      
      <Footer />
    </div>
  );
}
