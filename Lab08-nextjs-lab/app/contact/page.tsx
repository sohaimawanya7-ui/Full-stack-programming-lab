export const metadata = {
  title: "Contact — NextShop",
};

const contactInfo = [
  { icon: "📧", label: "Email", value: "hello@nextshop.dev" },
  { icon: "📞", label: "Phone", value: "+1 (555) 123-4567" },
  { icon: "📍", label: "Address", value: "123 Next Street, Web City, JS 00001" },
];

export default function ContactPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-3">
          Get in Touch
        </h1>
        <p className="text-gray-500 text-lg">
          Have a question or just want to say hi? We&apos;d love to hear from
          you.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Contact Form */}
        <div className="bg-white rounded-2xl shadow-md p-8 border border-gray-100">
          <h2 className="text-xl font-bold text-gray-800 mb-6">
            Send a Message
          </h2>
          <div className="space-y-5">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Full Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Jane Doe"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                placeholder="jane@example.com"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Subject
              </label>
              <input
                id="subject"
                type="text"
                placeholder="How can we help?"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="Write your message here..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 text-sm resize-none"
              />
            </div>
            <button
              type="button"
              className="w-full bg-indigo-600 text-white font-bold py-3 rounded-lg hover:bg-indigo-700 transition-colors shadow"
            >
              Send Message
            </button>
          </div>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-6">
          {contactInfo.map(({ icon, label, value }) => (
            <div
              key={label}
              className="bg-white rounded-2xl shadow-md p-6 border border-gray-100 flex items-start gap-4"
            >
              <span className="text-3xl">{icon}</span>
              <div>
                <p className="text-xs font-semibold text-indigo-500 uppercase tracking-wide mb-1">
                  {label}
                </p>
                <p className="text-gray-800 font-medium">{value}</p>
              </div>
            </div>
          ))}

          <div className="bg-indigo-50 rounded-2xl p-6 border border-indigo-100">
            <h3 className="font-bold text-gray-800 mb-2">🕐 Business Hours</h3>
            <p className="text-sm text-gray-600">
              Monday – Friday: 9:00 AM – 6:00 PM
            </p>
            <p className="text-sm text-gray-600">
              Saturday: 10:00 AM – 4:00 PM
            </p>
            <p className="text-sm text-gray-600">Sunday: Closed</p>
          </div>
        </div>
      </div>
    </div>
  );
}
