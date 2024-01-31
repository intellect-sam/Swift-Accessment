import Image from 'next/image';
import { FiHome, FiBook } from 'react-icons/fi';
import { BsArrowsAngleExpand } from 'react-icons/bs';
import { LuUserCog, LuUser, LuUsers2, LuSettings } from 'react-icons/lu';

export const SidebarData = [
  {
    title: 'Dashboard',
    icon: <FiHome />,
    link: 'dashboard',
    name: 'dashboard',
  },
  {
    title: 'Role Management',
    icon: <LuUserCog />,
    link: 'role',
    name: 'role',
  },
  {
    title: 'Module Management',
    icon: <FiBook />,
    link: 'module',
    name: 'Module Management',
  },
  {
    title: 'User Management',
    icon: <LuUser />,
    link: 'user',
    name: 'user',
  },
  {
    title: 'Customer Management',
    icon: <LuUsers2 />,
    link: 'customer',
    name: 'customer',
  },
  {
    title: 'Transaction',
    icon: <BsArrowsAngleExpand />,
    link: 'transaction',
    name: 'transaction',
  },
  {
    title: 'Configurations',
    icon: <LuSettings />,
    link: 'configurations',
    name: 'configurations',
  },
];
