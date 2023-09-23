'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navbar = (): React.JSX.Element => {
  const path = usePathname();
  console.log(path);
  return (
    <header className="navbar">
      <Link href="/">
        <div className="h-7 flex">
          <div className="h-full flex px-2 items-center">
            <h1 className="font-black">PET</h1>
          </div>
          <div className="h-full flex items-center text-white px-2 bg-black">
            <h1 className="font-extrabold">PAMPER</h1>
          </div>
        </div>
      </Link>
      <div className="menu-items">
        <Link href="/" className={`menu-item ${path === '/' ? 'active' : ''}`}>
          Home
        </Link>
        <Link
          href="/blog"
          className={`menu-item ${path === '/blog' ? 'active' : ''}`}
        >
          Blog
        </Link>
        <Link
          href="/contact"
          className={`menu-item ${path === 'contact' ? 'active' : ''}`}
        >
          Contact
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
