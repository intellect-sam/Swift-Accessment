'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import ReusableButton from '@/src/components/app/others/Button';
import Link from 'next/link';
import { FA } from '@/src/assets/images/auth';

const CreatePasswordSucess = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  return (
    <div className=" flex flex-col gap-7 justify-center items-center w-full">
      <div className="">
        <Image
          src={FA}
          alt="successful Password"
        />
      </div>
      <p className="text-zinc-700 text-2xl font-semibold">
        Set up your 2- Factor Authentication
      </p>
      <div className="w-[300px]">
        <Link href="/auth/setup-2FA/authenticator">
          <ReusableButton isLoading={isSubmitting}>Proceed</ReusableButton>
        </Link>
      </div>
    </div>
  );
};

export default CreatePasswordSucess;
