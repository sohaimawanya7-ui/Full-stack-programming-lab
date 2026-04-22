import Link from "next/link";
import ProductList from "@/components/ProductList";

export const metadata = {
  title: "Products — NextShop",
};

export default function ProductsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-400 mb-6">
        <Link href="/" className="hover:text-indigo-600 transition-colors">
          Home
        </Link>
        <span className="mx-2">/</span>
        <span className="text-gray-700 font-medium">Products</span>
      </nav>

      <div className="mb-10">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-2">
          All Products
        </h1>
        <p className="text-gray-500 text-lg">
          Hand-picked tech essentials for work and play.
        </p>
      </div>

      <ProductList />

      {/* Back to Home */}
      <div className="mt-12 text-center">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-indigo-600 font-semibold hover:underline"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}
