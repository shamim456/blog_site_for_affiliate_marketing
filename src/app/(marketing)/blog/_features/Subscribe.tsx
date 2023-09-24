import React from 'react';
import bannerImage from '@/app/_assets/banner/psychedelic-paper-shapes-with-copy-space.jpg';

const Subscribe = (): React.JSX.Element => {
  return (
    <div className="relative">
      <img src={bannerImage.src} alt="" className="w-full h-[400px]" />
      <div className=" max-lg:w-full max-md:px-6 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col gap-10 items-center">
        <h2 className="text-4xl text-center font-extrabold text-white">
          Subscribe To Our Weekly Newsletter
        </h2>
        <form className="flex flex-col items-center lg:justify-center lg:flex-row gap-4 w-full">
          <input
            type="text"
            className="w-4/6 px-2 rounded-md"
            placeholder="Enter your email address"
          />
          <button className="px-3 py-2 max-lg:w-1/2 bg-blue-950 font-semibold text-white rounded-lg hover:bg-white hover:text-blue-700 transition duration-300 ease-in-out">
            Subscribe Now
          </button>
        </form>
        <p className="text-white text-center">
          No spam, notifications only about new products, updates.
        </p>
      </div>
    </div>
  );
};

export default Subscribe;
