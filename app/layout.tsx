import type { Metadata } from 'next';
import 'aos/dist/aos.css';
import { Providers } from './providers';
import './globals.css';

export const metadata: Metadata = {
  title: 'Tejas Kailas Ingole - Full Stack Developer & IoT Enthusiast',
  description: 'B.Tech Student | Web Developer | IoT Specialist | Building innovative digital solutions with modern web technologies',
  keywords: [
    'Portfolio',
    'Full Stack Developer',
    'Next.js',
    'React',
    'Web Developer',
    'IoT',
    'Tejas Ingole',
  ],
  authors: [{ name: 'Tejas Kailas Ingole' }],
  openGraph: {
    title: 'Tejas Kailas Ingole - Full Stack Developer',
    description: 'Explore my portfolio of web and IoT projects',
    url: 'https://tejasportfolio.com',
    siteName: 'Tejas Portfolio',
    images: [
      {
        url: 'https://via.placeholder.com/1200x630',
        width: 1200,
        height: 630,
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tejas Kailas Ingole - Full Stack Developer',
    description: 'Check out my portfolio and projects',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link 
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;500;600;700;900&display=swap" 
          rel="stylesheet" 
        />
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>
      </head>
      <body className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
