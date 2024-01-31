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
          <div className="absolute right-0 w-80">
            <Image
              src={group3}
              alt=""
            />
          </div>
          <div className="absolute left-0 bottom-0 w-80">
            <Image
              src={group4}
              alt=""
            />
          </div>

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
