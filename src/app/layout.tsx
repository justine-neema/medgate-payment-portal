import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    absolute: 'Medgate — Your Trusted Gateway to Healthcare in Rwanda',
    template: '%s | Medgate',
  },
  description:
    'Medgate connects patients in Rwanda with trusted healthcare providers, clinics, hospitals, and medical services—making access to quality healthcare simple, fast, and reliable.',
  applicationName: 'Medgate',
  authors: {
    name: 'Medgate Team',
    url: 'https://www.medgate.rw/team',
  },
  creator: 'Medgate',
  publisher: 'Medgate',
  icons: {
    icon: 'https://www.medgate.rw/assets/logo.svg',
    apple: 'https://www.medgate.rw/assets/logo.svg',
  },
  keywords: [
    'Medgate',
    'Healthcare Rwanda',
    'Medical Services Rwanda',
    'Hospitals in Rwanda',
    'Clinics in Rwanda',
    'Doctors in Rwanda',
    'Healthcare Platform',
    'Digital Health Rwanda',
    'Patient Care',
    'Medical App Rwanda',
  ],
  category: 'Healthcare',
  twitter: {
    card: 'summary_large_image',
    site: '@MedgateRW',
    title: 'Medgate — Your Trusted Gateway to Healthcare in Rwanda',
    description: 'Access trusted doctors, clinics, and hospitals across Rwanda with Medgate.',
  },
  openGraph: {
    title: 'Medgate — Your Trusted Gateway to Healthcare in Rwanda',
    description:
      'Medgate helps patients find and connect with verified healthcare providers across Rwanda.',
    url: 'https://www.medgate.rw',
    siteName: 'Medgate',
    images: [
      {
        url: 'https://www.medgate.rw/assets/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Medgate Healthcare Platform',
      },
    ],
    locale: 'en_RW',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      {' '}
      <body className="min-h-screen antialiased flex flex-col min-h-screen">
        <main className="flex-grow">{children}</main>
      </body>
    </html>
  );
}
