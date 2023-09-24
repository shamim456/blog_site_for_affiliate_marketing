import Link from 'next/link';
import React from 'react';
import facebookIcon from '@/app/_assets/icon/facebook_3536394.png';
import twitterIcon from '@/app/_assets/icon/twitter_3256013.png';
import linkedinIcon from '@/app/_assets/icon/linkedin_3536505.png';

const StayConnected = (): React.JSX.Element => {
  return (
    <div className="flex flex-col gap-10">
      <h1 className="text-3xl font-extrabold">Stay Connected</h1>
      <div className="flex flex-col gap-3">
        <Link
          href="/facebook"
          className="flex group cardShadow bg-white gap-8 items-center rounded-b-2xl border-b-4 hover:border-blue-700 transition duration-300 ease-in-out"
        >
          <img
            src={facebookIcon.src}
            alt="facebook icon"
            className=" w-14 h-14"
          />
          <h2 className="text-xl group-hover:text-blue-700 font-semibold transition duration-300 ease-in-out">
            Facebook
          </h2>
        </Link>
        <Link
          href="/twitter"
          className="flex group cardShadow bg-white gap-8 items-center rounded-b-2xl border-b-4 hover:border-blue-700 transition duration-300 ease-in-out"
        >
          <img
            src={twitterIcon.src}
            alt="facebook icon"
            className=" w-14 h-14"
          />
          <h2 className="text-xl group-hover:text-blue-700 font-semibold transition duration-300 ease-in-out">
            Twitter
          </h2>
        </Link>
        <Link
          href="/linkedin"
          className="flex group cardShadow bg-white gap-8 items-center rounded-b-2xl border-b-4 hover:border-blue-700 transition duration-300 ease-in-out"
        >
          <img
            src={linkedinIcon.src}
            alt="facebook icon"
            className=" w-14 h-14"
          />
          <h2 className="text-xl group-hover:text-blue-700 font-semibold transition duration-300 ease-in-out">
            Linkedin
          </h2>
        </Link>
      </div>
    </div>
  );
};

export default StayConnected;
