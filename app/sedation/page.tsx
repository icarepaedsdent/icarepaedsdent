'use client';

import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Moon, Shield, Heart, CheckCircle, AlertTriangle, Clock } from 'lucide-react';
import Link from 'next/link';

const sedationReasons = [
  {
    icon: AlertTriangle,
    title: 'High Anxiety',
    description: 'Children with severe dental anxiety or phobias who cannot relax during treatment.',
    color: 'text-red-600',
    bgColor: 'bg-red-100'
  },
  {
    icon: Clock,
    title: 'Complex Procedures',
    description: 'Lengthy or complex dental procedures that require the child to remain still for extended periods.',
    color: 'text-blue-600',
    bgColor: 'bg-blue-100'
  },
  {
    icon: Heart,
    title: 'Special Needs',
    description: 'Children with special healthcare needs who may have difficulty cooperating during treatment.',
    color: 'text-green-600',
    bgColor: 'bg-green-100'
  },
  {
    icon: Shield,
    title: 'Multiple Treatments',
    description: 'When multiple procedures need to be completed in a single visit for efficiency and comfort.',
    color: 'text-purple-600',
    bgColor: 'bg-purple-100'
  }
];

const sedationOptions = [
  {
    id: 'nitrous',
    title: 'Nitrous Oxide (Laughing Gas)',
    subtitle: 'Nitrous Oxide',
    howItWorks: 'Nitrous oxide is a safe, colorless gas that helps children relax during dental procedures. It\'s inhaled through a small mask placed over the nose.',
    benefits: [
      'Quick onset and recovery',
      'Child remains conscious and responsive',
      'No needles or injections required'
    ],
    bestFor: [
      'Mild to moderate anxiety',
      'Routine dental procedures',
      'Children who can follow instructions',
      'First-time dental patients'
    ],
    additionalInfo: {
      title: 'Safety',
      content: 'Nitrous oxide has been used safely in dentistry for over 150 years. Your child will be monitored throughout the procedure.'
    }
  },
  {
    id: 'oral',
    title: 'Oral Sedation',
    subtitle: 'Oral Sedation',
    howItWorks: 'Oral sedation involves taking a prescribed medication before the appointment. The child becomes very relaxed but remains conscious.',
    benefits: [
      'Easy to administer',
      'Deeper relaxation than nitrous oxide',
      'Child may have little memory of procedure'
    ],
    bestFor: [
      'Moderate to high anxiety',
      'Longer procedures',
      'Children who won\'t tolerate nitrous oxide',
      'Multiple procedures in one visit'
    ],
    additionalInfo: {
      title: 'Preparation',
      content: 'Your child will need to fast before the appointment and will need supervision for the rest of the day as the effects wear off.'
    }
  },
  {
    id: 'iv',
    title: 'IV Sedation',
    subtitle: 'IV Sedation',
    howItWorks: 'Intravenous sedation delivers medication directly into the bloodstream, providing deeper sedation while maintaining consciousness.',
    benefits: [
      'Precise control over sedation level',
      'Rapid onset and adjustment',
      'Continuous monitoring'
    ],
    bestFor: [
      'Severe dental anxiety',
      'Complex or lengthy procedures',
      'Children who haven\'t responded to other sedation',
      'Special needs patients'
    ],
    additionalInfo: {
      title: 'Monitoring',
      content: 'Continuous monitoring of vital signs ensures your child\'s safety throughout the procedure with a trained anesthesiologist present.'
    }
  },
  {
    id: 'general',
    title: 'General Anesthesia',
    subtitle: 'General Anesthesia',
    howItWorks: 'General anesthesia puts your child in a controlled state of unconsciousness, allowing for extensive dental work without any awareness or discomfort.',
    benefits: [
      'Complete unawareness of procedure',
      'Allows for extensive treatment',
      'Performed in hospital setting'
    ],
    bestFor: [
      'Extensive dental treatment needed',
      'Severe behavioral issues',
      'Children with significant special needs',
      'Very young children requiring multiple procedures'
    ],
    additionalInfo: {
      title: 'Safety',
      content: 'Performed by a board-certified anesthesiologist in a hospital setting with full monitoring and emergency capabilities.'
    }
  }
];

