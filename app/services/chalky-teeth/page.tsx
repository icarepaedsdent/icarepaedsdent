import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, CheckCircle, Calendar, Clock, Shield, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Chalky Teeth | i-Care Paediatric Dentistry',
  description: 'Early diagnosis and management of hypomineralized or "chalky" teeth in children. Specialized treatment for first permanent molars and incisors.',
};

export default function ChalkyTeethPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Star className="w-8 h-8 text-blue-600" />
              <span className="text-blue-600 font-semibold">Chalky Teeth</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Expert Care for Chalky Teeth
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Early diagnosis and specialized treatment for hypomineralized teeth,
              ensuring the best outcomes for your child&apos;s dental health.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button size="lg">
                  Book Consultation
                </Button>
              </Link>
              <Link href="tel:+1234567890">
                <Button size="lg" variant="outline">
                  Call Now
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&h=600&fit=crop"
                alt="Dental Care for Chalky Teeth"
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
            Our Treatment Approach
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-lg">Early Diagnosis</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Prompt identification of hypomineralization in first permanent molars and incisors.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-purple-600" />
                </div>
                <CardTitle className="text-lg">Preventive Care</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Specialized treatments to strengthen and protect affected teeth from further damage.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle className="text-lg">Restorative Solutions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Advanced restoration techniques specifically designed for hypomineralized teeth.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Detailed Information */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Understanding Chalky Teeth
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-blue-600 font-bold text-sm">1</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">What Are Chalky Teeth?</h3>
                  <p className="text-gray-600">
                    A condition where teeth haven&apos;t hardened properly during development, making them more susceptible to decay.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-blue-600 font-bold text-sm">2</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Common Signs</h3>
                  <p className="text-gray-600">
                    White, cream, or brown patches on teeth, increased sensitivity, and prone to breakdown.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-blue-600 font-bold text-sm">3</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Treatment Options</h3>
                  <p className="text-gray-600">
                    From preventive measures to restorative treatments, tailored to your child&apos;s specific needs.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-blue-600 font-bold text-sm">4</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Long-term Care</h3>
                  <p className="text-gray-600">
                    Ongoing monitoring and maintenance to ensure the best possible outcomes.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                  Treatment Recommendations
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900">Regular Monitoring</h4>
                  <p className="text-gray-600 text-sm">Frequent check-ups to track tooth development</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Preventive Care</h4>
                  <p className="text-gray-600 text-sm">Special cleaning and fluoride treatments</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Restorative Options</h4>
                  <p className="text-gray-600 text-sm">Fillings, crowns, or other treatments as needed</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-green-600" />
                  What Parents Say
                </CardTitle>
              </CardHeader>
              <CardContent>
                <blockquote className="text-gray-600 italic">
                  &quot;The early diagnosis and treatment of my son&apos;s chalky teeth prevented serious 
                  complications. The team&apos;s expertise made all the difference.&quot;
                </blockquote>
                <p className="text-sm text-gray-500 mt-2">- Rachel K., Parent</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Why Choose Our Chalky Teeth Treatment
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Early Detection</h3>
              <p className="text-gray-600">
                Identifying and treating chalky teeth before complications arise.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Specialized Care</h3>
              <p className="text-gray-600">
                Expert treatment tailored specifically for hypomineralized teeth.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Long-term Success</h3>
              <p className="text-gray-600">
                Proven treatments that protect and preserve affected teeth.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-blue-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Get Expert Care for Your Child&apos;s Chalky Teeth
          </h2>
          <p className="text-xl mb-6 text-blue-100">
            Early intervention is key. Schedule a consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="text-blue-600 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
                <Calendar className="w-5 h-5 mr-2" />
                Book Appointment
              </Button>
            </Link>
            <Link href="tel:+1234567890">
              <Button size="lg" variant="secondary" className="text-blue-600 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
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