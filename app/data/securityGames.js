import {
  Lock, Shield, Key, Eye, FileText, AlertTriangle, Mail,
  Wifi, Smartphone, Fingerprint, Database, Link, MessageSquare,
  Users, Search, CreditCard, Settings, Globe, AlertCircle, Cloud,
  BellOff, Trash2, FileX, CameraOff, Newspaper, Heart, Bitcoin, ShieldAlert, ShieldQuestion 
} from 'lucide-react';

export const securityGames = [
  { id: 1, name: 'Fake News Catcher', icon: Newspaper, color: 'bg-blue-400', route: 'fakenews', description: 'Ontmasker nepnieuws en leer kritisch denken!' },
  { id: 2, name: 'Liefde Liegt', icon: Heart, color: 'bg-green-400', route: 'liefdeliegt', description: 'Test je oog voor deepfakes.', externalUrl: 'https://phantomforge-software.itch.io/liefde-liegt' },
  { id: 3, name: 'Inbox Inbrekers', icon: Mail, color: 'bg-yellow-400', route: 'inboxinbrekers', description: 'Herken neppe phishingmails snel.' },
  { id: 4, name: 'Grooming', icon: Eye, color: 'bg-indigo-400', route: 'grooming', description: 'Simuleer en herken foute intenties' },
  { id: 5, name: 'Phishing Quiz', icon: ShieldQuestion, color: 'bg-red-400', route: 'phishingquiz', description: 'Test je kennis over privacywetgeving (AVG).' },
  { id: 6, name: 'Crypto Scam', icon: Bitcoin, color: 'bg-sky-400', route: 'cryptoscam', description: 'Herken gevaarlijke e-mails en voorkom datalekken.' },

];
