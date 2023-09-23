import PublicLayout from '@/app/_layouts/publicLayout';
// import RootLayout from '@/app/layout';
import React from 'react';
import Hero from './_features/Hero';
import TrendingReviews from './_features/TrendingReviews';

const Blog = (): React.JSX.Element => {
  return (
    <PublicLayout>
      <div className="w-full bg-gray-100">
        <Hero />
      </div>
      <div>
        <TrendingReviews />
      </div>
    </PublicLayout>
  );
};

export default Blog;
