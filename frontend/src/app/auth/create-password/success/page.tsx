import { success } from '@/src/assets/images/auth';
import React from 'react';
import Image from 'next/image';
import ReusableButton from '@/src/components/app/others/Button';
import Link from 'next/link';

const CreatePasswordSucess = () => {
  return (
    <div className=" flex flex-col gap-7 justify-center items-center w-1/4">
      <Image
        src={success}
        alt="successful Password"
      />
      <p className="text-zinc-700 text-2xl font-semibold">
        Your profile has been successfully activated
      </p>
      <div className="w-2/3">
        <Link href="/auth">
          <ReusableButton>Proceed to login</ReusableButton>
        </Link>
      </div>
    </div>
  );
};

export default CreatePasswordSucess;
