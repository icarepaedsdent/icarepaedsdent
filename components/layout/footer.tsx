import Link from 'next/link';
import { Home, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Address */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="font-bold text-xl">i-Care Paediatric Dentistry</span>
            </div>
            <p className="text-gray-300">
              Shop 113 Mt Gravatt Plaza, 55 Creek Rd,<br />
              Mount Gravatt QLD 4122
            </p>
            <div className="flex space-x-4">
              <Link href="/" className="bg-[#98C93C] p-2 rounded hover:bg-[#7ea830] transition-colors">
                <Home className="h-5 w-5 text-white" />
              </Link>
              <Link href="https://linkedin.com" className="bg-[#98C93C] p-2 rounded hover:bg-[#7ea830] transition-colors">
                <Linkedin className="h-5 w-5 text-white" />
              </Link>
              <Link href="mailto:paedsdentga@gmail.com" className="bg-[#98C93C] p-2 rounded hover:bg-[#7ea830] transition-colors">
                <Mail className="h-5 w-5 text-white" />
              </Link>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Explore</h4>
            <ul className="space-y-2">
              <li><Link href="/services" className="text-gray-300 hover:text-[#98C93C] transition-colors">Our Services</Link></li>
              <li><Link href="/sedation" className="text-gray-300 hover:text-[#98C93C] transition-colors">Sedation</Link></li>
              <li><Link href="/appointment" className="text-gray-300 hover:text-[#98C93C] transition-colors">Appointment</Link></li>
              <li><Link href="/referrals" className="text-gray-300 hover:text-[#98C93C] transition-colors">Referrals</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-[#98C93C] transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li><Link href="/services/space-maintainers" className="text-gray-300 hover:text-[#98C93C] transition-colors">Space Maintainers</Link></li>
              <li><Link href="/services/fillings-and-crowns" className="text-gray-300 hover:text-[#98C93C] transition-colors">Fillings Crowns</Link></li>
              <li><Link href="/services/preventive-care" className="text-gray-300 hover:text-[#98C93C] transition-colors">Preventive Care</Link></li>
              <li><Link href="/services/chalky-teeth" className="text-gray-300 hover:text-[#98C93C] transition-colors">Chalky Teeth</Link></li>
              <li><Link href="/services/extractions" className="text-gray-300 hover:text-[#98C93C] transition-colors">Extractions</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Details</h4>
            <div className="space-y-2">
              <p className="text-[#98C93C]">Phone Us:</p>
              <p className="text-gray-300">1300 287 328</p>
              <p className="text-[#98C93C] mt-4">Email Us:</p>
              <p className="text-gray-300">paedsdentga@gmail.com</p>
              <p className="text-[#98C93C] mt-4">Availability:</p>
              <p className="text-gray-300">Monday To Friday (9am - 5pm)</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Icarepaedsdent. All Rights Reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/parent-portal" className="text-[#98C93C] hover:text-[#7ea830] text-sm transition-colors">
                Parent Portal
              </Link>
              <Link href="/appointment" className="text-[#98C93C] hover:text-[#7ea830] text-sm transition-colors">
                Appointment
              </Link>
              <Link href="/referrals" className="text-[#98C93C] hover:text-[#7ea830] text-sm transition-colors">
                Referrals
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}