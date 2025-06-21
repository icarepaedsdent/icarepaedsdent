import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CircleDot, CheckCircle, Calendar, Clock, Shield, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Space Maintainers | i-Care Paediatric Dentistry',
  description: 'Custom-fitted space maintainers to preserve proper tooth spacing after early loss of baby teeth. Ensuring proper development of permanent teeth.',
};

export default function SpaceMaintainersPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <CircleDot className="w-8 h-8 text-purple-600" />
              <span className="text-purple-600 font-semibold">Space Maintainers</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Preserving Space for Healthy Smiles
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Custom-fitted space maintainers to ensure proper tooth development after early
              loss of baby teeth, preventing future orthodontic complications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button size="lg">
                  Book Consultation
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
                src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&h=600&fit=crop"
                alt="Space Maintainers for Children"
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
            Our Space Maintainer Solutions
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CircleDot className="w-8 h-8 text-purple-600" />
                </div>
                <CardTitle className="text-lg">Custom Fitting</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Precisely fitted appliances made from hypoallergenic stainless steel for comfort.
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
                  Preventing orthodontic issues by maintaining proper spacing for adult teeth.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle className="text-lg">Expert Care</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Professional monitoring and maintenance for optimal results.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Detailed Information */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Understanding Space Maintainers
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-purple-600 font-bold text-sm">1</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">What They Are</h3>
                  <p className="text-gray-600">
                    Custom orthodontic appliances that hold space for unerupted adult teeth.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-purple-600 font-bold text-sm">2</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">When They&apos;re Needed</h3>
                  <p className="text-gray-600">
                    After early loss of baby teeth due to decay, infection, or trauma.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-purple-600 font-bold text-sm">3</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">How They Work</h3>
                  <p className="text-gray-600">
                    Prevent adjacent teeth from tilting or drifting into the empty space.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-purple-600 font-bold text-sm">4</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Duration</h3>
                  <p className="text-gray-600">
                    Worn until permanent teeth are ready to emerge naturally.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-purple-600" />
                  Care Instructions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900">Daily Care</h4>
                  <p className="text-gray-600 text-sm">Maintain good oral hygiene with regular brushing</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Food Restrictions</h4>
                  <p className="text-gray-600 text-sm">Avoid sticky foods and hard candies</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Regular Check-ups</h4>
                  <p className="text-gray-600 text-sm">Visit us for monitoring and adjustments</p>
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
                  &quot;The space maintainer has been a great solution for my daughter after 
                  losing her baby tooth early. The team made the process easy and comfortable.&quot;
                </blockquote>
                <p className="text-sm text-gray-500 mt-2">- Michelle R., Parent</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Benefits of Space Maintainers
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CircleDot className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Prevent Crowding</h3>
              <p className="text-gray-600">
                Maintains proper spacing for adult teeth.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Reduce Treatment</h3>
              <p className="text-gray-600">
                Minimizes future orthodontic needs.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Easy Maintenance</h3>
              <p className="text-gray-600">
                Simple care routine for long-term success.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-purple-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Protect Your Child&apos;s Smile
          </h2>
          <p className="text-xl mb-6 text-purple-100">
            Schedule a consultation to learn if space maintainers are right for your child
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="text-purple-600 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
                <Calendar className="w-5 h-5 mr-2" />
                Book Consultation
              </Button>
            </Link>
            <Link href="tel:+1234567890">
              <Button size="lg" variant="secondary" className="text-purple-600 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
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