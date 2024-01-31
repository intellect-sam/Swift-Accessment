'use client';

import {
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Avatar,
  Checkbox,
  Box,
  Text,
} from '@chakra-ui/react';
import Image from 'next/image';

import { useEffect, useState } from 'react';

import {
  AddUser,
  DashboardLoader,
  deleteIcon,
  editIcon,
} from '@/src/components';
import { UserModel, useFetch } from '@/src/core';
import Link from 'next/link';
import Pagination from '../../others/Pagination';

const UserTable = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [checkedItems, setCheckedItems] = useState([false, false]);
  const allChecked = checkedItems.every(Boolean);
  const isIndeterminate = checkedItems.some(Boolean) && !allChecked;

  const tableNumber = 1;
  const {
    data: UserData,
    isLoading,
    error,
    reValidate,
  } = useFetch<UserModel[]>(`api/ProfileManager/get-all-profiles`);

  const [currentPage, setCurrentPage] = useState(1);
  const recordPerPage = 10;
  const lastIndex = currentPage * recordPerPage;
  const firstIndex = lastIndex - recordPerPage;
  const records = UserData?.slice(firstIndex, lastIndex);
  const nPage = UserData?.length
    ? Math.ceil(UserData.length / recordPerPage)
    : 0;
  // const nPage = Math.ceil(UserData!.length / recordPerPage);
  const numbers = [...Array(nPage + 1).keys()].slice(1);

  console.log(UserData);

  function prevPage() {
    if (currentPage !== firstIndex) {
      setCurrentPage(currentPage - 1);
    }
  }
  function changeCPage(id: number) {
    setCurrentPage(id);
  }
  function nextPage() {
    if (currentPage !== lastIndex) {
      setCurrentPage(currentPage + 1);
    }
  }

  console.log(UserData);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return isLoading ? (
    <DashboardLoader />
  ) : (
    <>
      <div className="px-2 py-5 text-zinc-700 text-xl md:text-2xl font-bold text-[#464646] w-full  justify-between items-center inline-flex">
        <div className="flex gap-2 px-8">
          <Text className="text-base font-semibold text-center text-zinc-700">
            Total
          </Text>
          <div className="p-1 text-xs text-center rounded-full fontbold bg-primary text-secondary">
            10
          </div>
        </div>
      </div>

      <div className="col-span-8 p-2 xl:col-span-12">
        <TableContainer>
          <Table
            className="striped-table"
            size="lg">
            <Thead className="bg-slate">
              <Tr>
                <Th>ID</Th>
                <Th>Name</Th>
                <Th>Email Address</Th>
                <Th>Phone Number</Th>
                <Th>Country</Th>
                <Th>Date Created</Th>
                <Th>Status</Th>
                <Th></Th>
              </Tr>
            </Thead>
            <Tbody>
              {records ? (
                <>
                  {records.map((user, index) => (
                    <Tr key={index}>
                      <Td>005800</Td>
                      <Td>
                        <p className="flex justify-center items-center">
                          {user.firstName + ' ' + user.lastName}
                        </p>
                      </Td>
                      <Td>{user.email}</Td>
                      <Td>{user.mobilePhone}</Td>
                      <Td>Nigeria</Td>
                      <Td>12/09/23</Td>
                      <Td>
                        <Link href="/customer/personal">
                          <div
                            className={`rounded-md p-2 text-white w-full text-center ${
                              user.status === 'Active'
                                ? 'bg-success'
                                : 'bg-danger'
                            }`}>
                            {user.status}
                          </div>
                        </Link>
                      </Td>
                    </Tr>
                  ))}
                </>
              ) : null}
            </Tbody>
          </Table>
          <div className="flex justify-center items-center p-10">
            <Pagination
              currentPage={currentPage}
              totalPages={nPage}
              onPageChange={setCurrentPage}
              prevPage={prevPage}
              nextPage={nextPage}
              numbers={numbers}
            />
          </div>
        </TableContainer>
      </div>
    </>
  );
};

export default UserTable;
