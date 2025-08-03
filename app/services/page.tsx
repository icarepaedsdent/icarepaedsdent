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
  description: 'Comprehensive dental care services for children including preventive care, restorative treatments, emergency care, and specailised services.',
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
    description: 'Specailised treatment for hypomineralized or "chalky" teeth. We provide comprehensive care to strengthen and protect affected teeth.',
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
    description: 'Gentle and specailised dental care for our youngest patients. Early dental visits help establish good oral health habits from the start.',
    href: '/services/infant-toddler-care'
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-white relative overflow-hidden py-16 lg:py-24">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-teal-200/30 rounded-full animate-pulse" style={{ animationDuration: '5s' }}></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-emerald-300/20 rounded-full animate-bounce" style={{ animationDuration: '7s' }}></div>
        <div className="absolute top-96 left-1/4 w-20 h-20 bg-teal-300/25 rounded-full animate-pulse" style={{ animationDuration: '4s' }}></div>
        <div className="absolute bottom-40 right-12 w-28 h-28 bg-emerald-200/30 rounded-full animate-bounce" style={{ animationDuration: '6s' }}></div>
        <div className="absolute bottom-20 left-16 w-16 h-16 bg-teal-400/20 rounded-full animate-pulse" style={{ animationDuration: '5s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-14 h-14 bg-emerald-300/25 rounded-full animate-bounce" style={{ animationDuration: '8s' }}></div>
        <div className="absolute top-64 left-1/2 w-10 h-10 bg-teal-500/30 rounded-full animate-ping" style={{ animationDuration: '3s' }}></div>
        <div className="absolute bottom-60 left-1/3 w-8 h-8 bg-emerald-400/40 rounded-full animate-ping" style={{ animationDuration: '4s' }}></div>
        
        {/* Plus sign elements */}
        <div className="absolute top-20 right-1/4 text-teal-300/30 text-2xl animate-spin" style={{ animationDuration: '20s' }}>+</div>
        <div className="absolute bottom-32 right-1/2 text-emerald-400/25 text-lg animate-spin" style={{ animationDuration: '25s' }}>+</div>
        <div className="absolute top-2/3 left-12 text-teal-400/20 text-xl animate-spin" style={{ animationDuration: '30s' }}>+</div>
        <div className="absolute top-80 right-8 text-emerald-300/30 text-sm animate-spin" style={{ animationDuration: '15s' }}>+</div>
        <div className="absolute bottom-80 left-1/5 text-teal-400/20 text-lg animate-spin" style={{ animationDuration: '22s' }}>+</div>
        <div className="absolute top-1/3 right-1/5 text-emerald-300/25 text-xl animate-spin" style={{ animationDuration: '18s' }}>+</div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive dental care specifically designed for children,
            from preventive treatments to specailised procedures.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <a
              key={index}
              href={service.href}
              className="group block p-6 bg-white rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:bg-teal-600 border border-gray-200 relative overflow-hidden"
            >
              {/* Internal animated blobs */}
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-white/20 rounded-full animate-pulse" style={{ animationDuration: `${4 + index * 0.5}s` }}></div>
                <div className="absolute -bottom-1 -left-1 w-6 h-6 bg-teal-300/30 rounded-full animate-bounce" style={{ animationDuration: `${3 + index * 0.3}s` }}></div>
                <div className="absolute top-4 right-6 w-2 h-2 bg-white/40 rounded-full animate-ping" style={{ animationDuration: `${2 + index * 0.2}s` }}></div>
              </div>
              
              {/* Subtle background blob when not hovered */}
              <div className="absolute inset-0 pointer-events-none opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-teal-100/40 rounded-full animate-pulse" style={{ animationDuration: `${6 + index * 0.4}s` }}></div>
                <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-emerald-200/30 rounded-full animate-bounce" style={{ animationDuration: `${5 + index * 0.3}s` }}></div>
              </div>
              
              <div className="relative z-10">
                <div className="w-12 h-12 bg-teal-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-white transition-colors duration-300">
                  <service.icon className="w-6 h-6 text-teal-600 group-hover:text-teal-600 transition-colors duration-300" />
                </div>
                <h2 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-white transition-colors duration-300">
                  {service.title}
                </h2>
                <p className="text-gray-600 group-hover:text-teal-50 transition-colors duration-300">
                  {service.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}