import React from 'react';
import { Text } from '@chakra-ui/react';
import Image from 'next/image';
import { qrcode } from '@/src/assets/images/auth';

const ScanBarcode = () => {
  const steps = [
    {
      description: 'Download the “Authenticator App” on Play Store',
    },
    {
      description: 'Click on “Setup account” on the Authenticator App',
    },
    {
      description: 'Select “Scan a QR code/Barcode',
    },
    {
      description:
        'Input the 6 digit number (TOTP) provided after scanning the QR code/Barcode ',
    },
  ];

  return (
    <div className=" w-3/4 lg:w-1/4 flex flex-col justify-center items-center gap-5">
      <div className="w-full h-full bg-button text-center">
        <Text className="p-2 md:p-5 text-white text-md md:text-2xl font-semibold">
          SET UP YOUR 2- FACTOR AUTHENTICATION
        </Text>
      </div>
      <div className="flex flex-col gap-4 lg:p-5">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex items-center gap-2">
            <div className="w-4 h-4 bg-button rounded-full mr-2 p-2"></div>
            <span className="lg:text-xl">{step.description}</span>
          </div>
        ))}
      </div>
      <div>
        <Image
          src={qrcode}
          alt="qrcode"
        />
      </div>
    </div>
  );
};

export default ScanBarcode;
