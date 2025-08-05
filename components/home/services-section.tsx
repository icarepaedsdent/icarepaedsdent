'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Shield,
  CircleDot,
  Scissors,
  Ruler,
  Star,
  AlertCircle,
  Heart,
  Baby,
  ArrowRight,
} from 'lucide-react';

const services = [
  {
    icon: Baby,
    title: 'Infant / Toddler Care',
    description:
      'Gentle and specailised dental care for the youngest patients.',
    image: '/sample8.jpg',
    href: '/services/infant-toddler-care',
  },
  {
    icon: Shield,
    title: 'Preventive Care',
    description:
      "Regular checkups, cleanings, and preventive treatments to keep your child's teeth healthy.",
    image: '/preventive-care-card.JPG',
    href: '/services/preventive-care',
  },
  {
    icon: CircleDot,
    title: 'Fillings & Crowns',
    description:
      'Restorative treatments to repair damaged teeth and maintain oral health.',
    image: '/filling-crown-card.JPG',
    href: '/services/fillings-and-crowns',
  },
  {
    icon: Scissors,
    title: 'Extractions',
    description: 'Safe and gentle tooth removal procedures when necessary.',
    image: '/extraction-card.JPG',
    href: '/services/extractions',
  },
  {
    icon: Ruler,
    title: 'Space Maintainers',
    description:
      'Custom devices to maintain proper spacing for developing teeth.',
    image: '/new-space-maintainer-service.jpeg',
    href: '/services/space-maintainers',
  },
  {
    icon: Star,
    title: 'Chalky Teeth',
    description:
      'Specailised treatment for hypomineralized or chalky teeth conditions.',
    image: '/chalky-teeth-card.JPG',
    href: '/services/chalky-teeth',
  },
  {
    icon: AlertCircle,
    title: 'Emergency Care',
    description: 'Immediate dental care for accidents and emergencies.',
    image: '/emergency-care-card.jpg',
    href: '/services/emergency-care',
  },
  {
    icon: Heart,
    title: 'Children with Special Needs',
    description:
      'Compassionate dental care adapted for children with special needs.',
    image: '/sepcial-needs-card.JPG',
    href: '/services/special-needs',
  },
];

