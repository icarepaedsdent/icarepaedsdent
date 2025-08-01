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
    <section className="py-16 lg:py-24 bg-teal-600 relative overflow-hidden">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large floating blobs - lighter colors against dark background */}
        <div className="absolute -top-32 right-0 w-80 h-80 bg-teal-400/20 rounded-full animate-pulse" style={{ animationDuration: '14s' }}></div>
        <div className="absolute bottom-0 -left-24 w-96 h-96 bg-emerald-400/15 rounded-full animate-bounce" style={{ animationDuration: '10s' }}></div>
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-teal-300/25 rounded-full animate-pulse" style={{ animationDuration: '9s' }}></div>
        
        {/* Medium glowing elements */}
        <div className="absolute top-16 left-16 w-40 h-40 bg-white/10 rounded-full animate-bounce" style={{ animationDuration: '7s', animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-emerald-300/30 rounded-full animate-pulse" style={{ animationDuration: '11s' }}></div>
        
        {/* Small glowing dots */}
        <div className="absolute top-32 right-1/3 w-3 h-3 bg-white/60 rounded-full animate-ping" style={{ animationDuration: '3s' }}></div>
        <div className="absolute top-2/3 left-8 w-2 h-2 bg-teal-200 rounded-full animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 right-8 w-4 h-4 bg-emerald-200 rounded-full animate-pulse" style={{ animationDuration: '6s' }}></div>
        
        {/* Glowing rotating elements */}
        <div className="absolute top-20 right-16 text-white/30 text-2xl font-light animate-spin" style={{ animationDuration: '40s' }}>+</div>
        <div className="absolute bottom-16 left-1/3 text-teal-200/50 text-lg font-light animate-spin" style={{ animationDuration: '32s' }}>+</div>
      </div>
      
      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Content */}
          <div className="text-white space-y-8">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Ready to Give Your Child the Best Dental Care?
              </h2>
              <p className="text-xl text-teal-100 leading-relaxed">
                Schedule an appointment today and let us help your child develop healthy 
                dental habits that will last a lifetime. We&apos;re here to make every visit 
                a positive experience.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button size="lg" variant="secondary" className="text-teal-600 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Appointment
                </Button>
              </Link>
              <Link href="tel:36230000">
                <Button size="lg" variant="secondary" className="text-teal-600 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </Button>
              </Link>
            </div>

            {/* Quick Contact Info */}
            <div className="space-y-4 pt-8">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-teal-200" />
                <span className="text-teal-100">36230000</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-teal-200" />
                <span className="text-teal-100">icarepaediatricdentistry@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-teal-200" />
                <span className="text-teal-100">Shop 4, 2 Centre Place, Rochedale South QLD 4123</span>
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