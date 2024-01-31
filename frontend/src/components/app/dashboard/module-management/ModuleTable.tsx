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
import React, { useEffect, useState } from 'react';
import { deleteIcon, editIcon } from '..';
import { DashboardLoader } from '../..';
import CreateRoleForm from '../form/CreateRoleForm';
import Image from 'next/image';
import AddModule from './AddModule';

const Modules = [
  {
    permission: 'Customer Management',
  },
  {
    permission: 'Role Management',
  },
  {
    permission: 'User Management',
  },
  {
    permission: 'Transactions',
  },
  {
    permission: 'Dashboard',
  },
];

const ModuleTable = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);

    async function fetchModule() {
      try {
        const response = await fetch('');
        const result = await response.json();
        setData(result);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchModule();
  }, []);

  return loading ? (
    <DashboardLoader />
  ) : (
    <div className="flex flex-col md:gap-10">
      <div className=" py-3 md:py-5 text-zinc-700 text-xl md:text-2xl font-bold text-[#464646] max-w-full  justify-end items-center inline-flex">
        <AddModule />
      </div>

      <div className="col-span-8 p-2 bg-white rounded shadow xl:col-span-12">
        <TableContainer>
          <Table
            className="striped-table"
            size="lg">
            <Thead className="bg-slate">
              <Tr>
                <Th>Permission</Th>

                <Th></Th>
              </Tr>
            </Thead>
            <Tbody>
              {Modules.map((mod, index) => (
                <Tr key={index}>
                  <Td>{mod.permission}</Td>
                  <Td>
                    <Box
                      as="div"
                      className="flex justify-end gap-8">
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
            </Tbody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default ModuleTable;
