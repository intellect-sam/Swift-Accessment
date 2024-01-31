'use client';

import { PieChart, Pie, Cell } from 'recharts';
import { Box, Text } from '@chakra-ui/react';

const data = [
  { name: 'Group A', value: 500 },
  { name: 'Group B', value: 450 },
  { name: 'Group C', value: 50 },
];

const COLORS = ['#01A761', '#D63511', '#3A68B2'];

interface DetailsProps {
  color: string;
  country: string;
}
function Details({ color, country }: DetailsProps) {
  return (
    <div className="flex gap-3">
      <div className="py-1">
        <Box
          width={'1.25rem'}
          height={'0.875rem'}
          bgColor={color}></Box>
      </div>
      <Text>{country}</Text>
    </div>
  );
}

const UserChart = () => {
  return (
    <div className="bg-secondary p-5 min-w-full md:w-[389px] md:h-[250px] shadow-lg rounded-md ">
      <Text className="w-full font-semibold text-md md:text-xl text-neutral-800 text-black-2">
        NUMBER OF USERS PER COUNTRY
      </Text>
      <div className="flex md:flex-row h-full">
        <PieChart
          width={270}
          height={200}>
          <Pie
            data={data}
            cx={120}
            cy={100}
            innerRadius={55}
            outerRadius={80}
            fill="#8884d8"
            // paddingAngle={5}
            dataKey="value">
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
        <div className="flex flex-col justify-center">
          <Details
            color={COLORS[0]}
            country="Nigeria"
          />
          <Details
            color={COLORS[1]}
            country="Kenya"
          />
          <Details
            color={COLORS[2]}
            country="Others"
          />
        </div>
      </div>
    </div>
  );
};

export default UserChart;
