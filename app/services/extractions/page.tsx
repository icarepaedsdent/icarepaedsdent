import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Calendar, Phone, Scissors } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Extractions | i-Care Paediatric Dentistry',
  description: 'Safe and gentle tooth extractions for children. We prioritize your child\'s comfort with sedation options available when needed.',
};

export default function ExtractionsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-white relative overflow-hidden">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-teal-200/30 rounded-full animate-pulse" style={{ animationDuration: '5s' }}></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-emerald-300/20 rounded-full animate-bounce" style={{ animationDuration: '7s' }}></div>
        <div className="absolute top-96 left-1/4 w-20 h-20 bg-teal-300/25 rounded-full animate-pulse" style={{ animationDuration: '4s' }}></div>
        <div className="absolute bottom-40 right-12 w-28 h-28 bg-emerald-200/30 rounded-full animate-bounce" style={{ animationDuration: '6s' }}></div>
        <div className="absolute bottom-20 left-16 w-16 h-16 bg-teal-400/20 rounded-full animate-pulse" style={{ animationDuration: '5s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-14 h-14 bg-emerald-300/25 rounded-full animate-bounce" style={{ animationDuration: '8s' }}></div>
        <div className="absolute top-64 left-1/2 w-10 h-10 bg-teal-500/30 rounded-full animate-ping" style={{ animationDuration: '3s' }}></div>
        <div className="absolute bottom-60 left-1/3 w-8 h-8 bg-emerald-400/40 rounded-full animate-ping" style={{ animationDuration: '4s' }}></div>
        
        {/* Plus sign elements */}
        <div className="absolute top-20 right-1/4 text-teal-300/30 text-2xl animate-spin" style={{ animationDuration: '20s' }}>+</div>
        <div className="absolute bottom-32 right-1/2 text-emerald-400/25 text-lg animate-spin" style={{ animationDuration: '25s' }}>+</div>
        <div className="absolute top-2/3 left-12 text-teal-400/20 text-xl animate-spin" style={{ animationDuration: '30s' }}>+</div>
        <div className="absolute top-80 right-8 text-emerald-300/30 text-sm animate-spin" style={{ animationDuration: '15s' }}>+</div>
      </div>

      {/* Hero Section with Full-Width Background Image */}
      <div className="relative min-h-[70vh] lg:min-h-[80vh] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/sample3.JPG"
            alt="Dental Extractions"
            fill
            className="object-cover"
            priority
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        {/* Content Overlay */}
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <Scissors className="w-8 h-8 text-teal-400" />
              <span className="text-teal-400 font-semibold text-lg">Extractions</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Safe and Gentle Tooth Extractions
            </h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              While we always aim to save teeth whenever possible, sometimes extractions
              are necessary for your child&apos;s dental health.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-white">
                  Book Consultation
                </Button>
              </Link>
              <Link href="tel:36230000">
                <Button size="lg" variant="outline" className="border-white bg-white text-teal-600">
                  Call Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* When Extractions Are Needed */}
          <Card className="p-6 bg-gradient-to-br from-white to-teal-50/30 border-teal-200 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden">
            {/* Internal animated blobs */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute -top-2 -right-2 w-16 h-16 bg-teal-100/40 rounded-full animate-pulse" style={{ animationDuration: '6s' }}></div>
              <div className="absolute -bottom-2 -left-2 w-12 h-12 bg-emerald-200/30 rounded-full animate-bounce" style={{ animationDuration: '5s' }}></div>
              <div className="absolute top-4 right-8 w-4 h-4 bg-teal-400/60 rounded-full animate-ping" style={{ animationDuration: '4s' }}></div>
              <div className="absolute bottom-8 left-6 w-2 h-2 bg-emerald-400/70 rounded-full animate-ping" style={{ animationDuration: '3s' }}></div>
              <div className="absolute top-12 right-16 text-teal-300/20 text-lg animate-spin" style={{ animationDuration: '25s' }}>+</div>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 relative z-10">
              When Are Extractions Necessary?
            </h2>
            <p className="text-gray-600 mb-6 relative z-10">
              Our policy at i-Care paediatric dentistry is to save all teeth whenever possible, 
              but there are occasions when an extraction may be necessary. These include:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2 relative z-10">
              <li>Extensive decay</li>
              <li>Persistent tooth ache</li>
              <li>Abscessed teeth</li>
              <li>Severely chalky molars</li>
              <li>Orthodontic reasons</li>
            </ul>
          </Card>

          {/* Comfort and Care */}
          <Card className="p-6 bg-gradient-to-br from-white to-emerald-50/30 border-emerald-200 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden">
            {/* Internal animated blobs */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute -top-1 -left-2 w-14 h-14 bg-emerald-100/40 rounded-full animate-bounce" style={{ animationDuration: '7s' }}></div>
              <div className="absolute -bottom-1 -right-2 w-10 h-10 bg-teal-200/50 rounded-full animate-pulse" style={{ animationDuration: '5s' }}></div>
              <div className="absolute top-6 left-8 w-3 h-3 bg-emerald-400/60 rounded-full animate-ping" style={{ animationDuration: '4s' }}></div>
              <div className="absolute bottom-10 right-6 w-1 h-1 bg-teal-400/80 rounded-full animate-ping" style={{ animationDuration: '3s' }}></div>
              <div className="absolute top-16 left-20 text-emerald-300/20 text-sm animate-spin" style={{ animationDuration: '22s' }}>+</div>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 relative z-10">
              Ensuring Your Child&apos;s Comfort
            </h2>
            <p className="text-gray-600 mb-4 relative z-10">
              Our policy at i-Care Paediatric Dentistry is to save all teeth whenever possible, but there are occasions when an extraction may be necessary. These reasons include: Extensive decay, tooth ache, abscessed teeth, severely chalky molars, and orthodontic reasons.
            </p>
            <p className="text-gray-600 relative z-10">
              We also understand that the thought of tooth removal can an overwhelming experience for you and your child. A/Prof Sobia will guide you on how to best prepare your child for the procedure. If your child struggles to cooperate in the chair sedation options are also available.
            </p>
          </Card>

          {/* Image Section */}
          <Card className="p-6 bg-gradient-to-br from-white to-teal-50/30 border-teal-200 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden lg:col-span-2">
            {/* Internal animated blobs */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute -top-3 -right-1 w-18 h-18 bg-teal-100/30 rounded-full animate-pulse" style={{ animationDuration: '8s' }}></div>
              <div className="absolute top-1/3 -left-3 w-14 h-14 bg-emerald-200/40 rounded-full animate-bounce" style={{ animationDuration: '6s' }}></div>
              <div className="absolute -bottom-2 -right-3 w-12 h-12 bg-teal-200/40 rounded-full animate-pulse" style={{ animationDuration: '5s' }}></div>
              <div className="absolute top-20 right-16 w-6 h-6 bg-teal-400/40 rounded-full animate-ping" style={{ animationDuration: '4s' }}></div>
              <div className="absolute bottom-16 left-12 w-3 h-3 bg-emerald-400/60 rounded-full animate-ping" style={{ animationDuration: '3s' }}></div>
              <div className="absolute top-40 right-1/4 text-teal-300/15 text-xl animate-spin" style={{ animationDuration: '30s' }}>+</div>
              <div className="absolute bottom-32 left-1/3 text-emerald-400/20 text-lg animate-spin" style={{ animationDuration: '20s' }}>+</div>
            </div>
            <div className="grid lg:grid-cols-2 gap-6 relative z-10">
              <div className="relative h-[300px] rounded-lg overflow-hidden">
                <Image
                  src="/extraction-2.JPG"
                  alt="Paediatric Dental Care"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Our Extraction Process
                </h2>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Thorough examination and explanation</li>
                  <li>Gentle and efficient procedure</li>
                  <li>Multiple sedation options available</li>
                  <li>Comprehensive aftercare support</li>
                </ul>
              </div>
            </div>
          </Card>


        </div>

        {/* Call to Action */}
        <div className="bg-teal-600 rounded-2xl p-8 text-center text-white relative overflow-hidden">
          {/* Internal animated blobs */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-4 -right-3 w-24 h-24 bg-white/10 rounded-full animate-pulse" style={{ animationDuration: '6s' }}></div>
            <div className="absolute top-1/2 -left-3 w-18 h-18 bg-teal-400/30 rounded-full animate-bounce" style={{ animationDuration: '7s' }}></div>
            <div className="absolute -bottom-2 -right-4 w-16 h-16 bg-white/15 rounded-full animate-pulse" style={{ animationDuration: '5s' }}></div>
            <div className="absolute top-4 right-12 w-8 h-8 bg-teal-300/40 rounded-full animate-ping" style={{ animationDuration: '4s' }}></div>
            <div className="absolute bottom-6 left-8 w-4 h-4 bg-white/20 rounded-full animate-ping" style={{ animationDuration: '3s' }}></div>
            <div className="absolute top-12 left-16 w-2 h-2 bg-teal-200/60 rounded-full animate-bounce" style={{ animationDuration: '4.5s' }}></div>
            <div className="absolute top-16 right-1/3 text-white/10 text-2xl animate-spin" style={{ animationDuration: '25s' }}>+</div>
            <div className="absolute bottom-12 left-1/4 text-teal-200/20 text-lg animate-spin" style={{ animationDuration: '20s' }}>+</div>
            <div className="absolute top-1/3 right-6 text-teal-400/20 text-sm animate-spin" style={{ animationDuration: '30s' }}>+</div>
          </div>
          
          <h2 className="text-3xl font-bold mb-4 relative z-10">
            Ready to Schedule Your Child&apos;s Appointment?
          </h2>
          <p className="text-xl mb-6 text-teal-100 relative z-10">
            Contact us today to book a consultation and give your child the best dental care
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="text-teal-600 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
                <Calendar className="w-5 h-5 mr-2" />
                Book Appointment
              </Button>
            </Link>
            <Link href="tel:36230000">
              <Button size="lg" variant="secondary" className="text-teal-600 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
                <Phone className="w-5 h-5 mr-2" />
                Call: 36230000
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 