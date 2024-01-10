import { BreadCrumb } from "./components/product/BreadCrumb";
import ProductDetail from "./components/product/ProductDetail";
import ProductCard from "./components/productCard/ProductCard";
import ProductFilter from "./components/productCard/ProductFilter";

export default function OurStore() {
  return (
    <div className="flex">
      <ProductFilter></ProductFilter>
    </div>
  );
}
