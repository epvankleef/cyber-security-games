'use client';
import { use, useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { securityGames } from '../../data/securityGames';

export default function GamePage({ params }) {
  const router = useRouter();
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
    <div className="relative w-screen h-screen bg-black">
      {/* Terugknop met Lucide icoon */}
      <button
        onClick={() => router.push('/')}
        className="absolute top-4 right-4 z-50 flex items-center gap-2 px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out"
        aria-label="Terug naar overzicht"
      >
        <ArrowLeft size={18} />
        Terug
      </button>

      {/* Game iframe */}
      <iframe
        src={src}
        className="w-full h-full border-none"
        allowFullScreen
        title={game.name}
      />
    </div>
  );
}
