'use client';

import Link from 'next/link';
import React, { ReactNode } from 'react';
import { FaArrowLeft } from 'react-icons/fa6';
import { usePathname } from 'next/navigation';

interface Props {
  children?: ReactNode;
}

const navLinks = [
  {
    name: 'Personal Information',
    href: '/customer/personal',
  },
  {
    name: 'Compliance',
    href: '/customer/compliance',
  },
  {
    name: 'Device Management',
    href: '/customer/device',
  },
];

const CustomerDetailsLayout = ({ children }: Props) => {
  const pathname = usePathname();
  return (
    <section>
      <div>
        <div className="bg-secondary w-screen">
          <div className="lg:w-1/3 md:mx-8 p-5 ">
            <nav className="">
              <ul className="text-zinc-700 text-base font-normal flex justify-between md:p-2 ">
                {navLinks.map((link, key) => {
                  const isActive = pathname.startsWith(link.href);
                  return (
                    <li key={key}>
                      <Link
                        href={link.href}
                        key={link.name}
                        className={
                          isActive
                            ? 'border-4   border-secondary border-b-success h-100 py-5 text-success'
                            : ''
                        }>
                        {link.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        </div>

        <Link href="/customer">
          <div className="flex items-center gap-2 py-5 md:mx-20">
            <FaArrowLeft />
            <p>Back to Customer’s List</p>
          </div>
        </Link>
      </div>

      <main>
        <div>{children}</div>
      </main>
    </section>
  );
};

export default CustomerDetailsLayout;
