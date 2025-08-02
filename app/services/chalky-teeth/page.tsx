'use client';

import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, CheckCircle, Calendar, Clock, Shield, Sparkles } from 'lucide-react';
import Link from 'next/link';
const treatmentApproaches = [
  {
    icon: Star,
    title: 'Early Diagnosis',
    description: 'Prompt identification of hypomineralization in first permanent molars and incisors.',
    color: 'text-teal-600',
    bgColor: 'bg-teal-100'
  },
  {
    icon: Shield,
    title: 'Enamel Hypomineralisation Care',
    description: 'Gentle care for weak enamel in kids molars and incisors.',
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-100'
  },
  {
    icon: Sparkles,
    title: 'Defending Childrens Smiles',
    description: 'Early care for baby molars helps protect future permanent teeth.',
    color: 'text-teal-700',
    bgColor: 'bg-teal-50'
  }
];

export default function ChalkyTeethPage() {
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
            src="/chalky-teeth-card.JPG"
            alt="Dental Care for Chalky Teeth"
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
              <Star className="w-8 h-8 text-teal-400" />
              <span className="text-teal-400 font-semibold text-lg">Chalky Teeth</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Expert Care for Chalky Teeth
            </h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Early diagnosis and specailised treatment for hypomineralized teeth,
              ensuring the best outcomes for your child&apos;s dental health.
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

        {/* Services Overview */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our Treatment Approach
          </h2>
          
          {/* Mobile Horizontal Scroll */}
          <div className="lg:hidden mb-8">
            <div 
              ref={scrollContainerRef}
              className="flex overflow-x-auto gap-0 pb-4 snap-x snap-mandatory scrollbar-hide px-4"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {treatmentApproaches.map((approach, index) => (
                <div key={index} className="flex-shrink-0 w-full snap-center px-2">
                  <Card className="text-center hover:shadow-lg transition-shadow h-full bg-gradient-to-br from-white to-teal-50/30 border-teal-200 relative overflow-hidden">
                    {/* Internal animated blobs */}
                    <div className="absolute inset-0 pointer-events-none">
                      <div className="absolute -top-2 -right-2 w-12 h-12 bg-teal-100/40 rounded-full animate-pulse" style={{ animationDuration: `${5 + index}s` }}></div>
                      <div className="absolute -bottom-1 -left-1 w-8 h-8 bg-emerald-200/30 rounded-full animate-bounce" style={{ animationDuration: `${4 + index * 0.5}s` }}></div>
                      <div className="absolute top-4 right-8 w-2 h-2 bg-teal-400/60 rounded-full animate-ping" style={{ animationDuration: `${3 + index * 0.3}s` }}></div>
                    </div>
                    <CardHeader className="relative z-10">
                      <div className={`w-16 h-16 ${approach.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                        <approach.icon className={`w-8 h-8 ${approach.color}`} />
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
              {treatmentApproaches.map((_, index) => (
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
            {treatmentApproaches.map((approach, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow bg-gradient-to-br from-white to-teal-50/30 border-teal-200 relative overflow-hidden">
                {/* Internal animated blobs */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute -top-2 -right-2 w-12 h-12 bg-teal-100/40 rounded-full animate-pulse" style={{ animationDuration: `${5 + index}s` }}></div>
                  <div className="absolute -bottom-1 -left-1 w-8 h-8 bg-emerald-200/30 rounded-full animate-bounce" style={{ animationDuration: `${4 + index * 0.5}s` }}></div>
                  <div className="absolute top-4 right-8 w-2 h-2 bg-teal-400/60 rounded-full animate-ping" style={{ animationDuration: `${3 + index * 0.3}s` }}></div>
                </div>
                <CardHeader className="relative z-10">
                  <div className={`w-16 h-16 ${approach.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <approach.icon className={`w-8 h-8 ${approach.color}`} />
                  </div>
                  <CardTitle className="text-lg">{approach.title}</CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <p className="text-gray-600 text-sm">
                    {approach.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Understanding Chalky Teeth - Full Width Card */}
        <div className="mb-16">
          <Card className="bg-gradient-to-br from-white to-gray-50/30 border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden">
            {/* Internal animated blobs */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute -top-4 -right-3 w-20 h-20 bg-gray-100/25 rounded-full animate-pulse" style={{ animationDuration: '8s' }}></div>
              <div className="absolute top-1/3 -left-2 w-16 h-16 bg-teal-200/20 rounded-full animate-bounce" style={{ animationDuration: '6s' }}></div>
              <div className="absolute -bottom-3 -right-2 w-12 h-12 bg-gray-200/30 rounded-full animate-pulse" style={{ animationDuration: '5s' }}></div>
              <div className="absolute top-20 right-10 w-4 h-4 bg-teal-400/30 rounded-full animate-ping" style={{ animationDuration: '4s' }}></div>
              <div className="absolute bottom-20 left-8 w-2 h-2 bg-gray-400/40 rounded-full animate-ping" style={{ animationDuration: '3s' }}></div>
              <div className="absolute top-40 right-1/4 text-teal-300/15 text-lg animate-spin" style={{ animationDuration: '30s' }}>+</div>
              <div className="absolute bottom-40 left-1/3 text-gray-400/20 text-sm animate-spin" style={{ animationDuration: '20s' }}>+</div>
            </div>
            
            <CardHeader className="relative z-10">
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-teal-600" />
                Understanding Chalky Teeth
              </CardTitle>
            </CardHeader>
            
            <CardContent className="relative z-10">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-teal-600 font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">What Are Chalky Teeth?</h3>
                    <p className="text-gray-600 text-sm">
                      A condition where teeth haven&apos;t hardened properly during development, making them more susceptible to decay.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-teal-600 font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Common Signs</h3>
                    <p className="text-gray-600 text-sm">
                      White, cream, or brown patches on teeth, increased sensitivity, and prone to breakdown.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-teal-600 font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Treatment Options</h3>
                    <p className="text-gray-600 text-sm">
                      From preventive measures to restorative treatments, tailored to your child&apos;s specific needs.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-teal-600 font-bold text-sm">4</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Long-term Care</h3>
                    <p className="text-gray-600 text-sm">
                      Ongoing monitoring and maintenance to ensure the best possible outcomes.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Dynamic Layout - Horizontal and Vertical Blocks */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Horizontal Block - Compact with 2 smaller images */}
          <div className="lg:col-span-2">
            <Card className="bg-gradient-to-br from-white to-teal-50/30 border-teal-200 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden h-full">
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
              
              <CardHeader className="relative z-10">
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-teal-600" />
                  Enamel Hypomineralisation Care for a Lifetime of Healthy Teeth
                </CardTitle>
              </CardHeader>
              
              <CardContent className="relative z-10">
                <div className="space-y-4">
                  <p className="text-gray-600 leading-relaxed text-sm">
                    It is a relatively common condition that varies in clinical severity and can result in early loss of the first permanent molars. Teeth most commonly affected are the first permanent molars (six-year-old molars) and the permanent incisors. This condition is therefore referred to as "Molar Incisor Hypomineralisation".
                  </p>
                  
                  {/* Compact Images Section */}
                  <div className="grid grid-cols-2 gap-4 my-4">
                    <div className="relative rounded-lg overflow-hidden shadow-md">
                      <Image
                        src="/chalky1.jpg"
                        alt="Chalky teeth example 1 - Enamel hypomineralisation"
                        width={300}
                        height={200}
                        className="object-cover w-full h-64"
                      />
                    </div>
                    <div className="relative rounded-lg overflow-hidden shadow-md">
                      <Image
                        src="/chalky2.jpg"
                        alt="Chalky teeth example 2 - Molar incisor hypomineralisation"
                        width={300}
                        height={200}
                        className="object-cover w-full h-64"
                      />
                    </div>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed text-sm">
                    Although the cause is unclear Enamel Hypomineralisation has been seen in children born preterm and in those with poor general health in the first 3 years. In addition to a number of systemic conditions, low birth weight, toxins from breast feeding and common childhood illnesses such as upper respiratory tract infections, recurrent ear infections, asthma, tonsillitis in the first 3 years have all been linked to Enamel Hypomineralisation.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Vertical Block - Tall with single image */}
          <div className="lg:col-span-1">
            <Card className="bg-gradient-to-br from-white to-emerald-50/30 border-emerald-200 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden h-full">
              {/* Internal animated blobs */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-3 -right-1 w-18 h-18 bg-emerald-100/30 rounded-full animate-pulse" style={{ animationDuration: '7s' }}></div>
                <div className="absolute top-1/2 -left-3 w-14 h-14 bg-teal-200/40 rounded-full animate-bounce" style={{ animationDuration: '6s' }}></div>
                <div className="absolute -bottom-2 -right-3 w-10 h-10 bg-emerald-200/50 rounded-full animate-pulse" style={{ animationDuration: '5s' }}></div>
                <div className="absolute top-16 right-8 w-6 h-6 bg-emerald-400/40 rounded-full animate-ping" style={{ animationDuration: '4s' }}></div>
                <div className="absolute bottom-16 left-6 w-3 h-3 bg-teal-400/60 rounded-full animate-ping" style={{ animationDuration: '3s' }}></div>
                <div className="absolute top-32 right-1/3 text-emerald-300/15 text-lg animate-spin" style={{ animationDuration: '28s' }}>+</div>
                <div className="absolute bottom-32 left-1/4 text-teal-400/20 text-sm animate-spin" style={{ animationDuration: '22s' }}>+</div>
              </div>
              
              <CardHeader className="relative z-10">
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-emerald-600" />
                  Defending Children's Smiles
                </CardTitle>
              </CardHeader>
              
              <CardContent className="relative z-10">
                <div className="space-y-4">
                  <p className="text-gray-600 leading-relaxed text-sm">
                    Early diagnosis and management are important to ensure the best long-term outcome. If children appear to have this condition on their baby molars (usually detected between 2-5 years of age) there is an increased likelihood of Enamel Hypomineralisation also affecting the first permanent molars and permanent incisor teeth.
                  </p>
                  
                  {/* Vertical Image Section */}
                  <div className="my-4">
                    <div className="relative rounded-lg overflow-hidden shadow-md">
                      <Image
                        src="/chalky3.jpg"
                        alt="Chalky teeth treatment - Early intervention for enamel hypomineralisation"
                        width={300}
                        height={250}
                        className="object-cover w-full h-64"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <p className="text-gray-600 leading-relaxed text-sm">
                      Treatment depends on the severity and the teeth that are affected.
                    </p>
                    <p className="text-gray-600 leading-relaxed font-medium text-sm">
                      Permanent molars affected by Enamel Hypomineralisation require early intervention.
                    </p>
                  </div>
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
            Why Choose Our Chalky Teeth Treatment
          </h2>
          <div className="grid md:grid-cols-3 gap-6 relative z-10">
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Early Detection</h3>
              <p className="text-gray-600">
                Identifying and treating chalky teeth before complications arise.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Specailised Care</h3>
              <p className="text-gray-600">
                Expert treatment tailored specifically for hypomineralized teeth.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-teal-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-teal-700" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Long-term Success</h3>
              <p className="text-gray-600">
                Proven treatments that protect and preserve affected teeth.
              </p>
            </div>
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
            <div className="absolute top-1/3 right-6 text-white/15 text-sm animate-spin" style={{ animationDuration: '30s' }}>+</div>
          </div>
          
          <h2 className="text-3xl font-bold text-white mb-4 relative z-10">
            Early Detection Makes All the Difference
          </h2>
          <p className="text-teal-100 text-lg mb-8 relative z-10">
            If you suspect your child may have chalky teeth, don&apos;t wait. 
            Early intervention can prevent serious complications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="text-teal-600 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
                Schedule Consultation
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