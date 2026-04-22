import Link from "next/link";
import { products } from "@/lib/products";

export default function HomePage() {
  const featured = products.slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-700 via-indigo-600 to-purple-600 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
            Welcome to <span className="text-yellow-300">NextShop</span>
          </h1>
          <p className="text-indigo-100 text-lg sm:text-xl max-w-2xl mx-auto mb-8">
            Discover a curated selection of premium tech products. Built with
            Next.js 14, TypeScript, and Tailwind CSS.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/products"
              className="bg-white text-indigo-700 font-bold px-8 py-3 rounded-full hover:bg-yellow-300 hover:text-indigo-800 transition-colors shadow-lg"
            >
              Browse Products
            </Link>
            <Link
              href="/about"
              className="border-2 border-white text-white font-semibold px-8 py-3 rounded-full hover:bg-white hover:text-indigo-700 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
            Featured Products
          </h2>
          <Link
            href="/products"
            className="text-indigo-600 font-semibold hover:underline text-sm"
          >
            View all →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((product) => (
            <Link
              key={product.id}
              href={`/product/${product.id}`}
              className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow border border-gray-100 overflow-hidden flex flex-col"
            >
              <div className="bg-indigo-50 flex items-center justify-center h-36 text-5xl group-hover:scale-105 transition-transform duration-200">
                {product.image}
              </div>
              <div className="p-4 flex flex-col flex-1">
                <span className="text-xs font-semibold text-indigo-500 uppercase tracking-wide">
                  {product.category}
                </span>
                <h3 className="font-bold text-gray-900 mt-1 group-hover:text-indigo-700 transition-colors">
                  {product.title}
                </h3>
                <p className="text-gray-500 text-sm mt-1 line-clamp-2 flex-1">
                  {product.description}
                </p>
                <p className="text-indigo-700 font-extrabold mt-3">
                  ${product.price.toFixed(2)}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-indigo-50 border-t border-indigo-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Ready to explore more?
          </h2>
          <p className="text-gray-500 mb-6">
            Check out our full catalog of products.
          </p>
          <Link
            href="/products"
            className="inline-block bg-indigo-600 text-white font-bold px-8 py-3 rounded-full hover:bg-indigo-700 transition-colors shadow"
          >
            See All Products
          </Link>
        </div>
      </section>
    </div>
  );
}
