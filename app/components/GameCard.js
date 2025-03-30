// 'use client';
// import React from 'react';

// const GameCard = ({ game, index, visible, clickedItem, handleClick }) => {
//   const rowPosition = index % 2; // voor 2 kolommen
//   const delay = rowPosition * 50;
//   const isClicked = clickedItem === game.id;

//   return (
//     <div
//       key={game.id}
//       data-id={game.id}
//       className="aspect-square rounded-lg shadow-sm cursor-pointer perspective transition-all duration-500 ease-out border border-black"
//       style={{
//         opacity: visible ? 1 : 0,
//         transform: visible ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.95)',
//         transitionDelay: `${delay}ms`
//       }}
//       onClick={() => handleClick(game.id, game.route)}
//     >
//       <div
//         className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${isClicked ? 'rotate-y-180' : ''}`}
//         onTransitionEnd={() => {
//           if (isClicked) handleClick(game.id, game.route, true);
//         }}
//       >
//         {/* Voorkant van de kaart */}
//         <div className={`absolute inset-0 backface-hidden flex flex-col items-center justify-center text-center p-3 rounded-lg ${game.color}`}>
//           <div className="mb-1">
//             <game.icon size={28} className="text-gray-800" />
//           </div>
//           <h2 className="text-sm tracking-wide text-gray-900 font-bold mb-1">{game.name}</h2>
//           <p className="text-[11px] text-gray-800 leading-tight text-center px-1 line-clamp-3">
//             {game.description}
//           </p>
//         </div>

//         {/* Achterkant van de kaart */}
//         <div className={`absolute inset-0 backface-hidden rotate-y-180 flex items-center justify-center rounded-lg ${game.color}`}>
//           <span className="text-base text-gray-800 font-semibold">Laden...</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default GameCard;

'use client';
import React from 'react';

const GameCard = ({ game, index, visible, clickedItem, handleClick }) => {
  const rowPosition = index % 2;
  const delay = rowPosition * 50;
  const isClicked = clickedItem === game.id;

  return (
    <div
      key={game.id}
      data-id={game.id}
      className="aspect-square rounded-lg shadow-sm cursor-pointer perspective transition-all duration-500 ease-out border border-black overflow-hidden"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.95)',
        transitionDelay: `${delay}ms`
      }}
      onClick={() => handleClick(game.id, game.route)}
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${isClicked ? 'rotate-y-180' : ''}`}
        onTransitionEnd={() => {
          if (isClicked) handleClick(game.id, game.route, true);
        }}
      >
        {/* VOORKANT */}
        <div className={`absolute inset-0 backface-hidden rounded-lg ${game.color} flex flex-col justify-between`}>
          {/* Midden: icoon + titel gecentreerd */}
          <div className="flex-1 flex flex-col items-center justify-center text-center px-2 pt-3 pb-1">
            <game.icon size={30} className="text-gray-900 mb-1" />
            <h2 className="text-base font-bold text-gray-900">{game.name}</h2>
          </div>

          {/* Onder: overlay met vaste hoogte */}
          <div className="bg-black/40 text-white text-[11px] px-2 py-2 text-center h-[50px]">
            <p className="text-xs leading-tight line-clamp-2">{game.description}</p>
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
