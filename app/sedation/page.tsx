'use client';

import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Moon, Shield, Heart, CheckCircle, AlertTriangle, Clock, Calendar } from 'lucide-react';
import Link from 'next/link';

const sedationReasons = [
  {
    icon: AlertTriangle,
    title: 'High Anxiety',
    description: 'Children with severe dental anxiety or phobias who cannot relax during treatment.',
    color: 'text-teal-600',
    bgColor: 'bg-teal-100'
  },
  {
    icon: Clock,
    title: 'Complex Procedures',
    description: 'Lengthy or complex dental procedures that require the child to remain still for extended periods.',
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-100'
  },
  {
    icon: Heart,
    title: 'Special Needs',
    description: 'Children with special healthcare needs who may have difficulty cooperating during treatment.',
    color: 'text-teal-600',
    bgColor: 'bg-teal-100'
  },
  {
    icon: Shield,
    title: 'Multiple Treatments',
    description: 'When multiple procedures need to be completed in a single visit for efficiency and comfort.',
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-100'
  }
];

const sedationOptions = [
  {
    id: 'nitrous',
    title: 'Nitrous Oxide (Laughing Gas)',
    subtitle: 'Nitrous Oxide',
    howItWorks: 'Nitrous oxide also known as Laughing gas is a form of sedation that is particularly useful to alleviate anxiety in older children for simple procedures of short duration. A certain degree of patient co-operation is required for this technique to be successful. Using a special mask that fits over the nose, your child will inhale nitrous oxide. The gas will begin to work within a few minutes and often gives a relaxed feeling.',
    benefits: [
      'Quick onset and recovery',
      'Child remains conscious and responsive',
      'No needles or injections required',
      'Effects are reversed quickly at completion'
    ],
    bestFor: [
      'Older children who can cooperate',
      'Simple procedures of short duration',
      'Alleviating anxiety in dental procedures',
      'Children who can follow instructions'
    ],
    additionalInfo: {
      title: 'Safety & Effectiveness',
      content: 'Nitrous oxide is effective, safe, and the effects are reversed quickly at the completion of treatment. Your child will be monitored throughout the procedure.'
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
    howItWorks: 'If your child is young, anxious, requires extensive or complex dental treatment, has special needs and has a strong gag reflex, treatment under general anaesthetic should be considered. General anaesthesia means that your child is fully asleep. This approach allows all treatment and x-rays to be completed in one appointment, where 4-5 appointments with local anaesthetic/nitrous oxide may be required in the dental surgery.',
    benefits: [
      'All treatment completed in one appointment',
      'Average treatment time: 1.5 hours',
      'Minimises negative experiences and dental phobias',
      'Complete unawareness of procedure',
      'Prevents lifetime dental anxiety'
    ],
    bestFor: [
      'Young children',
      'Anxious children',
      'Extensive or complex dental treatment',
      'Children with special needs',
      'Strong gag reflex'
    ],
    additionalInfo: {
      title: 'Expert Care at St Andrews War Memorial Hospital',
      content: 'Dental treatment under general anaesthetic is performed by A/Prof Sobia Zafar at the St Andrews War Memorial Hospital, where A/Prof Sobia Zafar is fully registered and accredited as a specialist paediatric dentist. The general anaesthetic is administered by a member of our team of highly qualified specialist anaesthetists with years of experience in paediatric care. You can be rest assured your child will be well looked after. Following the initial consultation A/Prof Zafar will give you a comprehensive report along with a detailed dental treatment plan (with health fund item numbers), anaesthetic fees and hospital fees.'
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
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-white relative overflow-hidden">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-16 left-8 w-32 h-32 bg-teal-200/30 rounded-full animate-pulse" style={{ animationDuration: '5s' }}></div>
        <div className="absolute top-32 right-16 w-24 h-24 bg-emerald-300/20 rounded-full animate-bounce" style={{ animationDuration: '7s' }}></div>
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
            src="/sedation-page.JPG"
            alt="Comfortable sedation dentistry for children"
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
              <Moon className="w-8 h-8 text-teal-400" />
              <span className="text-teal-400 font-semibold text-lg">Sedation Dentistry</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Comfortable, Anxiety-Free Dental Care
            </h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Our safe and effective sedation options help anxious children feel relaxed and comfortable 
              during dental procedures, ensuring a positive experience for both child and parent.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-white">
                  Discuss Sedation Options
                </Button>
              </Link>
              <Link href="tel:36230000">
                <Button size="lg" variant="outline" className="border-white bg-white text-teal-600">
                  Call for Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">

        {/* Understanding Sedation Dentistry */}
        <div className="mb-16">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-white to-teal-50/30 border-teal-200 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden">
              {/* Internal animated blobs */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-3 -right-3 w-16 h-16 bg-teal-100/30 rounded-full animate-pulse" style={{ animationDuration: '7s' }}></div>
                <div className="absolute -bottom-2 -left-2 w-12 h-12 bg-emerald-200/40 rounded-full animate-bounce" style={{ animationDuration: '6s' }}></div>
                <div className="absolute top-12 right-16 w-4 h-4 bg-teal-400/40 rounded-full animate-ping" style={{ animationDuration: '4s' }}></div>
                <div className="absolute bottom-16 left-12 w-2 h-2 bg-emerald-400/60 rounded-full animate-ping" style={{ animationDuration: '3s' }}></div>
                <div className="absolute top-20 left-1/4 text-teal-300/20 text-xl animate-spin" style={{ animationDuration: '25s' }}>+</div>
                <div className="absolute bottom-24 right-1/3 text-emerald-300/25 text-lg animate-spin" style={{ animationDuration: '30s' }}>+</div>
              </div>
              
              <CardHeader className="relative z-10">
                <CardTitle className="text-3xl font-bold text-center text-teal-700 mb-2">
                  Understanding Sedation Dentistry
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-6 relative z-10">
                <div className="space-y-4">
                  <p className="text-gray-600 leading-relaxed">
                    Sedation Dentistry refers to the use of sedation during dental treatment. At i-Care Paediatric Dentistry, we understand that young children and some older children might find dental treatment quite difficult to cope with. We offer treatment using Nitrous Oxide sedation and treatment under General Aesthetic (at the St Andrews War Memorial Day Hospital).
                  </p>
                  
                  <div className="bg-teal-50 border-l-4 border-teal-400 p-6 rounded-r-lg">
                    <h3 className="text-xl font-semibold text-teal-800 mb-4">
                      Questions to Consider Before Deciding on Sedation:
                    </h3>
                    <ul className="space-y-2 text-teal-700">
                      <li className="flex items-start gap-2">
                        <span className="text-teal-600 font-bold mt-1">•</span>
                        <span>Is your child old enough to cope with treatment in the chair?</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-teal-600 font-bold mt-1">•</span>
                        <span>What was their previous dental history?</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-teal-600 font-bold mt-1">•</span>
                        <span>Does your child require complex dental treatment?</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-teal-600 font-bold mt-1">•</span>
                        <span>How long can your child sit still in the chair?</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-teal-600 font-bold mt-1">•</span>
                        <span>How long can your child keep their mouth open?</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-teal-600 font-bold mt-1">•</span>
                        <span>Is your child able to tolerate local anaesthetic?</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-teal-600 font-bold mt-1">•</span>
                        <span>Does your child have a strong gag reflex?</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-teal-600 font-bold mt-1">•</span>
                        <span>How many teeth need treatment</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-teal-600 font-bold mt-1">•</span>
                        <span>Which option allows for the highest standard of treatment?</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
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
                  <Card className="text-center hover:shadow-xl transition-all duration-300 h-full bg-gradient-to-br from-white to-teal-50/30 border-teal-200 relative overflow-hidden">
                    {/* Internal animated blobs */}
                    <div className="absolute inset-0 pointer-events-none">
                      <div className="absolute -top-2 -right-2 w-12 h-12 bg-teal-100/40 rounded-full animate-pulse" style={{ animationDuration: `${5 + index}s` }}></div>
                      <div className="absolute -bottom-1 -left-1 w-8 h-8 bg-emerald-200/30 rounded-full animate-bounce" style={{ animationDuration: `${4 + index * 0.5}s` }}></div>
                      <div className="absolute top-4 right-8 w-2 h-2 bg-teal-400/60 rounded-full animate-ping" style={{ animationDuration: `${3 + index * 0.3}s` }}></div>
                    </div>
                    <CardHeader className="relative z-10">
                      <div className={`w-16 h-16 ${reason.bgColor} rounded-full flex items-center justify-center mx-auto mb-4 shadow-md`}>
                        <reason.icon className={`w-8 h-8 ${reason.color}`} />
                      </div>
                      <CardTitle className="text-lg text-gray-900">{reason.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="relative z-10">
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
            {sedationReasons.map((reason, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-teal-50/30 border-teal-200 relative overflow-hidden">
                {/* Internal animated blobs */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute -top-2 -right-2 w-12 h-12 bg-teal-100/40 rounded-full animate-pulse" style={{ animationDuration: `${5 + index}s` }}></div>
                  <div className="absolute -bottom-1 -left-1 w-8 h-8 bg-emerald-200/30 rounded-full animate-bounce" style={{ animationDuration: `${4 + index * 0.5}s` }}></div>
                  <div className="absolute top-4 right-8 w-2 h-2 bg-teal-400/60 rounded-full animate-ping" style={{ animationDuration: `${3 + index * 0.3}s` }}></div>
                </div>
                <CardHeader className="relative z-10">
                  <div className={`w-16 h-16 ${reason.bgColor} rounded-full flex items-center justify-center mx-auto mb-4 shadow-md`}>
                    <reason.icon className={`w-8 h-8 ${reason.color}`} />
                  </div>
                  <CardTitle className="text-lg text-gray-900">{reason.title}</CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
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
                  <Card className="bg-gradient-to-br from-white to-teal-50/20 border-teal-200 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                    {/* Internal animated blobs */}
                    <div className="absolute inset-0 pointer-events-none">
                      <div className="absolute -top-3 -right-3 w-16 h-16 bg-teal-100/30 rounded-full animate-pulse" style={{ animationDuration: '6s' }}></div>
                      <div className="absolute -bottom-2 -left-2 w-12 h-12 bg-emerald-200/40 rounded-full animate-bounce" style={{ animationDuration: '7s' }}></div>
                      <div className="absolute top-8 right-12 w-4 h-4 bg-teal-400/40 rounded-full animate-ping" style={{ animationDuration: '4s' }}></div>
                      <div className="absolute bottom-12 left-8 w-2 h-2 bg-emerald-400/60 rounded-full animate-ping" style={{ animationDuration: '3s' }}></div>
                      <div className="absolute top-16 left-1/3 text-teal-300/20 text-lg animate-spin" style={{ animationDuration: '25s' }}>+</div>
                    </div>
                    <CardHeader className="relative z-10">
                      <CardTitle className="text-2xl text-center text-teal-700">{option.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6 relative z-10">
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
                  <Card className="h-full bg-gradient-to-br from-white to-teal-50/20 border-teal-200 shadow-lg relative overflow-hidden">
                    {/* Internal animated blobs */}
                    <div className="absolute inset-0 pointer-events-none">
                      <div className="absolute -top-2 -right-2 w-12 h-12 bg-teal-100/30 rounded-full animate-pulse" style={{ animationDuration: `${6 + index}s` }}></div>
                      <div className="absolute -bottom-1 -left-1 w-8 h-8 bg-emerald-200/40 rounded-full animate-bounce" style={{ animationDuration: `${5 + index * 0.5}s` }}></div>
                      <div className="absolute top-6 right-8 w-3 h-3 bg-teal-400/50 rounded-full animate-ping" style={{ animationDuration: `${4 + index * 0.3}s` }}></div>
                    </div>
                    <CardHeader className="relative z-10">
                      <CardTitle className="text-xl text-center text-teal-700">{option.subtitle}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6 relative z-10">
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
                      ? 'bg-teal-600 scale-125' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to sedation option ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* General Anaesthetic Fees */}
        <div className="mb-16">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-white to-emerald-50/30 border-emerald-200 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden">
              {/* Internal animated blobs */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-3 -right-3 w-16 h-16 bg-emerald-100/30 rounded-full animate-pulse" style={{ animationDuration: '7s' }}></div>
                <div className="absolute -bottom-2 -left-2 w-12 h-12 bg-teal-200/40 rounded-full animate-bounce" style={{ animationDuration: '6s' }}></div>
                <div className="absolute top-12 right-16 w-4 h-4 bg-emerald-400/40 rounded-full animate-ping" style={{ animationDuration: '4s' }}></div>
                <div className="absolute bottom-16 left-12 w-2 h-2 bg-teal-400/60 rounded-full animate-ping" style={{ animationDuration: '3s' }}></div>
                <div className="absolute top-20 left-1/4 text-emerald-300/20 text-xl animate-spin" style={{ animationDuration: '25s' }}>+</div>
                <div className="absolute bottom-24 right-1/3 text-teal-300/25 text-lg animate-spin" style={{ animationDuration: '30s' }}>+</div>
              </div>
              
              <CardHeader className="relative z-10">
                <CardTitle className="text-3xl font-bold text-center text-emerald-700 mb-2">
                  General Anaesthetic Fees
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-6 relative z-10">
                <div className="space-y-4">
                  <p className="text-gray-600 leading-relaxed">
                    Treatment under general anaesthetic will incur three main costs:
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-emerald-50 border-l-4 border-emerald-400 p-4 rounded-r-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="bg-emerald-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">1</span>
                        <h3 className="font-semibold text-emerald-800">Dental Treatment Fee</h3>
                      </div>
                      <p className="text-emerald-700 text-sm">
                        Payable directly to i-Care Paediatric Dentistry
                      </p>
                    </div>
                    
                    <div className="bg-teal-50 border-l-4 border-teal-400 p-4 rounded-r-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="bg-teal-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">2</span>
                        <h3 className="font-semibold text-teal-800">Hospital Fee</h3>
                      </div>
                      <p className="text-teal-700 text-sm">
                        Payable directly to the hospital
                      </p>
                    </div>
                    
                    <div className="bg-emerald-50 border-l-4 border-emerald-400 p-4 rounded-r-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="bg-emerald-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">3</span>
                        <h3 className="font-semibold text-emerald-800">Anaesthetist Fee</h3>
                      </div>
                      <p className="text-emerald-700 text-sm">
                        Payable directly to the anaesthetic group
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-r-lg mt-6">
                    <h3 className="font-semibold text-gray-800 mb-2">Important Payment Information</h3>
                    <div className="space-y-2 text-gray-700 text-sm">
                      <p>• You will be provided with the contact details for the hospital as well as the anaesthetic group.</p>
                      <p>• Please get in touch with the hospital and the anaesthetic groups directly to confirm fees payable.</p>
                      <p>• The hospital and anaesthetic fees are payable prior to surgery.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Treatment Planning Process */}
        <div className="mb-16">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-white to-teal-50/30 border-teal-200 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden">
              {/* Internal animated blobs */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-3 -right-3 w-16 h-16 bg-teal-100/30 rounded-full animate-pulse" style={{ animationDuration: '8s' }}></div>
                <div className="absolute -bottom-2 -left-2 w-12 h-12 bg-emerald-200/40 rounded-full animate-bounce" style={{ animationDuration: '7s' }}></div>
                <div className="absolute top-12 right-16 w-4 h-4 bg-teal-400/40 rounded-full animate-ping" style={{ animationDuration: '5s' }}></div>
                <div className="absolute bottom-16 left-12 w-2 h-2 bg-emerald-400/60 rounded-full animate-ping" style={{ animationDuration: '4s' }}></div>
                <div className="absolute top-20 left-1/4 text-teal-300/20 text-xl animate-spin" style={{ animationDuration: '28s' }}>+</div>
                <div className="absolute bottom-24 right-1/3 text-emerald-300/25 text-lg animate-spin" style={{ animationDuration: '32s' }}>+</div>
              </div>
              
              <CardHeader className="relative z-10">
                <CardTitle className="text-3xl font-bold text-center text-teal-700 mb-2">
                  Treatment Plan
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-6 relative z-10">
                <div className="space-y-6">
                  <div className="bg-teal-50 border-l-4 border-teal-400 p-6 rounded-r-lg">
                    <h3 className="text-xl font-semibold text-teal-800 mb-4">
                      Initial Consultation & Estimate
                    </h3>
                    <p className="text-teal-700 leading-relaxed mb-4">
                      At the initial comprehensive consultation, you will be provided with a treatment plan estimate (with health fund item numbers). Please be aware that the treatment is an estimate only and can vary depending on what is found at the time of the general anaesthetic.
                    </p>
                    <div className="bg-teal-100 p-4 rounded-lg">
                      <p className="text-teal-800 text-sm font-medium">
                        📋 <strong>Important:</strong> If radiographs are to be taken at the time of the surgery, a change in the treatment plan is more likely.
                      </p>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-emerald-50 border-l-4 border-emerald-400 p-4 rounded-r-lg">
                      <h3 className="font-semibold text-emerald-800 mb-2">Payment Adjustments</h3>
                      <div className="space-y-2 text-emerald-700 text-sm">
                        <p>• <strong>Extra treatment needed:</strong> Additional payment due on the following business day after surgery</p>
                        <p>• <strong>Less treatment required:</strong> You will be reimbursed the difference in cost</p>
                      </div>
                    </div>
                    
                    <div className="bg-teal-50 border-l-4 border-teal-400 p-4 rounded-r-lg">
                      <h3 className="font-semibold text-teal-800 mb-2">Required Paperwork</h3>
                      <div className="space-y-2 text-teal-700 text-sm">
                        <p>• Information sheets</p>
                        <p>• Consent forms</p>
                        <p>• Surgery location and timing details</p>
                        <p>• Pre-operative instructions</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-r-lg">
                    <h3 className="font-semibold text-gray-800 mb-2">Our Support Process</h3>
                    <p className="text-gray-700 text-sm">
                      If your child requires treatment under general anaesthetic, our staff will go through the required paperwork, including information sheet, consents, and information about where and when the surgery will be undertaken.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Safety and Preparation */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <Card className="bg-gradient-to-br from-white to-teal-50/30 border-teal-200 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden">
            {/* Internal animated blobs */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute -top-2 -right-2 w-14 h-14 bg-teal-100/30 rounded-full animate-pulse" style={{ animationDuration: '6s' }}></div>
              <div className="absolute -bottom-1 -left-1 w-10 h-10 bg-emerald-200/40 rounded-full animate-bounce" style={{ animationDuration: '5s' }}></div>
              <div className="absolute top-8 right-8 w-3 h-3 bg-teal-400/50 rounded-full animate-ping" style={{ animationDuration: '4s' }}></div>
              <div className="absolute bottom-16 right-4 text-teal-300/20 text-sm animate-spin" style={{ animationDuration: '25s' }}>+</div>
            </div>
            <CardHeader className="relative z-10">
              <CardTitle className="flex items-center gap-2 text-teal-700">
                <Calendar className="w-6 h-6 text-teal-600" />
                Booking your child's theatre date
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 relative z-10">
              <div className="bg-teal-50 border-l-4 border-teal-400 p-4 rounded-r-lg">
                <h3 className="font-semibold text-teal-800 mb-2">Required Deposit</h3>
                <p className="text-teal-700 text-sm mb-2">
                  To book your child's spot at hospital, a <strong>non-refundable $300 deposit</strong> is taken.
                </p>
                <p className="text-teal-700 text-sm">
                  Payment options: Credit card (in person or over the phone) or Direct Debit
                </p>
              </div>
              
              <div className="space-y-3">
                <div className="bg-orange-50 border-l-4 border-orange-400 p-3 rounded-r-lg">
                  <h4 className="font-semibold text-orange-800 text-sm">Payment Timeline</h4>
                  <p className="text-orange-700 text-sm">
                    The remaining Dental Treatment Fee is payable <strong>07 days prior to surgery</strong>
                  </p>
                </div>
                
                <div className="bg-blue-50 border-l-4 border-blue-400 p-3 rounded-r-lg">
                  <h4 className="font-semibold text-blue-800 text-sm">If Your Child Becomes Unwell</h4>
                  <p className="text-blue-700 text-sm">
                    Please let us know immediately, and we can organise to reschedule your child's theatre date
                  </p>
                </div>
                
                <div className="bg-red-50 border-l-4 border-red-400 p-3 rounded-r-lg">
                  <h4 className="font-semibold text-red-800 text-sm">Important Payment Policy</h4>
                  <p className="text-red-700 text-sm">
                    If the full payment is not received 07 days prior to surgery, your child's theatre date will be rescheduled even if the $300 deposit has been paid
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-white to-emerald-50/30 border-emerald-200 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden">
            {/* Internal animated blobs */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute -top-2 -right-2 w-14 h-14 bg-emerald-100/30 rounded-full animate-pulse" style={{ animationDuration: '7s' }}></div>
              <div className="absolute -bottom-1 -left-1 w-10 h-10 bg-teal-200/40 rounded-full animate-bounce" style={{ animationDuration: '6s' }}></div>
              <div className="absolute top-8 right-8 w-3 h-3 bg-emerald-400/50 rounded-full animate-ping" style={{ animationDuration: '5s' }}></div>
              <div className="absolute bottom-16 right-4 text-emerald-300/20 text-sm animate-spin" style={{ animationDuration: '28s' }}>+</div>
            </div>
            <CardHeader className="relative z-10">
              <CardTitle className="flex items-center gap-2 text-emerald-700">
                <Shield className="w-6 h-6 text-emerald-600" />
                Private Health Insurance
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 relative z-10">
              <p className="text-gray-600 leading-relaxed">
                If your child holds private health insurance, please get in touch with your health fund if you would like to know how much they will reimburse.
              </p>
              
              <div className="bg-emerald-50 border-l-4 border-emerald-400 p-4 rounded-r-lg">
                <h3 className="font-semibold text-emerald-800 mb-2">Treatment Plan Codes</h3>
                <p className="text-emerald-700 text-sm">
                  Your child's treatment plan has the codes you need to provide to your health fund <br/>
                  <strong>e.g. 022, 111, 121</strong>
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-teal-50 border-l-4 border-teal-400 p-3 rounded-r-lg">
                  <h4 className="font-semibold text-teal-800 text-sm">'Extras' Cover</h4>
                  <p className="text-teal-700 text-sm">
                    Will pay towards the dental treatment
                  </p>
                </div>
                
                <div className="bg-blue-50 border-l-4 border-blue-400 p-3 rounded-r-lg">
                  <h4 className="font-semibold text-blue-800 text-sm">'Hospital' Cover</h4>
                  <p className="text-blue-700 text-sm">
                    Will contribute towards the hospital fee
                  </p>
                </div>
              </div>
              
              <div className="bg-green-50 border-l-4 border-green-400 p-3 rounded-r-lg">
                <h4 className="font-semibold text-green-800 text-sm">💡 Money-Saving Tip</h4>
                <p className="text-green-700 text-sm">
                  Some health funds do not charge an excess when children are admitted to hospital, so it is worth checking with your health fund.
                </p>
              </div>
              
              <div className="bg-gray-50 border-l-4 border-gray-400 p-3 rounded-r-lg">
                <h4 className="font-semibold text-gray-800 text-sm">Claims Process</h4>
                <p className="text-gray-700 text-sm">
                  Once your child has had the dental treatment completed, an invoice will be emailed to you. You can then use this invoice to claim your rebate through your health fund.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CDBS and Questions */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <Card className="bg-gradient-to-br from-white to-red-50/30 border-red-200 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden">
            {/* Internal animated blobs */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute -top-2 -right-2 w-14 h-14 bg-red-100/30 rounded-full animate-pulse" style={{ animationDuration: '6s' }}></div>
              <div className="absolute -bottom-1 -left-1 w-10 h-10 bg-orange-200/40 rounded-full animate-bounce" style={{ animationDuration: '5s' }}></div>
              <div className="absolute top-8 right-8 w-3 h-3 bg-red-400/50 rounded-full animate-ping" style={{ animationDuration: '4s' }}></div>
              <div className="absolute bottom-16 right-4 text-red-300/20 text-sm animate-spin" style={{ animationDuration: '25s' }}>+</div>
            </div>
            <CardHeader className="relative z-10">
              <CardTitle className="flex items-center gap-2 text-red-700">
                <AlertTriangle className="w-6 h-6 text-red-600" />
                Child Dental Benefit Schedule (CDBS)
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 relative z-10">
              <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-r-lg">
                <h3 className="font-semibold text-red-800 mb-2">⚠️ Important Limitation</h3>
                <p className="text-red-700 text-sm">
                  Unfortunately the CDBS scheme does not contribute towards any dental treatment undertaken at the hospital.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-white to-blue-50/30 border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden">
            {/* Internal animated blobs */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute -top-2 -right-2 w-14 h-14 bg-blue-100/30 rounded-full animate-pulse" style={{ animationDuration: '7s' }}></div>
              <div className="absolute -bottom-1 -left-1 w-10 h-10 bg-teal-200/40 rounded-full animate-bounce" style={{ animationDuration: '6s' }}></div>
              <div className="absolute top-8 right-8 w-3 h-3 bg-blue-400/50 rounded-full animate-ping" style={{ animationDuration: '5s' }}></div>
              <div className="absolute bottom-16 right-4 text-blue-300/20 text-sm animate-spin" style={{ animationDuration: '28s' }}>+</div>
            </div>
            <CardHeader className="relative z-10">
              <CardTitle className="flex items-center gap-2 text-blue-700">
                <Heart className="w-6 h-6 text-blue-600" />
                Questions?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 relative z-10">
              <p className="text-gray-600 leading-relaxed">
                Going to hospital with your child can be a stressful and overwhelming process. We hope to make it as easy and straightforward as possible.
              </p>
              
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
                <h3 className="font-semibold text-blue-800 mb-3">Get in Touch</h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-blue-600 font-semibold text-sm">📞 Phone:</span>
                    <a href="tel:0733433322" className="text-blue-700 hover:text-blue-900 text-sm font-medium">(07) 3343 3322</a>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-blue-600 font-semibold text-sm">✉️ Email:</span>
                    <a href="mailto:paedsdentga@gmail.com" className="text-blue-700 hover:text-blue-900 text-sm font-medium">paedsdentga@gmail.com</a>
                  </div>
                </div>
                <p className="text-blue-600 text-xs mt-3 font-medium">
                  If you have any questions at all, please do not hesitate to get in touch with us.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="bg-teal-600 rounded-2xl p-8 text-center text-white relative overflow-hidden">
          {/* Internal animated blobs */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-white/10 rounded-full animate-pulse" style={{ animationDuration: '8s' }}></div>
            <div className="absolute -bottom-3 -right-3 w-16 h-16 bg-emerald-300/20 rounded-full animate-bounce" style={{ animationDuration: '6s' }}></div>
            <div className="absolute top-8 right-12 w-6 h-6 bg-white/15 rounded-full animate-ping" style={{ animationDuration: '4s' }}></div>
            <div className="absolute bottom-12 left-8 w-4 h-4 bg-emerald-200/30 rounded-full animate-ping" style={{ animationDuration: '3s' }}></div>
            <div className="absolute top-12 left-1/4 text-white/10 text-2xl animate-spin" style={{ animationDuration: '30s' }}>+</div>
            <div className="absolute bottom-16 right-1/3 text-emerald-200/20 text-lg animate-spin" style={{ animationDuration: '25s' }}>+</div>
          </div>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-4">
              Discuss Sedation Options for Your Child
            </h2>
            <p className="text-xl mb-6 text-teal-100">
              Schedule a consultation to determine the best sedation approach for your child&apos;s needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" variant="secondary" className="bg-white text-teal-600 hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
                  Schedule Consultation
                </Button>
              </Link>
              <Link href="tel:36230000">
                <Button size="lg" variant="outline" className="border-white hover:bg-white text-teal-600 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
                  Call: 36230000
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}