import { Metadata } from 'next';
import { 
  Shield, 
  CircleDot,
  Scissors,
  Ruler,
  Star,
  AlertCircle,
  Heart,
  Baby
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Services | i-Care Paediatric Dentistry',
  description: 'Comprehensive dental care services for children including preventive care, restorative treatments, emergency care, and specialized services.',
};

const services = [
  {
    icon: Shield,
    title: 'Preventive Care',
    description: 'Regular checkups, cleanings, and preventive treatments to keep your child\'s teeth healthy. We focus on early intervention and education to prevent dental problems.',
    href: '/services/preventive-care'
  },
  {
    icon: CircleDot,
    title: 'Fillings & Crowns',
    description: 'High-quality restorative treatments to repair damaged teeth. We use child-friendly materials and techniques to ensure comfort and durability.',
    href: '/services/fillings-and-crowns'
  },
  {
    icon: Scissors,
    title: 'Extractions',
    description: 'When necessary, we provide gentle and safe tooth extraction procedures. Our team ensures your child\'s comfort throughout the process.',
    href: '/services/extractions'
  },
  {
    icon: Ruler,
    title: 'Space Maintainers',
    description: 'Custom devices designed to maintain proper spacing after premature tooth loss, ensuring proper development of permanent teeth.',
    href: '/services/space-maintainers'
  },
  {
    icon: Star,
    title: 'Chalky Teeth',
    description: 'Specialized treatment for hypomineralized or "chalky" teeth. We provide comprehensive care to strengthen and protect affected teeth.',
    href: '/services/chalky-teeth'
  },
  {
    icon: AlertCircle,
    title: 'Emergency Care',
    description: 'Immediate dental care for accidents and emergencies. Our team is ready to provide prompt attention when your child needs it most.',
    href: '/services/emergency-care'
  },
  {
    icon: Heart,
    title: 'Children with Special Needs',
    description: 'Compassionate and adapted dental care for children with special needs. We create a comfortable and supportive environment for every child.',
    href: '/services/special-needs'
  },
  {
    icon: Baby,
    title: 'Infant / Toddler Care',
    description: 'Gentle and specialized dental care for our youngest patients. Early dental visits help establish good oral health habits from the start.',
    href: '/services/infant-toddler-care'
  }
];

export default function ServicesPage() {
  return (
    <div className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive dental care specifically designed for children,
            from preventive treatments to specialized procedures.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <a
              key={index}
              href={service.href}
              className="group block p-6 bg-white rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:bg-blue-600 border border-gray-200"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-white transition-colors duration-300">
                <service.icon className="w-6 h-6 text-blue-600 group-hover:text-blue-600 transition-colors duration-300" />
              </div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-white transition-colors duration-300">
                {service.title}
              </h2>
              <p className="text-gray-600 group-hover:text-blue-50 transition-colors duration-300">
                {service.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}