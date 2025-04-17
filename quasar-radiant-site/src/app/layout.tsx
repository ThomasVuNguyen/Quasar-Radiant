import './globals.css';
import { Inter, Playfair_Display } from 'next/font/google';
import type { Metadata } from 'next';

const inter = Inter({ 
  subsets: ['latin'], 
  variable: '--font-inter',
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'sans-serif']
});
const playfair = Playfair_Display({ 
  subsets: ['latin'], 
  variable: '--font-playfair',
  display: 'swap',
  preload: true
});

export const metadata: Metadata = {
  title: 'Quasar Radiant - Luna AI Device',
  description: 'Building the world\'s fastest AI device that runs locally',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full w-full">
      <body className={`${inter.variable} ${playfair.variable} font-sans h-full w-full overflow-x-hidden m-0 p-0`}>
        {children}
      </body>
    </html>
  );
} 