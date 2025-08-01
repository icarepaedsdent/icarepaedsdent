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
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-white">
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
              Early diagnosis and specialized treatment for hypomineralized teeth,
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

      <div className="container mx-auto px-4 py-16">

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
                  <Card className="text-center hover:shadow-lg transition-shadow h-full">
                    <CardHeader>
                      <div className={`w-16 h-16 ${approach.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                        <approach.icon className={`w-8 h-8 ${approach.color}`} />
                      </div>
                      <CardTitle className="text-lg">{approach.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
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
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className={`w-16 h-16 ${approach.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <approach.icon className={`w-8 h-8 ${approach.color}`} />
                  </div>
                  <CardTitle className="text-lg">{approach.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">
                    {approach.description}
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
              Understanding Chalky Teeth
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-teal-600 font-bold text-sm">1</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">What Are Chalky Teeth?</h3>
                  <p className="text-gray-600">
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
                  <p className="text-gray-600">
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
                  <p className="text-gray-600">
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
                  <p className="text-gray-600">
                    Ongoing monitoring and maintenance to ensure the best possible outcomes.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-teal-600" />
                  Treatment Recommendations
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900">Regular Monitoring</h4>
                  <p className="text-gray-600 text-sm">Frequent check-ups to track tooth development</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Preventive Care</h4>
                  <p className="text-gray-600 text-sm">Special cleaning and fluoride treatments</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Restorative Options</h4>
                  <p className="text-gray-600 text-sm">Fillings, crowns, or other treatments as needed</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-emerald-600" />
                  What Parents Say
                </CardTitle>
              </CardHeader>
              <CardContent>
                <blockquote className="text-gray-600 italic">
                  &quot;The early diagnosis and treatment of my son&apos;s chalky teeth prevented serious 
                  complications. The team&apos;s expertise made all the difference.&quot;
                </blockquote>
                <cite className="text-gray-500 text-sm mt-2 block">- Jennifer K., Parent</cite>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Why Choose Our Chalky Teeth Treatment
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
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
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Specialized Care</h3>
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
        <div className="bg-teal-600 rounded-2xl p-8 lg:p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Early Detection Makes All the Difference
          </h2>
          <p className="text-teal-100 text-lg mb-8">
            If you suspect your child may have chalky teeth, don&apos;t wait. 
            Early intervention can prevent serious complications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="text-teal-600">
                Schedule Consultation
              </Button>
            </Link>
            <Link href="tel:36230000">
              <Button size="lg" variant="secondary" className="text-teal-600">
                Call 36230000
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 