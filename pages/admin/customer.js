import AdminLayout from "@/components/Admin/Layout/AdminLayout";
import ListCustomer from "@/components/Admin/Customer/ListCustomer";
import ProtectAdminRouter from "@/components/ProtectAdminRouter";

export default function customer() {
  return (
    <ProtectAdminRouter>
      <AdminLayout>
        <div className="w-full max-h-screen mt-2 overflow-auto bg-gray-200">
          <div className="px-6 pb-4 mt-3 text-2xl font-semibold">
            Danh sách khách hàng
          </div>
          <div className="px-8 shadow-xl">
            <ListCustomer></ListCustomer>
          </div>
        </div>
      </AdminLayout>
    </ProtectAdminRouter>
  );
}
