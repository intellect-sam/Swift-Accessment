import { HStack, Progress, Text } from '@chakra-ui/react';

const Stats = [
  {
    title: 'Login',
    value: 90,
  },
  {
    title: 'Sign Up',
    value: 85,
  },
  {
    title: 'Biometrics',
    value: 70,
  },
  {
    title: 'ID Verification',
    value: 65,
  },
  {
    title: 'Fund Wallet',
    value: 60,
  },
  {
    title: 'Send Money',
    value: 50,
  },
  {
    title: 'Airtime',
    value: 45,
  },
  {
    title: 'Data',
    value: 40,
  },
  {
    title: 'Bill Payments',
    value: 30,
  },
  {
    title: 'Account Creation',
    value: 20,
  },
];

const HighestErrors = () => {
  return (
    <div className="flex flex-col gap-3  shadow-lg rounded-md bg-secondary md:w-full md:h-[406px] p-5">
      <Text className="w-full font-semibold text-md md:text-xl text-neutral-800 text-black-2">
        HIGHEST ERRORS
      </Text>
      {Stats.map((stats, key) => {
        return (
          <div
            className="flex w-full justify-between h-full"
            key={key}>
            <div className="w-30 justify-center text-sm ">{stats.title}</div>
            <div className="flex-1 md:px-10 py-1">
              <Progress
                colorScheme="green"
                hasStripe
                size="lg"
                value={stats.value}
              />
            </div>
            <div className=" flex justify-end w-10 md:w-20">{stats.value}%</div>
          </div>
        );
      })}
    </div>
  );
};

export default HighestErrors;
