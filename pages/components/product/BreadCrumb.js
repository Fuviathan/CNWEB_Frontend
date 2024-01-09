import Link from "next/link";

export const BreadCrumb = (props) => {
  const { title } = props || " ";
  return (
    <div className="breadcrumb mb-0 py-4">
      <p className="text-left mb-0 pl-8 font-mono font-semibold">
        <Link href={"/"} to="/" className="text-dark">
          Home
        </Link>
        / {title} "Product"
      </p>
    </div>
  );
};
