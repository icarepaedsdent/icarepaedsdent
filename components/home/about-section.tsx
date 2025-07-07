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
                src="https://i.ibb.co/xqKJRx7B/Sobia-Zafar.jpg"
                alt="Associate Professor Sobia Zafar - Specialist Paediatric Dentist"
                width={500}
                height={625}
                className="object-cover w-full h-full"
              />
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">20+</div>
                <div className="text-sm text-gray-600">Years of Excellence</div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Meet Associate Professor Sobia Zafar
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                A/Prof Sobia Zafar is a specialist paediatric dentist with over 20 years of clinical and academic 
                experience. She is renowned not only for her advanced clinical skills, but also for her genuine 
                warmth, empathy, and unwavering commitment to children&apos;s wellbeing.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Dr Sobia understands that every child is unique, and she goes above and beyond to create a safe, 
                welcoming, and non-judgemental environment where children feel heard, valued, and comfortable. 
                Her calm and reassuring manner helps even the most anxious children feel at ease.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
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

            {/* Qualifications */}
            <div className="grid sm:grid-cols-3 gap-4 overflow-x-auto">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-4">
                  <Award className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <h4 className="font-semibold text-sm">PhD Qualified</h4>
                  <p className="text-xs text-gray-600">University of Otago</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-4">
                  <Heart className="w-8 h-8 text-red-500 mx-auto mb-2" />
                  <h4 className="font-semibold text-sm">Inclusive Care</h4>
                  <p className="text-xs text-gray-600">Special Needs & CALD</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-4">
                  <Users className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <h4 className="font-semibold text-sm">Academic Leader</h4>
                  <p className="text-xs text-gray-600">University of Queensland</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}