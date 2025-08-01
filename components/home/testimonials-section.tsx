import { Star, Award, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export function TestimonialsSection() {
  return (
    <section className="py-16 lg:py-20 bg-white relative overflow-hidden">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large floating blobs */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-teal-100/25 to-emerald-100/15 rounded-full animate-pulse" style={{ animationDuration: '11s' }}></div>
        <div className="absolute -bottom-24 right-1/4 w-88 h-88 bg-teal-200/30 rounded-full animate-bounce" style={{ animationDuration: '13s' }}></div>
        <div className="absolute top-1/2 -right-16 w-56 h-56 bg-emerald-200/40 rounded-full animate-pulse" style={{ animationDuration: '7s' }}></div>
        
        {/* Medium decorative blobs */}
        <div className="absolute top-32 right-32 w-32 h-32 bg-teal-300/35 rounded-full animate-bounce" style={{ animationDuration: '6s', animationDelay: '1.5s' }}></div>
        <div className="absolute bottom-16 left-16 w-24 h-24 bg-emerald-300/45 rounded-full animate-pulse" style={{ animationDuration: '8s' }}></div>
        
        {/* Small floating particles */}
        <div className="absolute top-24 left-1/3 w-3 h-3 bg-teal-700 rounded-full animate-ping" style={{ animationDuration: '2.5s' }}></div>
        <div className="absolute top-3/4 right-8 w-2 h-2 bg-emerald-800 rounded-full animate-bounce" style={{ animationDuration: '3.5s', animationDelay: '0.7s' }}></div>
        <div className="absolute bottom-40 left-1/2 w-4 h-4 bg-teal-600 rounded-full animate-pulse" style={{ animationDuration: '5.5s' }}></div>
        
        {/* Rotating elements */}
        <div className="absolute top-48 right-16 text-teal-400/40 text-2xl font-light animate-spin" style={{ animationDuration: '35s' }}>+</div>
        <div className="absolute bottom-24 left-8 text-emerald-400/50 text-lg font-light animate-spin" style={{ animationDuration: '28s' }}>+</div>
      </div>
      
      <div className="container mx-auto px-4 relative">
        {/* Professional Memberships & Certifications */}
        <div className="mb-12">
          <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 text-center mb-8">
            Professional Memberships & Certifications
          </h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <Award className="w-12 h-12 text-teal-600 mx-auto mb-4" />
                <h4 className="font-semibold text-gray-900 mb-2">
                  American Academy of Pediatric Dentistry
                </h4>
                <p className="text-sm text-gray-600">Active Member</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h4 className="font-semibold text-gray-900 mb-2">
                  Australian Dental Association
                </h4>
                <p className="text-sm text-gray-600">Certified Member</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <Star className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
                <h4 className="font-semibold text-gray-900 mb-2">
                  Board Certified
                </h4>
                <p className="text-sm text-gray-600">Pediatric Dentistry</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Decorative Divider */}
        <div className="flex items-center justify-center mb-12">
          <div className="flex-1 border-t border-gray-200"></div>
          <div className="px-4">
            <div className="w-3 h-3 bg-teal-500 rounded-full"></div>
          </div>
          <div className="flex-1 border-t border-gray-200"></div>
        </div>

        {/* Trust Indicators */}
        <div className="bg-teal-600 rounded-2xl p-8 lg:p-12 shadow-sm relative overflow-hidden">
          {/* Internal Animated Blobs */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Large internal blobs */}
            <div className="absolute -top-16 -right-8 w-48 h-48 bg-white/10 rounded-full animate-pulse" style={{ animationDuration: '8s' }}></div>
            <div className="absolute -bottom-12 -left-16 w-64 h-64 bg-emerald-400/20 rounded-full animate-bounce" style={{ animationDuration: '10s' }}></div>
            <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-teal-300/30 rounded-full animate-pulse" style={{ animationDuration: '6s' }}></div>
            
            {/* Medium glowing blobs */}
            <div className="absolute top-8 left-8 w-24 h-24 bg-white/15 rounded-full animate-bounce" style={{ animationDuration: '7s', animationDelay: '1s' }}></div>
            <div className="absolute bottom-8 right-8 w-20 h-20 bg-emerald-300/25 rounded-full animate-pulse" style={{ animationDuration: '9s' }}></div>
            
            {/* Small floating particles */}
            <div className="absolute top-16 right-16 w-3 h-3 bg-white/60 rounded-full animate-ping" style={{ animationDuration: '3s' }}></div>
            <div className="absolute bottom-20 left-20 w-2 h-2 bg-teal-200 rounded-full animate-bounce" style={{ animationDuration: '4s', animationDelay: '1.5s' }}></div>
            
            {/* Glowing plus signs */}
            <div className="absolute top-12 right-1/3 text-white/20 text-xl font-light animate-spin" style={{ animationDuration: '20s' }}>+</div>
            <div className="absolute bottom-16 left-1/3 text-teal-200/40 text-lg font-light animate-spin" style={{ animationDuration: '25s' }}>+</div>
          </div>
          
          <div className="text-center mb-8 relative z-10">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Trusted by Families Across Melbourne
            </h3>
            <p className="text-teal-100 text-lg">
              Our commitment to excellence shows in our results
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">5000+</div>
              <div className="text-sm text-teal-100 font-medium">Happy Patients</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">15+</div>
              <div className="text-sm text-teal-100 font-medium">Years Experience</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">98%</div>
              <div className="text-sm text-teal-100 font-medium">Patient Satisfaction</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">24/7</div>
              <div className="text-sm text-teal-100 font-medium">Emergency Care</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}