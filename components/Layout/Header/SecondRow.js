import Link from "next/link";
import React from "react";

export default function SecondRow() {
  return (
    <div className="w-full bg-brown-green">
      <div className="flex items-center max-w-[1320px] p-4 text-sm leading-5 font-normal mx-auto text-white">
        <animate
          href={"/Abcd"}
          className="pr-5 mb-0 font-medium text-white uppercase hover:cursor-pointer hover:opacity-75"
        >
          Home
        </animate>
        <a
          href={"/product"}
          className="px-5 mb-0 font-medium text-white uppercase hover:cursor-pointer hover:opacity-75"
        >
          Our Store
        </a>
        <a
          href={"/orderhistory"}
          className="px-5 mb-0 font-medium text-white uppercase hover:cursor-pointer hover:opacity-75"
        >
          Orders
        </a>
        <a className="px-5 mb-0 font-medium text-white uppercase hover:cursor-pointer hover:opacity-75">
          Contact
        </a>
      </div>
    </div>
  );
}
