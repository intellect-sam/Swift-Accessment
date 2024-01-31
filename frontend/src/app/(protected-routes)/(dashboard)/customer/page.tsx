import FilterBar from '@/src/components/app/dashboard/FilterBar';
import CustomerTable from '@/src/components/app/dashboard/customer-management/CustomerTable';
import React from 'react';

const CustomerManagement = () => {
  return (
    <div className="flex flex-col">
      <FilterBar description="Department" />
      <div className=" bg-white rounded shadow  overflow-y-hidden">
        <CustomerTable />
      </div>
    </div>
  );
};

export default CustomerManagement;
