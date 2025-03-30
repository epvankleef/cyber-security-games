'use client';
import { use, useEffect } from 'react';
import { securityGames } from '../../data/securityGames';

export default function GamePage({ params }) {
  const { route } = use(params);
  const game = securityGames.find((g) => g.route === route);

  useEffect(() => {
    if (game?.externalUrl) {
      window.open(game.externalUrl, '_blank');
    }
  }, [game]);

  if (!game) {
    return <p className="text-center mt-10 text-white">Game niet gevonden.</p>;
  }

  if (game.externalUrl) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-900 text-white">
        <p>De game wordt geopend in een nieuw tabblad...</p>
      </div>
    );
  }

  // Lokale game
  const src = `/games/${game.route}/index.html`;

  return (
    <iframe
      src={src}
      className="w-screen h-screen border-none"
      allowFullScreen
    />
  );
}
