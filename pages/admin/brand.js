import AddBrand from "@/components/Admin/Brand/AddBrand";
import ListBrand from "@/components/Admin/Brand/ListBrand";
import AdminLayout from "@/components/Admin/Layout/AdminLayout";
import BasicModal from "@/components/Admin/Modal/BasicModal";
import { useState } from "react";

export default function brand() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <AdminLayout>
      <div className="flex flex-row-reverse">
        <button
          className=" border-2 bg-brown-green p-2 rounded-2xl mr-12 mt-2 font-medium shadow-lg hover:shadow-xl hover:opacity-80"
          onClick={handleOpen}
        >
          Thêm nhãn hiệu
        </button>
      </div>
      <BasicModal open={open} onClose={handleClose}>
        <div className="bg-red-500">
          <AddBrand onClose={handleClose}></AddBrand>
        </div>
      </BasicModal>
      <div className="w-full max-h-screen mt-2 overflow-auto bg-gray-200">
        <div className="px-6 pb-4 mb-0 text-2xl font-semibold">
          Danh sách nhãn hàng
        </div>
        <div className="px-8 shadow-xl">
          <ListBrand></ListBrand>
        </div>
      </div>
    </AdminLayout>
  );
}
