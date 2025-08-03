import Link from 'next/link';
import Image from 'next/image';
import { Home, Linkedin, Mail, Facebook, User } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Address */}
          <div className="space-y-4">
            <div className="flex items-center">
              <Image
                src="/I-care logo.png"
                alt="i-Care Paediatric Dentistry"
                width={180}
                height={60}
                className="h-12 w-auto object-contain brightness-0 invert"
              />
            </div>
            <p className="text-gray-300">
              Shop 4, 2 Centre Place<br />
              Rochedale South QLD 4123
            </p>
            <div className="flex space-x-4">
              <Link href="/" className="bg-teal-600 p-2 rounded hover:bg-teal-700 transition-colors">
                <Home className="h-5 w-5 text-white" />
              </Link>
              <Link href="https://www.linkedin.com/in/a-prof-sobia-zafar-88725a50/" target="_blank" rel="noopener noreferrer" className="bg-teal-600 p-2 rounded hover:bg-teal-700 transition-colors">
                <Linkedin className="h-5 w-5 text-white" />
              </Link>
              <Link href="https://www.facebook.com/profile.php?id=61578754869804" target="_blank" rel="noopener noreferrer" className="bg-teal-600 p-2 rounded hover:bg-teal-700 transition-colors">
                <Facebook className="h-5 w-5 text-white" />
              </Link>
              <Link href="https://dentistry.uq.edu.au/profile/1957/sobia-zafar" target="_blank" rel="noopener noreferrer" className="bg-teal-600 p-2 rounded hover:bg-teal-700 transition-colors">
                <User className="h-5 w-5 text-white" />
              </Link>
              <Link href="mailto:paedsdentga@gmail.com" className="bg-teal-600 p-2 rounded hover:bg-teal-700 transition-colors">
                <Mail className="h-5 w-5 text-white" />
              </Link>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Explore</h4>
            <ul className="space-y-2">
              <li><Link href="/services" className="text-gray-300 hover:text-teal-400 transition-colors">Our Services</Link></li>
              <li><Link href="/sedation" className="text-gray-300 hover:text-teal-400 transition-colors">Sedation</Link></li>
              <li><Link href="/referrals" className="text-gray-300 hover:text-teal-400 transition-colors">Referrals</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-teal-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li><Link href="/services/infant-toddler-care" className="text-gray-300 hover:text-teal-400 transition-colors">Infant / Toddler Care</Link></li>
              <li><Link href="/services/preventive-care" className="text-gray-300 hover:text-teal-400 transition-colors">Preventive Care</Link></li>
              <li><Link href="/services/fillings-and-crowns" className="text-gray-300 hover:text-teal-400 transition-colors">Fillings & Crowns</Link></li>
              <li><Link href="/services/extractions" className="text-gray-300 hover:text-teal-400 transition-colors">Extractions</Link></li>
              <li><Link href="/services/space-maintainers" className="text-gray-300 hover:text-teal-400 transition-colors">Space Maintainers</Link></li>
              <li><Link href="/services/chalky-teeth" className="text-gray-300 hover:text-teal-400 transition-colors">Chalky Teeth</Link></li>
              <li><Link href="/services/emergency-care" className="text-gray-300 hover:text-teal-400 transition-colors">Emergency Care</Link></li>
              <li><Link href="/services/special-needs" className="text-gray-300 hover:text-teal-400 transition-colors">Children with Special Needs</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Details</h4>
            <div className="space-y-2">
              <p className="text-teal-400">Phone Us:</p>
              <p className="text-gray-300">36230000</p>
              <p className="text-teal-400 mt-4">Email Us:</p>
              <p className="text-gray-300">icarepaediatricdentistry@gmail.com</p>
              <p className="text-teal-400 mt-4">Availability:</p>
              <p className="text-gray-300">Monday To Saturday (9am - 5pm)</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Icarepaedsdent. All Rights Reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/contact" className="text-teal-400 hover:text-teal-300 text-sm transition-colors">
                Contact Us
              </Link>
              <Link href="/referrals" className="text-teal-400 hover:text-teal-300 text-sm transition-colors">
                Referrals
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}