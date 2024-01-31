'use client';
import 'src/app/globals.css';

import { useForm } from 'react-hook-form';
import { Button, FormControl, FormErrorMessage, Input } from '@chakra-ui/react';
import { useState, useContext, FormEventHandler, forwardRef } from 'react';
import { LoginSchema as Schema } from '@/src/core';
import Image from 'next/image';
import Link from 'next/link';
import { Logo } from '../..';
import { Notification } from '../others';
import { AuthSDK, LoginResponse, useNotification } from '@/src/core';
import { AuthContext, actionCreator } from '@/src/store';
import { yupResolver } from '@hookform/resolvers/yup';
import router from 'next/router';
import * as yup from 'yup';
import ReusableButton from '../others/Button';
// import CustomInput from '../others/CustomInput';

type FormData = yup.InferType<typeof Schema>;

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(Schema),
  });
  const { notification, setNotification } = useNotification();
  const { dispatch } = useContext(AuthContext);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = (data: FormData) => {
    setIsSubmitting(true);

    const sdk = new AuthSDK();

    // This is the logic of the login form

    sdk
      .login<LoginResponse>(data)
      .then((res) => {
        setNotification({
          type: 'success',
          message: 'Login successful, you will be redirected in a minute',
          state: true,
        });
        console.log(res);

        const { admin, token } = res.data;

        setTimeout(() => {
          //set app state
          dispatch({
            type: actionCreator.LOGIN,
            payload: { admin, token },
          });

          router.push('/auth/verify-token');
        }, 3500);
      })
      .catch((e) => {
        console.log(e.message);
        setNotification({
          type: 'error',
          message: e.message,
          state: true,
        });
      })
      .finally(() => setIsSubmitting(false));

    // Ends here
  };

  function clearErrors(arg0: string) {
    throw new Error('Function not implemented.');
  }

  return (
    <>
      <div className=" md:w-screen  flex flex-col items-center justify-center min-h-screen">
        <Link href="/">
          <div className="items-center md:py-10">
            <Image
              src={Logo}
              alt=""
            />
          </div>
        </Link>
        <div className="p-5 text-md font-semibold md:text-xl">
          Login into your account
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          autoComplete="false">
          {notification?.state ? (
            <Notification
              message={notification.message}
              type={notification.type}
            />
          ) : null}
          <div className="px-10 flex flex-col md:gap-5 gap-3 min-w-[350px]  md:h-[409px]">
            <FormControl
              variant="floating"
              isInvalid={!!errors.emailOrUsername?.message}
              // isInvalid={
              //   errors.emailOrUsername?.message
              //     ? errors.emailOrUsername.message.length > 0
              //     : false
              // }
            >
              <input
                className="custom-input"
                placeholder="username or email"
                {...register('emailOrUsername', { required: true })}
                type="text"
              />
              {errors.emailOrUsername?.message ? (
                <FormErrorMessage
                  fontSize="xs"
                  mt="1">
                  {errors.emailOrUsername.message}
                </FormErrorMessage>
              ) : null}
            </FormControl>

            <FormControl
              variant="floating"
              isInvalid={
                errors.password?.message
                  ? errors.password.message.length > 0
                  : false
              }>
              <input
                className="custom-input"
                placeholder="Password"
                {...register('password', { required: true })}
                type="password"
              />
              {errors.password?.message ? (
                <FormErrorMessage
                  fontSize="xs"
                  mt="1">
                  {errors.password.message}
                </FormErrorMessage>
              ) : null}
            </FormControl>

            {/* <Link href="/auth/verify-token"> */}
            <ReusableButton isLoading={isSubmitting}>LOGIN</ReusableButton>
            {/* </Link> */}

            <div className="flex flex-col mt-4 text-center gap-7">
              <Link
                href="auth/forgot-password"
                className="text-emerald hover:underline">
                Forgot Password?
              </Link>
              <span className="mx-2">
                {' '}
                No Account?{' '}
                <a
                  href="/dd"
                  className="text-button hover:underline">
                  Create Account
                </a>
              </span>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignIn;
