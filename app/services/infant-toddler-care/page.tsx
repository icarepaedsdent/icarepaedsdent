import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Baby, CheckCircle, Calendar, Clock, Shield, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Infant & Toddler Care | i-Care Paediatric Dentistry',
  description: 'Specialized dental care for infants and toddlers. Early prevention and gentle treatment approach for your little one&apos;s oral health.',
};

export default function InfantToddlerCarePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Baby className="w-8 h-8 text-teal-600" />
              <span className="text-teal-600 font-semibold">Infant & Toddler Care</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Gentle Dental Care for Little Smiles
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Specialized care for your little one&apos;s oral health, starting from their very first tooth.
              Early prevention and gentle treatment in a child-friendly environment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button size="lg">
                  Book First Visit
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
                src="https://images.unsplash.com/photo-1544126592-807ade215a0b?w=600&h=600&fit=crop"
                alt="Infant Dental Care"
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
            Our Early Care Services
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Baby className="w-8 h-8 text-teal-600" />
                </div>
                <CardTitle className="text-lg">First Dental Visit</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Gentle introduction to dental care, typically recommended by age one or when first tooth appears.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-lg">Preventive Care</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Early cavity prevention, fluoride treatments, and oral health guidance for parents.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle className="text-lg">Growth Monitoring</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Tracking oral development and addressing concerns early for optimal health.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Detailed Information */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Early Dental Care Journey
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-teal-600 font-bold text-sm">1</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">First Visit Experience</h3>
                  <p className="text-gray-600">
                    Gentle examination, cleaning, and friendly introduction to dental care.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-teal-600 font-bold text-sm">2</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Preventive Measures</h3>
                  <p className="text-gray-600">
                    Early cavity prevention techniques and proper oral hygiene guidance.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-teal-600 font-bold text-sm">3</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Development Tracking</h3>
                  <p className="text-gray-600">
                    Monitoring tooth eruption and jaw development patterns.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-teal-600 font-bold text-sm">4</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Parent Education</h3>
                  <p className="text-gray-600">
                    Guidance on nutrition, pacifier use, and thumb-sucking habits.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-teal-600" />
                  Parent&apos;s Guide
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900">Home Care Tips</h4>
                  <p className="text-gray-600 text-sm">Proper cleaning techniques for infant gums and baby teeth</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Feeding Practices</h4>
                  <p className="text-gray-600 text-sm">Guidance on bottle use and transition to cups</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Habit Management</h4>
                  <p className="text-gray-600 text-sm">Addressing pacifier use and thumb-sucking</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-green-600" />
                  Parent Testimonial
                </CardTitle>
              </CardHeader>
              <CardContent>
                <blockquote className="text-gray-600 italic">
                  &quot;The team made my baby&apos;s first dental visit so comfortable and stress-free. 
                  Their gentle approach and helpful guidance gave us confidence in caring for her teeth.&quot;
                </blockquote>
                <p className="text-sm text-gray-500 mt-2">- Emma L., Parent</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Why Choose Early Dental Care
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Baby className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Early Prevention</h3>
              <p className="text-gray-600">
                Catch and prevent issues before they become problems.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Gentle Approach</h3>
              <p className="text-gray-600">
                Child-friendly environment and caring team.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Lifelong Health</h3>
              <p className="text-gray-600">
                Building foundation for lasting oral health.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-teal-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Start Your Child&apos;s Dental Journey
          </h2>
          <p className="text-xl mb-6 text-teal-100">
            Schedule your little one&apos;s first dental visit with our caring team
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="text-teal-600 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
                <Calendar className="w-5 h-5 mr-2" />
                Book First Visit
              </Button>
            </Link>
            <Link href="tel:+1234567890">
              <Button size="lg" variant="secondary" className="text-teal-600 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
                <Clock className="w-5 h-5 mr-2" />
                Call: (123) 456-7890
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 