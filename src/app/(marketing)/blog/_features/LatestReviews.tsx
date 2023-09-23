import React from 'react';
import PopularReview from './PopularReview';
import SingleBlog from '@/app/_components/cards/SingleBlog';
import banner from '@/app/_assets/banner/91374.jpg';

const LatestReviews = (): React.JSX.Element => {
  return (
    <div className="w-full p-5 md:p-10 flex flex-col lg:flex-row gap-10 justify-between">
      <div className="flex flex-col gap-10">
        <h2 className="text-3xl lg:text-4xl font-bold lg:font-extrabold">
          Latest Reviews
        </h2>
        <SingleBlog
          image={banner.src}
          category="Dog"
          title="Ultimate Guide: 10 Best Cameras for Filmmaking on a Budget"
          numberOfComments={20}
          publishedDate="September 27, 2020"
          directionRow
          description="Nowadays, there are a ton of options for filmmakers. Video capture offer by many cameras and systems for home use, especially those on a budget. It’s always important to be in the moment instead of fighting with the"
        />
        <SingleBlog
          image={banner.src}
          category="Dog"
          title="Ultimate Guide: 10 Best Cameras for Filmmaking on a Budget"
          numberOfComments={20}
          publishedDate="September 27, 2020"
          directionRow
          description="Nowadays, there are a ton of options for filmmakers. Video capture offer by many cameras and systems for home use, especially those on a budget. It’s always important to be in the moment instead of fighting with the"
        />
        <SingleBlog
          image={banner.src}
          category="Dog"
          title="Ultimate Guide: 10 Best Cameras for Filmmaking on a Budget"
          numberOfComments={20}
          publishedDate="September 27, 2020"
          directionRow
          description="Nowadays, there are a ton of options for filmmakers. Video capture offer by many cameras and systems for home use, especially those on a budget. It’s always important to be in the moment instead of fighting with the"
        />
      </div>
      <PopularReview />
    </div>
  );
};

export default LatestReviews;
