'use client';

import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, CheckCircle, Calendar, Clock, Shield, Users, Smile, Sparkles } from 'lucide-react';
import Link from 'next/link';


const specialCareApproaches = [
  {
    icon: Heart,
    title: 'Compassionate Care',
    description: 'Patient, understanding approach tailored to each child\'s unique needs and comfort level.',
    color: 'text-teal-600',
    bgColor: 'bg-teal-100'
  },
  {
    icon: Users,
    title: 'Family-Centered',
    description: 'Working closely with families to create the best possible dental experience for their child.',
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-100'
  },
  {
    icon: Smile,
    title: 'Adaptive Techniques',
    description: 'Modified treatment approaches and sensory accommodations for children with special needs.',
    color: 'text-teal-600',
    bgColor: 'bg-teal-100'
  }
];



export default function SpecialNeedsPage() {
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

      {/* Hero Section with Full-Width Background Image */}
      <div className="relative min-h-[70vh] lg:min-h-[80vh] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/sepcial-needs-card.JPG"
            alt="Special Needs Dental Care"
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
              <Heart className="w-8 h-8 text-teal-400" />
              <span className="text-teal-400 font-semibold text-lg">Special Needs Care</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Inclusive Dental Care for Every Child
            </h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Special Kids, Special Smiles: Special Care for Every Child's Unique Needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-white">
                  Schedule Consultation
                </Button>
              </Link>
              <Link href="tel:36230000">
                <Button size="lg" variant="outline" className="border-white bg-white text-teal-600">
                  Call Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

              <div className="container mx-auto px-4 py-16 relative z-10">

        {/* Services Overview */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our Specailised Approach
          </h2>
          
          {/* Mobile Horizontal Scroll */}
          <div className="lg:hidden mb-8">
            <div 
              ref={scrollContainerRef}
              className="flex overflow-x-auto gap-0 pb-4 snap-x snap-mandatory scrollbar-hide px-4"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {specialCareApproaches.map((approach, index) => (
                <div key={index} className="flex-shrink-0 w-full snap-center px-2">
                  <Card className="text-center hover:shadow-lg transition-shadow h-full bg-gradient-to-br from-white to-teal-50/30 border-teal-200 relative overflow-hidden">
                    {/* Internal animated blobs */}
                    <div className="absolute inset-0 pointer-events-none">
                      <div className="absolute -top-2 -right-2 w-12 h-12 bg-teal-100/40 rounded-full animate-pulse" style={{ animationDuration: `${5 + index}s` }}></div>
                      <div className="absolute -bottom-1 -left-1 w-8 h-8 bg-emerald-200/30 rounded-full animate-bounce" style={{ animationDuration: `${4 + index * 0.5}s` }}></div>
                      <div className="absolute top-4 right-8 w-2 h-2 bg-teal-400/60 rounded-full animate-ping" style={{ animationDuration: `${3 + index * 0.3}s` }}></div>
                    </div>
                    <CardHeader className="relative z-10">
                      <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <approach.icon className="w-8 h-8 text-teal-600" />
                      </div>
                      <CardTitle className="text-lg">{approach.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="relative z-10">
                      <p className="text-gray-600 text-sm">
                        {approach.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>

            {/* Dots Navigation */}
            <div className="flex justify-center gap-2 mt-6">
              {specialCareApproaches.map((_, index) => (
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
                  <Heart className="w-8 h-8 text-teal-600" />
                </div>
                <CardTitle className="text-lg">Personalized Care</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-gray-600 text-sm">
                  Customised treatment plans that consider each child&apos;s unique needs and challenges.
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
                <CardTitle className="text-lg">Safe Environment</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-gray-600 text-sm">
                  Sensory-friendly spaces and accommodating facilities for comfort and safety.
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
                <CardTitle className="text-lg">Expert Team</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-gray-600 text-sm">
                  Specially trained staff experienced in working with children with special needs.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Detailed Information */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Our Special Needs Services
            </h2>
            <div className="space-y-6">
              <p className="text-gray-600 leading-relaxed">
                We welcome all patients with special needs including children with autism, Down's syndrome, visual or hearing impairment and many other conditions that make standard dental procedures difficult.
              </p>
              
              <p className="text-gray-600 leading-relaxed">
                Children with special needs are almost twice as likely to have unmet dental problems compared to children without special needs.
              </p>
              
              <p className="text-gray-600 leading-relaxed">
                We understand that maintaining the oral Health of children with special needs can be challenging. We also recognise that chalky teeth problems are more common in children who have experienced medical issues during childhood.
              </p>
              
              <div className="bg-teal-50 border-l-4 border-teal-400 p-4 rounded-r-lg">
                <p className="text-teal-800 leading-relaxed font-medium">
                  A/Prof Sobia has had extensive experience in the management and treatment of patients with special needs.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <Card className="bg-gradient-to-br from-white to-teal-50/30 border-teal-200 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden">
              {/* Internal animated blobs */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-2 -right-2 w-16 h-16 bg-teal-100/40 rounded-full animate-pulse" style={{ animationDuration: '6s' }}></div>
                <div className="absolute -bottom-2 -left-2 w-12 h-12 bg-emerald-200/30 rounded-full animate-bounce" style={{ animationDuration: '5s' }}></div>
                <div className="absolute top-4 right-8 w-4 h-4 bg-teal-400/60 rounded-full animate-ping" style={{ animationDuration: '4s' }}></div>
                <div className="absolute bottom-8 left-6 w-2 h-2 bg-emerald-400/70 rounded-full animate-ping" style={{ animationDuration: '3s' }}></div>
                <div className="absolute top-12 right-16 text-teal-300/20 text-lg animate-spin" style={{ animationDuration: '25s' }}>+</div>
              </div>
              <CardHeader className="relative z-10">
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-teal-600" />
                  Our Accommodations
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 relative z-10">
                <div>
                  <h4 className="font-semibold text-gray-900">Sensory Integration</h4>
                  <p className="text-gray-600 text-sm">Calming environment with minimal sensory triggers</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Flexible Scheduling</h4>
                  <p className="text-gray-600 text-sm">Extended appointment times and quiet periods available</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Communication Tools</h4>
                  <p className="text-gray-600 text-sm">Visual aids and alternative communication methods</p>
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
            Why Choose Our Special Needs Care
          </h2>
          <div className="grid md:grid-cols-3 gap-6 relative z-10">
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Understanding Team</h3>
              <p className="text-gray-600">
                Compassionate staff trained in special needs care.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Adapted Care</h3>
              <p className="text-gray-600">
                Customised treatment approaches for each child.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Inclusive Environment</h3>
              <p className="text-gray-600">
                Welcoming space designed for all abilities.
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
            Specailised Care for Your Child
          </h2>
          <p className="text-xl mb-6 text-teal-100 relative z-10">
            Let us create a personalized care plan for your child&apos;s needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="text-teal-600 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Consultation
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