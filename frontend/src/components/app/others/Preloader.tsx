import Image from 'next/image';
import React from 'react';
import { Logo } from '../..';

export const DashboardLoader = () => {
  return (
    <div className="flex h-screen items-center justify-center  gap-5">
      <div className="h-8 w-8 md:h-16 md:w-16 animate-spin rounded-full border-4 border-solid border-primary border-t-transparent"></div>
    </div>
  );
};
