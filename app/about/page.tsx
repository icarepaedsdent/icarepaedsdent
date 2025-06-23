'use client';

import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, Heart, Users, Clock } from 'lucide-react';

const qualifications = [
  {
    icon: Award,
    title: 'Education',
    description: 'DDS, Pediatric Dentistry Residency, Advanced Orthodontics Certification',
    color: 'text-blue-600'
  },
  {
    icon: Heart,
    title: 'Specialization',
    description: 'Pediatric Dentistry, Behavior Management, Preventive Care',
    color: 'text-red-500'
  },
  {
    icon: Users,
    title: 'Memberships',
    description: 'American Academy of Pediatric Dentistry, Australian Dental Association',
    color: 'text-green-600'
  },
  {
    icon: Clock,
    title: 'Experience',
    description: '15+ years treating children, 5000+ happy patients',
    color: 'text-purple-600'
  }
];

export default function AboutPage() {
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
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Dr. Sobia
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dedicated to providing exceptional pediatric dental care with a gentle, compassionate approach
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Caring for Your Child&apos;s Smile
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Dr. Sobia is a highly qualified pediatric dentist with over 15 years of experience 
                in providing comprehensive dental care for children from infancy through adolescence. 
                Her gentle approach and child-friendly techniques help create positive dental experiences 
                that last a lifetime.
              </p>
              <p className="text-gray-600 leading-relaxed">
                She believes that every child deserves to have a healthy, beautiful smile. Through 
                preventive care, education, and state-of-the-art treatments, she helps children 
                develop excellent oral health habits while maintaining their comfort and trust.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="px-3 py-1">
                15+ Years Experience
              </Badge>
              <Badge variant="secondary" className="px-3 py-1">
                Pediatric Specialist
              </Badge>
              <Badge variant="secondary" className="px-3 py-1">
                Child Psychology Certified
              </Badge>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&h=600&fit=crop"
                alt="Dr. Sobia - Pediatric Dentist"
                width={600}
                height={600}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>

        {/* Qualifications */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Qualifications & Expertise
          </h2>
          
          {/* Mobile Horizontal Scroll */}
          <div className="lg:hidden mb-8">
            <div 
              ref={scrollContainerRef}
              className="flex overflow-x-auto gap-0 pb-4 snap-x snap-mandatory scrollbar-hide px-4"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {qualifications.map((qualification, index) => (
                <div key={index} className="flex-shrink-0 w-full snap-center px-2">
                  <Card className="text-center hover:shadow-lg transition-shadow h-full">
                    <CardContent className="p-6">
                      <qualification.icon className={`w-12 h-12 ${qualification.color} mx-auto mb-4`} />
                      <h3 className="font-semibold text-gray-900 mb-2">{qualification.title}</h3>
                      <p className="text-sm text-gray-600">
                        {qualification.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>

            {/* Dots Navigation */}
            <div className="flex justify-center gap-2 mt-6">
              {qualifications.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentSlide === index 
                      ? 'bg-blue-600 scale-125' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Desktop Grid */}
          <div className="hidden lg:grid lg:grid-cols-4 gap-6">
            {qualifications.map((qualification, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <qualification.icon className={`w-12 h-12 ${qualification.color} mx-auto mb-4`} />
                  <h3 className="font-semibold text-gray-900 mb-2">{qualification.title}</h3>
                  <p className="text-sm text-gray-600">
                    {qualification.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Philosophy */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Our Philosophy
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Gentle Care</h3>
              <p className="text-gray-600">
                We use the latest techniques to ensure your child&apos;s comfort throughout every procedure.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Family Focused</h3>
              <p className="text-gray-600">
                We involve parents in the treatment process and provide education for the whole family.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Excellence</h3>
              <p className="text-gray-600">
                We strive for the highest standards of care using state-of-the-art technology.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}