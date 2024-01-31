'use client';
import { sanitizeString } from '@/src/core/helpers/sanitizeString';
import DropdownNotification from './DropdownNotification';
import Image from 'next/image';
import DropdownUser from './DropdownUser';
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useState } from 'react';
import React from 'react';
import Link from 'next/link';
import { SidebarData } from './SidebarData';
import { logo } from '.';
import { clsx } from 'clsx';
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathname = usePathname();
  const paths = pathname.split('/');
  const absolutePath = paths[paths.length - 1];
  const { isOpen, onOpen, onClose } = useDisclosure();
  // const [placement, setPlacement] = useState('left');
  const placement = 'left';

  const closeDrawer = () => {
    // setActiveLink();
    onClose();
  };

  return (
    <header className="sticky top-0 flex w-full bg-white z-999 drop-shadow-1 dark:bg-boxdark dark:drop-shadow-none ">
      <div className="flex items-center justify-between flex-grow px-5 py-4 shadow-2 2xl:px-11 md:px-10">
        <div className="flex items-center gap-2 sm:gap-4 lg:hidden">
          {/* <!-- Hamburger Toggle BTN --> */}

          <button
            aria-controls="sidebar"
            onClick={onOpen}
            className="font-3xl">
            <GiHamburgerMenu size={20} />
          </button>

          {/* <!-- Hamburger Toggle BTN --> */}
        </div>
        <Text className="font-bold md:text-2xl text-zinc-700 md:px-3">
          {sanitizeString(pathname)}
        </Text>
        <div className="flex items-center gap-3 2xsm:gap-7">
          <ul className="flex items-center gap-2 2xsm:gap-4">
            <DropdownNotification />
          </ul>

          {/* <!-- User Area --> */}
          <DropdownUser />
          {/* <!-- User Area --> */}
        </div>
      </div>

      <Drawer
        placement={placement}
        onClose={onClose}
        isOpen={isOpen}
        size="1/2">
        <DrawerOverlay />
        <DrawerContent className="bg-primary">
          <DrawerHeader>
            <div className="flex items-center mt-7 justify between  py-5.5 lg:py-6.5">
              <Link href="/dashboard">
                <Image
                  src={logo}
                  alt="Logo"
                />
              </Link>
            </div>
          </DrawerHeader>
          <DrawerBody className="p-0">
            <nav className="lg:mt-9 w-full">
              <div>
                <ul className="flex flex-col">
                  {SidebarData.map((val, key) => {
                    return (
                      <li key={key}>
                        <Link
                          href={`/${val.link}`}
                          onClick={closeDrawer}
                          className={clsx(
                            'group relative flex items-center gap-2.5 rounded-sm py-5 md:py-5 px-6 font-mono text-secondary duration-300 ease-in-out hover:bg-secondary  hover:text-primary',
                            {
                              ' text-success bg-secondary':
                                absolutePath === val.name,
                            }
                          )}>
                          {val.icon}
                          {val.title}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </nav>
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      {/* {showMobileNavbar && <MobileNavbar sidebarOpen={sidebarOpen} />} */}
    </header>
  );
};

export default Header;
