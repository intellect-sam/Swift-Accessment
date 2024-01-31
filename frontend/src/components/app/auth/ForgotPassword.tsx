'use client';

import React, { useEffect, useState } from 'react';
import { FormControl, FormLabel } from '@chakra-ui/react';
import { IoMdCheckmarkCircle } from 'react-icons/io';
import { RiCloseCircleFill } from 'react-icons/ri';
import ReusableButton from '@/src/components/app/others/Button';
import { CreatePasswordSchema as Schema } from '@/src/core';
import { useYupValidation } from '@/src/core/hooks/validation';
import ErrorMessage from '@/src/components/app/others/Notification';
import * as yup from 'yup';
import Link from 'next/link';

type PseudoValidator = {
  minLength: null | boolean;
  hasNumber: null | boolean;
  hasUpper: null | boolean;
  hasLower: null | boolean;
  hasSpecialChar: null | boolean;
};

function PasswordValidator({ validator }: { validator: PseudoValidator }) {
  const { hasLower, hasNumber, hasSpecialChar, hasUpper, minLength } =
    validator;

  return (
    <>
      <div className="text-dark-800 text-sm py-3">Password must contain:</div>
      <div className="flex-col justify-center items-start gap-2.5 flex">
        <div className="justify-start items-center gap-2.5 inline-flex">
          {minLength ? (
            <span className="text-button">
              <IoMdCheckmarkCircle />
            </span>
          ) : (
            <RiCloseCircleFill />
          )}
          <div className="text-dark-800 text-xs font-aeonik">
            At least 8 characters
          </div>
        </div>
        <div className="justify-start items-center gap-2 inline-flex">
          {hasLower ? (
            <span className="text-button">
              <IoMdCheckmarkCircle />
            </span>
          ) : (
            <RiCloseCircleFill />
          )}
          <div className="text-dark-800 text-xs font-aeonik">
            At least 1 lowercase character
          </div>
        </div>
        <div className="justify-start items-center gap-2.5 inline-flex">
          {hasUpper ? (
            <span className="text-button">
              <IoMdCheckmarkCircle />
            </span>
          ) : (
            <RiCloseCircleFill />
          )}
          <div className="text-dark-800 text-xs font-aeonik">
            At least 1 uppercase character
          </div>
        </div>
        <div className="justify-start items-center gap-2.5 inline-flex">
          {hasSpecialChar ? (
            <span className="text-button">
              <IoMdCheckmarkCircle />
            </span>
          ) : (
            <RiCloseCircleFill />
          )}
          <div className="text-dark-800 text-xs font-aeonik">
            At least 1 special character
          </div>
        </div>
        <div className="justify-start items-center gap-2.5 inline-flex">
          {hasNumber ? (
            <span className="text-button">
              <IoMdCheckmarkCircle />
            </span>
          ) : (
            <RiCloseCircleFill />
          )}
          <div className="text-dark-800 text-xs font-aeonik">
            At least a Number
          </div>
        </div>
      </div>
    </>
  );
}

type FormData = yup.InferType<typeof Schema>;

const ForgotPassword = () => {
  const { register, handleSubmit, errors } = useYupValidation<FormData>(Schema);
  const [isFormValid, setIsFormValid] = useState(false);

  const [validation, setValidation] = useState<PseudoValidator>({
    minLength: null,
    hasNumber: null,
    hasUpper: null,
    hasLower: null,
    hasSpecialChar: null,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event: any) => {
    setValidation({
      minLength: event.target.value.length >= 8,
      hasNumber: /\d/.test(event.target.value),
      hasUpper: /[A-Z]/.test(event.target.value),
      hasLower: /[a-z]/.test(event.target.value),
      hasSpecialChar: /[^\w\d\s]/.test(event.target.value),
    });
  };

  const onSubmit = (data: FormData) => {
    setIsSubmitting(true);
    console.log(data);
    setIsSubmitting(false);
  };

  useEffect(() => {
    setIsFormValid(Object.keys(errors).length === 0);
  }, [errors]);

  return (
    <form onClick={handleSubmit(onSubmit)}>
      <div className="w-[300px] text-zinc-700 text-2xl font-semibold text-center">
        Create your new password
      </div>
      <div className="flex flex-col gap-7 py-5">
        <FormControl
          variant="floating"
          isInvalid={!!errors.password?.message}>
          <input
            className="custom-input"
            placeholder="Input new password"
            {...register('password', { required: true })}
            type="password"
            autoComplete="current-password"
            onChange={handleChange}
          />
          <ErrorMessage message={errors.password?.message} />
        </FormControl>

        <FormControl
          variant="floating"
          isInvalid={!!errors.password_confirmation?.message}>
          <input
            className="custom-input"
            placeholder="Confirm new password"
            {...register('password_confirmation', { required: true })}
            type="password"
            autoComplete="current-password"
          />
          <ErrorMessage message={errors.password_confirmation?.message} />
        </FormControl>
      </div>

      <PasswordValidator validator={validation} />
      <Link href="/auth/setup-2FA">
        <ReusableButton
          isLoading={isSubmitting}
          //   disabled={!isFormValid}
        >
          Continue
        </ReusableButton>
      </Link>
    </form>
  );
};

export default ForgotPassword;
