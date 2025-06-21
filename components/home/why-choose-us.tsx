import { Card, CardContent } from '@/components/ui/card';
import { 
  Heart, 
  Shield, 
  Clock, 
  Users, 
  Award, 
  Smile,
  Star,
  CheckCircle
} from 'lucide-react';

const features = [
  {
    icon: Heart,
    title: 'Gentle & Caring Approach',
    description: 'We use the latest techniques to ensure your child feels comfortable and safe during every visit.',
    color: 'text-red-500 bg-red-50'
  },
  {
    icon: Shield,
    title: 'State-of-the-Art Technology',
    description: 'Modern equipment and advanced techniques for the most effective and comfortable treatments.',
    color: 'text-blue-500 bg-blue-50'
  },
  {
    icon: Clock,
    title: '24/7 Emergency Care',
    description: 'Round-the-clock emergency dental care when your child needs urgent attention.',
    color: 'text-green-500 bg-green-50'
  },
  {
    icon: Users,
    title: 'Family-Centered Care',
    description: 'We involve parents in the treatment process and provide education for the whole family.',
    color: 'text-purple-500 bg-purple-50'
  },
  {
    icon: Award,
    title: '15+ Years Experience',
    description: 'Extensive experience in pediatric dentistry with thousands of successful treatments.',
    color: 'text-orange-500 bg-orange-50'
  },
  {
    icon: Smile,
    title: 'Child-Friendly Environment',
    description: 'Our office is designed to make children feel welcome, comfortable, and excited about dental care.',
    color: 'text-pink-500 bg-pink-50'
  }
];

const stats = [
  { number: '5000+', label: 'Happy Patients' },
  { number: '15+', label: 'Years Experience' },
  { number: '98%', label: 'Patient Satisfaction' },
  { number: '24/7', label: 'Emergency Care' }
];

export function WhyChooseUs() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Why Choose Dr. Sobia?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're committed to providing exceptional pediatric dental care that makes 
            both children and parents feel confident and comfortable.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${feature.color}`}>
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-blue-600 rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Trusted by Families Across Melbourne
            </h3>
            <p className="text-blue-100 text-lg">
              Our commitment to excellence shows in our results
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-blue-100">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Professional Memberships & Certifications
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="text-center">
              <CardContent className="p-6">
                <Award className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h4 className="font-semibold text-gray-900 mb-2">
                  American Academy of Pediatric Dentistry
                </h4>
                <p className="text-sm text-gray-600">Active Member</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h4 className="font-semibold text-gray-900 mb-2">
                  Australian Dental Association
                </h4>
                <p className="text-sm text-gray-600">Certified Member</p>
              </CardContent>
            </Card>

            <Card className="text-center">
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
      </div>
    </section>
  );
}