import React from 'react';

import SingleBlog from '@/app/_components/cards/SingleBlog';
import banner from '@/app/_assets/banner/91374.jpg';
import Link from 'next/link';

const DogCategory = (): React.JSX.Element => {
  return (
    <div className="w-full p-5 md:p-10 flex flex-col gap-10">
      <div className="flex flex-col items-center gap-4 lg:flex-row w-full lg:justify-between">
        <h2 className="text-3xl lg:text-4xl font-bold lg:font-extrabold">
          Dog Food
        </h2>
        <div>
          <Link
            href="/allReviews"
            className="hover:text-blue-700 transition duration-300 ease-in-out"
          >
            VIEW ALL
          </Link>
          <div className="w-[73px] h-0.5 bg-blue-700"></div>
        </div>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Link href="/dogReview">
          <SingleBlog
            image={banner.src}
            category="Dog Food"
            title="The Best Wheel Spacers for Cars Review in 2020"
            numberOfComments={3}
            publishedDate="September 27, 2020"
          />
        </Link>
        <Link href="/dogReview">
          <SingleBlog
            image={banner.src}
            category="Dog Food"
            title="The Best Wheel Spacers for Cars Review in 2020"
            numberOfComments={3}
            publishedDate="September 27, 2020"
          />
        </Link>
        <Link href="/dogReview">
          <SingleBlog
            image={banner.src}
            category="Dog Food"
            title="The Best Wheel Spacers for Cars Review in 2020"
            numberOfComments={3}
            publishedDate="September 27, 2020"
          />
        </Link>
        <Link href="/dogReview">
          <SingleBlog
            image={banner.src}
            category="Dog Food"
            title="The Best Wheel Spacers for Cars Review in 2020"
            numberOfComments={3}
            publishedDate="September 27, 2020"
          />
        </Link>
        <Link href="/dogReview">
          <SingleBlog
            image={banner.src}
            category="Dog Food"
            title="The Best Wheel Spacers for Cars Review in 2020"
            numberOfComments={3}
            publishedDate="September 27, 2020"
          />
        </Link>
        <Link href="/dogReview">
          <SingleBlog
            image={banner.src}
            category="Dog Food"
            title="The Best Wheel Spacers for Cars Review in 2020"
            numberOfComments={3}
            publishedDate="September 27, 2020"
          />
        </Link>
      </div>
    </div>
  );
};

export default DogCategory;
