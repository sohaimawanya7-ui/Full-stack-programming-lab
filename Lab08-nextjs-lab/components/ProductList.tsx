import Link from "next/link";
import { products } from "@/lib/products";

export default function ProductList() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <Link
          key={product.id}
          href={`/product/${product.id}`}
          className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-200 overflow-hidden border border-gray-100 flex flex-col"
        >
          {/* Emoji / image area */}
          <div className="bg-indigo-50 flex items-center justify-center h-40 text-6xl group-hover:scale-105 transition-transform duration-200">
            {product.image}
          </div>

          {/* Content */}
          <div className="p-5 flex flex-col flex-1">
            <span className="text-xs font-semibold text-indigo-500 uppercase tracking-wide mb-1">
              {product.category}
            </span>
            <h3 className="text-gray-900 font-bold text-lg leading-snug mb-2 group-hover:text-indigo-700 transition-colors">
              {product.title}
            </h3>
            <p className="text-gray-500 text-sm line-clamp-2 flex-1">
              {product.description}
            </p>
            <div className="mt-4 flex items-center justify-between">
              <span className="text-indigo-700 font-extrabold text-xl">
                ${product.price.toFixed(2)}
              </span>
              <span className="text-sm text-indigo-600 font-medium group-hover:underline">
                View details →
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
