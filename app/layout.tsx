import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Associate Professor (Dr) Sobia Zafar | Specialist Paediatric Dentist | Gentle Dental Care for Children',
  description: 'Professional pediatric dental care with a gentle approach. Comprehensive dental services for children in a comfortable, child-friendly environment.',
  keywords: 'pediatric dentist, children dental care, kids dentist, gentle dentistry, orthodontics for children',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}