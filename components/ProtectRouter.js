import Link from "next/link";
import React, { useEffect, useState } from "react";

const ProtectRouter = ({ children }) => {
  const [auth, setAuth] = useState();
  useEffect(() => {
    let value;
    // Get the value from local storage if it exists
    value = localStorage.getItem("user") || "";
    setAuth(value);
  }, []);
  return (
    <div>
      {auth ? (
        <main>{children}</main>
      ) : (
        <div>
          <a
            href={"/login"}
            className="flex justify-center bg-light-brown w-fit h-fit mx-auto rounded-lg p-3 text-2xl font-sans font-semibold text-orange-gray shadow-md hover:opacity-75"
          >
            Login to shop now!
          </a>
        </div>
      )}
      ;
    </div>
  );
};

export default ProtectRouter;
