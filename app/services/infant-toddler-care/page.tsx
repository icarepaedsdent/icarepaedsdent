'use client';

import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Baby, CheckCircle, Calendar, Clock, Shield, Sparkles } from 'lucide-react';
import Link from 'next/link';




const infantCareServices = [
  {
    icon: Baby,
    title: 'First Dental Visit',
    description: 'Gentle introduction to dental care for babies and toddlers in a comfortable environment.',
    color: 'text-teal-600',
    bgColor: 'bg-teal-100'
  },
  {
    icon: Shield,
    title: 'Early Prevention',
    description: 'Fluoride treatments and dental education to prevent decay from the very beginning.',
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-100'
  },
  {
    icon: Baby,
    title: 'Behavior Management',
    description: 'Specialised techniques to help very young children feel comfortable during treatment.',
    color: 'text-teal-600',
    bgColor: 'bg-teal-100'
  }
];

export default function InfantToddlerCarePage() {
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
              <Baby className="w-8 h-8 text-teal-600" />
              <span className="text-teal-600 font-semibold">Infant & Toddler Care</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Dental Home: Where Healthy Smiles Begin
            </h1>
            <p className="text-xl text-gray-600 mb-8">
            Establishing a “DENTAL HOME” from the start ensures continuity of care and provides a trusted point of contact in case of dental emergencies as your child begins to grow, walk, and explore.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-teal-600 hover:bg-teal-700 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300">
                  Book First Visit
                </Button>
              </Link>
              <Link href="tel:36230000">
                <Button size="lg" variant="outline" className="border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white transition-all duration-300">
                  Call Us
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/sample4.jpg"
                alt="Infant Dental Care"
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
            Our Early Care Services
          </h2>
          
          {/* Mobile Horizontal Scroll */}
          <div className="lg:hidden mb-8">
            <div 
              ref={scrollContainerRef}
              className="flex overflow-x-auto gap-0 pb-4 snap-x snap-mandatory scrollbar-hide px-4"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {infantCareServices.map((service, index) => (
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
              {infantCareServices.map((_, index) => (
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
          <div className="hidden lg:grid lg:grid-cols-3 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow bg-gradient-to-br from-white to-teal-50/30 border-teal-200 relative overflow-hidden">
              {/* Internal animated blobs */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-2 -right-2 w-12 h-12 bg-teal-100/40 rounded-full animate-pulse" style={{ animationDuration: '5s' }}></div>
                <div className="absolute -bottom-1 -left-1 w-8 h-8 bg-emerald-200/30 rounded-full animate-bounce" style={{ animationDuration: '4s' }}></div>
                <div className="absolute top-4 right-8 w-2 h-2 bg-teal-400/60 rounded-full animate-ping" style={{ animationDuration: '3s' }}></div>
              </div>
              <CardHeader className="relative z-10">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Baby className="w-8 h-8 text-teal-600" />
                </div>
                <CardTitle className="text-lg">First Dental Visit</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-gray-600 text-sm">
                  Gentle introduction to dental care, typically recommended by age one or when first tooth appears.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow bg-gradient-to-br from-white to-emerald-50/30 border-emerald-200 relative overflow-hidden">
              {/* Internal animated blobs */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-1 -left-2 w-10 h-10 bg-emerald-100/40 rounded-full animate-bounce" style={{ animationDuration: '6s' }}></div>
                <div className="absolute -bottom-2 -right-1 w-6 h-6 bg-teal-200/50 rounded-full animate-pulse" style={{ animationDuration: '4s' }}></div>
                <div className="absolute top-6 left-12 w-1 h-1 bg-emerald-400/70 rounded-full animate-ping" style={{ animationDuration: '3s' }}></div>
              </div>
              <CardHeader className="relative z-10">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-emerald-600" />
                </div>
                <CardTitle className="text-lg">Preventive Care</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-gray-600 text-sm">
                  Early cavity prevention, fluoride treatments, and oral health guidance for parents.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow bg-gradient-to-br from-white to-teal-50/30 border-teal-200 relative overflow-hidden">
              {/* Internal animated blobs */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-3 -right-1 w-14 h-14 bg-teal-100/30 rounded-full animate-pulse" style={{ animationDuration: '7s' }}></div>
                <div className="absolute -bottom-1 -left-2 w-9 h-9 bg-emerald-200/40 rounded-full animate-bounce" style={{ animationDuration: '5s' }}></div>
                <div className="absolute top-8 right-6 w-3 h-3 bg-teal-400/50 rounded-full animate-ping" style={{ animationDuration: '4s' }}></div>
              </div>
              <CardHeader className="relative z-10">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-8 h-8 text-teal-600" />
                </div>
                <CardTitle className="text-lg">Growth Monitoring</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-gray-600 text-sm">
                  Tracking oral development and addressing concerns early for optimal health.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Detailed Information */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Early Dental Care Journey
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-teal-600 font-bold text-sm">1</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">First Visit Experience</h3>
                  <p className="text-gray-600">
                    Gentle examination, cleaning, and friendly introduction to dental care.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-teal-600 font-bold text-sm">2</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Preventive Measures</h3>
                  <p className="text-gray-600">
                    Early cavity prevention techniques and proper oral hygiene guidance.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-teal-600 font-bold text-sm">3</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Development Tracking</h3>
                  <p className="text-gray-600">
                    Monitoring tooth eruption and jaw development patterns.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-teal-600 font-bold text-sm">4</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Parent Education</h3>
                  <p className="text-gray-600">
                    Guidance on nutrition, pacifier use, and thumb-sucking habits.
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
                  <CheckCircle className="w-5 h-5 text-teal-600" />
                  Parent&apos;s Guide
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 relative z-10">
                <div>
                  <h4 className="font-semibold text-gray-900">Home Care Tips</h4>
                  <p className="text-gray-600 text-sm">Proper cleaning techniques for infant gums and baby teeth</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Feeding Practices</h4>
                  <p className="text-gray-600 text-sm">Guidance on bottle use and transition to cups</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Habit Management</h4>
                  <p className="text-gray-600 text-sm">Addressing pacifier use and thumb-sucking</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-white to-emerald-50/30 border-emerald-200 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden">
              {/* Internal animated blobs */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-1 -left-2 w-10 h-10 bg-emerald-100/40 rounded-full animate-bounce" style={{ animationDuration: '7s' }}></div>
                <div className="absolute -bottom-2 -right-1 w-6 h-6 bg-teal-200/50 rounded-full animate-pulse" style={{ animationDuration: '5s' }}></div>
                <div className="absolute top-6 left-12 w-1 h-1 bg-emerald-400/70 rounded-full animate-ping" style={{ animationDuration: '3s' }}></div>
                <div className="absolute bottom-12 left-4 text-emerald-300/20 text-lg animate-spin" style={{ animationDuration: '30s' }}>+</div>
              </div>
              <CardHeader className="relative z-10">
                <CardTitle className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-emerald-600" />
                  Your Child's First Dental Visit Matters!
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="space-y-4 text-gray-600">
                  <p>
                    We focus on early prevention by welcoming infants for their first oral exam around their first birthday or within six months after their first tooth erupts. This aligned with the recommendations of the Australasian Academy of Paediatric Dentists (AAPD) and International Paediatric Bodies.
                  </p>
                  <p>
                    Early visits ensures that your infant's oral health is assessed early and that any necessary precautions or treatments can be initiated promptly. This also allows us to build a positive and reassuring relationship with your child while monitoring dental development.
                  </p>
                  <p>
                    It's also important to check 2-year olds for chalky back teeth (2-year molars). No child is "too young" to visit the dentist. Don't wait until your child has a problem before you make a dental appointment.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-gradient-to-br from-white to-teal-50/20 rounded-2xl p-8 shadow-lg mb-16 border border-teal-100 relative overflow-hidden">
          {/* Internal animated blobs */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-4 -right-3 w-20 h-20 bg-teal-100/25 rounded-full animate-pulse" style={{ animationDuration: '8s' }}></div>
            <div className="absolute top-1/3 -left-2 w-16 h-16 bg-emerald-200/30 rounded-full animate-bounce" style={{ animationDuration: '6s' }}></div>
            <div className="absolute -bottom-3 -right-2 w-12 h-12 bg-teal-200/40 rounded-full animate-pulse" style={{ animationDuration: '5s' }}></div>
            <div className="absolute top-20 right-10 w-4 h-4 bg-teal-400/40 rounded-full animate-ping" style={{ animationDuration: '4s' }}></div>
            <div className="absolute bottom-20 left-8 w-2 h-2 bg-emerald-400/60 rounded-full animate-ping" style={{ animationDuration: '3s' }}></div>
            <div className="absolute top-40 right-1/4 text-teal-300/15 text-lg animate-spin" style={{ animationDuration: '30s' }}>+</div>
            <div className="absolute bottom-40 left-1/3 text-emerald-400/20 text-sm animate-spin" style={{ animationDuration: '20s' }}>+</div>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8 relative z-10">
            Why Choose Early Dental Care
          </h2>
          <div className="grid md:grid-cols-3 gap-6 relative z-10">
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Baby className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Early Prevention</h3>
              <p className="text-gray-600">
                Catch and prevent issues before they become problems.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Gentle Approach</h3>
              <p className="text-gray-600">
                Child-friendly environment and caring team.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Lifelong Health</h3>
              <p className="text-gray-600">
                Building foundation for lasting oral health.
              </p>
            </div>
          </div>
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
            <div className="absolute top-1/3 right-6 text-white/15 text-sm animate-spin" style={{ animationDuration: '30s' }}>+</div>
          </div>
          
          <h2 className="text-3xl font-bold mb-4 relative z-10">
            Start Your Child&apos;s Dental Journey
          </h2>
          <p className="text-xl mb-6 text-teal-100 relative z-10">
            Schedule your little one&apos;s first dental visit with our caring team
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="text-teal-600 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
                <Calendar className="w-5 h-5 mr-2" />
                Book First Visit
              </Button>
            </Link>
            <Link href="tel:36230000">
              <Button size="lg" variant="secondary" className="text-teal-600 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
                <Clock className="w-5 h-5 mr-2" />
                Call: 36230000
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 