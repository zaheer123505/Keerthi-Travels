// app/components/Footer.tsx
import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-blue-800 text-white">
      <div className="container mx-auto px-6 pt-12 pb-8">
        {/* Main footer content with 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          
          {/* Column 1: Brand Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Keerthi  Travels</h3>
            <p className="text-blue-200">
              Your trusted partner for spiritual and pilgrimage tours across India.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-blue-200 hover:text-orange-400">Home</Link></li>
              <li><Link href="/packages" className="text-blue-200 hover:text-orange-400">Packages</Link></li>
              <li><Link href="/contact" className="text-blue-200 hover:text-orange-400">Contact Us</Link></li>
              <li><Link href="/booking" className="text-blue-200 hover:text-orange-400">Book Now</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact Details */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center justify-center md:justify-start gap-3">
                <Phone size={18} />
                <span>7207300994 / 6304033435</span>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-3">
                <Mail size={18} />
                <span>contact@kashitravels.com</span>
              </li>
              <li className="flex items-start justify-center md:justify-start gap-3">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span>123 Temple Road, Silchar, Assam</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright bar */}
        <div className="mt-10 pt-6 border-t border-blue-700 text-center text-blue-300">
          <p>© {new Date().getFullYear()} Keerthi  Travels. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}