import Link from "next/link";

export const BreadCrumb = (props) => {
  const { title } = props || " ";
  return (
    <div className="py-4 mb-0 breadcrumb">
      <p className="pl-8 mb-0 font-mono font-semibold text-left">
        <Link href={"/"} to="/" className="text-dark">
          Home
        </Link>
        / {title} "Product"
      </p>
    </div>
  );
};
