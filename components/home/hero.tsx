import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Calendar, Phone, Star } from 'lucide-react';
import { DentalAnimation } from './dental-animation';

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-sm text-gray-600">Trusted by 5000+ families</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Gentle Dental Care for 
                <span className="text-blue-600"> Happy Smiles</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                A/Prof Sobia Zafar provides specialist paediatric dental care with a gentle, 
                child-centred approach that helps children feel comfortable and confident 
                about their dental health.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button size="lg" className="text-lg px-8 py-6">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Appointment
                </Button>
              </Link>
              <Link href="tel:+1234567890">
                <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-8 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">20+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">5000+</div>
                <div className="text-sm text-gray-600">Happy Patients</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">24/7</div>
                <div className="text-sm text-gray-600">Emergency Care</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-square relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full opacity-20 scale-110"></div>
              <div className="relative z-10 aspect-square rounded-2xl overflow-hidden">
                <DentalAnimation />
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500 rounded-full opacity-10 animate-pulse"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-purple-500 rounded-full opacity-10 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}