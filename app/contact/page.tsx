// app/contact/page.tsx
import { Mail, Phone, MapPin } from 'lucide-react'; // A popular, lightweight icon library

export default function ContactPage() {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-800">Get In Touch</h1>
          <p className="text-lg text-gray-600 mt-4">
            We are here to help you plan your perfect spiritual journey. Contact us anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left Side: Contact Form */}
          <div className="bg-gray-50 p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-blue-800 mb-6">Send us a Message</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                <input type="text" id="name" name="name" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                <input type="email" id="email" name="email" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea id="message" name="message" rows={5} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"></textarea>
              </div>
              <div>
                <button type="submit" className="w-full bg-orange-500 text-white font-bold py-3 px-4 rounded-md hover:bg-orange-600 transition-colors">
                  Submit Inquiry
                </button>
              </div>
            </form>
          </div>

          {/* Right Side: Contact Info & Map */}
          <div className="space-y-8">
            <div className="bg-gray-50 p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-blue-800 mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Phone className="w-6 h-6 text-orange-500" />
                  <span className="text-gray-700">7207300994 / 6304033435</span>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="w-6 h-6 text-orange-500" />
                  <span className="text-gray-700">contact@kashitravels.com</span>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-orange-500 mt-1" />
                  <span className="text-gray-700">123 Temple Road, Silchar, Assam, India</span>
                </div>
              </div>
            </div>
            {/* Map will be added here */}
            <div className="h-64 bg-gray-300 rounded-lg shadow-md flex items-center justify-center">
              <p className="text-gray-500">Google Map Placeholder</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}