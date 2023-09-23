import React from 'react';
import Link from 'next/link';

import SingleBlog from '@/app/_components/cards/SingleBlog';

import banner from '@/app/_assets/banner/91374.jpg';

const TrendingReviews = (): React.JSX.Element => {
  return (
    <div className="w-full p-5 md:p-10 flex flex-col gap-10">
      <div className="flex flex-col items-center gap-4 lg:flex-row w-full lg:justify-between">
        <h2 className="text-3xl lg:text-4xl font-bold lg:font-extrabold">
          Trending Reviews
        </h2>
        <div>
          <Link
            href="/allReviews"
            className="hover:text-blue-700 transition duration-300 ease-in-out"
          >
            ALL TRENDING REVIEWS
          </Link>
          <div className="w-[192px] h-0.5 bg-blue-700"></div>
        </div>
      </div>
      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-3">
        <Link href="/blog">
          <SingleBlog
            image={banner.src}
            category="pets"
            title="Best Smartwatch: The Top Wearables You Can Buy Today"
            numberOfComments={2}
            publishedDate="September 21, 2020"
            directionRow
          />
        </Link>
        <Link href="/blog">
          <SingleBlog
            image={banner.src}
            category="pets"
            title="Best Smartwatch: The Top Wearables You Can Buy Today"
            numberOfComments={2}
            publishedDate="September 21, 2020"
            directionRow
          />
        </Link>
        <Link href="/blog">
          <SingleBlog
            image={banner.src}
            category="pets"
            title="Best Smartwatch: The Top Wearables You Can Buy Today"
            numberOfComments={2}
            publishedDate="September 21, 2020"
            directionRow
          />
        </Link>
        <Link href="/blog">
          <SingleBlog
            image={banner.src}
            category="pets"
            title="Best Smartwatch: The Top Wearables You Can Buy Today"
            numberOfComments={2}
            publishedDate="September 21, 2020"
            directionRow
          />
        </Link>
        <Link href="/blog">
          <SingleBlog
            image={banner.src}
            category="pets"
            title="Best Smartwatch: The Top Wearables You Can Buy Today"
            numberOfComments={2}
            publishedDate="September 21, 2020"
            directionRow
          />
        </Link>
        <Link href="/blog">
          <SingleBlog
            image={banner.src}
            category="pets"
            title="Best Smartwatch: The Top Wearables You Can Buy Today"
            numberOfComments={2}
            publishedDate="September 21, 2020"
            directionRow
          />
        </Link>
      </div>
    </div>
  );
};

export default TrendingReviews;
