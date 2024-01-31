import Link from 'next/link';
import Image from 'next/image';
import ForgotPassword from '@/src/components/app/auth/ForgotPassword';
import { Logo } from '@/src/components';

const ResetPassword = () => {
  return (
    <div className="md:w-screen  flex flex-col items-center justify-center min-h-screen">
      <div className="justify-center items-center">
        <Link href="/">
          <div className="items-center py-10">
            <Image
              src={Logo}
              alt=""
            />
          </div>
        </Link>
      </div>
      <ForgotPassword />
    </div>
  );
};

export default ResetPassword;
