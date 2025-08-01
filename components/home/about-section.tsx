import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, Heart, Users } from 'lucide-react';

export function AboutSection() {
  return (
    <section className="py-16 lg:py-24 bg-white relative overflow-hidden">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large floating blobs */}
        <div className="absolute top-1/3 -right-32 w-80 h-80 bg-emerald-100/30 rounded-full animate-bounce" style={{ animationDuration: '8s' }}></div>
        <div className="absolute bottom-0 left-1/4 w-48 h-48 bg-teal-200/50 rounded-full animate-pulse" style={{ animationDuration: '7s' }}></div>
        
        {/* Small floating dots */}
        <div className="absolute top-20 right-1/4 w-3 h-3 bg-teal-400 rounded-full animate-bounce" style={{ animationDuration: '3s', animationDelay: '0.5s' }}></div>
        <div className="absolute top-1/2 left-16 w-2 h-2 bg-emerald-500 rounded-full animate-ping" style={{ animationDuration: '4s' }}></div>
        <div className="absolute bottom-32 right-20 w-4 h-4 bg-teal-300 rounded-full animate-pulse" style={{ animationDuration: '5s' }}></div>
        
        {/* Decorative plus signs */}
        <div className="absolute top-40 left-20 text-teal-300 text-xl font-light animate-spin" style={{ animationDuration: '20s' }}>+</div>
        <div className="absolute bottom-40 right-32 text-emerald-300 text-lg font-light animate-spin" style={{ animationDuration: '15s' }}>+</div>
      </div>
      
      <div className="container mx-auto px-4 relative">
        <div className="relative">
          {/* Floating Image with Irregular Blob Shape */}
          <div className="lg:float-left lg:mr-8 mb-6 relative mx-auto lg:mx-0 w-fit">
            <div className="relative w-64 h-80 lg:w-80 lg:h-96">
              {/* Soft organic blob background with teal border */}
              <div className="absolute inset-0 bg-gradient-to-br from-teal-100 to-emerald-100 border-4 border-teal-400 shadow-2xl transform rotate-1" style={{ borderRadius: '73% 27% 83% 17% / 72% 39% 61% 28%' }}></div>
              
              {/* Image container */}
              <div className="absolute inset-2 overflow-hidden transform -rotate-1" style={{ borderRadius: '70% 30% 80% 20% / 69% 36% 64% 31%' }}>
                <Image
                  src="https://i.ibb.co/xqKJRx7B/Sobia-Zafar.jpg"
                  alt="Associate Professor (Dr) Sobia Zafar - Specialist Paediatric Dentist"
                  width={400}
                  height={500}
                  className="object-cover w-full h-full"
                />
              </div>
              
              {/* Floating Card */}
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-xl border-2 border-teal-200 z-10">
                <div className="text-center">
                  <div className="text-2xl font-bold text-teal-600">20+</div>
                  <div className="text-xs text-gray-600">Years of Excellence</div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 clear-left lg:clear-none">
                Meet Associate Professor (Dr) Sobia Zafar
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                We are a registered specialist paediatric dental practice. Our specialist A/Prof Sobia Zafar specialise in providing dental care for children from birth through to 18 years of age. Focusing solely on children&apos;s teeth enables us to provide high-quality, effective dental care, leading the industry in Paediatric Dentistry. Our goal is to help each child develop a healthy smile that will last a life time.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                When you visit our clinic, we try to make your child feel as comfortable as possible to reduce the anxieties associated with seeing a dentist. Every aspect of our practice has been specially designed for children and their families so as to create a modern, relaxed and comfortable atmosphere.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                We are proud of our staff, which is comprised of caring and dedicated professionals. They will ensure that your child&apos;s treatment and administrative needs are met as efficiently and smoothly as possible. We generally keep to schedule to avoid any excessive waiting times.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                We believe in open disclosure and encourage our patients and parents to ask questions. Where appropriate we will also provide you with additional education materials, website links and diagrams so that you fully understand your child&apos;s dental treatment needs. Treatment options will be discussed with you as well as a detailed explanation of the most appropriate plan provided. We aim to provide you with as much information as possible so that you are equipped to make well informed decisions about your child&apos;s dental health.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                A/Prof Sobia Zafar also specialises in providing dental care to children with complex medical conditions and disabilities. Her practice is equipped to accommodate the diverse needs of these patients, offering a supportive and inclusive environment. The clinic is fully wheelchair-accessible, ensuring ease of access for children with mobility challenges and their families.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We strive to provide comprehensive, compassionate dental care to all children from infancy to adolescence, including those with special health care needs.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 clear-left lg:clear-none">
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
            <div className="grid sm:grid-cols-3 gap-4 overflow-x-auto clear-left lg:clear-none">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-4">
                  <Award className="w-8 h-8 text-teal-600 mx-auto mb-2" />
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

            {/* Special Needs & Accessibility Section */}
            <div className="bg-teal-50 rounded-xl p-6 border border-teal-100 clear-left lg:clear-none">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Comprehensive Special Needs Care
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                We strive to provide comprehensive, compassionate dental care to all children from infancy to 
                adolescence, including those with special health care needs. Our clinic is fully wheelchair-accessible, 
                ensuring ease of access for children with mobility challenges and their families.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Heart className="w-4 h-4 text-teal-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">Complex Medical Conditions</h4>
                    <p className="text-xs text-gray-600">Specailised care for children with diverse medical needs</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Users className="w-4 h-4 text-teal-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">Wheelchair Accessible</h4>
                    <p className="text-xs text-gray-600">Fully accessible facilities for mobility challenges</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}