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
    color: 'text-blue-600'
  },
  {
    icon: Heart,
    title: 'Qualifications',
    description: 'FICD, FPFA, FDTFEd, SFHEA, MRACDS (Paediatric Dentistry)',
    color: 'text-red-500'
  },
  {
    icon: Users,
    title: 'Current Role',
    description: 'Discipline Lead, School of Dentistry, The University of Queensland',
    color: 'text-green-600'
  },
  {
    icon: Clock,
    title: 'Experience',
    description: '20+ years of clinical and academic experience',
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
            Meet Our Specialist Paediatric Dentist
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-blue-600 mb-4">
            Associate Professor Sobia Zafar
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-4">
            BDS, MSc, DClinDent (Paediatric Dentistry), PhD, FICD, FPFA, FDTFEd, SFHEA, MRACDS (Paediatric Dentistry)
          </p>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A specialist paediatric dentist with a gentle, child-centred approach that puts children and families at the heart of every dental experience
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Excellence in Paediatric Dental Care
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                A/Prof Sobia Zafar is a specialist paediatric dentist with over 20 years of clinical and academic 
                experience. She is renowned not only for her advanced clinical skills, but also for her genuine 
                warmth, empathy, and unwavering commitment to children&apos;s wellbeing. She completed her specialist 
                training in paediatric dentistry and Doctor of Philosophy (PhD) from the University of Otago, New Zealand.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                After completing her training, she worked as a specialist paediatric dentist and senior lecturer at the 
                Oral Health Centre of Western Australia for two years. She then moved to Brisbane and is currently 
                working as a discipline lead at the school of dentistry, The University of Queensland.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Dr Zafar understands that every child is unique, and she goes above and beyond to create a safe, 
                welcoming, and non-judgemental environment where children feel heard, valued, and comfortable. 
                Her calm and reassuring manner helps even the most anxious or medically complex children feel at ease, 
                and she takes the time to build trust at every stage of care.
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
                alt="Associate Professor Sobia Zafar - Specialist Paediatric Dentist"
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

        {/* Approach & Specialties */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Comprehensive Care Approach
          </h2>
          <div className="space-y-6 mb-8">
            <p className="text-gray-600 leading-relaxed">
              Dr Zafar has experience in treating very common to most complex paediatric dental patients. 
              Whether treating toddlers, school-aged children, or adolescents, she tailors each visit to the 
              child&apos;s developmental needs, using age-appropriate communication and behaviour guidance techniques 
              to reduce fear and build confidence.
            </p>
            <p className="text-gray-600 leading-relaxed">
              From a first dental visit to the management of dental trauma or preventive treatments, she 
              prioritises a positive experience that fosters long-term oral health. Dr Zafar is also deeply 
              committed to caring for children with special needs and those from culturally and linguistically 
              diverse (CALD) backgrounds.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-blue-600" />
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
        <div className="bg-blue-50 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Expert Care with Compassion
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            With A/Prof Sobia Zafar, your child is not just receiving expert dental treatment—they are 
            being cared for with compassion, respect, and a deep commitment to their lifelong health and happiness.
          </p>
        </div>
      </div>
    </div>
  );
}