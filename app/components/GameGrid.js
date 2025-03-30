'use client';
import React, { useState, useEffect, useRef } from 'react';
import GameCard from './GameCard';
import { securityGames } from '../data/securityGames';
import { useRouter } from 'next/navigation';

const GameGrid = () => {
  const [visibleItems, setVisibleItems] = useState({});
  const [clickedItem, setClickedItem] = useState(null);
  const cardRefs = useRef([]);
  const router = useRouter();

  useEffect(() => {
    const newVisible = {};
    securityGames.forEach((game, i) => {
      setTimeout(() => {
        newVisible[game.id] = true;
        setVisibleItems((prev) => ({ ...prev, ...newVisible }));
      }, i * 20);
    });
  }, []);

const handleGameClick = (id, route, afterFlip = false) => {
  if (!afterFlip) {
    setClickedItem(id); // start flip
  } else {
    const game = securityGames.find((g) => g.id === id);

    if (game?.externalUrl) {
      window.open(game.externalUrl, '_blank');
      setTimeout(() => {
        setClickedItem(null); // flip terugdraaien na korte delay
      }, 500); // mag ook 1000ms zijn voor effect
    } else {
      router.push(`/games/${route}`);
    }
  }
};












  

  return (
    <div style={{ backgroundColor: '#1F2937' }} className="min-h-screen">
      <div className="p-4 max-w-md mx-auto font-bebas">
        <h1 className="text-3xl font-bold text-center mb-4 text-white tracking-wide">
          Cyber Security Games
        </h1>
        <div className="grid grid-cols-2 gap-2">
          {securityGames.map((game, index) => (
            <div ref={el => cardRefs.current[index] = el} key={game.id}>
              <GameCard
                game={game}
                index={index}
                visible={visibleItems[game.id]}
                clickedItem={clickedItem}
                handleClick={handleGameClick}
              />
            </div>
          ))}
        </div>
        <div className="h-32"></div>
      </div>
    </div>
  );
};

export default GameGrid;