import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, Heart, Users } from 'lucide-react';

export function AboutSection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=500&h=625&fit=crop"
                alt="Dr. Sobia in her practice"
                width={500}
                height={625}
                className="object-cover w-full h-full"
              />
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">15+</div>
                <div className="text-sm text-gray-600">Years of Excellence</div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Meet Dr. Sobia
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Dr. Sobia is a dedicated pediatric dentist with over 15 years of experience 
                in providing exceptional dental care for children. Her gentle approach and 
                child-friendly techniques help create positive dental experiences that last a lifetime.
              </p>
              <p className="text-gray-600 leading-relaxed">
                She believes that every child deserves to have a healthy, beautiful smile. 
                Through preventive care, education, and state-of-the-art treatments, she helps 
                children develop excellent oral health habits.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="px-3 py-1">
                Pediatric Specialist
              </Badge>
              <Badge variant="secondary" className="px-3 py-1">
                Child Psychology Certified
              </Badge>
              <Badge variant="secondary" className="px-3 py-1">
                Sedation Certified
              </Badge>
            </div>

            {/* Qualifications */}
            <div className="grid sm:grid-cols-3 gap-4">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-4">
                  <Award className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <h4 className="font-semibold text-sm">Board Certified</h4>
                  <p className="text-xs text-gray-600">Pediatric Dentistry</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-4">
                  <Heart className="w-8 h-8 text-red-500 mx-auto mb-2" />
                  <h4 className="font-semibold text-sm">Gentle Care</h4>
                  <p className="text-xs text-gray-600">Child-Friendly Approach</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-4">
                  <Users className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <h4 className="font-semibold text-sm">Family Focused</h4>
                  <p className="text-xs text-gray-600">Whole Family Care</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}