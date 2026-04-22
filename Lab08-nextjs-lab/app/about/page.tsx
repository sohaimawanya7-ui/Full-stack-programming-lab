import Link from "next/link";

export const metadata = {
  title: "About — NextShop",
};

const teamMembers = [
  { name: "Alex Johnson", role: "CEO & Founder", emoji: "👨‍💼" },
  { name: "Sarah Kim", role: "Head of Design", emoji: "👩‍🎨" },
  { name: "Marcus Lee", role: "Lead Developer", emoji: "👨‍💻" },
];

export default function AboutPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Page Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
          About NextShop
        </h1>
        <p className="text-gray-500 text-lg max-w-2xl mx-auto">
          We&apos;re a small team passionate about great tech products and even
          better web experiences.
        </p>
      </div>

      {/* Mission */}
      <section className="bg-white rounded-2xl shadow-md p-8 mb-10 border border-gray-100">
        <h2 className="text-2xl font-bold text-indigo-700 mb-3">
          🚀 Our Mission
        </h2>
        <p className="text-gray-600 leading-relaxed">
          At NextShop, our mission is to make discovering and buying premium
          technology simple, transparent, and enjoyable. We hand-pick every
          product in our catalog based on quality, value, and real-world
          usefulness — so you never have to sift through noise.
        </p>
      </section>

      {/* Team */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          👥 Meet the Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="bg-white rounded-2xl shadow-md p-6 text-center border border-gray-100"
            >
              <div className="text-5xl mb-3">{member.emoji}</div>
              <h3 className="font-bold text-gray-900 text-lg">{member.name}</h3>
              <p className="text-indigo-500 text-sm">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tech Stack */}
      <section className="bg-indigo-50 rounded-2xl p-8 border border-indigo-100 mb-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          🛠️ Built With
        </h2>
        <ul className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          {["Next.js 14", "TypeScript", "Tailwind CSS", "React 18"].map(
            (tech) => (
              <li
                key={tech}
                className="bg-white rounded-xl py-3 px-4 font-semibold text-indigo-700 shadow-sm text-sm"
              >
                {tech}
              </li>
            )
          )}
        </ul>
      </section>

      {/* CTA */}
      <div className="text-center">
        <Link
          href="/products"
          className="inline-block bg-indigo-600 text-white font-bold px-8 py-3 rounded-full hover:bg-indigo-700 transition-colors shadow"
        >
          Browse Our Products
        </Link>
      </div>
    </div>
  );
}
