import Link from "next/link";
import React, { use, useEffect, useState } from "react";
import { useRouter } from "next/router";

const ProtectAdminRouter = ({ children }) => {
    const router = useRouter()
    const [auth, setAuth] = useState();
    useEffect(() => {
        let value;
        // Get the value from local storage if it exists
        value = localStorage.getItem("user") || "";
        setAuth(JSON.parse(value));
    }, []);
    if (auth?.role === 'admin') {
        return (<main>{children}</main>)
    }
    else router.push('/product')
};

export default ProtectAdminRouter;
