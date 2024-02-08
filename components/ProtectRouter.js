import Link from "next/link";
import React, { use, useEffect, useState } from "react";
import { useRouter } from "next/router";

const ProtectRouter = ({ children }) => {
  const router = useRouter()
  const [auth, setAuth] = useState();
  useEffect(() => {
    let value;
    // Get the value from local storage if it exists
    value = localStorage.getItem("user") || "";
    setAuth(JSON.parse(value));
  }, []);
  if (auth?.role === 'user') return (
    <div>
      {auth ? (
        <main>{children}</main>
      ) : (
        <div>
          <a
            href={"/login"}
            className="flex justify-center p-3 mx-auto font-sans text-2xl font-semibold rounded-lg shadow-md bg-light-brown w-fit h-fit text-orange-gray hover:opacity-75"
          >
            Login to shop now!
          </a>
        </div>
      )}
      ;
    </div>
  );
  else router.push('/admin/dashboard')
};

export default ProtectRouter;
