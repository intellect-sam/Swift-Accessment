import { FieldValues, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

interface ValidationResult {
  [key: string]: any;
}

export function useYupValidation<T extends FieldValues>(
  schema: yup.ObjectSchema<T>
) {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<T>({
    resolver: yupResolver(schema) as any,
  });

  return {
    register,
    handleSubmit,
    errors,
  };
}
