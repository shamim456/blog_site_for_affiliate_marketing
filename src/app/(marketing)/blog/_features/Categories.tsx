import React from 'react';

import categroryImage from '@/app/_assets/banner/91374.jpg';
import Link from 'next/link';

const Categories = (): React.JSX.Element => {
  return (
    <div className="flex flex-col gap-10">
      <h2 className="text-3xl font-extrabold">Categories</h2>
      <div className=" grid grid-cols-2 gap-3">
        <Link href="/category1">
          <div className="rounded-b-2xl overflow-hidden relative cardShadow border-b-4 hover:border-blue-700 transition duration-500 ease-in-out">
            <img
              src={categroryImage.src}
              alt="laptop"
              className="rounded-b-2xl"
            />
            <div className="w-full h-full bg-slate-900 absolute top-0 opacity-50" />
            <p className="text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl font-bold">
              Category
            </p>
          </div>
        </Link>
        <Link href="/category1">
          <div className="rounded-b-2xl overflow-hidden relative cardShadow border-b-4 hover:border-blue-700 transition duration-500 ease-in-out">
            <img
              src={categroryImage.src}
              alt="laptop"
              className="rounded-b-2xl"
            />
            <div className="w-full h-full bg-slate-900 absolute top-0 opacity-50" />
            <p className="text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl font-bold">
              Category
            </p>
          </div>
        </Link>
        <Link href="/category1">
          <div className="rounded-b-2xl overflow-hidden relative cardShadow border-b-4 hover:border-blue-700 transition duration-500 ease-in-out">
            <img
              src={categroryImage.src}
              alt="laptop"
              className="rounded-b-2xl"
            />
            <div className="w-full h-full bg-slate-900 absolute top-0 opacity-50" />
            <p className="text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl font-bold">
              Category
            </p>
          </div>
        </Link>
        <Link href="/category1">
          <div className="rounded-b-2xl overflow-hidden relative cardShadow border-b-4 hover:border-blue-700 transition duration-500 ease-in-out">
            <img
              src={categroryImage.src}
              alt="laptop"
              className="rounded-b-2xl"
            />
            <div className="w-full h-full bg-slate-900 absolute top-0 opacity-50" />
            <p className="text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl font-bold">
              Category
            </p>
          </div>
        </Link>
        <Link href="/category1">
          <div className="rounded-b-2xl overflow-hidden relative cardShadow border-b-4 hover:border-blue-700 transition duration-500 ease-in-out">
            <img
              src={categroryImage.src}
              alt="laptop"
              className="rounded-b-2xl"
            />
            <div className="w-full h-full bg-slate-900 absolute top-0 opacity-50" />
            <p className="text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl font-bold">
              Category
            </p>
          </div>
        </Link>
        <Link href="/category1">
          <div className="rounded-b-2xl overflow-hidden relative cardShadow border-b-4 hover:border-blue-700 transition duration-500 ease-in-out">
            <img
              src={categroryImage.src}
              alt="laptop"
              className="rounded-b-2xl"
            />
            <div className="w-full h-full bg-slate-900 absolute top-0 opacity-50" />
            <p className="text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl font-bold">
              Category
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Categories;
