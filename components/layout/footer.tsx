import Link from 'next/link';
import Image from 'next/image';
import { Home, Linkedin, Mail, Facebook, User } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-white relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-20 left-10 w-32 h-32 bg-teal-500/5 rounded-full animate-pulse" style={{ animationDuration: '8s' }}></div>
        <div className="absolute bottom-20 right-12 w-40 h-40 bg-emerald-400/5 rounded-full animate-pulse" style={{ animationDuration: '10s' }}></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Address */}
          <div className="space-y-6">
            <div className="flex items-center">
              <Image
                src="/I-care logo.png"
                alt="i-Care Paediatric Dentistry"
                width={180}
                height={60}
                className="h-12 w-auto object-contain brightness-0 invert"
              />
            </div>
            <p className="text-gray-300 leading-relaxed">
              Shop 4, 2 Centre Place<br />
              Rochedale South QLD 4123
            </p>
            <div className="flex space-x-4">
              <Link href="/" className="bg-teal-600 p-2 rounded-lg hover:bg-teal-700 transition-colors">
                <Home className="h-5 w-5 text-white" />
              </Link>
              <Link href="https://www.linkedin.com/in/a-prof-sobia-zafar-88725a50/" target="_blank" rel="noopener noreferrer" className="bg-teal-600 p-2 rounded-lg hover:bg-teal-700 transition-colors">
                <Linkedin className="h-5 w-5 text-white" />
              </Link>
              <Link href="https://www.facebook.com/profile.php?id=61578754869804" target="_blank" rel="noopener noreferrer" className="bg-teal-600 p-2 rounded-lg hover:bg-teal-700 transition-colors">
                <Facebook className="h-5 w-5 text-white" />
              </Link>
              <Link href="https://dentistry.uq.edu.au/profile/1957/sobia-zafar" target="_blank" rel="noopener noreferrer" className="bg-teal-600 p-2 rounded-lg hover:bg-teal-700 transition-colors">
                <User className="h-5 w-5 text-white" />
              </Link>
              <Link href="mailto:paedsdentga@gmail.com" className="bg-teal-600 p-2 rounded-lg hover:bg-teal-700 transition-colors">
                <Mail className="h-5 w-5 text-white" />
              </Link>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-white">Explore</h4>
            <ul className="space-y-2">
              <li><Link href="/services" className="text-gray-300 hover:text-teal-400 transition-colors">Our Services</Link></li>
              <li><Link href="/sedation" className="text-gray-300 hover:text-teal-400 transition-colors">Sedation</Link></li>
              <li><Link href="/referrals" className="text-gray-300 hover:text-teal-400 transition-colors">Referrals</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-teal-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-white">Our Services</h4>
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
            <h4 className="font-semibold text-lg mb-4 text-white">Contact Details</h4>
            <div className="space-y-3">
              <div>
                <p className="text-teal-400 font-medium">Phone Us:</p>
                <p className="text-gray-300">36230000</p>
              </div>
              <div>
                <p className="text-teal-400 font-medium">Email Us:</p>
                <p className="text-gray-300 text-sm">icarepaediatricdentistry@gmail.com</p>
              </div>
              <div>
                <p className="text-teal-400 font-medium">Availability:</p>
                <p className="text-gray-300">Monday To Saturday (9am - 5pm)</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} <span className="text-teal-400">Icarepaedsdent</span>. All Rights Reserved.
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