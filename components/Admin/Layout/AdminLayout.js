import React from 'react'
import { ChartBarIcon, AdjustmentsHorizontalIcon, ClipboardDocumentListIcon, PlusCircleIcon, UserGroupIcon } from '@heroicons/react/24/outline';
import { Provider } from "react-redux";
import { store } from "@/app/store";
import Sidebar from './Sidebar/Sidebar';
import AdminHeader from './AdminHeader';

export default function AdminLayout(props) {
  const Menus = [
    { title: "Trang chủ", icon: ChartBarIcon, path: '/admin/dashboard' },
    {
      title: "Thiết lập sản phẩm", icon: AdjustmentsHorizontalIcon, children: [
        { title: "Danh sách sản phẩm", icon: ClipboardDocumentListIcon, path: '/Abcd' },
        { title: "Danh sách nhãn hàng", icon: ClipboardDocumentListIcon, path: '/admin/brand' },
        { title: "Danh sách danh mục", icon: ClipboardDocumentListIcon, path: 'b' },
      ]
    },
    { title: "Khách hàng", icon: UserGroupIcon, path: '/admin/customer' },
  ];
  return (
    <>
      <Provider store={store}>
        <div className="flex">
          <Sidebar Menus={Menus}  />
          <div className="flex flex-col w-full h-screen bg-gray-200">
            <AdminHeader />            
            {props.children}
          </div>
        </div>
      </Provider>
    </>

  )
}
