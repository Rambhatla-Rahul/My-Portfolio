'use client';
import React, { useState } from 'react';
import './coinflip.css';
import Image from 'next/image';

const CoinFlip = ({
  frontImage = '/profile_image.jpg',
  backImage = '/avatar.png',
  size = 120,
}) => {
  const [flipState, setFlipState] = useState('');

  const handleMouseEnter = () => setFlipState('flip-in');
  const handleMouseLeave = () => setFlipState('flip-out');

  return (
    <div
      className="flip-container"
      style={{ width: size, height: size }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      
    >
      <div className={`coin ${flipState}`}>
        <Image
          src={frontImage}
          alt="Heads"
          className="front overflow-hidden object-cover"
          width={size}
          height={size}
          loading='lazy'
        />
        <Image
          src={backImage}
          alt="Tails"
          className="back overflow-hidden object-cover"
          width={size}
          height={size}
          loading='lazy'

        />
      </div>
    </div>
  );
};

export default CoinFlip;
