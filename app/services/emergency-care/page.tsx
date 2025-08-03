'use client';

import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  AlertCircle,
  CheckCircle,
  Calendar,
  Clock,
  Shield,
  Phone,
  Zap,
  Heart,
} from 'lucide-react';
import Link from 'next/link';
const emergencyServices = [
  {
    icon: AlertCircle,
    title: 'Dental Trauma',
    description:
      'Immediate care for knocked-out teeth, fractures, and other dental injuries.',
    color: 'text-red-600',
    bgColor: 'bg-red-100',
  },
  {
    icon: Shield,
    title: 'Severe Pain',
    description:
      'Quick relief from toothaches, abscesses, and severe dental discomfort.',
    color: 'text-orange-600',
    bgColor: 'bg-orange-100',
  },
  {
    icon: CheckCircle,
    title: 'Urgent Treatment',
    description:
      'Same-day care for broken fillings, crowns, and other dental emergencies.',
    color: 'text-blue-600',
    bgColor: 'bg-blue-100',
  },
];

export default function EmergencyCarePage() {
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
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <AlertCircle className="w-8 h-8 text-red-600" />
              <span className="text-red-600 font-semibold">Emergency Care</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Immediate Care When You Need It Most
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Quick response and expert care for dental emergencies. We&apos;re
              here to help your child get relief from pain and prevent further
              complications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="tel:36230000">
                <Button size="lg" variant="destructive">
                  <Phone className="w-5 h-5 mr-2" />
                  Emergency Call
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline">
                  Book Appointment
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/emergency-service.jpg"
                alt="Emergency Dental Care"
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
            Emergency Services We Provide
          </h2>

          {/* Mobile Horizontal Scroll */}
          <div className="lg:hidden mb-8">
            <div
              ref={scrollContainerRef}
              className="flex overflow-x-auto gap-0 pb-4 snap-x snap-mandatory scrollbar-hide px-4"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {emergencyServices.map((service, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-full snap-center px-2"
                >
                  <Card className="text-center hover:shadow-lg transition-shadow h-full">
                    <CardHeader>
                      <div
                        className={`w-16 h-16 ${service.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}
                      >
                        <service.icon className={`w-8 h-8 ${service.color}`} />
                      </div>
                      <CardTitle className="text-lg">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
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
              {emergencyServices.map((_, index) => (
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
          <div className="hidden lg:grid lg:grid-cols-3 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <AlertCircle className="w-8 h-8 text-red-600" />
                </div>
                <CardTitle className="text-lg">Dental Trauma</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Immediate care for knocked-out teeth, fractures, and other
                  dental injuries.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-orange-600" />
                </div>
                <CardTitle className="text-lg">Severe Pain</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Quick relief from toothaches, abscesses, and severe dental
                  discomfort.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-lg">Urgent Treatment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Same-day care for broken fillings, crowns, and other dental
                  emergencies.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Detailed Information */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Tooth Ache
            </h2>
            <div className="space-y-6">
              <p className="text-gray-600 leading-relaxed">
                The most common cause of tooth ache is tooth decay. Other causes of toothache include chalky teeth, tooth fractures and dental trauma.
              </p>
              
              <p className="text-gray-600 leading-relaxed">
                Impacted food can cause pain in young children and can be removed using a soft tooth brush or dental floss. If pain persists please contact us to arrange an appointment.
              </p>
              
              <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-r-lg">
                <p className="text-red-800 leading-relaxed font-medium">
                  If your child's symptoms include throbbing, pain, fever, malaise it is imperative to seek emergency care immediately. After hours emergencies can be managed by seeking care at your local hospital emergency department or through the Queensland Children's hospital.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-red-600" />
                  Dental Trauma
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  It is important that all dental trauma be assessed immediately by a dentist.
                </p>
                <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">
                    General advice following dental trauma:
                  </h4>
                  <ul className="space-y-2 text-blue-800 text-sm">
                    <li>• Complete the course of antibiotics if prescribed</li>
                    <li>• Maintain a soft diet for 1-2 weeks</li>
                    <li>• Brush with a soft tooth brush after every meal</li>
                    <li>• If chlorhexidine has been recommended use this instead of tooth paste for the next week</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-red-50 to-red-100 border-red-200 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="w-5 h-5 text-red-600" />
                  Emergency Care Priority
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-red-800 leading-relaxed font-medium">
                  At i-Care Paediatric Dentistry we understand that no parent ever wants to see their child in distress. If your child has dental pain, dental injuries or a facial swelling from a dental infection please contact our rooms and we will address this as a priority and offer you an appointment ASAP.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Why Choose Our Emergency Care
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                24/7 Availability
              </h3>
              <p className="text-gray-600">
                Emergency support whenever you need it.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Expert Care
              </h3>
              <p className="text-gray-600">
                Experienced team specailised in paediatric emergencies.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Quick Response
              </h3>
              <p className="text-gray-600">
                Immediate attention to minimise pain and complications.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-red-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Dental Emergency? Don&apos;t Wait!
          </h2>
          <p className="text-xl mb-6 text-red-100">
            Contact us immediately for expert emergency dental care
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="tel:36230000">
              <Button
                size="lg"
                variant="secondary"
                className="text-red-600 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
              >
                <Phone className="w-5 h-5 mr-2" />
                Emergency: 36230000
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="secondary"
                className="text-red-600 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Follow-up
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
