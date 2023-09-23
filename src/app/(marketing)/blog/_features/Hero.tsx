import React from 'react';

import banner from '@/app/_assets/banner/91374.jpg';
import Link from 'next/link';
import SingleBlog from '@/app/_components/cards/SingleBlog';

const Hero = (): React.JSX.Element => {
  return (
    // <section className="p-20 w-6/12">
    //   <Link href="/single" className=" flex flex-col gap-5">
    //     <img src={banner.src} alt="laptop" className="w-full" />
    //     <div className="flex flex-col gap-5">
    //       <p className="px-3 py-1 bg-gray-200 w-24 rounded-2xl text-blue-700">
    //         Category
    //       </p>
    //       <h1 className="text-2xl font-bold">
    //         Best Laptop 2020: Our Pick of the 15 Best Laptops You
    //       </h1>
    //       <div className="flex gap-2">
    //         <div>
    //           <p>September 21, 2020</p>
    //         </div>
    //         <div>
    //           <p>No Comments</p>
    //         </div>
    //       </div>
    //     </div>
    //   </Link>
    // </section>
    <section className="p-20 w-6/12">
      <Link href="/single">
        <SingleBlog
          image={banner.src}
          category="laptop"
          title="Best Laptop 2020: Our Pick of the 15 Best Laptops You"
          numberOfComments={0}
          publishedDate="September 21, 2020"
        />
      </Link>
    </section>
  );
};

export default Hero;
