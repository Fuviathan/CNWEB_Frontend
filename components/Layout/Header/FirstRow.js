import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import {
  HeartIcon,
  UserIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

export default function FirstRow() {
  return (
    <div className="w-full bg-[#ede2d1]">
      <div className="grid items-center grid-cols-6 py-4 max-w-[1320px] mx-auto">
        <Link
          href="Abcd"
          className="px-5 mb-0 font-sans text-3xl font-semibold tracking-wide text-orange-gray hover:cursor-pointer"
        >
          ElectricalD
        </Link>
        <div className="relative flex flex-row items-stretch w-full col-span-3 focus:ring-0 flex-warp">
          <input
            type="text"
            className="w-full px-3 py-2 border-[1px] border-x-2 border-white focus:outline-none rounded-full bg-white"
            placeholder="Search for Product Here ..."
          />
          <div className="absolute top-0 bottom-0 right-0 flex px-3 py-2 align-middle border-[1px] border-x-2 hover:opacity-80 border-white bg-[#ede2d1] rounded-r-full hover:cursor-pointer">
            <MagnifyingGlassIcon className="w-6 h-6 text-center text-orange-gray" />
          </div>
        </div>
        <div className="flex flex-row justify-between col-span-2 px-4 ml-8">
          {/* <a className='flex items-center hover:cursor-pointer hover:opacity-75'>
                        <HeartIcon className='w-10 h-10 font-thin text-white' />
                        <p className='ml-2 text-sm font-medium text-white'>Favorite<br></br>Wishlist</p>
                    </a> */}
          <Link
            href="/login"
            className="flex items-center hover:cursor-pointer hover:opacity-75"
          >
            <UserIcon className="w-10 h-10 font-thin text-orange-gray" />
            <p className="ml-2 text-sm font-medium text-orange-gray">
              Login<br></br>Sign Up
            </p>
          </Link>
          <Link
            href={"/cart"}
            className="flex items-center hover:cursor-pointer hover:opacity-75"
          >
            <ShoppingCartIcon className="w-10 h-10 font-thin text-orange-gray" />
            <p className="ml-2 text-sm font-medium text-orange-gray">
              My<br></br>Cart
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
