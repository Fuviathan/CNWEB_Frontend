import Layout from "@/components/Layout/Layout";
import ProductFilter from "../../components/productCard/ProductFilter";
import ProtectRouter from "@/components/ProtectRouter";

export default function OurStore() {
  return (
    <ProtectRouter>
      <Layout>
        <div className="mx-auto max-w-[1320px] min-h-fit">
          <ProductFilter></ProductFilter>
        </div>
      </Layout>
    </ProtectRouter>
  );
}
