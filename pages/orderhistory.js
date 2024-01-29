import Layout from "@/components/Layout/Layout";
import OrderDetail from "@/components/Order/OrderDetail";
import { BreadCrumb } from "@/components/product/BreadCrumb";
import React from "react";

const order = () => {
  return (
    <Layout>
      <div className="ml-12">
        <BreadCrumb title={"Orders"}></BreadCrumb>
      </div>
      <div className="">
        <OrderDetail></OrderDetail>
      </div>
    </Layout>
  );
};

export default order;
