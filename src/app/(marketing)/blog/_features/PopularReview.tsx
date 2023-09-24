import React from 'react';

import SingleBlog from '@/app/_components/cards/SingleBlog';

import banner from '@/app/_assets/banner/91374.jpg';
import StayConnected from './StayConnected';
import Categories from './Categories';

const PopularReview = (): React.JSX.Element => {
  return (
    <div className="w-full flex flex-col lg:flex-row gap-10 justify-between">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-10">
          <h2 className="text-3xl lg:text-4xl font-bold lg:font-extrabold">
            Popular
          </h2>
          <SingleBlog
            image={banner.src}
            category="Dog"
            title="Ultimate Guide: 10 Best Cameras for Filmmaking on a Budget"
            numberOfComments={20}
            publishedDate="September 27, 2020"
            directionRow
            isRelatedTitle
          />
          <SingleBlog
            image={banner.src}
            category="Dog"
            title="Ultimate Guide: 10 Best Cameras for Filmmaking on a Budget"
            numberOfComments={20}
            publishedDate="September 27, 2020"
            directionRow
            isRelatedTitle
          />
          <SingleBlog
            image={banner.src}
            category="Dog"
            title="Ultimate Guide: 10 Best Cameras for Filmmaking on a Budget"
            numberOfComments={20}
            publishedDate="September 27, 2020"
            directionRow
            isRelatedTitle
          />
        </div>
        <StayConnected />
        <Categories />
      </div>
    </div>
  );
};

export default PopularReview;
