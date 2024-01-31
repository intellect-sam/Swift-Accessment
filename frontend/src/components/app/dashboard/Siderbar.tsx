'use client';
import { useEffect, useRef, useState } from 'react';
import { SidebarData } from './SidebarData';
import Image from 'next/image';
import Link from 'next/link';
import { logo } from './index';
import { clsx } from 'clsx';
import { usePathname } from 'next/navigation';

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const pathname = usePathname();
  const paths = pathname.split('/');
  const absolutePath = paths[paths.length - 1];
  const [activeLink, setActiveLink] = useState(null);

  console.log(absolutePath);

  // useEffect(() => {
  //   setActiveLink(pathname);
  // }, [pathname]);

  return (
    <aside
      className={`absolute left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden bg-primary duration-300 ease-linear lg:static lg:translate-x-0 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
      {/* <!-- SIDEBAR HEADER --> */}
      <div className="flex items-center mt-7 justify-between gap-2  px-6 py-5.5 lg:py-6.5">
        <Link href="/dashboard">
          <Image
            src={logo}
            alt="Logo"
          />
        </Link>
      </div>
      {/* <!-- SIDEBAR HEADER --> */}

      <div className="flex flex-col overflow-y-auto duration-300 ease-linear no-scrollbar">
        {/* <!-- Sidebar Menu --> */}
        <nav className="py-4 mt-5 lg:mt-9 ">
          <div>
            <ul className="flex flex-col gap-1 mb-6">
              {SidebarData.map((val, key) => {
                return (
                  <li key={key}>
                    <Link
                      href={`/${val.link}`}
                      className={clsx(
                        'group relative flex items-center gap-2.5 rounded-sm py-5 px-6 font-mono text-secondary duration-300 ease-in-out hover:bg-secondary hover:text-success',
                        {
                          'bg-white text-success border-4 border-secondary border-l-success':
                            absolutePath === val.name,
                        }
                      )}>
                      <div className="text-2xl">{val.icon}</div>
                      {val.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </nav>
        {/* <!-- Sidebar Menu --> */}
      </div>
    </aside>
  );
};

export default Sidebar;
