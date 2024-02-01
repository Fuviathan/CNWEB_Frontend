import Layout from "@/components/Layout/Layout";
import ProductFilter from "../../components/productCard/ProductFilter";

export default function OurStore() {
  return (
    <Layout>
      <div className="mx-auto max-w-[1320px] min-h-fit">
        <ProductFilter></ProductFilter>
      </div>
    </Layout>
  );
}
