import React, { useState } from 'react'

import { ChartBarIcon, AdjustmentsHorizontalIcon, ClipboardDocumentListIcon, ChevronDownIcon, PlusCircleIcon, UserGroupIcon, UserIcon } from '@heroicons/react/24/outline';
import { useDispatch, useSelector, Provider } from "react-redux";
import { store } from "@/app/store";
import Sidebar from './Sidebar/Sidebar';

export default function AdminLayout(props) {
  // const user = useSelector((store) => store?.auth?.user);
  // console.log(user)

 
  const Menus = [
    { title: "Trang chủ", icon: ChartBarIcon, path: '/admin/dashboard' },
    {
      title: "Thiết lập sản phẩm", icon: AdjustmentsHorizontalIcon, children: [
        { title: "Danh sách sản phẩm", icon: ClipboardDocumentListIcon, path: '/Abcd' },
        { title: "Thêm sản phẩm", icon: PlusCircleIcon, path: 'b' },
        { title: "Danh sách nhãn hàng", icon: ClipboardDocumentListIcon, path: 'b' },
        { title: "Thêm nhãn hàng", icon: PlusCircleIcon, path: 'b' },
        { title: "Danh sách danh mục", icon: ClipboardDocumentListIcon, path: 'b' },
        { title: "Thêm Danh mục", icon: PlusCircleIcon, path: 'b' },
      ]
    },
    { title: "Khách hàng", icon: UserGroupIcon, path: '/admin/customer' },
  ];
  return (
    <>
      <Provider store={store}>
        <div className="flex">
          <Sidebar Menus={Menus} />
          <div className="flex flex-col w-full h-screen ">
            <div className='flex justify-end w-full px-8 py-4 bg-white '>
              <div className='flex items-center hover:cursor-pointer hover:opacity-70'>
                <UserIcon className='w-6 h-6 font-medium' />
                <div className='ml-3 text-xl tracking-wide'>
                  ABCD@gmail.com
                </div>
              </div>
            </div>
            {props.children}
          </div>
        </div>
      </Provider>
    </>

  )
}