export default function SedationPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentSedationSlide, setCurrentSedationSlide] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const sedationScrollRef = useRef<HTMLDivElement>(null);

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

  const scrollToSedationSlide = (index: number) => {
    if (sedationScrollRef.current) {
      const cardWidth = sedationScrollRef.current.clientWidth;
      sedationScrollRef.current.scrollTo({
        left: index * cardWidth,
        behavior: 'smooth'
      });
      setCurrentSedationSlide(index);
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

  const handleSedationScroll = () => {
    if (sedationScrollRef.current) {
      const cardWidth = sedationScrollRef.current.clientWidth;
      const scrollLeft = sedationScrollRef.current.scrollLeft;
      const newIndex = Math.round(scrollLeft / cardWidth);
      setCurrentSedationSlide(newIndex);
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    const sedationContainer = sedationScrollRef.current;
    
    if (container) {
      container.addEventListener('scroll', handleScroll);
    }
    if (sedationContainer) {
      sedationContainer.addEventListener('scroll', handleSedationScroll);
    }
    
    return () => {
      if (container) container.removeEventListener('scroll', handleScroll);
      if (sedationContainer) sedationContainer.removeEventListener('scroll', handleSedationScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Moon className="w-8 h-8 text-purple-600" />
              <span className="text-purple-600 font-semibold">Sedation Dentistry</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Comfortable, Anxiety-Free Dental Care
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Our safe and effective sedation options help anxious children feel relaxed and comfortable 
              during dental procedures, ensuring a positive experience for both child and parent.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button size="lg">
                  Discuss Sedation Options
                </Button>
              </Link>
              <Link href="tel:+1234567890">
                <Button size="lg" variant="outline">
                  Call for Consultation
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/sedation-page.JPG"
                alt="Comfortable sedation dentistry for children"
                width={600}
                height={600}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>

        {/* When Sedation is Recommended */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            When Sedation May Be Recommended
          </h2>
          
          {/* Mobile Horizontal Scroll */}
          <div className="lg:hidden mb-8">
            <div 
              ref={scrollContainerRef}
              className="flex overflow-x-auto gap-0 pb-4 snap-x snap-mandatory scrollbar-hide px-4"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {sedationReasons.map((reason, index) => (
                <div key={index} className="flex-shrink-0 w-full snap-center px-2">
                  <Card className="text-center hover:shadow-lg transition-shadow h-full">
                    <CardHeader>
                      <div className={`w-16 h-16 ${reason.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                        <reason.icon className={`w-8 h-8 ${reason.color}`} />
                      </div>
                      <CardTitle className="text-lg">{reason.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-sm">
                        {reason.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>

            {/* Dots Navigation */}
            <div className="flex justify-center gap-2 mt-6">
              {sedationReasons.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentSlide === index 
                      ? 'bg-purple-600 scale-125' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Desktop Grid */}
          <div className="hidden lg:grid lg:grid-cols-4 gap-6">
            {sedationReasons.map((reason, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className={`w-16 h-16 ${reason.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <reason.icon className={`w-8 h-8 ${reason.color}`} />
                  </div>
                  <CardTitle className="text-lg">{reason.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">
                    {reason.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Sedation Options */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our Sedation Options
          </h2>
          
          {/* Desktop Tabs */}
          <div className="hidden lg:block">
            <Tabs defaultValue="nitrous" className="max-w-4xl mx-auto">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="nitrous">Nitrous Oxide</TabsTrigger>
                <TabsTrigger value="oral">Oral Sedation</TabsTrigger>
                <TabsTrigger value="iv">IV Sedation</TabsTrigger>
                <TabsTrigger value="general">General Anesthesia</TabsTrigger>
              </TabsList>
              
              {sedationOptions.map((option) => (
                <TabsContent key={option.id} value={option.id} className="mt-8">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-2xl text-center">{option.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-8">
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-4">How It Works</h3>
                          <p className="text-gray-600 mb-4">
                            {option.howItWorks}
                          </p>
                          <div className="space-y-2">
                            {option.benefits.map((benefit, index) => (
                              <div key={index} className="flex items-center gap-2">
                                <CheckCircle className="w-4 h-4 text-green-600" />
                                <span className="text-sm text-gray-600">{benefit}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-4">Best For</h3>
                          <ul className="space-y-2 text-gray-600">
                            {option.bestFor.map((item, index) => (
                              <li key={index}>• {item}</li>
                            ))}
                          </ul>
                          
                          <h3 className="text-xl font-semibold text-gray-900 mb-4 mt-6">{option.additionalInfo.title}</h3>
                          <p className="text-gray-600">
                            {option.additionalInfo.content}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
          </div>

          {/* Mobile Scrollable Cards */}
          <div className="lg:hidden">
            <div 
              ref={sedationScrollRef}
              className="flex overflow-x-auto gap-0 pb-4 snap-x snap-mandatory scrollbar-hide px-4"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {sedationOptions.map((option, index) => (
                <div key={index} className="flex-shrink-0 w-full snap-center px-2">
                  <Card className="h-full">
                    <CardHeader>
                      <CardTitle className="text-xl text-center">{option.subtitle}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">How It Works</h3>
                        <p className="text-gray-600 text-sm mb-4">
                          {option.howItWorks}
                        </p>
                        <div className="space-y-2">
                          {option.benefits.map((benefit, benefitIndex) => (
                            <div key={benefitIndex} className="flex items-center gap-2">
                              <CheckCircle className="w-3 h-3 text-green-600 flex-shrink-0" />
                              <span className="text-xs text-gray-600">{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">Best For</h3>
                        <ul className="space-y-1 text-gray-600">
                          {option.bestFor.map((item, itemIndex) => (
                            <li key={itemIndex} className="text-xs">• {item}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">{option.additionalInfo.title}</h3>
                        <p className="text-gray-600 text-xs">
                          {option.additionalInfo.content}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>

            {/* Dots Navigation for Sedation Options */}
            <div className="flex justify-center gap-2 mt-6">
              {sedationOptions.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSedationSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentSedationSlide === index 
                      ? 'bg-purple-600 scale-125' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to sedation option ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Safety and Preparation */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-6 h-6 text-blue-600" />
                Safety First
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                Your child&apos;s safety is our top priority. We follow strict protocols and guidelines 
                for all sedation procedures.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span className="text-sm text-gray-600">Comprehensive pre-operative evaluation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span className="text-sm text-gray-600">Continuous monitoring during procedure</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span className="text-sm text-gray-600">Emergency equipment and trained staff</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span className="text-sm text-gray-600">Post-operative care instructions</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="w-6 h-6 text-purple-600" />
                Pre-Appointment Preparation
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                Proper preparation helps ensure a safe and successful sedation experience.
              </p>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-gray-900">Medical History</h4>
                  <p className="text-sm text-gray-600">Complete medical history and current medications</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Fasting Guidelines</h4>
                  <p className="text-sm text-gray-600">Specific instructions about eating and drinking before the appointment</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Transportation</h4>
                  <p className="text-sm text-gray-600">Arrange for someone to drive you and your child home</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Comfort Items</h4>
                  <p className="text-sm text-gray-600">Bring a favorite toy or blanket for comfort</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="bg-purple-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Discuss Sedation Options for Your Child
          </h2>
          <p className="text-xl mb-6 text-purple-100">
            Schedule a consultation to determine the best sedation approach for your child&apos;s needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="text-purple-600 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
                Schedule Consultation
              </Button>
            </Link>
            <Link href="tel:+1234567890">
              <Button size="lg" variant="outline" className="text-purple-600 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
                Call: (123) 456-7890
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}