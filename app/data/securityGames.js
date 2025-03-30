import {
  Lock, Shield, Key, Eye, FileText, AlertTriangle, Mail,
  Wifi, Smartphone, Fingerprint, Database, Link, MessageSquare,
  Users, Search, CreditCard, Settings, Globe, AlertCircle, Cloud,
  BellOff, Trash2, FileX, CameraOff, Newspaper
} from 'lucide-react';

export const securityGames = [
  { id: 1, name: 'Fake News Catcher', icon: Newspaper, color: 'bg-blue-400', route: 'fakenews', description: 'Ontmasker nepnieuws en leer kritisch denken!' },
  { id: 2, name: 'Firewall', icon: Shield, color: 'bg-green-400', route: 'rocket', description: 'Bescherm je netwerk tegen digitale aanvallen.' },
  { id: 3, name: 'Encryptie', icon: Key, color: 'bg-yellow-400', route: 'target', description: 'Ontcijfer geheime codes met slimme logica.' },
  { id: 4, name: 'Privacy', icon: Eye, color: 'bg-indigo-400', route: 'puzzle', description: 'Bescherm je persoonlijke gegevens in een puzzelspel.' },
  { id: 5, name: 'GDPR Quiz', icon: FileText, color: 'bg-red-400', route: 'clock', description: 'Test je kennis over privacywetgeving (AVG).' },
  { id: 6, name: 'Phishing', icon: AlertTriangle, color: 'bg-sky-400', route: 'click', description: 'Herken gevaarlijke e-mails en voorkom datalekken.' },
  { id: 7, name: 'E-mail Hack', icon: Mail, color: 'bg-purple-400', route: 'triangle', description: 'Verdedig je inbox tegen hackers en spam.' },
  { id: 8, name: 'WiFi Check', icon: Wifi, color: 'bg-orange-400', route: 'stars', description: 'Check je WiFi-netwerk op beveiligingslekken.' },
  { id: 9, name: 'App Rechten', icon: Smartphone, color: 'bg-pink-400', route: 'circle', description: 'Beheer toegangsrechten van je apps slim.' },
  { id: 10, name: '2FA Test', icon: Fingerprint, color: 'bg-amber-400', route: 'flash', description: 'Test je snelheid met tweestapsverificatie!' },
  { id: 11, name: 'Data Lek', icon: Database, color: 'bg-violet-400', route: 'bookmark', description: 'Zoek en herstel kwetsbaarheden in je data.' },
  { id: 12, name: 'URL Check', icon: Link, color: 'bg-rose-400', route: 'heart', description: 'Leer verdachte links herkennen als een pro.' },
  { id: 13, name: 'Chat Veilig', icon: MessageSquare, color: 'bg-blue-400', route: 'camera', description: 'Oefen veilig communiceren in chatsituaties.' },
  { id: 14, name: 'Social Eng', icon: Users, color: 'bg-green-400', route: 'music', description: 'Weersta manipulatie via social engineering.' },
  { id: 15, name: 'Malware', icon: FileX, color: 'bg-yellow-400', route: 'alarm', description: 'Detecteer en verwijder schadelijke software.' },
  { id: 16, name: 'Bank Fraude', icon: CreditCard, color: 'bg-indigo-400', route: 'dice', description: 'Voorkom digitale oplichting met bankgegevens.' },
  { id: 17, name: 'Updates', icon: Settings, color: 'bg-red-400', route: 'joystick', description: 'Voer updates uit om kwetsbaarheden te dichten.' },
  { id: 18, name: 'Info Zoeker', icon: Search, color: 'bg-sky-400', route: 'award', description: 'Speur naar informatie en herken datadieven.' },
  { id: 19, name: 'Risk Alert', icon: AlertCircle, color: 'bg-purple-400', route: 'flag', description: 'Beoordeel risico’s en bescherm je systeem.' },
  { id: 20, name: 'Cloud Sec', icon: Cloud, color: 'bg-orange-400', route: 'map', description: 'Beveilig je bestanden in de cloudomgeving.' },
  { id: 21, name: 'Meldpunt', icon: BellOff, color: 'bg-pink-400', route: 'draw', description: 'Leer waar en hoe je cyberincidenten meldt.' },
  { id: 22, name: 'Data Wissen', icon: Trash2, color: 'bg-amber-400', route: 'work', description: 'Verwijder data veilig en permanent.' },
  { id: 23, name: 'Veilig Web', icon: Globe, color: 'bg-violet-400', route: 'starconquest', description: 'Surf slim en veilig op het internet.' },
  { id: 24, name: 'Cam Cover', icon: CameraOff, color: 'bg-rose-400', route: 'timetravel', description: 'Bescherm je privacy met je webcam.' }
];
