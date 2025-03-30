import './globals.css';
import { Bebas_Neue } from 'next/font/google';

const bebas = Bebas_Neue({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-bebas'
});

export const metadata = {
  title: 'Cyber Security Games',
  description: 'Train je cyber skills!',
};

export default function RootLayout({ children }) {
  return (
    <html lang="nl" className={bebas.variable}>
      <body>{children}</body>
    </html>
  );
}
