import { Switch } from '@chakra-ui/react';
import React from 'react';

const Personal = () => {
  return (
    <>
      <div className="md:mx-20 md:my-2 bg-secondary md:min-w-screen  md:min-h-full rounded-md p-10">
        <div className="w-full p-10 flex flex-col justify-center items-center gap-2">
          <div className="bg-primary text-white p-5 rounded-full text-2xl font-bold  ">
            AK
          </div>
          <h3 className="text-zinc-700 text-xl font-bold">Akinola Emmanuel</h3>
          <p>
            KYC Level:<span className="font-bold">Tier 1</span>
          </p>
        </div>
        <div className="w-full border border-green"></div>
        <div className="grid md:grid-rows-4 grid-col-2  md:grid-flow-col md:gap-10 justify-between w-full md:px-10">
          <div className="md:p-10 p-3">
            <h1 className="custom-title">First Name</h1>
            <p className="custom-ptag">Emmanuel</p>
          </div>
          <div className="md:p-10 p-3">
            <h1 className="custom-title">Last Name</h1>
            <p className="custom-ptag">Akinola</p>
          </div>
          <div className="md:p-10 p-3">
            <h1 className="custom-title">Middle Name</h1>
            <p className="custom-ptag">Not Available</p>
          </div>
          <div className="md:p-10 p-3">
            <h1 className="custom-title">Email Address</h1>
            <p className="custom-ptag">akemmanuel@gmail.com</p>
          </div>
          <div className="md:p-10 p-3">
            <h1 className="custom-title">Phone Number</h1>
            <p className="custom-ptag">+2348160688825</p>
          </div>
          <div className="md:p-10 p-3">
            <h1 className="custom-title">Date of Birth</h1>
            <p className="custom-ptag">March 04, 1999</p>
          </div>
          <div className="md:p-10 p-3">
            <h1 className="custom-title">Country</h1>
            <p className="custom-ptag">Nigeria</p>
          </div>
          <div className="md:p-10 p-3">
            <h1 className="custom-title">KYC Level</h1>
            <p className="custom-ptag">Tier 1</p>
          </div>
          <div className="md:p-10 p-3">
            <h1 className="custom-title">Has set Xpress Code</h1>
            <p className="custom-ptag">True</p>
          </div>
          <div className="md:p-10 p-3">
            <h1 className="custom-title">Has Virtual Account</h1>
            <p className="custom-ptag">False</p>
          </div>
          <div className="md:p-10 p-3">
            <h1 className="custom-title">Has set Transaction Pin</h1>
            <p className="custom-ptag">True</p>
          </div>
          <div className="md:p-10 p-3">
            <h1 className="custom-title">Enable User’s Profile</h1>
            <p>
              {' '}
              <Switch
                colorScheme="teal"
                size="md"
              />
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Personal;
