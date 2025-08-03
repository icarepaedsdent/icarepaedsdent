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
    description: 'BDS, MSc, DClinDent (Paediatric Dentistry), PhD from University of Otago, New Zealand',
    color: 'text-teal-600'
  },
  {
    icon: Heart,
    title: 'Qualifications',
    description: 'FICD, FPFA, FDTFEd, SFHEA, MRACDS (Paediatric Dentistry)',
    color: 'text-teal-600'
  },
  {
    icon: Users,
    title: 'Current Role',
    description: 'Discipline Lead, School of Dentistry, The University of Queensland',
    color: 'text-teal-600'
  },
  {
    icon: Clock,
    title: 'Experience',
    description: '20+ years of clinical and academic experience',
    color: 'text-teal-600'
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
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-white relative overflow-hidden">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large floating blobs */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-teal-200/30 to-emerald-200/20 rounded-full animate-pulse" style={{ animationDuration: '12s' }}></div>
        <div className="absolute -bottom-40 -left-20 w-96 h-96 bg-teal-100/40 rounded-full animate-bounce" style={{ animationDuration: '15s' }}></div>
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-emerald-200/50 rounded-full animate-pulse" style={{ animationDuration: '8s' }}></div>
        <div className="absolute bottom-1/4 right-1/3 w-48 h-48 bg-teal-300/35 rounded-full animate-bounce" style={{ animationDuration: '10s' }}></div>
        
        {/* Medium floating elements */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-teal-200/50 rounded-full animate-bounce" style={{ animationDuration: '6s', animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-20 w-28 h-28 bg-emerald-300/40 rounded-full animate-pulse" style={{ animationDuration: '9s' }}></div>
        <div className="absolute bottom-32 left-1/3 w-36 h-36 bg-teal-100/60 rounded-full animate-bounce" style={{ animationDuration: '7s', animationDelay: '3s' }}></div>
        
        {/* Small animated dots */}
        <div className="absolute top-40 right-40 w-4 h-4 bg-teal-500 rounded-full animate-ping" style={{ animationDuration: '3s' }}></div>
        <div className="absolute top-2/3 left-16 w-3 h-3 bg-emerald-600 rounded-full animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 right-1/4 w-5 h-5 bg-teal-400 rounded-full animate-pulse" style={{ animationDuration: '5s' }}></div>
        <div className="absolute top-1/4 right-1/2 w-2 h-2 bg-emerald-500 rounded-full animate-ping" style={{ animationDuration: '2.5s', animationDelay: '1.5s' }}></div>
        
        {/* Floating plus signs */}
        <div className="absolute top-32 left-1/2 text-teal-400/50 text-2xl font-light animate-spin" style={{ animationDuration: '30s' }}>+</div>
        <div className="absolute bottom-40 right-16 text-emerald-400/40 text-xl font-light animate-spin" style={{ animationDuration: '22s' }}>+</div>
        <div className="absolute top-3/4 left-1/4 text-teal-300/60 text-lg font-light animate-spin" style={{ animationDuration: '25s' }}>+</div>
      </div>
      
      <div className="container mx-auto px-4 py-16 relative">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Meet our Specialist Paediatric Dentist
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-teal-600 mb-4">
            Associate Professor (Dr) Sobia Zafar – Specialist Paediatric Dentist
          </h2>
          <div className="text-lg text-gray-600 max-w-4xl mx-auto">
            <p>BDS, MSc, DClinDent (Paediatric Dentistry), PhD,</p>
            <p>FICD, FPFA, FDTFEd, SFHEA, MRACDS (Paediatric Dentistry)</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Excellence in Paediatric Dental Care
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Associate Professor (Dr) Sobia Zafar is a specialist paediatric dentist with a gentle, child-centred approach that puts children and families at the heart of every dental experience. With over 20 years of clinical and academic experience, she is renowned not only for her advanced clinical skills, but also for her genuine warmth, empathy, and unwavering commitment to children&apos;s wellbeing.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                She completed her specialist training in paediatric dentistry and Doctor of Philosophy (PhD) from the University of Otago, New Zealand. After that she worked as a specialist paeditric dentist and senior lecturer at the Oral Health Centre of Western Australia for two years. She then moved to Brisbane and is currently working as a discipline lead at the school of dentistry, The University of Queensland.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                A/Prof Sobia understands that every child is unique, and she goes above and beyond to create a safe, welcoming, and non-judgemental environment where children feel heard, valued, and comfortable. Her calm and reassuring manner helps even the most anxious or medically complex children feel at ease, and she takes the time to build trust at every stage of care.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                She has experience in treating very common to most complex paediatric dental patients. Whether treating toddlers, school-aged children, or adolescents, she tailors each visit to the child&apos;s developmental needs, using age-appropriate communication and behaviour guidance techniques to reduce fear and build confidence. From a first dental visit to the management of dental trauma or preventive treatments, she prioritises a positive experience that fosters long-term oral health.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                A/Prof Sobia is also deeply committed to caring for children with special needs and those from culturally and linguistically diverse (CALD) backgrounds. She is known for her inclusive, respectful, and adaptable care, and she works closely with families, support workers, and medical teams to ensure holistic, compassionate management. She regularly runs educational workshops for parents and caregivers, empowering families with the knowledge and skills to maintain their child&apos;s oral health at home.
              </p>
              <p className="text-gray-600 leading-relaxed">
                With A/Prof Sobia, your child is not just receiving expert dental treatment—they are being cared for with compassion, respect, and a deep commitment to their lifelong health and happiness.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="px-3 py-1">
                20+ Years Experience
              </Badge>
              <Badge variant="secondary" className="px-3 py-1">
                Specialist Paediatric Dentist
              </Badge>
              <Badge variant="secondary" className="px-3 py-1">
                University Academic
              </Badge>
              <Badge variant="secondary" className="px-3 py-1">
                Special Needs Care
              </Badge>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://i.ibb.co/xqKJRx7B/Sobia-Zafar.jpg"
                alt="Associate Professor (Dr) Sobia Zafar - Specialist Paediatric Dentist"
                width={600}
                height={600}
                className="object-cover w-full h-full"
              />
            </div>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-8 pt-8 justify-center">
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-600">20+</div>
                <div className="text-sm text-gray-600 font-medium">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600">5000+</div>
                <div className="text-sm text-gray-600 font-medium">Happy Families</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-700">PhD</div>
                <div className="text-sm text-gray-600 font-medium">Qualified</div>
              </div>
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
                      ? 'bg-teal-600 scale-125' 
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

        {/* Approach & Specialties */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
          Paediatric dental services
          </h2>
          <div className="space-y-6 mb-8">
            <p className="text-gray-600 leading-relaxed">
              A/Prof Sobia has experience in treating very common to most complex paediatric dental patients. 
              Whether treating toddlers, school-aged children, or adolescents, she tailors each visit to the 
              child&apos;s developmental needs, using age-appropriate communication and behaviour guidance techniques 
              to reduce fear and build confidence.
            </p>
            <p className="text-gray-600 leading-relaxed">
              From a first dental visit to the management of dental trauma or preventive treatments, she 
              prioritises a positive experience that fosters long-term oral health. A/Prof Sobia is also deeply 
              committed to caring for children with special needs and those from culturally and linguistically 
              diverse (CALD) backgrounds.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Inclusive Care</h3>
              <p className="text-gray-600">
                Known for her inclusive, respectful, and adaptable care for children with special needs and CALD backgrounds.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Family Education</h3>
              <p className="text-gray-600">
                Regularly runs educational workshops for parents and caregivers, empowering families with oral health knowledge.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Holistic Management</h3>
              <p className="text-gray-600">
                Works closely with families, support workers, and medical teams to ensure compassionate, comprehensive care.
              </p>
            </div>
          </div>
        </div>

        {/* Final Message */}
        <div className="bg-teal-600 rounded-2xl p-8 text-center relative overflow-hidden">
          {/* Internal animated blobs */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Large internal blobs */}
            <div className="absolute -top-12 -right-8 w-40 h-40 bg-white/10 rounded-full animate-pulse" style={{ animationDuration: '8s' }}></div>
            <div className="absolute -bottom-8 -left-12 w-48 h-48 bg-emerald-400/20 rounded-full animate-bounce" style={{ animationDuration: '10s' }}></div>
            <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-teal-300/30 rounded-full animate-pulse" style={{ animationDuration: '6s' }}></div>
            
            {/* Medium glowing blobs */}
            <div className="absolute top-8 left-8 w-20 h-20 bg-white/15 rounded-full animate-bounce" style={{ animationDuration: '7s', animationDelay: '1s' }}></div>
            <div className="absolute bottom-8 right-8 w-16 h-16 bg-emerald-300/25 rounded-full animate-pulse" style={{ animationDuration: '9s' }}></div>
            
            {/* Small floating particles */}
            <div className="absolute top-12 right-12 w-3 h-3 bg-white/60 rounded-full animate-ping" style={{ animationDuration: '3s' }}></div>
            <div className="absolute bottom-16 left-16 w-2 h-2 bg-teal-200 rounded-full animate-bounce" style={{ animationDuration: '4s', animationDelay: '1.5s' }}></div>
            
            {/* Glowing plus signs */}
            <div className="absolute top-16 right-1/3 text-white/20 text-xl font-light animate-spin" style={{ animationDuration: '20s' }}>+</div>
            <div className="absolute bottom-12 left-1/3 text-teal-200/40 text-lg font-light animate-spin" style={{ animationDuration: '25s' }}>+</div>
          </div>
          
          <h2 className="text-2xl font-bold text-white mb-4 relative z-10">
            Expert Care with Compassion
          </h2>
          <p className="text-lg text-teal-100 max-w-3xl mx-auto relative z-10">
            With A/Prof Sobia, your child is not just receiving expert dental treatment. They are 
            being cared for with compassion, respect, and a deep commitment to their lifelong health and happiness.
          </p>
        </div>
      </div>
    </div>
  );
}