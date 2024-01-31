'use client';

import { DashboardLoader, Preloader } from '@/src/components';
import Header from '@/src/components/app/dashboard/Header';
import Sidebar from '@/src/components/app/dashboard/Siderbar';
import { ISetAdmin, getLocalStorage } from '@/src/core';
import { AuthSDK } from '@/src/core/services';
import { AuthContext, actionCreator } from '@/src/store';
import { useRouter } from 'next/navigation';
import { ReactNode, useContext, useEffect, useState } from 'react';

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { state, dispatch } = useContext(AuthContext);

  // const checkAuth = async () => {
  //   const sdk = new AuthSDK();

  //   return new Promise((resolve, reject) => {
  //     sdk
  //       .checkAuth<{ data: ISetAdmin; success: boolean }>()
  //       .then((res) => {
  //         if (res.success) {
  //           dispatch({
  //             type: actionCreator.SET_AUTH,
  //             payload: res.data,
  //           });

  //           resolve(res.success);
  //         } else {
  //           reject(false);
  //         }
  //       })
  //       .catch((e) => {
  //         console.log('Error: ', e);
  //         reject(false);
  //       });
  //   });
  // };

  // useEffect(() => {
  //   if (state.isAuth === false) {
  //     //check for localstorage token
  //     const token = getLocalStorage();

  //     if (!token) {
  //       router.push('/auth');
  //     }

  //     //check for auth with token
  //     checkAuth()
  //       .then((res) => {
  //         if (res) {
  //           setIsLoading(false);
  //         }
  //       })
  //       .catch(() => {
  //         router.push(
  //           '/auth?message=You are unauthenticated, please login to continue'
  //         );
  //       });
  //     return;
  //   }

  //   setIsLoading(false);

  //   return () => {};

  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [state.isAuth]);
  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  return isLoading ? (
    <DashboardLoader />
  ) : (
    <div className="dark:bg-boxdark-2 dark:text-bodydark">
      <div className="flex h-screen overflow-hidden">
        <Sidebar
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />

        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden bg-[#F8F8F8]">
          <Header
          // sidebarOpen={sidebarOpen}
          // setSidebarOpen={setSidebarOpen}
          />
          <main>
            <div className="p-1 mx-auto max-w-screen-2xl md:p-5 2xl:p-10">
              {children}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
