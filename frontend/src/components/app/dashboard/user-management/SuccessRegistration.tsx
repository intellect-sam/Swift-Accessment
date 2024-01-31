import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import React, { useState } from 'react';

const SuccessRegistration = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [showSuccess, setShowSuccess] = useState(false);

  //   function onCloseSuccessModal(): void {
  //     throw new Error('Function not implemented.');
  //   }

  const onCloseSuccessModal = () => {
    // Close the success modal by setting showSuccess to false
    setShowSuccess(false);
  };

  return (
    <>
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

export default SuccessRegistration;