export function ServicesSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollToSlide = (index: number) => {
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.clientWidth;
      scrollContainerRef.current.scrollTo({
        left: index * cardWidth,
        behavior: 'smooth',
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
    <section className="py-16 lg:py-24 bg-gradient-to-b from-teal-50/50 to-white relative overflow-hidden">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large floating blobs */}
        <div
          className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-br from-teal-200/30 to-emerald-200/20 rounded-full animate-pulse"
          style={{ animationDuration: '9s' }}
        ></div>
        <div
          className="absolute -bottom-32 -left-16 w-96 h-96 bg-teal-100/40 rounded-full animate-bounce"
          style={{ animationDuration: '12s' }}
        ></div>
        <div
          className="absolute top-1/2 left-1/3 w-32 h-32 bg-emerald-200/60 rounded-full animate-pulse"
          style={{ animationDuration: '5s' }}
        ></div>

        {/* Medium blobs */}
        <div
          className="absolute top-16 left-16 w-24 h-24 bg-teal-300/40 rounded-full animate-bounce"
          style={{ animationDuration: '4s', animationDelay: '1s' }}
        ></div>
        <div
          className="absolute bottom-24 right-1/4 w-20 h-20 bg-emerald-300/30 rounded-full animate-pulse"
          style={{ animationDuration: '6s' }}
        ></div>

        {/* Small animated dots */}
        <div
          className="absolute top-32 right-16 w-3 h-3 bg-teal-500 rounded-full animate-ping"
          style={{ animationDuration: '3s' }}
        ></div>
        <div
          className="absolute top-2/3 left-8 w-2 h-2 bg-emerald-600 rounded-full animate-bounce"
          style={{ animationDuration: '2.5s', animationDelay: '0.8s' }}
        ></div>
        <div
          className="absolute bottom-16 left-1/3 w-4 h-4 bg-teal-400 rounded-full animate-pulse"
          style={{ animationDuration: '4s' }}
        ></div>

        {/* Floating plus signs */}
        <div
          className="absolute top-24 left-1/2 text-teal-400/60 text-2xl font-light animate-spin"
          style={{ animationDuration: '25s' }}
        >
          +
        </div>
        <div
          className="absolute bottom-32 right-8 text-emerald-400/50 text-lg font-light animate-spin"
          style={{ animationDuration: '18s' }}
        >
          +
        </div>
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-1 w-12 bg-teal-600 rounded-full" />
            <h3 className="text-teal-600 font-semibold tracking-wider">
              WHAT WE DO
            </h3>
            <div className="h-1 w-12 bg-teal-600 rounded-full" />
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            A FULL RANGE OF DENTAL SERVICES FOR KIDS OF ALL AGES
          </h2>
          <h3 className="text-2xl font-semibold text-teal-600 mb-6">
            Nurturing Healthy Smiles, One Child at a Time
          </h3>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We are committed to ensuring your child&apos;s lifelong oral health,
            and we provide a full range of dental services to kids of all ages.
            Our comprehensive range of services includes general checkups,
            preventive care, treatment of tooth decay, composite fillings,
            crowns for both primary and permanent teeth, extractions, space
            maintainers, treatment for &apos;chalky teeth&apos; enamel
            hypomineralisation. Our goal is to provide high-quality dental care
            that supports healthy smiles and overall well-being from the start,
            ensuring children receive preventive care rather than waiting for
            problems to arise. Whatever your child&apos;s dental requirements,
            we&apos;re here for them, and you.
          </p>
        </div>

        {/* Mobile Horizontal Scroll */}
        <div className="lg:hidden mb-8">
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-0 pb-4 snap-x snap-mandatory scrollbar-hide px-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {services.map((service, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-full snap-center px-2"
              >
                <Card className="group hover:shadow-2xl transition-all duration-500 overflow-hidden border-0 bg-white/80 backdrop-blur-sm h-full">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={400}
                      height={300}
                      className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700 ease-in-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute top-4 left-4 transform -translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow">
                        <service.icon className="w-6 h-6 text-teal-600" />
                      </div>
                    </div>
                  </div>

                  <CardHeader className="pt-4">
                    <CardTitle className="text-xl text-gray-900 group-hover:text-teal-600 transition-colors duration-300">
                      {service.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {service.description}
                    </p>
                    <Link
                      href={service.href}
                      className="inline-block w-full group/button"
                    >
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full bg-transparent hover:bg-teal-600 hover:text-white border-2 transition-all duration-300 ease-in-out transform group-hover/button:translate-y-0 hover:-translate-y-1 hover:border-teal-600"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover/button:translate-x-1 transition-transform duration-300" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-6">
            {services.map((_, index) => (
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
        <div className="hidden lg:grid lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-500 overflow-hidden border-0 bg-white/80 backdrop-blur-sm"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={400}
                  height={300}
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-4 left-4 transform -translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow">
                    <service.icon className="w-7 h-7 text-teal-600" />
                  </div>
                </div>
              </div>

              <CardHeader className="pt-6">
                <CardTitle className="text-2xl text-gray-900 group-hover:text-teal-600 transition-colors duration-300">
                  {service.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-6">
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
                <Link
                  href={service.href}
                  className="inline-block w-full group/button"
                >
                  <Button
                    variant="outline"
                    className="w-full bg-transparent hover:bg-teal-600 hover:text-white border-2 transition-all duration-300 ease-in-out transform group-hover/button:translate-y-0 hover:-translate-y-1 hover:border-teal-600"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/button:translate-x-1 transition-transform duration-300" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link href="/services">
            <Button
              size="lg"
              className="text-lg px-8 py-6 bg-teal-600 hover:bg-teal-700 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              View All Services
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
