'use client';

import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  useDisclosure,
  Text,
  Radio,
  RadioGroup,
} from '@chakra-ui/react';
import { useRef, useState } from 'react';

import Image from 'next/image';
import { chevronIcon, plusIcon } from '..';

const Permissions = [
  { value: '1', label: 'Role Management' },
  { value: '2', label: 'User Management' },
  { value: '3', label: 'Customer Management' },
  { value: '4', label: 'Dashboard' },
  { value: '5', label: 'Configurations' },
  { value: '6', label: 'Transactions' },
];

const CreateRoleForm = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = useRef(null);
  const finalRef = useRef(null);

  const initialInputField = {
    // organizationId: id,
    // accountCode: '',
    // accountName: '',
    usageType: '',
  };

  const [inputField, setInputField] =
    useState<typeof initialInputField>(initialInputField);
  const handleSetInputField = (e: any) => {
    const value = e.target.value;
    setInputField({ ...inputField, usageType: value });
  };

  return (
    <>
      <Box>
        <Button
          className="flex md:gap-3 bg-primary text-secondary hover:bg-success text-sm"
          onClick={onOpen}>
          <Image
            src={plusIcon}
            alt=""
          />
          Create Role
        </Button>

        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Create Role</ModalHeader>
            <ModalCloseButton />
            <ModalBody
              pb={6}
              mb={12}>
              <FormControl>
                <FormLabel>Role Name</FormLabel>
                <Input
                  ref={initialRef}
                  placeholder="Customer Care"
                />
              </FormControl>

              <Box className="py-6">
                <Stack
                  spacing={[1, 5]}
                  direction={['column']}
                  mt={6}>
                  <FormLabel>Permissions</FormLabel>
                  <RadioGroup className="flex flex-col gap-4">
                    {Permissions.map((options) => (
                      <Radio
                        key={options.value}
                        value={options.value}
                        size="lg"
                        colorScheme="green"
                        borderColor="black">
                        {options.label}
                      </Radio>
                    ))}
                  </RadioGroup>
                </Stack>
              </Box>
              <Menu>
                <FormControl mt={4}>
                  <FormLabel>Type</FormLabel>
                  <Menu>
                    <MenuButton
                      as={Button}
                      className="flex w-full bg-success hover:bg-success text-white justify-left items-left"
                      rightIcon={
                        <Image
                          src={chevronIcon}
                          alt=""
                        />
                      }>
                      {inputField.usageType
                        ? inputField.usageType
                        : 'Select Type'}
                    </MenuButton>
                    <MenuList className="bg-success text-white">
                      <MenuItem
                        value="Edit"
                        onClick={handleSetInputField}>
                        {' '}
                        Edit
                      </MenuItem>
                      <MenuItem
                        value="View"
                        onClick={handleSetInputField}>
                        View
                      </MenuItem>
                    </MenuList>
                  </Menu>
                </FormControl>
              </Menu>
            </ModalBody>

            <ModalFooter
              className="flex gap-6   "
              mt={12}>
              <Button
                onClick={onClose}
                className="bg-danger text-white"
                size="lg">
                Cancel
              </Button>
              <Button
                className="bg-success text-white"
                mr={3}
                size="lg">
                Save
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    </>
  );
};

export default CreateRoleForm;
