import Image from 'next/image';
import React from 'react';
import { Logo } from '../..';

export const Preloader: React.FC = () => (
  <div className="fixed h-screen flex space-x-2 items-center justify-center w-full bg-[#fafafa] z-[1000]">
    <div className="relative h-[2rem] w-[2rem] mt-5 md:h-[3rem] md:w-[4rem] opacity-1 animate-bounce md:mt-10">
      <Image
        src={Logo}
        alt="app.xpress"
        fill
      />
    </div>
    <p className="overflow-hidden text-md md:text-4xl mt-5 text-black py-10">
      <span className="inline-block w-0 font-bold animate-w-10 whitespace-nowrap text-success">
        CHANG
      </span>
    </p>
  </div>
);

export const DashboardLoader = () => {
  return (
    <div className="flex h-screen items-center justify-center  gap-5">
      <div className="h-8 w-8 md:h-16 md:w-16 animate-spin rounded-full border-4 border-solid border-primary border-t-transparent"></div>
    </div>
  );
};
