import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Mother of Emma (8 years old)',
    content: 'Dr. Sobia is absolutely wonderful with children. My daughter was terrified of dentists, but now she actually looks forward to her appointments! The gentle approach and child-friendly environment make all the difference.',
    rating: 5
  },
  {
    name: 'Michael Chen',
    role: 'Father of Lucas (12 years old)',
    content: 'The orthodontic treatment for my son has been exceptional. Dr. Sobia explained everything clearly and the results exceeded our expectations. The staff is professional and caring.',
    rating: 5
  },
  {
    name: 'Lisa Rodriguez',
    role: 'Mother of twins (6 years old)',
    content: 'Having twins means double the dental appointments, but Dr. Sobia and her team make it so easy. They\'re patient, thorough, and great at explaining oral hygiene to kids in a way they understand.',
    rating: 5
  },
  {
    name: 'David Thompson',
    role: 'Father of Sophie (4 years old)',
    content: 'The sedation dentistry option was a lifesaver for my anxious daughter. The procedure went smoothly and she was comfortable throughout. I highly recommend Dr. Sobia for any parent with an anxious child.',
    rating: 5
  },
  {
    name: 'Amanda Wilson',
    role: 'Mother of Jake (10 years old)',
    content: 'Emergency dental care at its finest! When my son had a dental emergency, Dr. Sobia saw us immediately and handled everything with such care and professionalism. We\'re grateful for the excellent service.',
    rating: 5
  },
  {
    name: 'Robert Kim',
    role: 'Father of Mia (7 years old)',
    content: 'The preventive care program has kept my daughter\'s teeth healthy and strong. Dr. Sobia\'s educational approach helps both parents and children understand the importance of good oral hygiene.',
    rating: 5
  }
];

export function TestimonialsSection() {
  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            What Parents Say About Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what families in our community 
            have to say about their experience with Dr. Sobia.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                {/* Quote Icon */}
                <Quote className="w-8 h-8 text-blue-600 mb-4" />
                
                {/* Rating */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                {/* Content */}
                <p className="text-gray-700 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                {/* Author */}
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.role}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Trusted by the Community
            </h3>
            <p className="text-gray-600">
              Our commitment to excellence has earned us the trust of families throughout Melbourne
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">5.0</div>
              <div className="flex justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <div className="text-sm text-gray-600">Google Reviews</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">98%</div>
              <div className="text-sm text-gray-600">Patient Satisfaction</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">5000+</div>
              <div className="text-sm text-gray-600">Happy Families</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">15+</div>
              <div className="text-sm text-gray-600">Years Serving</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}