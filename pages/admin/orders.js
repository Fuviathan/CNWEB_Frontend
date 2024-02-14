import AdminLayout from "@/components/Admin/Layout/AdminLayout";
import ProtectAdminRouter from "@/components/ProtectAdminRouter";
import ListOrders from "@/components/Admin/Orders/ListOrders";

export default function Orders() {
  return (
    <ProtectAdminRouter>
      <AdminLayout>
        <div className="w-full max-h-screen mt-2 overflow-auto bg-gray-200">
          <div className="px-6 pb-4 mb-0 text-2xl font-semibold">
            Danh sách đơn hàng
          </div>
          <div className="px-8 shadow-xl">
            <ListOrders />
          </div>
        </div>
      </AdminLayout>
    </ProtectAdminRouter>
  );
}
