import { Text } from '@chakra-ui/react';
import CardProps from '@/src/components/app/dashboard/CardProps';
import CountOfActivities from '@/src/components/app/dashboard/CountOfActivities';
import HighestErrors from '@/src/components/app/dashboard/HighestErrors';
import LineChartDashboard from '@/src/components/app/dashboard/LineChartDashboard';
import UserChart from '@/src/components/app/dashboard/UserChart';
import { requestIcon } from '@/src/components';

const DashboardHome = () => {
  return (
    <div className="overflow-hidden md:px-5">
      <Text className="p-3 font-bold text-zinc-700 md:text-2xl">
        Hello Ayooluwa,
      </Text>
      <div className="flex flex-col gap-5 mb-5 md:flex-row md:mt-1">
        <div className="flex">
          <div className="flex flex-col min-w-full gap-5 md:w-1/4 ">
            <UserChart />
            <CardProps
              stat="122"
              description="Number of Open Requests"
              imgURL={requestIcon}
            />
          </div>
        </div>
        <LineChartDashboard />
      </div>
      <div className="flex flex-col gap-5 md:flex-row">
        <HighestErrors />
        <CountOfActivities />
      </div>
    </div>
  );
};

export default DashboardHome;
