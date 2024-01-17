import React from 'react';
import Image from 'next/image';
import { ConnectButton } from '@rainbow-me/rainbowkit';

const Header = () => {
  return (
    // <div style={{position:'fixed',width:'100vw',top:'0',zIndex:'50'}}> 
    <header style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '1rem',
      background: 'white',
      borderBottom: '1px solid #eaeaea' 
    }}>
      {/* Logo on the left */}
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Image
          src="/logo/allo-logo.svg" 
          alt="Company Logo"
          width={120} 
          height={60} 
          layout="intrinsic"
        />
      </div>

      {/* Connect Wallet Button on the right */}
      <ConnectButton />
    </header>
    // </div>
  );
};

export default Header
