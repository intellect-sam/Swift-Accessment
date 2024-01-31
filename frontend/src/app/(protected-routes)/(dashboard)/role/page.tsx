'use client';

import {
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Box,
} from '@chakra-ui/react';
import { use, useEffect, useState } from 'react';
import Image from 'next/image';
import CreateRoleForm from '@/src/components/app/dashboard/form/CreateRoleForm';
import {
  DashboardLoader,
  deleteIcon,
  editIcon,
  repeatIcon,
} from '@/src/components';
import { RoleModel, useFetch } from '@/src/core';

const RoleManagement = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState<boolean>(true);

  const {
    data: RoleData,
    isLoading,
    error,
    reValidate,
  } = useFetch<RoleModel[]>(`api/AuthManager/get-roles`);

  return isLoading ? (
    <DashboardLoader />
  ) : (
    <div className="flex flex-col md:gap-10">
      <div className=" py-3 md:py-5 text-zinc-700 text-xl md:text-2xl font-bold text-[#464646] max-w-full  justify-end items-center inline-flex">
        <CreateRoleForm />
      </div>

      <div className="col-span-8 p-2 bg-white rounded shadow xl:col-span-12">
        <TableContainer>
          <Table
            className="striped-table"
            size="lg">
            <Thead className="bg-slate">
              <Tr>
                <Th>Role</Th>
                <Th>Modules</Th>
                <Th>Permision</Th>
                <Th>Type</Th>
                <Th></Th>
              </Tr>
            </Thead>
            <Tbody>
              {RoleData ? (
                <>
                  {RoleData.map((role, index) => (
                    <Tr key={index}>
                      <Td>{role.roleName}</Td>
                      <Td></Td>
                      <Td>
                        {role.permissions !== null &&
                        role.permissions !== undefined
                          ? role.permissions
                          : 'N/A'}
                      </Td>
                      <Td>View</Td>
                      <Td>
                        <Box
                          as="div"
                          className="flex justify-end gap-8">
                          <Box className="p-2 w-9 h-9 bg-amber">
                            <Image
                              src={repeatIcon}
                              alt=""
                            />
                          </Box>
                          <Box className="p-2 w-9 h-9 bg-rose bg-opacity-20">
                            <Image
                              src={deleteIcon}
                              alt=""
                            />
                          </Box>
                          <Box className="p-2 w-9 h-9 bg-emrald">
                            <Image
                              src={editIcon}
                              alt=""
                            />
                          </Box>
                        </Box>
                      </Td>
                    </Tr>
                  ))}
                </>
              ) : null}
            </Tbody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default RoleManagement;
