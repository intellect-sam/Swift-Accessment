'use client';

import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
  InputLeftElement,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import { MdPhoneInTalk } from 'react-icons/md';

import { useForm } from 'react-hook-form';
import React, { useState } from 'react';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { AddUserSchema as Schema } from '@/src/core';
import Image from 'next/image';
import { plusIcon } from '..';
import { useYupValidation } from '@/src/core/hooks/validation';
import ErrorMessage from '../../others/Notification';
import ReactPaginate from 'react-paginate';
// import SuccessRegistration from './SuccessRegistration';

type FormData = {
  firstName: string;
  middleName: string;
  lastName: string;
  email: string;
  department: string;
  staffNumber: string;
};

// type FormData = yup.InferType<typeof Schema>;

export const AddUser = () => {
  const { register, handleSubmit, errors } = useYupValidation<FormData>(Schema);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [status, setStatus] = useState('typing');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const finalRef = React.useRef(null);

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);

    try {
      const response = await fetch('api/ProfileManager/create-profile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to add user');
      }

      setShowSuccess(true);
      setIsSubmitting(false);

      // Reset form data if needed
      // resetFormData();
    } catch (error) {
      console.error('Error adding user:', error);
      setIsSubmitting(false);
      // Handle error state or display error message to the user
    }
  };

  // Function to close success modal
  const onCloseSuccessModal = () => {
    setShowSuccess(false);
  };
  return (
    <>
      <Button
        className="flex md:gap-4 bg-primary text-secondary hover:bg-success text-sm"
        onClick={onOpen}>
        <Image
          src={plusIcon}
          alt=""
        />
        Add User
      </Button>

      <Modal
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}>
        <ModalOverlay />
        <form
          onSubmit={handleSubmit(onSubmit)}
          autoComplete="false">
          <ModalContent>
            <ModalHeader>Add User</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <div className="flex flex-col gap-5">
                <FormControl
                  variant="floating"
                  isInvalid={!!errors.firstName?.message}>
                  <FormLabel>First name</FormLabel>
                  <input
                    className="custom-input"
                    placeholder="First name"
                    {...register('firstName', { required: true })}
                    type="text"
                  />
                  <ErrorMessage message={errors.firstName?.message} />
                </FormControl>

                <FormControl
                  variant="floating"
                  isInvalid={!!errors.middleName?.message}>
                  <FormLabel>Middle Name (Optional)</FormLabel>
                  <input
                    className="custom-input"
                    placeholder="Middle name"
                    {...register('middleName', { required: true })}
                    type="text"
                  />
                  <ErrorMessage message={errors.middleName?.message} />
                </FormControl>
                <FormControl
                  variant="floating"
                  isInvalid={!!errors.lastName?.message}>
                  <FormLabel>Last Name</FormLabel>
                  <input
                    className="custom-input"
                    placeholder="Last name"
                    {...register('lastName', { required: true })}
                    type="text"
                  />
                  <ErrorMessage message={errors.lastName?.message} />
                </FormControl>
                <FormControl
                  variant="floating"
                  isInvalid={!!errors.email?.message}>
                  <FormLabel>Email Address</FormLabel>
                  <input
                    className="custom-input"
                    placeholder="Email Address"
                    {...register('email', { required: true })}
                    type="email"
                  />
                  <ErrorMessage message={errors.email?.message} />
                </FormControl>

                <FormControl
                  variant="floating"
                  isInvalid={!!errors.email?.message}>
                  <FormLabel>Phone Number</FormLabel>
                  <InputGroup>
                    <InputLeftElement pointerEvents="none">
                      <MdPhoneInTalk color="gray.300" />
                    </InputLeftElement>
                    <Input
                      className=""
                      type="tel"
                      placeholder="Phone number"
                    />
                  </InputGroup>
                  <ErrorMessage message={errors.email?.message} />
                </FormControl>

                <FormControl
                  variant="floating"
                  isInvalid={!!errors.department?.message}>
                  <FormLabel>Department</FormLabel>
                  <input
                    className="custom-input"
                    placeholder="Dapartment"
                    {...register('department', { required: true })}
                    type="text"
                  />
                  <ErrorMessage message={errors.department?.message} />
                </FormControl>
                <FormControl
                  variant="floating"
                  isInvalid={!!errors.staffNumber?.message}>
                  <FormLabel>Staff Number</FormLabel>
                  <input
                    className="custom-input"
                    placeholder="Staff Number"
                    {...register('staffNumber', { required: true })}
                    type="text"
                  />
                  <ErrorMessage message={errors.staffNumber?.message} />
                </FormControl>
              </div>
            </ModalBody>

            <ModalFooter className="flex gap-5">
              <Button
                onClick={onClose}
                className="bg-danger text-secondary hover:bg-danger"
                size="lg">
                Cancel
              </Button>
              <Button
                onClick={onClose}
                className="bg-success text-secondary hover:bg-bodydark1"
                type="submit"
                isLoading={isSubmitting}
                mr={3}
                size="lg">
                Save
              </Button>
            </ModalFooter>
          </ModalContent>
        </form>
      </Modal>
      {/* Success modal */}
      <Modal
        isOpen={showSuccess}
        onClose={onCloseSuccessModal}
        isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Success</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <p>Your data has been successfully saved.</p>
          </ModalBody>
          <ModalFooter>
            <Button
              className="bg-success text-secondary hover:bg-bodydark1"
              onClick={onCloseSuccessModal}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
