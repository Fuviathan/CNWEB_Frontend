import ListBrand from "@/components/Admin/Brand/ListBrand";
import AdminLayout from "@/components/Admin/Layout/AdminLayout";
import React from "react";

export default function brand() {
  return (
    <AdminLayout >
      <div className="w-full max-h-screen mt-2 overflow-auto bg-gray-200">
        <div className="px-6 pb-4 mb-0 text-2xl font-semibold">Danh sách nhãn hàng</div>
        <div className="px-8 shadow-xl">
          <ListBrand></ListBrand>
        </div>

      </div>
    </AdminLayout>
  );
}
