import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Calendar, Phone, Star, ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-teal-100 via-teal-50 to-emerald-100 overflow-hidden">
      {/* Animated Geometric Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large animated background circles */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-teal-200/30 rounded-full translate-x-32 animate-pulse" style={{ animationDuration: '8s' }}></div>
        <div className="absolute bottom-0 right-20 w-80 h-80 bg-emerald-200/25 rounded-full translate-y-32 animate-bounce" style={{ animationDuration: '12s' }}></div>
        <div className="absolute top-1/2 right-10 w-64 h-64 bg-teal-300/20 rounded-full animate-pulse" style={{ animationDuration: '6s' }}></div>
        
        {/* Medium floating blobs */}
        <div className="absolute top-16 left-8 w-48 h-48 bg-emerald-100/40 rounded-full animate-bounce" style={{ animationDuration: '9s', animationDelay: '1s' }}></div>
        <div className="absolute bottom-16 left-1/4 w-32 h-32 bg-teal-200/50 rounded-full animate-pulse" style={{ animationDuration: '7s' }}></div>
        
        {/* Small animated decorative elements */}
        <div className="absolute top-32 right-32 w-4 h-4 bg-teal-400 rounded-full animate-ping" style={{ animationDuration: '3s' }}></div>
        <div className="absolute top-64 right-64 w-3 h-3 bg-emerald-400 rounded-full animate-bounce" style={{ animationDuration: '2s', animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-40 right-40 w-5 h-5 bg-teal-500 rounded-full animate-pulse" style={{ animationDuration: '4s' }}></div>
        <div className="absolute bottom-72 right-80 w-2 h-2 bg-emerald-500 rounded-full animate-ping" style={{ animationDuration: '2.5s' }}></div>
        <div className="absolute top-1/3 left-16 w-3 h-3 bg-teal-600 rounded-full animate-bounce" style={{ animationDuration: '3.5s' }}></div>
        
        {/* Rotating plus signs */}
        <div className="absolute top-40 right-48 text-teal-400 text-2xl font-light animate-spin" style={{ animationDuration: '20s' }}>+</div>
        <div className="absolute bottom-60 right-56 text-emerald-400 text-xl font-light animate-spin" style={{ animationDuration: '15s' }}>+</div>
        <div className="absolute top-1/4 left-32 text-teal-300 text-lg font-light animate-spin" style={{ animationDuration: '25s' }}>+</div>
      </div>
      
      <div className="container mx-auto px-4 py-16 lg:py-20 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          {/* Content Section */}
          <div className="space-y-8 lg:pr-8">
            {/* Subtitle */}
            <div className="space-y-4">
              <p className="text-teal-600 font-medium text-lg tracking-wide">
                Brisbane Specialist Paediatric Dentist
              </p>
              
              {/* Main Heading */}
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-800 leading-tight">
                Associate Professor (Dr) Sobia Zafar
              </h1>
            </div>
              
            {/* Description */}
            <div className="space-y-4 max-w-lg">
              <h2 className="text-2xl font-semibold text-teal-700 leading-relaxed">
                Creating Healthy And Happy Smiles
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Smiles, Care, and Confidence: Where Children's Dental Health Begins
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Link href="/contact">
                <Button 
                  size="lg" 
                  className="bg-teal-100 text-teal-700 hover:bg-teal-200 text-lg px-8 py-6 rounded-full border border-teal-200 transition-all duration-300"
                >
                  Refer to A/Prof Sobia
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-600">20+</div>
                <div className="text-sm text-gray-600 font-medium">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600">5000+</div>
                <div className="text-sm text-gray-600 font-medium">Happy Families</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-700">PhD</div>
                <div className="text-sm text-gray-600 font-medium">Qualified</div>
              </div>
            </div>
          </div>

          {/* Professional Photo Section */}
          <div className="relative lg:h-full flex items-center justify-center">
            <div className="relative w-full max-w-lg">
              {/* Main Professional Photo */}
              <div className="relative z-10">
                <Image
                  src="/sample7.jpg"
                  alt="A/Prof Sobia Zafar - Paediatric Dentist"
                  width={500}
                  height={600}
                  className="w-full h-auto object-cover rounded-2xl shadow-2xl"
                  priority
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-teal-900/20 to-transparent rounded-2xl"></div>
              </div>
              
              {/* Background decorative circle */}
              <div className="absolute -top-8 -left-8 w-full h-full bg-gradient-to-br from-teal-200/40 to-emerald-200/40 rounded-2xl -z-10"></div>
            </div>
            
            {/* Floating contact info card */}
            <div className="absolute top-8 right-8 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg">
              <div className="text-sm font-medium text-gray-800 mb-2">Quick Contact</div>
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Phone className="w-4 h-4 text-teal-600" />
                  <span>36230000</span>
                </div>
                <div className="text-xs text-gray-500">Mon - Fri | 9AM - 5PM</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Dual Curved Bottom Border - Inverted */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg className="relative block w-full h-20 md:h-24 lg:h-28" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          {/* Darker background wave - offset to be visible */}
          <path d="M0,0L40,12C80,24,160,48,240,60C320,72,400,72,480,66C560,60,640,48,720,54C800,60,880,84,960,90C1040,96,1120,84,1160,78L1200,72V120H1160C1120,120,1040,120,960,120C880,120,800,120,720,120C640,120,560,120,480,120C400,120,320,120,240,120C160,120,80,120,40,120H0V0Z" className="fill-teal-600"></path>
          {/* Main white wave */}
          <path d="M0,0L48.9,8.8C97.8,17.5,195.6,35,293.4,42.2C391.2,49.3,488.8,45.8,586.7,37.5C684.4,29.2,782.2,16,879.8,18.7C977.6,21.3,1075.2,39.8,1123.1,48.4L1200,57.3V120H1151.1C1102.2,120,1004.4,120,906.7,120C808.9,120,711.1,120,613.3,120C515.6,120,417.8,120,320,120C222.2,120,124.4,120,75.6,120H0V0Z" className="fill-white"></path>
        </svg>
      </div>
    </section>
  );
}