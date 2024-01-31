'use client';
import { Notification as ISetNotification, useNotification } from '@/src/core';
import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertProps,
  Box,
  Button,
  FormErrorMessage,
} from '@chakra-ui/react';
import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';

interface NotificationProps extends AlertProps {
  message?: string;
  type: ISetNotification;
  width?: string;
}

export const Notification: React.FC<NotificationProps> = ({
  type,
  message = 'An error occurred',
  width = '98%',
  ...rest
}) => {
  const { setNotification } = useNotification();

  return (
    <Box className="relative w-full my-4">
      <Box
        className="relative z-0"
        width={'full'}
        mx="auto">
        <Alert
          {...rest}
          status={type}
          borderRadius={4}
          p={4}>
          <AlertIcon />
          <AlertDescription
            fontSize="md"
            fontWeight="medium"
            className="text-black-2">
            {message}
          </AlertDescription>
        </Alert>
      </Box>
      <Button
        hidden
        onClick={() => setNotification({ state: false, message: '' })}
        className="absolute right-[12px] top-[50%] z-1 translate-y-[-50%]"
        _hover={{ background: '#1d2a3912' }}>
        <AiOutlineClose />
      </Button>
    </Box>
  );
};

interface ErrorMessageProps {
  message: string | undefined;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return message ? (
    <FormErrorMessage
      fontSize="xs"
      mt="1">
      {message}
    </FormErrorMessage>
  ) : null;
};

export default ErrorMessage;
