import Link from "next/link";
import { notFound } from "next/navigation";
import { getProductById, products } from "@/lib/products";

interface Props {
  params: { id: string };
}

// Generate static params for all products
export function generateStaticParams() {
  return products.map((p) => ({ id: String(p.id) }));
}

export function generateMetadata({ params }: Props) {
  const product = getProductById(Number(params.id));
  return {
    title: product ? `${product.title} — NextShop` : "Product Not Found",
  };
}

export default function ProductDetailPage({ params }: Props) {
  const product = getProductById(Number(params.id));

  if (!product) {
    notFound();
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
        <Link href="/" className="hover:text-indigo-600 transition-colors">
          Home
        </Link>
        <span>/</span>
        <Link
          href="/products"
          className="hover:text-indigo-600 transition-colors"
        >
          Products
        </Link>
        <span>/</span>
        <span className="text-gray-700 font-medium">{product.title}</span>
      </nav>

      {/* Product Card */}
      <div className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image / Emoji */}
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 flex items-center justify-center py-20 text-8xl">
            {product.image}
          </div>

          {/* Details */}
          <div className="p-8 flex flex-col justify-between">
            <div>
              <span className="inline-block bg-indigo-100 text-indigo-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide mb-3">
                {product.category}
              </span>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-4 leading-tight">
                {product.title}
              </h1>
              <p className="text-gray-600 leading-relaxed text-base">
                {product.description}
              </p>
            </div>

            <div className="mt-8">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-4xl font-extrabold text-indigo-700">
                  ${product.price.toFixed(2)}
                </span>
                <span className="text-sm text-green-600 font-semibold bg-green-50 px-3 py-1 rounded-full">
                  In Stock
                </span>
              </div>

              <button
                type="button"
                className="w-full bg-indigo-600 text-white font-bold py-3 rounded-xl hover:bg-indigo-700 transition-colors shadow text-base mb-3"
              >
                🛒 Add to Cart
              </button>
              <button
                type="button"
                className="w-full border-2 border-indigo-200 text-indigo-700 font-semibold py-3 rounded-xl hover:bg-indigo-50 transition-colors text-base"
              >
                ♡ Add to Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-between items-center">
        <Link
          href="/products"
          className="inline-flex items-center gap-2 text-indigo-600 font-semibold hover:underline"
        >
          ← Back to All Products
        </Link>
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-500 hover:text-indigo-600 font-semibold hover:underline transition-colors"
        >
          🏠 Back to Home
        </Link>
      </div>
    </div>
  );
}
