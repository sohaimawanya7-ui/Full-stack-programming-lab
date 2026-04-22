import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <div className="text-8xl mb-6">🔍</div>
      <h1 className="text-4xl font-extrabold text-gray-900 mb-3">
        Page Not Found
      </h1>
      <p className="text-gray-500 text-lg mb-8 max-w-md">
        Sorry, we couldn&apos;t find the page you were looking for. It may have
        been moved or doesn&apos;t exist.
      </p>
      <div className="flex gap-4">
        <Link
          href="/"
          className="bg-indigo-600 text-white font-bold px-6 py-3 rounded-full hover:bg-indigo-700 transition-colors shadow"
        >
          Go Home
        </Link>
        <Link
          href="/products"
          className="border-2 border-indigo-200 text-indigo-700 font-semibold px-6 py-3 rounded-full hover:bg-indigo-50 transition-colors"
        >
          Browse Products
        </Link>
      </div>
    </div>
  );
}
