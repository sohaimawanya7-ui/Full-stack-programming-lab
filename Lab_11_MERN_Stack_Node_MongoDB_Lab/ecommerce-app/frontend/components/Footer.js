export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand */}
        <div>
          <h3 className="text-white text-xl font-bold mb-2">🛒 ShopMERN</h3>
          <p className="text-sm text-gray-400">
            A full-stack ecommerce app built with MongoDB, Express, React (Next.js), and Node.js.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-white font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-1 text-sm">
            <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
            <li><a href="/products" className="hover:text-white transition-colors">Products</a></li>
            <li><a href="/add-product" className="hover:text-white transition-colors">Add Product</a></li>
          </ul>
        </div>

        {/* Tech Stack */}
        <div>
          <h4 className="text-white font-semibold mb-3">Tech Stack</h4>
          <ul className="space-y-1 text-sm text-gray-400">
            <li>⚡ Node.js + Express.js</li>
            <li>🍃 MongoDB + Mongoose</li>
            <li>⚛️ Next.js (React)</li>
            <li>🎨 Tailwind CSS</li>
          </ul>
        </div>
      </div>
      <div className="text-center text-sm text-gray-500 py-4 border-t border-gray-700">
        © {new Date().getFullYear()} ShopMERN — MERN Stack Lab Project
      </div>
    </footer>
  );
}
