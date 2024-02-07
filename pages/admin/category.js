import AdminLayout from "@/components/Admin/Layout/AdminLayout";
import ListCategory from "@/components/Admin/Category/ListCategory";

export default function customer() {
  return (
    <AdminLayout>
      <div className="w-full max-h-screen mt-2 overflow-auto bg-gray-200">
        <div className="px-6 pb-4 mt-3 text-2xl font-semibold">
          Danh sách danh mục
        </div>
        <div className="px-8 shadow-xl">
          <ListCategory></ListCategory>
        </div>
      </div>
    </AdminLayout>
  );
}
