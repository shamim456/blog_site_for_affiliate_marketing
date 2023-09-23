import React from 'react';

interface singleBlogProps {
  image: string;
  category: string;
  title: string;
  numberOfComments: number;
  publishedDate: string;
}

const SingleBlog = ({
  image,
  category,
  title,
  numberOfComments,
  publishedDate,
}: singleBlogProps): React.JSX.Element => {
  return (
    <div className="singleBlogContainer">
      <img src={image} alt="laptop" className="w-full" />
      <div className="flex flex-col bg-white gap-5 p-5">
        {/* <span className="px-3 py-1 bg-gray-200 rounded-2xl text-blue-700">
          {category}
        </span> */}
        <div className="inline-block">
          <span className="px-3 py-1 bg-gray-200 rounded-2xl text-blue-700">
            {category}
          </span>
        </div>
        <h1 className="text-2xl font-bold">{title}</h1>
        <div className="flex gap-2">
          <div>
            <p>{publishedDate}</p>
          </div>
          <div>
            {numberOfComments > 0 ? (
              <p>{numberOfComments} Comments</p>
            ) : (
              <p>No Comments</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
