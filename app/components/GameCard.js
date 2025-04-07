'use client';
import React from 'react';

const GameCard = ({ game, index, visible, clickedItem, handleClick }) => {
  const delay = index * 50;
  const isClicked = clickedItem === game.id;

  return (
    <div
      data-id={game.id}
      className="w-[200px] h-[200px] rounded-lg shadow-sm cursor-pointer transition-all duration-500 ease-out overflow-hidden hover:shadow-lg hover:scale-105"
      style={{
        perspective: '1000px',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.95)',
        transitionDelay: `${delay}ms`
      }}
      onClick={() => handleClick(game.id, game.route)}
    >
      <div
        className={`relative w-full h-full border-2 border-black/80 transition-transform duration-700 ${isClicked ? 'rotate-y-180' : ''}`}
        style={{ transformStyle: 'preserve-3d' }}
        onTransitionEnd={() => {
          if (isClicked) handleClick(game.id, game.route, true);
        }}
      >
        {/* VOORKANT */}
        <div className={`absolute inset-0 backface-hidden rounded-lg ${game.color} grid grid-rows-[1fr_60px]`}>
          {/* Midden: icoon + titel */}
          <div className="flex flex-col items-center justify-center text-center px-2 py-1">
            <game.icon size={30} className="text-gray-900 mb-1" />
            <h2 className="text-base font-bold text-gray-900">{game.name}</h2>
          </div>

          {/* Onder: beschrijving - tekst gecentreerd */}
          <div className="bg-black/40 text-white text-[11px] px-2 py-1 h-[60px] flex items-center justify-center text-center">
            <p className="text-sm leading-tight line-clamp-3 overflow-hidden">
              {game.description}
            </p>
          </div>
        </div>

        {/* ACHTERKANT */}
        <div className={`absolute inset-0 backface-hidden rotate-y-180 flex items-center justify-center rounded-lg ${game.color}`}>
          <span className="text-base text-gray-800 font-semibold">Laden...</span>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
