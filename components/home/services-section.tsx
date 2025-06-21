import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Shield, 
  CircleDot,
  Scissors,
  Ruler,
  Star,
  AlertCircle,
  Heart,
  Baby,
  ArrowRight 
} from 'lucide-react';

const services = [
  {
    icon: Shield,
    title: 'Preventive Care',
    description: 'Regular checkups, cleanings, and preventive treatments to keep your child\'s teeth healthy.',
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=300&h=200&fit=crop',
    href: '/services/preventive-care'
  },
  {
    icon: CircleDot,
    title: 'Fillings & Crowns',
    description: 'Restorative treatments to repair damaged teeth and maintain oral health.',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=300&h=200&fit=crop',
    href: '/services/fillings-and-crowns'
  },
  {
    icon: Scissors,
    title: 'Extractions',
    description: 'Safe and gentle tooth removal procedures when necessary.',
    image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=300&h=200&fit=crop',
    href: '/services/extractions'
  },
  {
    icon: Ruler,
    title: 'Space Maintainers',
    description: 'Custom devices to maintain proper spacing for developing teeth.',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=300&h=200&fit=crop',
    href: '/services/space-maintainers'
  },
  {
    icon: Star,
    title: 'Chalky Teeth',
    description: 'Specialized treatment for hypomineralized or chalky teeth conditions.',
    image: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=300&h=200&fit=crop',
    href: '/services/chalky-teeth'
  },
  {
    icon: AlertCircle,
    title: 'Emergency Care',
    description: 'Immediate dental care for accidents and emergencies.',
    image: 'https://images.unsplash.com/photo-1612277795421-9bc7706a4a34?w=300&h=200&fit=crop',
    href: '/services/emergency-care'
  },
  {
    icon: Heart,
    title: 'Children with Special Needs',
    description: 'Compassionate dental care adapted for children with special needs.',
    image: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=300&h=200&fit=crop',
    href: '/services/special-needs'
  },
  {
    icon: Baby,
    title: 'Infant / Toddler Care',
    description: 'Gentle and specialized dental care for the youngest patients.',
    image: 'https://images.unsplash.com/photo-1554684765-8f7175aeaf81?w=300&h=200&fit=crop',
    href: '/services/infant-toddler-care'
  }
];

export function ServicesSection() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-blue-50/50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-1 w-12 bg-blue-600 rounded-full" />
            <h3 className="text-blue-600 font-semibold">Our Services</h3>
            <div className="h-1 w-12 bg-blue-600 rounded-full" />
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Comprehensive Pediatric Dental Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From routine checkups to specialized treatments, we provide complete dental care 
            tailored specifically for children of all ages.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-500 overflow-hidden border-0 bg-white/80 backdrop-blur-sm"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={400}
                  height={300}
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-4 left-4 transform -translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow">
                    <service.icon className="w-7 h-7 text-blue-600" />
                  </div>
                </div>
              </div>
              
              <CardHeader className="pt-6">
                <CardTitle className="text-2xl text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                  {service.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
                <Link 
                  href={service.href}
                  className="inline-block w-full group/button"
                >
                  <Button 
                    variant="outline" 
                    className="w-full bg-transparent hover:bg-blue-600 hover:text-white border-2 transition-all duration-300 ease-in-out transform group-hover/button:translate-y-0 hover:-translate-y-1 hover:border-blue-600"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/button:translate-x-1 transition-transform duration-300" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link href="/services">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 bg-blue-600 hover:bg-blue-700 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              View All Services
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}