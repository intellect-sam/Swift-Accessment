'use client';

import ModuleTable from '@/src/components/app/dashboard/module-management/ModuleTable';

const ModuleManagement = () => {
  return (
    <div className="flex flex-col md:p-10">
      <div className=" bg-white rounded shadow md:p-5">
        <ModuleTable />
      </div>
    </div>
  );
};

export default ModuleManagement;
