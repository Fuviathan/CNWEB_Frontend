import React, { useState } from 'react'
import { If, For } from 'react-haiku'
import Link from 'next/link';
import { ChartBarIcon, AdjustmentsHorizontalIcon, ClipboardDocumentListIcon, ChevronDownIcon, PlusCircleIcon, UserGroupIcon, UserIcon } from '@heroicons/react/24/outline';
import { useRouter } from "next/router";
import { Provider } from 'react-redux'
import { store } from "@/app/store";

export default function AdminLayout(props) {
  const [open, setOpen] = useState(true)
  const [openSub, setOpenSub] = useState(false)
  const { asPath } = useRouter()
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
          <div
            className={` ${open ? "w-1/6 min-w-fit" : "w-[4%] "
              } bg-dark-purple h-screen  p-5 pt-5 relative duration-300`}
          >
            <img
              src="/control.png"
              className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
              onClick={() => setOpen(!open)}
            />
            <div className="flex items-center gap-x-4">
              <img
                src="/logo.png"
                className={`cursor-pointer duration-500 ${open && "rotate-[360deg]"
                  }`}
              />
              <h1
                className={`text-white origin-left font-medium text-xl duration-200 ${!open && "scale-0"
                  }`}
              >
                Electronic Device
              </h1>
            </div>
            <ul className="pt-6">
              <For each={Menus} render={(Menu, index) =>
                <>
                  <If isTrue={!Menu.children}>
                    <Link href={`${Menu.path}`} className=''>
                      <li
                        className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-lg items-center gap-x-4 mt-2 ${asPath.startsWith(Menu.path) && "bg-light-white"
                          }`}
                      >
                        <Menu.icon className='w-5 h-5' />
                        <span className={`${!open && "hidden"} origin-left duration-300`}>
                          {Menu.title}
                        </span>
                      </li>
                    </Link>
                  </If>
                  <If isTrue={Menu.children}>
                    <>
                      <div className='flex items-center p-2 mt-2 text-lg text-gray-300 rounded-md cursor-pointer hover:bg-light-white gap-x-4' onClick={() => setOpenSub(!openSub)}>
                        <Menu.icon className='w-5 h-5' />
                        <div className={`${!open && "hidden"} origin-left duration-300 flex gap-x-14`}>
                          <div className=''>
                            {Menu.title}
                          </div>
                          <ChevronDownIcon className={`w-5 h-6 mt-1 ${openSub && 'rotate-180'} duration-300`} />
                        </div>
                      </div>
                      <div className={`${!openSub && "max-h-0 overflow-hidden"} duration-300 origin-bottom`}>
                        <For each={Menu.children} render={(item, index) =>
                          <Link href={`${item.path}`} className={`${!open && "hidden"} origin-left duration-200 gap-x-14`}>
                            <li
                              className={`flex rounded-md p-2 pl-8 cursor-pointer hover:bg-light-white text-gray-300 text-lg items-center gap-x-4 mt-2 ${asPath.startsWith(item.path) && "bg-light-white"
                                }`}
                            >
                              <item.icon className='w-5 h-5' />
                              <span className={`${!open && "hidden"} origin-left duration-200`}>
                                {item.title}
                              </span>
                            </li>
                          </Link>
                        } />
                      </div>
                    </>
                  </If>
                </>
              } />
            </ul>
          </div>
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
