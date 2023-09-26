'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import menuIcon from '@/app/_assets/icon/hamburger.png';
import downArrow from '@/app/_assets/icon/arrow-down-sign-to-navigate.png';
import upArroe from '@/app/_assets/icon/up-arrow.png';
import searchIcon from '@/app/_assets/icon/search.png';
import closeIcon from '@/app/_assets/icon/close.png';

const Navbar = (): React.JSX.Element => {
  const [responsiveMenuOpen, setResponsiveMenuOpen] = useState(false);
  const [responsiveSubCategoryOpen, setResponsiveSubCategoryOpen] =
    useState(false);
  const path = usePathname();
  console.log(responsiveMenuOpen);

  const handleResponsiveMenu = (): void => {
    setResponsiveMenuOpen((prev) => !responsiveMenuOpen);
  };
  const handleSubCategory = (): void => {
    setResponsiveSubCategoryOpen((prev) => !responsiveSubCategoryOpen);
  };
  return (
    <>
      <nav className="navbar">
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

        <div className="">
          {responsiveMenuOpen ? (
            <img
              src={menuIcon.src}
              alt="menu icon"
              className="w-10 h-10 cursor-pointer md:hidden"
              onClick={handleResponsiveMenu}
            />
          ) : (
            <img
              src={closeIcon.src}
              alt="menu icon"
              className="w-8 h-8 cursor-pointer md:hidden"
              onClick={handleResponsiveMenu}
            />
          )}
        </div>
        <div className="w-full px-20 lg:flex items-center hidden ">
          <input
            type="text"
            className="h-10 bg-slate-100 rounded-2xl w-full px-6"
            placeholder="Search for the best products"
          />
          <img
            src={searchIcon.src}
            alt="search icon"
            className="w-6 h-6 ml-[-40px] cursor-pointer"
          />
        </div>
        <div className="menu-items">
          <Link
            href="/"
            className={`menu-item ${path === '/' ? 'active' : ''}`}
          >
            Home
          </Link>
          <div className="group">
            <Link
              href="/categories"
              className={`${path === '/categories' ? 'active' : ''} `}
            >
              <div className="menu-item flex items-center gap-1">
                <p>Categories</p>
                <img src={downArrow.src} alt="down arrow" className="w-3 h-3" />
              </div>
            </Link>
            <div className=" w-[150px] items-start cardShadow bg-white py-5 absolute top-[-1000px] group-hover:top-12 transition duration-300 ease-in-out ">
              <div className="w-full h-0.5 bg-blue-700 mt-[-4px]" />
              <div className="px-5 flex flex-col gap-3 pt-4">
                <Link
                  href="/categories1"
                  className={`${
                    path === '/categories' ? 'active' : ''
                  } hover:text-blue-700`}
                >
                  Category 1
                </Link>
                <Link
                  href="/categories"
                  className={`${
                    path === '/categories' ? 'active' : ''
                  } hover:text-blue-700`}
                >
                  Category 2
                </Link>
                <Link
                  href="/categories"
                  className={`${
                    path === '/categories' ? 'active' : ''
                  } hover:text-blue-700`}
                >
                  Category 3
                </Link>
                <Link
                  href="/categories"
                  className={`${
                    path === '/categories' ? 'active' : ''
                  } hover:text-blue-700`}
                >
                  Category 4
                </Link>
              </div>
            </div>
          </div>
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
      </nav>

      {/* for responsive menu */}
      {responsiveMenuOpen ? (
        <div
          className={`lg:hidden flex flex-col font-bold gap-3 p-4 items-center ${
            responsiveMenuOpen
              ? ' absolute bg-gray-100 w-full top-16 transition duration-1000 ease-linear'
              : ' absolute top-[-200px]'
          }`}
        >
          <Link
            href="/"
            className={`menu-item ${path === '/' ? 'active' : ''}`}
          >
            Home
          </Link>
          <Link
            href="#"
            className={`${path === '/categories' ? 'active' : ''} `}
            onClick={handleSubCategory}
          >
            <div className="menu-item flex items-center gap-1 ">
              <p>Categories</p>
              {responsiveSubCategoryOpen ? (
                <img src={upArroe.src} alt="up arrow" className="w-3 h-3" />
              ) : (
                <img src={downArrow.src} alt="down arrow" className="w-3 h-3" />
              )}
            </div>
            {responsiveSubCategoryOpen ? (
              <div className="px-5 flex flex-col gap-3 pt-4">
                <Link
                  href="/categories1"
                  className={`${
                    path === '/categories' ? 'active' : ''
                  } hover:text-blue-700`}
                >
                  Category 1
                </Link>
                <Link
                  href="/categories"
                  className={`${
                    path === '/categories' ? 'active' : ''
                  } hover:text-blue-700`}
                >
                  Category 2
                </Link>
                <Link
                  href="/categories"
                  className={`${
                    path === '/categories' ? 'active' : ''
                  } hover:text-blue-700`}
                >
                  Category 3
                </Link>
                <Link
                  href="/categories"
                  className={`${
                    path === '/categories' ? 'active' : ''
                  } hover:text-blue-700`}
                >
                  Category 4
                </Link>
              </div>
            ) : null}
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
          <input
            type="text"
            className="h-10 rounded-2xl bg-white w-full px-6"
            placeholder="Search for the best products"
          />
          <button className="px-3 py-2 max-lg:w-1/2 bg-blue-950 font-semibold text-white rounded-lg">
            Search
          </button>
        </div>
      ) : null}
    </>
  );
};

export default Navbar;
