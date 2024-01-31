'use client';
import { FormControl, Input, Button, FormErrorMessage } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import { comp } from '@/src/assets/images/auth';
import { useFocus } from '@/src/core/hooks/useFocus';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { VerifyTokenSchema as Schema } from '@/src/core/';
import { useState } from 'react';
import ReusableButton from '@/src/components/app/others/Button';

type TokenData = yup.InferType<typeof Schema>;

const TokenVerification = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TokenData>({
    resolver: yupResolver(Schema),
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = (data: TokenData) => {
    console.log(data);
  };
  return (
    <>
      <div className="w-full  md:w-1/4 flex flex-col justify-center items-center">
        <div>
          <Image
            src={comp}
            alt=""
          />
        </div>
        <div className=" w-full px-5">
          <h1 className="px-10 text-xl font-bold text-center text-zinc-700 md:text-1xl text-black-2">
            A 6-digit code has been sent to your registered email address
          </h1>
          <div className="px-20">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-4 mt-5 mb-10">
              <FormControl
                variant="floating"
                isInvalid={
                  errors.token?.message
                    ? errors.token.message.length > 0
                    : false
                }
                mt={4}
                className="h-3rem">
                <input
                  className="custom-input"
                  placeholder="Enter Token"
                  {...register('token', { required: true })}
                  type="number"
                />
                {errors.token?.message ? (
                  <FormErrorMessage
                    fontSize="xs"
                    mt="1">
                    {errors.token.message}
                  </FormErrorMessage>
                ) : null}
              </FormControl>
              <Link href="/dashboard">
                <ReusableButton isLoading={isSubmitting}>
                  Verify Token
                </ReusableButton>
              </Link>
            </form>
            <Link href="/auth">
              <div className="flex flex-col mt-4 text-center">
                Back to Login
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default TokenVerification;
