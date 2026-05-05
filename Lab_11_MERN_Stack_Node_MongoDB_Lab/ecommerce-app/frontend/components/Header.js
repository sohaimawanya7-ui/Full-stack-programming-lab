import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-blue-600 tracking-tight">
          🛒 ShopMERN
        </Link>

        {/* Nav Links */}
        <nav className="flex items-center gap-6">
          <Link href="/" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
            Home
          </Link>
          <Link href="/products" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
            Products
          </Link>
          <Link href="/add-product" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
            + Add Product
          </Link>
        </nav>
      </div>
    </header>
  );
}
