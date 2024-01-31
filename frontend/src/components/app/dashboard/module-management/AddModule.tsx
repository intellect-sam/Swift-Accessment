import {
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
  ModalFooter,
} from '@chakra-ui/react';
import React from 'react';
import Image from 'next/image';
import { plusIcon } from '..';

const AddModule = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  return (
    <div>
      <Button
        className="flex md:gap-4 bg-primary text-secondary hover:bg-success text-sm"
        onClick={onOpen}>
        <Image
          src={plusIcon}
          alt=""
        />
        Add Module
      </Button>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create your account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Permission name</FormLabel>
              <Input
                ref={initialRef}
                placeholder="First name"
              />
            </FormControl>
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
              //   isLoading={isSubmitting}
              mr={3}
              size="lg">
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default AddModule;
