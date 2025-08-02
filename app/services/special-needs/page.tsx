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
    color: 'text-red-600',
    bgColor: 'bg-red-100'
  },
  {
    icon: Users,
    title: 'Family-Centered',
    description: 'Working closely with families to create the best possible dental experience for their child.',
    color: 'text-blue-600',
    bgColor: 'bg-blue-100'
  },
  {
    icon: Smile,
    title: 'Adaptive Techniques',
    description: 'Modified treatment approaches and sensory accommodations for children with special needs.',
    color: 'text-purple-600',
    bgColor: 'bg-purple-100'
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
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Heart className="w-8 h-8 text-pink-600" />
              <span className="text-pink-600 font-semibold">Special Needs Care</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Inclusive Dental Care for Every Child
            </h1>
            <p className="text-xl text-gray-600 mb-8">
            Special Kids, Special Smiles: Special Care for Every Child’s Unique Needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button size="lg">
                  Schedule Consultation
                </Button>
              </Link>
              <Link href="tel:+1234567890">
                <Button size="lg" variant="outline">
                  Call Us
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/special1.jpg
                "
                alt="Special Needs Dental Care"
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
              {specialCareApproaches.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentSlide === index 
                      ? 'bg-pink-600 scale-125' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Desktop Grid */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-pink-600" />
                </div>
                <CardTitle className="text-lg">Personalized Care</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Customised treatment plans that consider each child&apos;s unique needs and challenges.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-purple-600" />
                </div>
                <CardTitle className="text-lg">Safe Environment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Sensory-friendly spaces and accommodating facilities for comfort and safety.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-lg">Expert Team</CardTitle>
              </CardHeader>
              <CardContent>
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
              
              <div className="bg-pink-50 border-l-4 border-pink-400 p-4 rounded-r-lg">
                <p className="text-pink-800 leading-relaxed font-medium">
                  A/Prof Sobia has had extensive experience in the management and treatment of patients with special needs.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-pink-600" />
                  Our Accommodations
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
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
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Why Choose Our Special Needs Care
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-pink-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Understanding Team</h3>
              <p className="text-gray-600">
                Compassionate staff trained in special needs care.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Adapted Care</h3>
              <p className="text-gray-600">
                Customised treatment approaches for each child.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Inclusive Environment</h3>
              <p className="text-gray-600">
                Welcoming space designed for all abilities.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-pink-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Specailised Care for Your Child
          </h2>
          <p className="text-xl mb-6 text-pink-100">
            Let us create a personalized care plan for your child&apos;s needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="text-pink-600 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Consultation
              </Button>
            </Link>
            <Link href="tel:+1234567890">
              <Button size="lg" variant="secondary" className="text-pink-600 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
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