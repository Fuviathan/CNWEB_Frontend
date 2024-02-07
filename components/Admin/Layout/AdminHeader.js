import React, { useState, useEffect } from "react";
import { UserIcon } from "@heroicons/react/24/outline";

export default function AdminHeader() {
    const [auth, setAuth] = useState();

    let value;
    if (typeof window !== "undefined") {
        value = JSON.parse(localStorage.getItem("user")) || null;
    }
    useEffect(() => {
        // Get the value from local storage if it exists
        setAuth(value);
    }, []);
    console.log(auth)
    return (
        <div className="flex justify-end w-full px-8 py-2 bg-white shadow">
            <div className="flex items-center hover:cursor-pointer hover:opacity-70">
                <UserIcon className="w-6 h-6 font-medium" />
                <div className="flex flex-col ml-4">
                    <div className="ml-3 text-xl tracking-wide">{auth?.firstname}</div>
                    <div className="text-sm font-normal text-right">Đăng xuất</div>
                </div>
            </div>
        </div>
    );
}
