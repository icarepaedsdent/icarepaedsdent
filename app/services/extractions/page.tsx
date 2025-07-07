import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Calendar, Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Extractions | i-Care Paediatric Dentistry',
  description: 'Safe and gentle tooth extractions for children. We prioritize your child\'s comfort with sedation options available when needed.',
};

export default function ExtractionsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Extractions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            While we always aim to save teeth whenever possible, sometimes extractions
            are necessary for your child&apos;s dental health.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* When Extractions Are Needed */}
          <Card className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              When Are Extractions Necessary?
            </h2>
            <p className="text-gray-600 mb-6">
              Our policy at i-Care paediatric dentistry is to save all teeth whenever possible, 
              but there are occasions when an extraction may be necessary. These include:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>Extensive decay</li>
              <li>Persistent tooth ache</li>
              <li>Abscessed teeth</li>
              <li>Severely chalky molars</li>
              <li>Orthodontic reasons</li>
            </ul>
          </Card>

          {/* Comfort and Care */}
          <Card className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Ensuring Your Child&apos;s Comfort
            </h2>
            <p className="text-gray-600 mb-6">
              We understand that the thought of tooth removal can be overwhelming for both you 
              and your child. Our approach includes:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>Detailed guidance on preparing your child for the procedure</li>
              <li>Gentle and caring approach throughout the process</li>
              <li>Sedation options for anxious children</li>
              <li>Clear post-procedure care instructions</li>
            </ul>
          </Card>

          {/* Image Section */}
          <Card className="p-6">
            <div className="relative h-[300px] mb-6 rounded-lg overflow-hidden">
              <Image
                src="/sample3.JPG"
                alt="Pediatric Dental Care"
                fill
                className="object-cover"
              />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Our Extraction Process
            </h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Thorough examination and explanation</li>
              <li>Gentle and efficient procedure</li>
              <li>Multiple sedation options available</li>
              <li>Comprehensive aftercare support</li>
            </ul>
          </Card>

          {/* Sedation Options */}
          <Card className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Available Sedation Options
            </h2>
            <p className="text-gray-600 mb-6">
              For children who may struggle to cooperate or feel anxious, we offer various 
              sedation options to ensure their comfort throughout the procedure.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Nitrous oxide (laughing gas)</li>
              <li>Oral sedation</li>
              <li>General anesthesia when necessary</li>
              <li>Customized approach based on your child&apos;s needs</li>
            </ul>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="bg-blue-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Schedule Your Child&apos;s Appointment?
          </h2>
          <p className="text-xl mb-6 text-blue-100">
            Contact us today to book a consultation and give your child the best dental care
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
                <Phone className="w-5 h-5 mr-2" />
                Call: 36230000
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 