import { Button } from '@chakra-ui/react';
import Image from 'next/image';
import { notFound } from '../assets/images/auth';
import { logo } from '../components';

export default function NotFound() {
  return (
    <div className="w-full min-h-screen relative flex flex-col justify-center items-center">
      <div className="w-1/2 md:w-1/4">
        <Image
          src={notFound}
          alt="not-found"
        />
      </div>
      <div className="text-center text-primary text-md font-normal">
        Oops!
        <br />
        The page you’re looking for doesn’t exist
      </div>
      <div className="flex  mt-1">
        <div className="mt-2 w-20">
          <Image
            src={logo}
            alt="logo"
          />
        </div>
        <div className="shadow">
          <Button
            colorScheme="green"
            as="a"
            href="/">
            Go back home
          </Button>
        </div>
      </div>
    </div>
  );
}
