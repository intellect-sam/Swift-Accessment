import { group3, group4 } from '@/src/assets/images/auth';
import Image from 'next/image';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="">
      <div className="flex h-screen overflow-hidden">
        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden bg-[#F8F8F8]">
          <main>
            <div className="flex flex-col justify-center items-center h-screen">
              {children}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
