import ListBrand from "@/components/Admin/Brand/ListBrand";
import AdminLayout from "@/components/Admin/Layout/AdminLayout";
import React from "react";

export default function brand() {
  return (
    <AdminLayout isOpen={true}>
      <div className="w-full">
        <ListBrand></ListBrand>
      </div>
    </AdminLayout>
  );
}
