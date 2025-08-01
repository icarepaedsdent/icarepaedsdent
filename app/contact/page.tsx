'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

function ContactForm() {
  const searchParams = useSearchParams();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: searchParams.get('type') || '',
    appointmentService: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  useEffect(() => {
    if (searchParams.get('type')) {
      setFormData(prev => ({
        ...prev,
        service: searchParams.get('type') || ''
      }));
    }
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json();
        setSubmitStatus({
          type: 'success',
          message: result.message || 'Your message has been sent successfully!'
        });
        
        // Reset form after successful submission
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: searchParams.get('type') || '',
          appointmentService: '',
          message: ''
        });
      } else {
        // Handle error responses
        let errorMessage = 'Failed to send message. Please try again.';
        
        // Try to parse JSON error response
        try {
          const result = await response.json();
          errorMessage = result.error || errorMessage;
        } catch {
          // If not JSON, create error message based on status
          if (response.status === 405) {
            errorMessage = 'API endpoint not available. Please contact support.';
          } else if (response.status === 500) {
            errorMessage = 'Server error. Please try again later.';
          } else {
            errorMessage = `Error ${response.status}: ${response.statusText}`;
          }
        }
        
        setSubmitStatus({
          type: 'error',
          message: errorMessage
        });
      }
    } catch (error) {
      console.error('Submit error:', error);
      setSubmitStatus({
        type: 'error',
        message: 'Network error. Please check your connection and try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear status when user starts typing again
    if (submitStatus.type) {
      setSubmitStatus({ type: null, message: '' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-white relative overflow-hidden">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-teal-200/30 rounded-full animate-pulse" style={{ animationDuration: '4s' }}></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-emerald-300/20 rounded-full animate-bounce" style={{ animationDuration: '6s' }}></div>
        <div className="absolute top-96 left-1/4 w-16 h-16 bg-teal-300/25 rounded-full animate-pulse" style={{ animationDuration: '3s' }}></div>
        <div className="absolute bottom-40 right-10 w-28 h-28 bg-emerald-200/30 rounded-full animate-bounce" style={{ animationDuration: '5s' }}></div>
        <div className="absolute bottom-20 left-20 w-20 h-20 bg-teal-400/20 rounded-full animate-pulse" style={{ animationDuration: '4s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-12 h-12 bg-emerald-300/25 rounded-full animate-bounce" style={{ animationDuration: '7s' }}></div>
        <div className="absolute top-32 left-1/2 w-8 h-8 bg-teal-500/30 rounded-full animate-ping" style={{ animationDuration: '3s' }}></div>
        <div className="absolute bottom-60 left-1/3 w-6 h-6 bg-emerald-400/40 rounded-full animate-ping" style={{ animationDuration: '4s' }}></div>
        
        {/* Plus sign elements */}
        <div className="absolute top-24 right-1/4 text-teal-300/30 text-2xl animate-spin" style={{ animationDuration: '20s' }}>+</div>
        <div className="absolute bottom-32 right-1/2 text-emerald-400/25 text-lg animate-spin" style={{ animationDuration: '25s' }}>+</div>
        <div className="absolute top-2/3 left-10 text-teal-400/20 text-xl animate-spin" style={{ animationDuration: '30s' }}>+</div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with us for any questions about our services or to schedule an appointment
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="bg-gradient-to-br from-white to-teal-50/30 border-teal-200 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden">
              {/* Internal animated blobs */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-2 -right-2 w-12 h-12 bg-teal-100/40 rounded-full animate-pulse" style={{ animationDuration: '5s' }}></div>
                <div className="absolute -bottom-1 -left-1 w-8 h-8 bg-emerald-200/30 rounded-full animate-bounce" style={{ animationDuration: '4s' }}></div>
                <div className="absolute top-4 right-8 w-2 h-2 bg-teal-400/60 rounded-full animate-ping" style={{ animationDuration: '3s' }}></div>
              </div>
              <CardHeader className="relative z-10">
                <CardTitle className="text-teal-700">Get in Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 relative z-10">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-teal-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Address</h3>
                    <p className="text-gray-600">
                      Shop 4, 2 Centre Place<br />
                      Rochedale South QLD 4123
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-teal-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Phone</h3>
                    <p className="text-gray-600">36230000</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-teal-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">icarepaediatricdentistry@gmail.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-white to-emerald-50/30 border-emerald-200 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden">
              {/* Internal animated blobs */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-1 -left-2 w-10 h-10 bg-emerald-100/40 rounded-full animate-bounce" style={{ animationDuration: '6s' }}></div>
                <div className="absolute -bottom-2 -right-1 w-6 h-6 bg-teal-200/50 rounded-full animate-pulse" style={{ animationDuration: '4s' }}></div>
                <div className="absolute top-6 left-12 w-1 h-1 bg-emerald-400/70 rounded-full animate-ping" style={{ animationDuration: '3s' }}></div>
              </div>
              <CardHeader className="relative z-10">
                <CardTitle className="flex items-center gap-2 text-emerald-700">
                  <Clock className="w-5 h-5 text-teal-600" />
                  Office Hours
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 relative z-10">
                <div className="flex justify-between">
                  <span className="text-gray-600">Monday - Saturday</span>
                  <span className="font-semibold">9:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Sunday</span>
                  <span className="font-semibold text-red-600">Closed</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-white to-teal-50/30 border-teal-200 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden">
              {/* Internal animated blobs */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-3 -right-1 w-14 h-14 bg-teal-100/30 rounded-full animate-pulse" style={{ animationDuration: '7s' }}></div>
                <div className="absolute -bottom-1 -left-2 w-9 h-9 bg-emerald-200/40 rounded-full animate-bounce" style={{ animationDuration: '5s' }}></div>
                <div className="absolute top-8 right-6 w-3 h-3 bg-teal-400/50 rounded-full animate-ping" style={{ animationDuration: '4s' }}></div>
                <div className="absolute bottom-12 right-3 text-teal-300/20 text-sm animate-spin" style={{ animationDuration: '25s' }}>+</div>
              </div>
              <CardHeader className="relative z-10">
                <CardTitle className="text-teal-700">Book an Appointment</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-gray-600 mb-4">
                  For appointments and general inquiries, please call us during office hours.
                </p>
                <Button className="w-full bg-teal-600 hover:bg-teal-700 shadow-md hover:shadow-lg transition-all duration-300">
                  <Phone className="w-4 h-4 mr-2" />
                  Call: 36230000
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-gradient-to-br from-white to-teal-50/20 border-teal-200 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden">
              {/* Internal animated blobs */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-4 -right-3 w-20 h-20 bg-teal-100/25 rounded-full animate-pulse" style={{ animationDuration: '8s' }}></div>
                <div className="absolute top-1/3 -left-2 w-16 h-16 bg-emerald-200/30 rounded-full animate-bounce" style={{ animationDuration: '6s' }}></div>
                <div className="absolute -bottom-3 -right-2 w-12 h-12 bg-teal-200/40 rounded-full animate-pulse" style={{ animationDuration: '5s' }}></div>
                <div className="absolute top-20 right-10 w-4 h-4 bg-teal-400/40 rounded-full animate-ping" style={{ animationDuration: '4s' }}></div>
                <div className="absolute bottom-20 left-8 w-2 h-2 bg-emerald-400/60 rounded-full animate-ping" style={{ animationDuration: '3s' }}></div>
                <div className="absolute top-40 right-1/4 text-teal-300/15 text-lg animate-spin" style={{ animationDuration: '30s' }}>+</div>
                <div className="absolute bottom-40 left-1/3 text-emerald-400/20 text-sm animate-spin" style={{ animationDuration: '20s' }}>+</div>
              </div>
              <CardHeader className="relative z-10">
                <CardTitle className="text-teal-700">Send Us a Message</CardTitle>
                <p className="text-gray-600">
                  Fill out the form below and we&apos;ll get back to you as soon as possible
                </p>
              </CardHeader>
              <CardContent className="relative z-10">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Your Name *
                      </label>
                      <Input
                        required
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="Your full name"
                        className="border-gray-300 focus:border-teal-500 focus:ring-teal-500 transition-all duration-300"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <Input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="your@email.com"
                        className="border-gray-300 focus:border-teal-500 focus:ring-teal-500 transition-all duration-300"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone *
                      </label>
                      <Input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="Your phone number"
                        className="border-gray-300 focus:border-teal-500 focus:ring-teal-500 transition-all duration-300"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Subject
                      </label>
                      <Select onValueChange={(value) => handleInputChange('service', value)} value={formData.service}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select subject" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">General Inquiry</SelectItem>
                          <SelectItem value="appointment">Appointment Request</SelectItem>
                          <SelectItem value="referral">Referral</SelectItem>
                          <SelectItem value="feedback">Feedback</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Conditional Service Selection for Appointments */}
                  {formData.service === 'appointment' && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Select Service *
                      </label>
                      <Select onValueChange={(value) => handleInputChange('appointmentService', value)} value={formData.appointmentService}>
                        <SelectTrigger>
                          <SelectValue placeholder="Choose the service you need" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="preventive-care">Preventive Care</SelectItem>
                          <SelectItem value="fillings-crowns">Fillings & Crowns</SelectItem>
                          <SelectItem value="extractions">Extractions</SelectItem>
                          <SelectItem value="emergency-care">Emergency Care</SelectItem>
                          <SelectItem value="infant-toddler">Infant & Toddler Care</SelectItem>
                          <SelectItem value="special-needs">Special Needs Care</SelectItem>
                          <SelectItem value="chalky-teeth">Chalky Teeth Treatment</SelectItem>
                          <SelectItem value="space-maintainers">Space Maintainers</SelectItem>
                          <SelectItem value="sedation">Sedation Services</SelectItem>
                          <SelectItem value="general-checkup">General Check-up</SelectItem>
                          <SelectItem value="consultation">Consultation</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  )}

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <Textarea
                      required
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="How can we help you?"
                      className="min-h-[150px] border-gray-300 focus:border-teal-500 focus:ring-teal-500 transition-all duration-300"
                    />
                  </div>

                  {/* Status Messages */}
                  {submitStatus.type && (
                    <div className={`p-4 rounded-md ${
                      submitStatus.type === 'success' 
                        ? 'bg-green-50 text-green-800 border border-green-200' 
                        : 'bg-red-50 text-red-800 border border-red-200'
                    }`}>
                      <p className="text-sm font-medium">{submitStatus.message}</p>
                    </div>
                  )}

                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-teal-600 hover:bg-teal-700 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <Card className="bg-gradient-to-br from-white to-emerald-50/30 border-emerald-200 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden">
            {/* Internal animated blobs */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute -top-2 -left-3 w-16 h-16 bg-emerald-100/30 rounded-full animate-pulse" style={{ animationDuration: '6s' }}></div>
              <div className="absolute -top-1 -right-2 w-12 h-12 bg-teal-200/40 rounded-full animate-bounce" style={{ animationDuration: '7s' }}></div>
              <div className="absolute top-8 right-16 w-3 h-3 bg-emerald-400/50 rounded-full animate-ping" style={{ animationDuration: '4s' }}></div>
              <div className="absolute top-4 left-20 text-emerald-300/20 text-lg animate-spin" style={{ animationDuration: '25s' }}>+</div>
            </div>
            <CardHeader className="relative z-10">
              <CardTitle className="text-emerald-700">Visit Our Clinic</CardTitle>
              <p className="text-gray-600">
                Conveniently located at Centre Place with ample parking and easy access
              </p>
            </CardHeader>
            <CardContent className="relative z-10">
              <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3540.5!2d153.064!3d-27.543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b915a1b2c3d4e5f%3A0x1234567890abcdef!2sMt%20Gravatt%20Plaza%2C%2055%20Creek%20Rd%2C%20Mount%20Gravatt%20QLD%204122%2C%20Australia!5e0!3m2!1sen!2sau!4v1234567890123!5m2!1sen!2sau&markers=color:red%7Clabel:i-Care%7C-27.543,153.064"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="i-Care Paediatric Dentistry Location - Mt Gravatt Plaza with Pin Marker"
                  className="w-full h-full"
                />
              </div>
              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <MapPin className="w-4 h-4 text-teal-600" />
                  <span className="font-medium">Shop 4, 2 Centre Place, Rochedale South QLD 4123</span>
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  Click on the map to open in Google Maps for directions
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Loading...</h2>
          <p className="text-gray-600">Please wait while we load the contact form.</p>
        </div>
      </div>
    }>
      <ContactForm />
    </Suspense>
  );
}