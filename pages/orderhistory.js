import Layout from "@/components/Layout/Layout";
import OrderDetail from "@/components/Order/OrderDetail";
import ProtectRouter from "@/components/ProtectRouter";
import { BreadCrumb } from "@/components/product/BreadCrumb";
import React from "react";

const order = () => {
  return (
    <Layout>
      <ProtectRouter>
        <div className="ml-12">
          <BreadCrumb title={"Orders"}></BreadCrumb>
        </div>
        <div className="">
          <OrderDetail></OrderDetail>
        </div>
      </ProtectRouter>
    </Layout>
  );
};

export default order;