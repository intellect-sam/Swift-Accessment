import FilterBar from '@/src/components/app/dashboard/FilterBar';
import UserTable from '@/src/components/app/dashboard/user-management/UserTable';

const UserManagement = () => {
  return (
    <div className="flex flex-col">
      <FilterBar description="Department" />
      <div className=" bg-white rounded shadow">
        <UserTable />
      </div>
    </div>
  );
};

export default UserManagement;
