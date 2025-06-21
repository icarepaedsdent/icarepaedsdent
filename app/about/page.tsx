import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, Heart, Users, Clock } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Dr. Sobia
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dedicated to providing exceptional pediatric dental care with a gentle, compassionate approach
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Caring for Your Child's Smile
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Dr. Sobia is a highly qualified pediatric dentist with over 15 years of experience 
                in providing comprehensive dental care for children from infancy through adolescence. 
                Her gentle approach and child-friendly techniques help create positive dental experiences 
                that last a lifetime.
              </p>
              <p className="text-gray-600 leading-relaxed">
                She believes that every child deserves to have a healthy, beautiful smile. Through 
                preventive care, education, and state-of-the-art treatments, she helps children 
                develop excellent oral health habits while maintaining their comfort and trust.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="px-3 py-1">
                15+ Years Experience
              </Badge>
              <Badge variant="secondary" className="px-3 py-1">
                Pediatric Specialist
              </Badge>
              <Badge variant="secondary" className="px-3 py-1">
                Child Psychology Certified
              </Badge>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&h=600&fit=crop"
                alt="Dr. Sobia - Pediatric Dentist"
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
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Award className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Education</h3>
                <p className="text-sm text-gray-600">
                  DDS, Pediatric Dentistry Residency, Advanced Orthodontics Certification
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Heart className="w-12 h-12 text-red-500 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Specialization</h3>
                <p className="text-sm text-gray-600">
                  Pediatric Dentistry, Behavior Management, Preventive Care
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Users className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Memberships</h3>
                <p className="text-sm text-gray-600">
                  American Academy of Pediatric Dentistry, Australian Dental Association
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Clock className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Experience</h3>
                <p className="text-sm text-gray-600">
                  15+ years treating children, 5000+ happy patients
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Philosophy */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Our Philosophy
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Gentle Care</h3>
              <p className="text-gray-600">
                We use the latest techniques to ensure your child's comfort throughout every procedure.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Family Focused</h3>
              <p className="text-gray-600">
                We involve parents in the treatment process and provide education for the whole family.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Excellence</h3>
              <p className="text-gray-600">
                We strive for the highest standards of care using state-of-the-art technology.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}