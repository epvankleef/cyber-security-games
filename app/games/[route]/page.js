'use client';
import { use, useState } from 'react';
import { securityGames } from '../../data/securityGames';

export default function GamePage({ params }) {
  const { route } = use(params);
  const game = securityGames.find((g) => g.route === route);

  const [isOpened, setIsOpened] = useState(false);

  const handleOpenGame = () => {
    if (game?.externalUrl) {
      window.open(game.externalUrl, '_blank');
      setIsOpened(true);
    }
  };

  if (!game) {
    return <p className="text-center mt-10 text-white">Game niet gevonden.</p>;
  }

  if (game.externalUrl && !isOpened) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white p-6">
        <p className="text-center text-lg mb-4">
          De game wordt geopend in een nieuw tabblad. Klik op de knop om de game te starten.
        </p>
        <button
          onClick={handleOpenGame}
          className="mt-4 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out"
          aria-label="Open de game in een nieuw tabblad"
        >
          Start de game
        </button>
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
