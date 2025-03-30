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
    setClickedItem(id); // flip starten
  } else {
    router.push(`/games/${route}`); // ná de flip pas navigeren
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