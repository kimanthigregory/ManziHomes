import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-brand-green text-brand-off-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">ManziHomes</h3>
            <p className="text-sm text-gray-300">
              Crafting dream spaces with passion and precision.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/designs" className="hover:text-brand-gold">
                  Designs
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-brand-gold">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-brand-gold">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-brand-gold">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>Architectural Design</li>
              <li>Land Surveying</li>
              <li>Project Management</li>
              <li>Construction</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <address className="not-italic text-sm space-y-2">
              <p>123 Architecture Ave, Nairobi, Kenya</p>
              <p>
                Email:{" "}
                <a
                  href="mailto:contact@manzihomes.com"
                  className="hover:text-brand-gold"
                >
                  contact@manzihomes.com
                </a>
              </p>
              <p>Phone: +254 700 123 456</p>
            </address>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} ManziHomes. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
