'use client';

import { useState, useRef, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Heart, 
  Shield, 
  Clock, 
  Users, 
  Award, 
  Smile
} from 'lucide-react';

const features = [
  {
    icon: Award,
    title: 'Registered Specialist Practice',
    description: 'Registered specialist paediatric dental practice focusing solely on children from birth through to 18 years of age.',
    color: 'text-teal-600 bg-teal-50'
  },
  {
    icon: Users,
    title: 'Caring & Dedicated Professionals',
    description: 'Our staff ensures your child\'s treatment and administrative needs are met efficiently and smoothly.',
    color: 'text-teal-600 bg-teal-50'
  },
  {
    icon: Clock,
    title: 'Efficient Scheduling',
    description: 'We generally keep to schedule to avoid any excessive waiting times, respecting your family\'s time.',
    color: 'text-teal-600 bg-teal-50'
  },
  {
    icon: Heart,
    title: 'Open Communication',
    description: 'We believe in open disclosure and encourage patients and parents to ask questions about treatment.',
    color: 'text-teal-600 bg-teal-50'
  },
  {
    icon: Shield,
    title: 'Patient Education Focus',
    description: 'We provide education materials, website links and diagrams so you fully understand dental treatment needs.',
    color: 'text-teal-600 bg-teal-50'
  },
  {
    icon: Smile,
    title: 'Specially Designed for Children',
    description: 'Every aspect of our practice has been designed for children and families to create a relaxed, comfortable atmosphere.',
    color: 'text-teal-600 bg-teal-50'
  }
];

const stats = [
  { number: '5000+', label: 'Happy Families' },
  { number: '20+', label: 'Years Experience' },
  { number: '0-18', label: 'Years Age Range' },
  { number: '100%', label: 'Specialist Care' }
];

