'use client';

import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Shield, CheckCircle, Calendar, Clock, Camera, HardHat } from 'lucide-react';
import Link from 'next/link';

const preventiveServices = [
  {
    icon: CheckCircle,
    title: 'Regular Dental Check Ups',
    description: 'Comprehensive examinations every six months to monitor your child\'s oral health development and detect issues early.',
    color: 'text-teal-600',
    bgColor: 'bg-teal-100'
  },
  {
    icon: Shield,
    title: 'Fissure Sealants',
    description: 'Protective coatings applied to the grooves of back teeth to prevent decay in hard-to-reach areas.',
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-100'
  },
  {
    icon: Camera,
    title: 'Dental X-Rays',
    description: 'Digital imaging to detect problems not visible during regular examination, ensuring comprehensive diagnosis.',
    color: 'text-teal-600',
    bgColor: 'bg-teal-100'
  },
  {
    icon: HardHat,
    title: 'Mouth Guards',
    description: 'Custom-fitted protective mouth guards for sports and activities to prevent dental injuries.',
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-100'
  }
];

export default function PreventiveCare() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollToSlide = (index: number) => {
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.clientWidth;
      scrollContainerRef.current.scrollTo({
        left: index * cardWidth,
        behavior: 'smooth'
      });
      setCurrentSlide(index);
    }
  };

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.clientWidth;
      const scrollLeft = scrollContainerRef.current.scrollLeft;
      const newIndex = Math.round(scrollLeft / cardWidth);
      setCurrentSlide(newIndex);
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

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

      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-8 h-8 text-teal-600" />
              <span className="text-teal-600 font-semibold">Preventive Care</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Building Lifelong Smiles: Our Preventive Care Approach
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              A lifetime of good dental health is set up from an early age. That&apos;s why at i-Care Paediatric 
              Dentistry we focus on prevention and early intervention to keep your child&apos;s teeth healthy and strong.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-teal-600 hover:bg-teal-700 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300">
                  Schedule Checkup
                </Button>
              </Link>
              <Link href="tel:36230000">
                <Button size="lg" variant="outline" className="border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white transition-all duration-300">
                  Call Now
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/sample5.JPG"
                alt="Child receiving preventive dental care"
                width={600}
                height={600}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>

        {/* Services Overview */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our Preventive Services
          </h2>
          
          {/* Mobile Horizontal Scroll */}
          <div className="lg:hidden mb-8">
            <div 
              ref={scrollContainerRef}
              className="flex overflow-x-auto gap-0 pb-4 snap-x snap-mandatory scrollbar-hide px-4"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {preventiveServices.map((service, index) => (
                <div key={index} className="flex-shrink-0 w-full snap-center px-2">
                  <Card className="text-center hover:shadow-lg transition-shadow h-full bg-gradient-to-br from-white to-teal-50/30 border-teal-200 relative overflow-hidden">
                    {/* Internal animated blobs */}
                    <div className="absolute inset-0 pointer-events-none">
                      <div className="absolute -top-2 -right-2 w-12 h-12 bg-teal-100/40 rounded-full animate-pulse" style={{ animationDuration: `${5 + index}s` }}></div>
                      <div className="absolute -bottom-1 -left-1 w-8 h-8 bg-emerald-200/30 rounded-full animate-bounce" style={{ animationDuration: `${4 + index * 0.5}s` }}></div>
                      <div className="absolute top-4 right-8 w-2 h-2 bg-teal-400/60 rounded-full animate-ping" style={{ animationDuration: `${3 + index * 0.3}s` }}></div>
                    </div>
                    <CardHeader className="relative z-10">
                      <div className={`w-16 h-16 ${service.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                        <service.icon className={`w-8 h-8 ${service.color}`} />
                      </div>
                      <CardTitle className="text-lg">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="relative z-10">
                      <p className="text-gray-600 text-sm">
                        {service.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>

            {/* Dots Navigation */}
            <div className="flex justify-center gap-2 mt-6">
              {preventiveServices.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentSlide === index 
                      ? 'bg-teal-600 scale-125' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Desktop Grid */}
          <div className="hidden lg:grid lg:grid-cols-4 gap-6">
            {preventiveServices.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow bg-gradient-to-br from-white to-teal-50/30 border-teal-200 relative overflow-hidden">
                {/* Internal animated blobs */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute -top-2 -right-2 w-12 h-12 bg-teal-100/40 rounded-full animate-pulse" style={{ animationDuration: `${5 + index}s` }}></div>
                  <div className="absolute -bottom-1 -left-1 w-8 h-8 bg-emerald-200/30 rounded-full animate-bounce" style={{ animationDuration: `${4 + index * 0.5}s` }}></div>
                  <div className="absolute top-4 right-8 w-2 h-2 bg-teal-400/60 rounded-full animate-ping" style={{ animationDuration: `${3 + index * 0.3}s` }}></div>
                </div>
                <CardHeader className="relative z-10">
                  <div className={`w-16 h-16 ${service.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <service.icon className={`w-8 h-8 ${service.color}`} />
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <p className="text-gray-600 text-sm">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Detailed Information */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              What to Expect During Your Visit
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-teal-600 font-bold text-sm">1</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Initial Assessment</h3>
                  <p className="text-gray-600">
                    We&apos;ll review your child&apos;s medical history and discuss any concerns you may have.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-teal-600 font-bold text-sm">2</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Comprehensive Examination</h3>
                  <p className="text-gray-600">
                    Thorough examination of teeth, gums, and oral tissues to identify any issues early.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-teal-600 font-bold text-sm">3</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Professional Cleaning</h3>
                  <p className="text-gray-600">
                    Gentle cleaning to remove plaque and polish teeth for a bright, healthy smile.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-teal-600 font-bold text-sm">4</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Preventive Treatments</h3>
                  <p className="text-gray-600">
                    Application of fluoride treatments or sealants as needed to protect your child&apos;s teeth.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-teal-600 font-bold text-sm">5</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Education & Planning</h3>
                  <p className="text-gray-600">
                    Oral hygiene instructions and scheduling your next preventive appointment.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <Card className="bg-gradient-to-br from-white to-teal-50/30 border-teal-200 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden">
              {/* Internal animated blobs */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-2 -right-2 w-12 h-12 bg-teal-100/40 rounded-full animate-pulse" style={{ animationDuration: '6s' }}></div>
                <div className="absolute -bottom-1 -left-1 w-8 h-8 bg-emerald-200/30 rounded-full animate-bounce" style={{ animationDuration: '5s' }}></div>
                <div className="absolute top-4 right-8 w-2 h-2 bg-teal-400/60 rounded-full animate-ping" style={{ animationDuration: '4s' }}></div>
                <div className="absolute bottom-8 right-4 text-teal-300/20 text-sm animate-spin" style={{ animationDuration: '25s' }}>+</div>
              </div>
              <CardHeader className="relative z-10">
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-teal-600" />
                  Recommended Schedule
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 relative z-10">
                <div>
                  <h4 className="font-semibold text-gray-900">Ages 1-3</h4>
                  <p className="text-gray-600 text-sm">Every 6 months starting with first tooth</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Ages 4-12</h4>
                  <p className="text-gray-600 text-sm">Every 6 months for routine care</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">High-Risk Patients</h4>
                  <p className="text-gray-600 text-sm">Every 3-4 months as recommended</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-teal-600 rounded-2xl p-8 lg:p-12 text-center relative overflow-hidden">
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
            <div className="absolute top-1/3 right-6 text-white/10 text-sm animate-spin" style={{ animationDuration: '30s' }}>+</div>
          </div>
          
          <h2 className="text-3xl font-bold text-white mb-4 relative z-10">
            Start Your Child&apos;s Preventive Care Today
          </h2>
          <p className="text-teal-100 text-lg mb-8 relative z-10">
            Early prevention is the key to a lifetime of healthy smiles. 
            Schedule your child&apos;s first checkup or routine cleaning.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="text-teal-600 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
                Schedule Appointment
              </Button>
            </Link>
            <Link href="tel:36230000">
              <Button size="lg" variant="secondary" className="text-teal-600 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
                Call 36230000
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}