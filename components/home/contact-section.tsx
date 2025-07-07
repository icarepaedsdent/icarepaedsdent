import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Calendar, 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  ArrowRight
} from 'lucide-react';

export function ContactSection() {
  return (
    <section className="py-16 lg:py-24 bg-blue-600">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Content */}
          <div className="text-white space-y-8">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Ready to Give Your Child the Best Dental Care?
              </h2>
              <p className="text-xl text-blue-100 leading-relaxed">
                Schedule an appointment today and let us help your child develop healthy 
                dental habits that will last a lifetime. We&apos;re here to make every visit 
                a positive experience.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button size="lg" variant="secondary" className="text-blue-600 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Appointment
                </Button>
              </Link>
              <Link href="tel:36230000">
                <Button size="lg" variant="secondary" className="text-blue-600 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </Button>
              </Link>
            </div>

            {/* Quick Contact Info */}
            <div className="space-y-4 pt-8">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-200" />
                <span className="text-blue-100">36230000</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-200" />
                <span className="text-blue-100">icarepaediatricdentistry@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-blue-200" />
                <span className="text-blue-100">Shop 4, 2 Centre Place, Rochedale South QLD 4123</span>
              </div>
            </div>
          </div>

          {/* Contact Cards */}
          <div className="space-y-4">
            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-4 lg:p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 lg:w-6 lg:h-6 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-2 lg:mb-3">
                      Office Hours
                    </h3>
                    <div className="space-y-1 lg:space-y-2 text-gray-600 text-sm lg:text-base">
                      <div className="flex justify-between">
                        <span>Monday - Friday</span>
                        <span className="font-medium">9:00 AM - 5:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Saturday - Sunday</span>
                        <span className="font-medium text-red-600">Closed</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-4 lg:p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 lg:w-6 lg:h-6 text-red-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-2 lg:mb-3">
                      Emergency Care
                    </h3>
                    <p className="text-gray-600 mb-3 lg:mb-4 text-sm lg:text-base">
                      Dental emergencies can happen anytime. We provide 24/7 emergency 
                      care for urgent dental situations.
                    </p>
                    <Link href="tel:36230000">
                      <Button variant="outline" size="sm" className="text-xs lg:text-sm">
                        Emergency Line: 36230000
                        <ArrowRight className="w-3 h-3 lg:w-4 lg:h-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-4 lg:p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-5 h-5 lg:w-6 lg:h-6 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-2 lg:mb-3">
                      New Patient Special
                    </h3>
                    <p className="text-gray-600 mb-3 lg:mb-4 text-sm lg:text-base">
                      First-time patients receive a comprehensive examination, 
                      cleaning, and consultation at a special rate.
                    </p>
                    <Link href="/contact">
                      <Button variant="outline" size="sm" className="text-xs lg:text-sm">
                        Schedule Today
                        <ArrowRight className="w-3 h-3 lg:w-4 lg:h-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}