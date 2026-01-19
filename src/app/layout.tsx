import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'MedGate Rwanda - Your Gateway to Healthcare',
  description: 'Connect with top hospitals in Rwanda, get personalized care coordination, and travel with confidence.',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased font-sans">{children}</body>
    </html>
  );
}
