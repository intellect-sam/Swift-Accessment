'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Box, Button, Text } from '@chakra-ui/react';
import loginImage from '../assets/images/auth/login.png';
import Logo from '../assets/images/logo/logo.svg';
import group from '../assets/images/auth/group.png';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { frontImg } from '../assets/images/auth';

export default function Home() {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);
  return (
    <main className="">
      <div>
        <Box
          as="div"
          className="w-full px-10 bg-primary md:w-full md:px-40 text-secondary">
          <Box className="flex flex-col gap-10 justify-center items-center h-screen">
            <div className=" flex justify-start items-start w-full">
              {/* <Image
                src={Logo}
                alt=""
              /> */}
            </div>
            <div className="flex flex-col items-start justify-start w-full  gap-5 md:gap-10">
              <Box className="flex flex-col gap-2 font-bold ">
                <Text className="font-light md:text-5xl md:font-semibold">
                  Welcome to <br />
                </Text>
                <Text className="text-3xl md:text-5xl">
                  <span className="py-3 md:py-10 ">Xpress Admin Console</span>
                </Text>
              </Box>
              <div className="font-light text-md md:text-lg md:font-mono md:mb-10">
                The admin console is built to allow you manage
                <br />
                your application and perform system administration <br />
                tasks for Xpress.
              </div>
              <Link href="/auth">
                <Button
                  size="lg"
                  textColor={'green'}
                  className=" bg-secondary w-30 h-10  md:w-50 md:py-7">
                  Login
                </Button>
              </Link>
            </div>
          </Box>
        </Box>
      </div>
    </main>
  );
}
