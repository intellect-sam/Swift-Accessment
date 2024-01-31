'use client';

import { LineChart, Line, XAxis, YAxis, CartesianGrid } from 'recharts';
import { Text } from '@chakra-ui/react';

const data = [
  {
    name: 'Daily',
    percentage: 0,
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Weekly',
    percentage: 50,
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Monthly',
    percentage: 25,
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: '3 Months',
    percentage: 75,
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: '6 Months',
    percentage: 50,
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Yearly',
    percentage: 100,
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
];

export default function LineChartDashboard() {
  return (
    <div className="flex flex-col gap-10  shadow-lg  rounded-2xl bg-secondary md:w-full md:h-[383px] p-5 ">
      <Text className="w-full font-semibold text-md md:text-xl text-neutral-800 text-black-2">
        SUCCESS RATE
      </Text>
      <div className="overflow-hidden overflow-x-scroll">
        <LineChart
          width={900}
          height={300}
          data={data}
          className="ml-[-10] mb-5 md:ml-0 mr-0">
          <CartesianGrid strokeDasharray="1" />
          <XAxis
            dataKey="name"
            fontWeight="bold"
          />
          <YAxis
            dataKey="percentage"
            fontWeight="bold"
          />
          {/* <Tooltip /> */}
          {/* <Legend /> */}

          <Line
            type="monotone"
            dataKey="percentage"
            stroke="#82ca9d"
            fontWeight="bold"
          />
        </LineChart>
      </div>
    </div>
  );
}
