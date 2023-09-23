import React from 'react';
import Link from 'next/link';

import banner from '@/app/_assets/banner/91374.jpg';
import SingleBlog from '@/app/_components/cards/SingleBlog';

const Hero = (): React.JSX.Element => {
  return (
    <section className="p-4 md:p-10 w-full flex flex-col lg:flex-row gap-4">
      <div className="flex-1">
        <Link href="/single">
          <SingleBlog
            image={banner.src}
            category="laptop"
            title="Best Laptop 2020: Our Pick of the 15 Best Laptops You"
            numberOfComments={0}
            publishedDate="September 21, 2020"
          />
        </Link>
      </div>
      <div className="flex-1">
        <Link href="/single" className="h-20">
          <SingleBlog
            image={banner.src}
            category="laptop"
            title="Best Laptop 2020: Our Pick of the 15 Best Laptops You"
            numberOfComments={0}
            publishedDate="September 21, 2020"
            directionRow
          />
        </Link>
        <Link href="/single">
          <SingleBlog
            image={banner.src}
            category="laptop"
            title="Best Laptop 2020: Our Pick of the 15 Best Laptops You"
            numberOfComments={0}
            publishedDate="September 21, 2020"
            directionRow
          />
        </Link>
        <Link href="/single">
          <SingleBlog
            image={banner.src}
            category="laptop"
            title="Best Laptop 2020: Our Pick of the 15 Best Laptops You"
            numberOfComments={0}
            publishedDate="September 21, 2020"
            directionRow
          />
        </Link>
      </div>
    </section>
  );
};

export default Hero;
