// 'use client';
// import React, { useState, useEffect, useRef } from 'react';
// import { 
//   Lock, Shield, Key, Eye, FileText, AlertTriangle, Mail, 
//   Wifi, Smartphone, Fingerprint, Database, Link, MessageSquare, 
//   Users, Search, CreditCard, Settings, Globe, AlertCircle, Cloud,
//   BellOff, Trash2, FileX, CameraOff
// } from 'lucide-react';

// const securityGames = [
//   { id: 1, name: 'Wachtwoord', icon: Lock, color: 'bg-blue-100', route: 'memory' },
//   { id: 2, name: 'Firewall', icon: Shield, color: 'bg-green-100', route: 'rocket' },
//   { id: 3, name: 'Encryptie', icon: Key, color: 'bg-yellow-100', route: 'target' },
//   { id: 4, name: 'Privacy', icon: Eye, color: 'bg-gray-200', route: 'puzzle' },
//   { id: 5, name: 'GDPR Quiz', icon: FileText, color: 'bg-red-100', route: 'clock' },
//   { id: 6, name: 'Phishing', icon: AlertTriangle, color: 'bg-blue-50', route: 'click' },
//   { id: 7, name: 'E-mail Hack', icon: Mail, color: 'bg-purple-100', route: 'triangle' },
//   { id: 8, name: 'WiFi Check', icon: Wifi, color: 'bg-orange-100', route: 'stars' },
//   { id: 9, name: 'App Rechten', icon: Smartphone, color: 'bg-gray-100', route: 'circle' },
//   { id: 10, name: '2FA Test', icon: Fingerprint, color: 'bg-yellow-50', route: 'flash' },
//   { id: 11, name: 'Data Lek', icon: Database, color: 'bg-indigo-100', route: 'bookmark' },
//   { id: 12, name: 'URL Check', icon: Link, color: 'bg-red-50', route: 'heart' },
//   { id: 13, name: 'Chat Veilig', icon: MessageSquare, color: 'bg-blue-200', route: 'camera' },
//   { id: 14, name: 'Social Eng', icon: Users, color: 'bg-purple-50', route: 'music' },
//   { id: 15, name: 'Malware', icon: FileX, color: 'bg-orange-50', route: 'alarm' },
//   { id: 16, name: 'Bank Fraude', icon: CreditCard, color: 'bg-green-50', route: 'dice' },
//   { id: 17, name: 'Updates', icon: Settings, color: 'bg-pink-100', route: 'joystick' },
//   { id: 18, name: 'Info Zoeker', icon: Search, color: 'bg-yellow-200', route: 'award' },
//   { id: 19, name: 'Risk Alert', icon: AlertCircle, color: 'bg-red-200', route: 'flag' },
//   { id: 20, name: 'Cloud Sec', icon: Cloud, color: 'bg-teal-100', route: 'map' },
//   { id: 21, name: 'Meldpunt', icon: BellOff, color: 'bg-blue-300', route: 'draw' },
//   { id: 22, name: 'Data Wissen', icon: Trash2, color: 'bg-amber-100', route: 'work' },
//   { id: 23, name: 'Veilig Web', icon: Globe, color: 'bg-indigo-50', route: 'starconquest' },
//   { id: 24, name: 'Cam Cover', icon: CameraOff, color: 'bg-cyan-100', route: 'timetravel' }
// ];

// const SecurityThemedGames = () => {
//   const [visibleItems, setVisibleItems] = useState({});
//   const [clickedItem, setClickedItem] = useState(null);
//   const cardRefs = useRef([]);

//   useEffect(() => {
//     cardRefs.current = cardRefs.current.slice(0, securityGames.length);
//   }, []);

//   useEffect(() => {
//     const observerOptions = {
//       root: null,
//       rootMargin: '0px',
//       threshold: 0.1
//     };

//     const handleIntersection = (entries) => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           const id = entry.target.getAttribute('data-id');
//           setVisibleItems(prev => ({ ...prev, [id]: true }));
//         }
//       });
//     };

//     const observer = new IntersectionObserver(handleIntersection, observerOptions);

//     cardRefs.current.forEach(ref => {
//       if (ref) observer.observe(ref);
//     });

//     return () => {
//       cardRefs.current.forEach(ref => {
//         if (ref) observer.unobserve(ref);
//       });
//     };
//   }, []);

//   const handleGameClick = (id, route) => {
//     console.log(`Game selected: ${route}`);
//     setClickedItem(id);

//     setTimeout(() => {
//       setClickedItem(null);
//     }, 150);
//   };

//   const getDelayStyle = (index) => {
//     const rowPosition = index % 3;
//     const delay = rowPosition * 50;
//     return { transitionDelay: `${delay}ms` };
//   };

//   return (
//     <div 
//       className="p-4 min-h-screen max-w-md mx-auto"
//       style={{ 
//         backgroundColor: '#3EB1C8',
//         fontFamily: "'Bebas Neue', sans-serif"
//       }}
//     >
//       <h1 className="text-3xl font-bold text-center mb-4 text-white tracking-wide">Cyber Security Games</h1>
      
//       <div className="grid grid-cols-3 gap-2">
//         {securityGames.map((game, index) => (
//           <div 
//             key={game.id}
//             ref={el => cardRefs.current[index] = el}
//             data-id={game.id}
//             className={`aspect-square rounded-lg shadow-sm cursor-pointer ${clickedItem === game.id ? 'bg-gray-300' : game.color} transition-all duration-500 ease-out`}
//             style={{
//               opacity: visibleItems[game.id] ? 1 : 0,
//               transform: visibleItems[game.id] 
//                 ? 'translateY(0) scale(1)' 
//                 : 'translateY(20px) scale(0.95)',
//               ...getDelayStyle(index)
//             }}
//             onClick={() => handleGameClick(game.id, game.route)}
//           >
//             <div className="flex flex-col items-center justify-center text-center w-full h-full p-2">
//               <div className="flex items-center justify-center mb-1">
//                 <game.icon size={22} className="text-gray-700" />
//               </div>
//               <h2 className="text-xs tracking-wide text-gray-800">{game.name}</h2>
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="h-32"></div>
//     </div>
//   );
// };

// export default SecurityThemedGames;

// /components/GameCard.js
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
      setClickedItem(id);
    } else {
      setTimeout(() => {
        router.push(`/games/${route}`);
      }, 250); // extra marge zodat flip volledig afspeelt
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