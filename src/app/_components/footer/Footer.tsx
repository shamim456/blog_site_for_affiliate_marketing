import React from 'react';
import Link from 'next/link';

import facebookIcon from '@/app/_assets/icon/facebook_3536394.png';
import linkedinIcon from '@/app/_assets/icon/linkedin_3536505.png';
import twitterIcon from '@/app/_assets/icon/twitter_3256013.png';

const Footer = (): React.JSX.Element => {
  return (
    <div>
      <div className="p-10 w-full flex gap-4 flex-col lg:flex-row justify-between items-center bg-[#161C2D]">
        <div className="flex w-full lg:w-1/3 flex-col gap-1">
          <h2 className="text-white text-2xl max-lg:text-center font-bold">
            Helpful Links
          </h2>
          <div className="h-0.5 w-full lg:w-5/6 bg-gray-600" />
          <div className="grid grid-cols-1 max-lg:text-center lg:grid-cols-2 gap-2 text-white">
            <Link
              href="/"
              className="hover:text-blue-700 transition duration-300 ease-in-out"
            >
              Home
            </Link>
            <Link
              href="/"
              className="hover:text-blue-700 transition duration-300 ease-in-out"
            >
              About Us
            </Link>
            <Link
              href="/"
              className="hover:text-blue-700 transition duration-300 ease-in-out"
            >
              Blog
            </Link>
            <Link
              href="/"
              className="hover:text-blue-700 transition duration-300 ease-in-out"
            >
              Contact Us
            </Link>
            <Link
              href="/"
              className="hover:text-blue-700 transition duration-300 ease-in-out"
            >
              Privacy Policy
            </Link>
            <Link
              href="/"
              className="hover:text-blue-700 transition duration-300 ease-in-out"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
        <div className="flex gap-3 items-center">
          <h2 className="text-2xl font-bold text-white">Follow Us</h2>
          <div className="flex gap-2">
            <Link href="/facebook">
              <img src={facebookIcon.src} alt="" className=" w-10 h-10" />
            </Link>
            <Link href="/linkedin">
              <img src={linkedinIcon.src} alt="" className=" w-10 h-10" />
            </Link>
            <Link href="/twitter">
              <img src={twitterIcon.src} alt="" className=" w-10 h-10" />
            </Link>
          </div>
        </div>
      </div>
      <div className="p-8 bg-[#121625] text-white flex items-center gap-8 lg:justify-between flex-col lg:flex-row text-center">
        <p>Copyright @2022 Puva. is Proudly Crafted by Shamim</p>
        <div className="flex gap-2 items-center">
          <Link href="/terms">Terms & Conditions</Link>
          <div className="w-0.5 h-4 bg-gray-600" />
          <Link href="/privacy">Privacy Policy</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
