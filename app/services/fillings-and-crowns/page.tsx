import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CircleDot, CheckCircle, Calendar, Clock, Sparkles, Shield } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Fillings & Crowns | i-Care Paediatric Dentistry',
  description: 'Professional dental fillings and crowns for children. We offer composite fillings, composite crowns for front teeth, and durable stainless steel crowns for back teeth.',
};

export default function FillingsAndCrownsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <CircleDot className="w-8 h-8 text-blue-600" />
              <span className="text-blue-600 font-semibold">Fillings & Crowns</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Restore Your Child&apos;s Smile
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Professional dental restoration services designed specifically for children,
              using the latest techniques and child-friendly materials.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button size="lg">
                  Book Appointment
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
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&h=600&fit=crop"
                alt="Dental Fillings and Crowns"
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
            Our Restoration Services
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CircleDot className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-lg">Composite Fillings</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Tooth-colored fillings that restore and protect damaged teeth while maintaining a natural appearance.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-8 h-8 text-purple-600" />
                </div>
                <CardTitle className="text-lg">Front Teeth Crowns</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Aesthetic composite crowns for front teeth, perfect for repairing visible damage or discoloration.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle className="text-lg">Back Teeth Crowns</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Durable stainless steel or white zirconia crowns for maximum protection of back teeth.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Detailed Information */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Treatment Process
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-blue-600 font-bold text-sm">1</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Examination</h3>
                  <p className="text-gray-600">
                    Thorough assessment of the affected tooth to determine the best treatment approach.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-blue-600 font-bold text-sm">2</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Preparation</h3>
                  <p className="text-gray-600">
                    Gentle removal of decay and preparation of the tooth for restoration.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-blue-600 font-bold text-sm">3</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Restoration</h3>
                  <p className="text-gray-600">
                    Application of the filling or placement of the crown using child-friendly techniques.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-blue-600 font-bold text-sm">4</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Final Check</h3>
                  <p className="text-gray-600">
                    Ensuring proper fit, bite alignment, and comfort for your child.
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
                  When Crowns Are Needed
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900">Extensive Decay</h4>
                  <p className="text-gray-600 text-sm">When a tooth has significant damage or decay</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">After Nerve Treatment</h4>
                  <p className="text-gray-600 text-sm">To protect teeth that have had pulp therapy</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Developmental Issues</h4>
                  <p className="text-gray-600 text-sm">For teeth that haven&apos;t formed properly</p>
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
                  &quot;The team made my child feel completely at ease during their crown procedure. 
                  The result looks natural and has been very durable.&quot;
                </blockquote>
                <p className="text-sm text-gray-500 mt-2">- Michael R., Parent</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Why Choose Our Dental Restorations
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Child-Friendly Materials</h3>
              <p className="text-gray-600">
                Safe, durable materials specifically chosen for children&apos;s teeth.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Natural Appearance</h3>
              <p className="text-gray-600">
                Restorations that blend seamlessly with natural teeth.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Long-Lasting Results</h3>
              <p className="text-gray-600">
                Durable restorations that protect teeth through childhood.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-blue-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Start Your Child&apos;s Smile Restoration
          </h2>
          <p className="text-xl mb-6 text-blue-100">
            Schedule a consultation to discuss the best restoration options for your child
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