import React from 'react';
import { LuFilter } from 'react-icons/lu';

interface FilterProps {
  description: string;
}

const FilterBar: React.FC<FilterProps> = ({ description }) => {
  return (
    <>
      <div className="flex justify-between p-3 mb-3  w-full shadow border  bg-white border-none">
        <div className="flex gap-2 h-full justify-center items-center">
          <LuFilter />
          <p>Filter users</p>
        </div>
        <div> {description}</div>
      </div>
    </>
  );
};

export default FilterBar;
