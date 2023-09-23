import React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '../_components/navbar/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}): React.JSX.Element {
  return (
    <section className="w-full">
      <Navbar />
      <div className={`${inter.className} w-full`}>{children}</div>
    </section>
  );
}
