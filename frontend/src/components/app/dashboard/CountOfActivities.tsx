'use client';

import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const COLORS = ['#01A761', '#3A68B2', '#D73512', '#FEEA39', '#C68604'];

const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
  { name: 'Group E', value: 100 },
];

interface DetailsProps {
  color: string;
  country: string;
}
function Details({ color, country }: DetailsProps) {
  return (
    <div className="flex gap-5">
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

const CountOfActivities: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center h-full gap-2  shadow-lg rounded-md bg-secondary md:w-full md:h-[406px] p-5">
      <Text className="w-full font-semibold text-md md:text-xl text-neutral-800 text-black-2">
        COUNT OF ACTIVITIES
      </Text>
      <div className="w-full flex gap-3">
        <div className="w-full h-[200px]  md:h-[320px] ">
          <ResponsiveContainer>
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                fill="#8884d8"
                label>
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="flex flex-col justify-center items-center w-full">
          <div>
            <Details
              color={COLORS[0]}
              country="Funding"
            />
            <Details
              color={COLORS[1]}
              country="Send Money"
            />
            <Details
              color={COLORS[2]}
              country="Bill Payments"
            />
            <Details
              color={COLORS[3]}
              country="Airtime"
            />
            <Details
              color={COLORS[4]}
              country="Complaints"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountOfActivities;
