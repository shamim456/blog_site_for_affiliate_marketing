import React from 'react';

import calendarIcon from '@/app/_assets/icon/calendar.png';
import commentIcon from '@/app/_assets/icon/comment.png';
import Link from 'next/link';

interface singleBlogProps {
  image: string;
  category: string;
  title: string;
  numberOfComments: number;
  publishedDate: string;
  directionRow?: boolean;
  description?: string;
  isRelatedTitle?: boolean;
}

const SingleBlog = ({
  image,
  category,
  title,
  numberOfComments,
  publishedDate,
  directionRow,
  description,
  isRelatedTitle,
}: singleBlogProps): React.JSX.Element => {
  return (
    <div
      className={`${
        directionRow ?? false ? 'singleBlogContainerRow' : 'singleBlogContainer'
      }`}
    >
      <div>
        <img
          src={image}
          alt="laptop"
          className={`${
            directionRow ?? false
              ? 'w-[180px] md:w-[230px] h-full lg:aspect-square'
              : 'w-full aspect-video'
          }`}
        />
      </div>
      <div className="flex w-full flex-col bg-white gap-3 p-2 lg:p-5">
        <div className="inline-block">
          <span className="px-3 py-1 bg-gray-200 rounded-2xl text-blue-700">
            {category}
          </span>
        </div>
        <h1
          className={`${isRelatedTitle ?? false ? 'text-base' : ''} ${
            directionRow ?? false ? 'text-xl' : 'text-2xl'
          } font-bold`}
        >
          {title}
        </h1>
        <div className="flex flex-col md:flex-row gap-2 text-xs text-gray-500">
          <div className="flex gap-1 items-center">
            <img src={calendarIcon.src} alt="calendar" className="w-4 h-4" />
            <p>{publishedDate}</p>
          </div>
          <div className="flex gap-1 items-center">
            <img src={commentIcon.src} alt="comment" className="w-3 h-3" />
            {numberOfComments > 0 ? (
              <p>{numberOfComments} Comments</p>
            ) : (
              <p>No Comments</p>
            )}
          </div>
        </div>
        {(description ?? '').length > 0 ? (
          <div className="flex flex-col gap-4">
            <p>{description}</p>
            <div>
              <Link href="/blog" className="hover:text-blue-700">
                Read More
              </Link>
              <div className="w-[80px] h-0.5 bg-blue-700" />
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default SingleBlog;
