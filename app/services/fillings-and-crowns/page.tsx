'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  CircleDot,
  CheckCircle,
  Calendar,
  Clock,
  Sparkles,
  Shield,
} from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

const treatmentOptions = [
  {
    icon: CircleDot,
    title: 'Composite Fillings',
    description:
      "Tooth-colored fillings that blend naturally with your child's teeth for a beautiful smile.",
    color: 'text-teal-600',
    bgColor: 'bg-teal-100',
  },
  {
    icon: Shield,
    title: 'Stainless Steel Crowns',
    description:
      'Durable crowns for heavily damaged teeth, providing long-lasting protection and function.',
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-100',
  },
  {
    icon: Sparkles,
    title: 'Ceramic Crowns',
    description:
      'Natural-looking crowns for front teeth that match the color and appearance of surrounding teeth.',
    color: 'text-teal-600',
    bgColor: 'bg-teal-100',
  },
];

export default function FillingsAndCrownsPage() {
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
            src="/filling-crown-card.JPG"
            alt="Dental Fillings and Crowns"
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
              <CircleDot className="w-8 h-8 text-teal-400" />
              <span className="text-teal-400 font-semibold text-lg">Fillings & Crowns</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Restore Your Child&apos;s Smile
            </h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Professional dental restoration services designed specifically for
              children, using the latest techniques and child-friendly
              materials.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-white">
                  Book Appointment
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
            Our Restoration Services
          </h2>

          {/* Mobile Horizontal Scroll */}
          <div className="lg:hidden mb-8">
            <div
              ref={scrollContainerRef}
              className="flex overflow-x-auto gap-0 pb-4 snap-x snap-mandatory scrollbar-hide px-4"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {treatmentOptions.map((option, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-full snap-center px-2"
                >
                  <Card className="text-center hover:shadow-lg transition-shadow h-full bg-gradient-to-br from-white to-teal-50/30 border-teal-200 relative overflow-hidden">
                    {/* Internal animated blobs */}
                    <div className="absolute inset-0 pointer-events-none">
                      <div className="absolute -top-2 -right-2 w-12 h-12 bg-teal-100/40 rounded-full animate-pulse" style={{ animationDuration: `${5 + index}s` }}></div>
                      <div className="absolute -bottom-1 -left-1 w-8 h-8 bg-emerald-200/30 rounded-full animate-bounce" style={{ animationDuration: `${4 + index * 0.5}s` }}></div>
                      <div className="absolute top-4 right-8 w-2 h-2 bg-teal-400/60 rounded-full animate-ping" style={{ animationDuration: `${3 + index * 0.3}s` }}></div>
                    </div>
                    <CardHeader className="relative z-10">
                      <div
                        className={`w-16 h-16 ${option.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}
                      >
                        <option.icon className={`w-8 h-8 ${option.color}`} />
                      </div>
                      <CardTitle className="text-lg">{option.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="relative z-10">
                      <p className="text-gray-600 text-sm">
                        {option.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>

            {/* Dots Navigation */}
            <div className="flex justify-center gap-2 mt-6">
              {treatmentOptions.map((_, index) => (
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
                  <CircleDot className="w-8 h-8 text-teal-600" />
                </div>
                <CardTitle className="text-lg">Composite Fillings</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-gray-600 text-sm">
                  Tooth-colored fillings that restore and protect damaged teeth
                  while maintaining a natural appearance.
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
                  <Sparkles className="w-8 h-8 text-emerald-600" />
                </div>
                <CardTitle className="text-lg">Front Teeth Crowns</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-gray-600 text-sm">
                  Aesthetic composite crowns for front teeth, perfect for
                  repairing visible damage or discoloration.
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
                  <Shield className="w-8 h-8 text-teal-600" />
                </div>
                <CardTitle className="text-lg">Crowns</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-gray-600 text-sm">
                  Durable stainless steel or white zirconia crowns for maximum
                  protection of back teeth.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Detailed Information */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Crowns
            </h2>
            <div className="space-y-6">
              <div>
                <p className="text-gray-600 mb-4">
                  Crowns used to restore molar teeth can be white (Zirconia) or silver (stainless steel).
                </p>
                <h3 className="font-semibold text-gray-900 mb-3">
                  Common reasons for placing a crown include:
                </h3>
              </div>

              <div className="flex gap-4">
                <div className="w-3 h-3 bg-teal-600 rounded-full flex-shrink-0 mt-2"></div>
                <div>
                  <p className="text-gray-600">
                    Repairing a baby or an adult molar that is significantly decayed and has little tooth structure left to support a filling. Without the placement of a crown the remaining portion of the severely weakened tooth may decay/ fracture further and extraction may be the only option.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-3 h-3 bg-teal-600 rounded-full flex-shrink-0 mt-2"></div>
                <div>
                  <p className="text-gray-600">
                    Repairing a baby molar following nerve treatment (pulpotomy).
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-3 h-3 bg-teal-600 rounded-full flex-shrink-0 mt-2"></div>
                <div>
                  <p className="text-gray-600">
                    Repairing a "chalky" baby molar or young adult molar that hasn't hardened properly during its development.
                  </p>
                </div>
              </div>

              <div className="mt-6 p-4 bg-teal-50 rounded-lg border-l-4 border-teal-500">
                <p className="text-gray-700">
                  <strong>Advantages of stainless-steel crowns:</strong> The advantages of non-allergic stainless-steel crowns are that they preserve more of the tooth structure, are long lasting and easy to clean. On a young adult molar, the stainless-steel crown can act as a temporary filling and is often replaced with a porcelain crown once the child has reached adulthood.
                </p>
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
                  Composite Fillings
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-gray-600">
                  A composite filling is a tooth coloured filling material that can be placed on a primary or permanent tooth. Composite fillings may be used to cover one or more surfaces, repair small fractures, minimally damaged or decayed teeth thereby restoring them to their normal colour, shape, contour and function. Composite fillings are also compatible with dental sealants, thereby allowing the dentist to complete both fillings and sealants at the same time. Composite fillings are not suitable for teeth that have had pulp (nerve) treatment or for extensively damaged teeth.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-white to-emerald-50/30 border-emerald-200 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden">
              {/* Internal animated blobs */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-1 -right-2 w-10 h-10 bg-emerald-100/40 rounded-full animate-pulse" style={{ animationDuration: '7s' }}></div>
                <div className="absolute -bottom-2 -left-1 w-6 h-6 bg-teal-200/50 rounded-full animate-bounce" style={{ animationDuration: '5s' }}></div>
                <div className="absolute top-6 right-8 w-2 h-2 bg-emerald-400/60 rounded-full animate-ping" style={{ animationDuration: '4s' }}></div>
                <div className="absolute bottom-6 left-4 text-emerald-300/20 text-sm animate-spin" style={{ animationDuration: '22s' }}>+</div>
              </div>
              <CardHeader className="relative z-10">
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-emerald-600" />
                  Composite Crowns for Front Teeth
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="space-y-4 text-gray-600">
                  <p>
                    Adhesive composite crowns for front teeth are used to repair a front tooth that may have been damaged by decay, malformation, discoloration or injury. Because the tooth coloured filling wraps around the entire tooth surface it is much stronger and longer lasting than normal adhesive fillings which only cover part of the tooth.
                  </p>
                  <p>
                    As with all adhesive restorations care should be taken to avoid sticky chewy food and also patients are advised not to bite into hard apples, carrots using front teeth as they may fracture or dislodge the filling.
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
            Why Choose Our Dental Restorations
          </h2>
          <div className="grid md:grid-cols-3 gap-6 relative z-10">
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Child-Friendly Materials
              </h3>
              <p className="text-gray-600">
                Safe, durable materials specifically chosen for children&apos;s
                teeth.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Natural Appearance
              </h3>
              <p className="text-gray-600">
                Restorations that blend seamlessly with natural teeth.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Long-Lasting Results
              </h3>
              <p className="text-gray-600">
                Durable restorations that protect teeth through childhood.
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
            <div className="absolute -bottom-2 -right-4 w-16 h-16 bg-white/10 rounded-full animate-pulse" style={{ animationDuration: '5s' }}></div>
            <div className="absolute top-4 right-12 w-8 h-8 bg-teal-300/40 rounded-full animate-ping" style={{ animationDuration: '4s' }}></div>
            <div className="absolute bottom-6 left-8 w-4 h-4 bg-white/20 rounded-full animate-ping" style={{ animationDuration: '3s' }}></div>
            <div className="absolute top-12 left-16 w-2 h-2 bg-teal-200/60 rounded-full animate-bounce" style={{ animationDuration: '4.5s' }}></div>
            <div className="absolute top-16 right-1/3 text-white/10 text-2xl animate-spin" style={{ animationDuration: '25s' }}>+</div>
            <div className="absolute bottom-12 left-1/4 text-teal-200/20 text-lg animate-spin" style={{ animationDuration: '20s' }}>+</div>
            <div className="absolute top-1/3 right-6 text-white/10 text-sm animate-spin" style={{ animationDuration: '30s' }}>+</div>
          </div>
          
          <h2 className="text-3xl font-bold mb-4 relative z-10">
            Start Your Child&apos;s Smile Restoration
          </h2>
          <p className="text-xl mb-6 text-teal-100 relative z-10">
            Schedule a consultation to discuss the best restoration options for
            your child
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
            <Link href="/contact">
              <Button
                size="lg"
                variant="secondary"
                className="text-teal-600 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Book Appointment
              </Button>
            </Link>
            <Link href="tel:36230000">
              <Button
                size="lg"
                variant="secondary"
                className="text-teal-600 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
              >
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
