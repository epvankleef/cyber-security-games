'use client';
import { use } from 'react';

export default function GamePage({ params }) {
  const { route } = use(params); // juiste manier in Next.js 15+

  return (
    <iframe
      src={`/games/${route}/index.html`}
      className="w-screen h-screen border-none"
      allowFullScreen
    />
  );
}
