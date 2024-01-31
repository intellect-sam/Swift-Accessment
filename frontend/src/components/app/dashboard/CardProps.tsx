import Image from 'next/image';
import React from 'react';

interface CardProps {
  stat: string;
  description: string;
  imgURL: string;
}

const CardProps: React.FC<CardProps> = ({ stat, description, imgURL }) => {
  return (
    <div className="rounded-md border border-stroke bg-white min-w-full py-2 md:py-8 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark md:w-[389px]">
      <div className="flex items-end justify-between mt-4 text-black-2">
        <div>
          <h4 className="font-bold md:text-title-md dark:text-white">{stat}</h4>
          <span className="text-sm font-medium">{description}</span>
        </div>

        <span className="flex items-center w-1/6 gap-1 text-sm font-medium text-meta-3">
          <Image
            src={imgURL}
            alt="image"
          />
        </span>
      </div>
    </div>
  );
};

export default CardProps;
