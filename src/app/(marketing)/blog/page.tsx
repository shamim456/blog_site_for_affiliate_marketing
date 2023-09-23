import PublicLayout from '@/app/_layouts/publicLayout';
// import RootLayout from '@/app/layout';
import React from 'react';
import Hero from './_features/Hero';

const Blog = (): React.JSX.Element => {
  return (
    <PublicLayout>
      <div className="w-full bg-gray-100">
        <Hero />
      </div>
    </PublicLayout>
  );
};

export default Blog;
