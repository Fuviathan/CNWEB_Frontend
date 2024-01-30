import Cart from "@/components/Cart/Cart";
import Layout from "@/components/Layout/Layout";
import ProtectRouter from "@/components/ProtectRouter";
import React from "react";

const cart = () => {
  return (
    <Layout className="bg-white">
      <ProtectRouter>
        <Cart></Cart>
      </ProtectRouter>
    </Layout>
  );
};

export default cart;
