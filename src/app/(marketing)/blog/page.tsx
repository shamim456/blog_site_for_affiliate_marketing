import PublicLayout from '@/app/_layouts/publicLayout';
// import RootLayout from '@/app/layout';
import React from 'react';
import Hero from './_features/Hero';
import TrendingReviews from './_features/TrendingReviews';
import DogCategory from './_features/DogCategory';
import CatCategory from './_features/CatCategory';
import LatestReviews from './_features/LatestReviews';
import Subscribe from './_features/Subscribe';

const Blog = (): React.JSX.Element => {
  return (
    <PublicLayout>
      <div className="w-full bg-gray-100">
        <Hero />
      </div>
      <div>
        <TrendingReviews />
      </div>
      <div className="w-full bg-gray-100">
        <DogCategory />
      </div>
      <div>
        <CatCategory />
      </div>
      <div className="w-full bg-gray-100">
        <LatestReviews />
      </div>
      <div className=" py-28">
        <Subscribe />
      </div>
    </PublicLayout>
  );
};

export default Blog;