export function WhyChooseUs() {
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
    <section className="py-16 lg:py-24 bg-white relative overflow-hidden">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large floating blobs */}
        <div className="absolute -top-16 right-1/4 w-80 h-80 bg-gradient-to-bl from-teal-100/30 to-emerald-100/20 rounded-full animate-pulse" style={{ animationDuration: '10s' }}></div>
        <div className="absolute bottom-0 -left-20 w-64 h-64 bg-teal-200/40 rounded-full animate-bounce" style={{ animationDuration: '7s' }}></div>
        <div className="absolute top-1/3 right-0 w-48 h-48 bg-emerald-200/35 rounded-full animate-pulse" style={{ animationDuration: '8s' }}></div>
        
        {/* Medium floating elements */}
        <div className="absolute top-20 left-1/3 w-28 h-28 bg-teal-300/30 rounded-full animate-bounce" style={{ animationDuration: '5s', animationDelay: '2s' }}></div>
        <div className="absolute bottom-32 right-16 w-36 h-36 bg-emerald-200/40 rounded-full animate-pulse" style={{ animationDuration: '9s' }}></div>
        
        {/* Small animated dots */}
        <div className="absolute top-40 left-8 w-3 h-3 bg-teal-600 rounded-full animate-ping" style={{ animationDuration: '2s' }}></div>
        <div className="absolute top-1/2 right-32 w-2 h-2 bg-emerald-700 rounded-full animate-bounce" style={{ animationDuration: '3s', animationDelay: '1.2s' }}></div>
        
        {/* Rotating decorative elements */}
        <div className="absolute top-16 right-8 text-teal-400/50 text-xl font-light animate-spin" style={{ animationDuration: '30s' }}>+</div>
        <div className="absolute bottom-16 left-16 text-emerald-400/60 text-lg font-light animate-spin" style={{ animationDuration: '22s' }}>+</div>
      </div>
      
      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Our Practice Philosophy
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We strive to provide comprehensive, compassionate dental care to all children from infancy to adolescence. 
            Our goal is to help each child develop a healthy smile that will last a lifetime.
          </p>
        </div>

        {/* Mobile Horizontal Scroll */}
        <div className="lg:hidden mb-8">
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-0 pb-4 snap-x snap-mandatory scrollbar-hide px-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {features.map((feature, index) => (
              <div key={index} className="flex-shrink-0 w-full snap-center px-2">
                <Card className="group hover:shadow-xl transition-all duration-300 h-full hover:bg-teal-600 transform hover:-translate-y-1 relative overflow-hidden">
                  {/* Internal animated blobs */}
                  <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute -top-4 -right-2 w-16 h-16 bg-teal-100/30 group-hover:bg-white/10 rounded-full animate-pulse transition-colors duration-300" style={{ animationDuration: `${6 + index}s` }}></div>
                    <div className="absolute -bottom-2 -left-4 w-12 h-12 bg-emerald-200/40 group-hover:bg-white/15 rounded-full animate-bounce transition-colors duration-300" style={{ animationDuration: `${4 + index * 0.5}s`, animationDelay: `${index * 0.3}s` }}></div>
                    <div className="absolute top-1/2 right-4 w-8 h-8 bg-teal-200/50 group-hover:bg-emerald-300/20 rounded-full animate-pulse transition-colors duration-300" style={{ animationDuration: `${5 + index * 0.7}s` }}></div>
                    <div className="absolute bottom-4 right-6 w-2 h-2 bg-teal-400 group-hover:bg-white/60 rounded-full animate-ping transition-colors duration-300" style={{ animationDuration: `${3 + index * 0.4}s` }}></div>
                    <div className="absolute top-6 left-4 text-teal-300/40 group-hover:text-white/20 text-sm font-light animate-spin transition-colors duration-300" style={{ animationDuration: `${20 + index * 3}s` }}>+</div>
                  </div>
                  
                  <CardContent className="p-6 text-center relative z-10">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${feature.color} group-hover:bg-white transition-colors duration-300`}>
                      <feature.icon className="w-8 h-8 group-hover:text-teal-600 transition-colors duration-300" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-white transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm group-hover:text-teal-50 transition-colors duration-300">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-6">
            {features.map((_, index) => (
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
        <div className="hidden lg:grid lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:bg-teal-600 transform hover:-translate-y-1 relative overflow-hidden">
              {/* Internal animated blobs */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-4 -right-2 w-16 h-16 bg-teal-100/30 group-hover:bg-white/10 rounded-full animate-pulse transition-colors duration-300" style={{ animationDuration: `${6 + index}s` }}></div>
                <div className="absolute -bottom-2 -left-4 w-12 h-12 bg-emerald-200/40 group-hover:bg-white/15 rounded-full animate-bounce transition-colors duration-300" style={{ animationDuration: `${4 + index * 0.5}s`, animationDelay: `${index * 0.3}s` }}></div>
                <div className="absolute top-1/2 right-4 w-8 h-8 bg-teal-200/50 group-hover:bg-emerald-300/20 rounded-full animate-pulse transition-colors duration-300" style={{ animationDuration: `${5 + index * 0.7}s` }}></div>
                <div className="absolute bottom-4 right-6 w-2 h-2 bg-teal-400 group-hover:bg-white/60 rounded-full animate-ping transition-colors duration-300" style={{ animationDuration: `${3 + index * 0.4}s` }}></div>
                <div className="absolute top-6 left-4 text-teal-300/40 group-hover:text-white/20 text-sm font-light animate-spin transition-colors duration-300" style={{ animationDuration: `${20 + index * 3}s` }}>+</div>
              </div>
              
              <CardContent className="p-6 text-center relative z-10">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${feature.color} group-hover:bg-white transition-colors duration-300`}>
                  <feature.icon className="w-8 h-8 group-hover:text-teal-600 transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-white transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-teal-50 transition-colors duration-300">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-teal-600 rounded-2xl p-8 lg:p-12 relative overflow-hidden">
          {/* Internal Animated Blobs */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Large internal blobs */}
            <div className="absolute -top-16 -right-8 w-48 h-48 bg-white/10 rounded-full animate-pulse" style={{ animationDuration: '8s' }}></div>
            <div className="absolute -bottom-12 -left-16 w-64 h-64 bg-emerald-400/20 rounded-full animate-bounce" style={{ animationDuration: '10s' }}></div>
            <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-teal-300/30 rounded-full animate-pulse" style={{ animationDuration: '6s' }}></div>
            
            {/* Medium glowing blobs */}
            <div className="absolute top-8 left-8 w-24 h-24 bg-white/15 rounded-full animate-bounce" style={{ animationDuration: '7s', animationDelay: '1s' }}></div>
            <div className="absolute bottom-8 right-8 w-20 h-20 bg-emerald-300/25 rounded-full animate-pulse" style={{ animationDuration: '9s' }}></div>
            
            {/* Small floating particles */}
            <div className="absolute top-16 right-16 w-3 h-3 bg-white/60 rounded-full animate-ping" style={{ animationDuration: '3s' }}></div>
            <div className="absolute bottom-20 left-20 w-2 h-2 bg-teal-200 rounded-full animate-bounce" style={{ animationDuration: '4s', animationDelay: '1.5s' }}></div>
            
            {/* Glowing plus signs */}
            <div className="absolute top-12 right-1/3 text-white/20 text-xl font-light animate-spin" style={{ animationDuration: '20s' }}>+</div>
            <div className="absolute bottom-16 left-1/3 text-teal-200/40 text-lg font-light animate-spin" style={{ animationDuration: '25s' }}>+</div>
          </div>
          
          <div className="text-center mb-8 relative z-10">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Trusted by Families Across Brisbane
            </h3>
            <p className="text-teal-100 text-lg">
              Leading the industry in Paediatric Dentistry
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-teal-100">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>


      </div>
    </section>
  );
}