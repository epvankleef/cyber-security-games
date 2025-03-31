import {
  Newspaper, Heart, Mail, Eye, ShieldQuestion,
  Bitcoin, IdCard, MessageSquareMore, AlarmClock
} from 'lucide-react';

export const securityGames = [
  { id: 1, name: 'Fake News Catcher', icon: Newspaper, color: 'bg-red-400', route: 'fakenews', description: 'Ontmasker nepnieuws en leer kritisch denken!' },
  { id: 2, name: 'Phishing Trip', icon: Newspaper, color: 'bg-blue-400', route: 'phishingtrip', description: ' Identificeer foute links, voorkom misleiding.' },
  { id: 3, name: 'Liefde Liegt', icon: Heart, color: 'bg-green-400', route: 'liefdeliegt', description: 'Test je oog voor deepfakes.', externalUrl: 'https://phantomforge-software.itch.io/liefde-liegt' },
  { id: 4, name: 'Inbox Inbrekers', icon: Mail, color: 'bg-yellow-400', route: 'inboxinbrekers', description: 'Herken neppe phishingmails snel.' },
  { id: 5, name: 'Grooming', icon: Eye, color: 'bg-purple-500', route: 'grooming', description: 'Simuleer en herken foute intenties' },
  { id: 6, name: 'Phishing Quiz', icon: ShieldQuestion, color: 'bg-pink-400', route: 'phishingquiz', description: 'Zijn de berichten echt? Test je kennis over phishing.' },
  { id: 7, name: 'Crypto Scam', icon: Bitcoin, color: 'bg-blue-500', route: 'cryptoscam', description: 'Leer crypto-oplichting op tijd herkennen' },
  { id: 8, name: 'Data in gevaar!', icon: IdCard, color: 'bg-teal-400', route: 'datagevaar', description: 'Jouw data in gevaar, of niet?', externalUrl: 'https://hackaton.badeendensoep.nl/Pages/levelSelect.html' },
  { id: 9, name: 'Snap Child', icon: MessageSquareMore, color: 'bg-orange-400', route: 'snapchild', description: 'Test je instinct bij online gesprekken' },
  { id: 10, name: 'Click Quiz', icon: AlarmClock, color: 'bg-yellow-400', route: 'clickquiz', description: 'Test je reflexen en cybersecuritykennis tegelijk.' }
];













