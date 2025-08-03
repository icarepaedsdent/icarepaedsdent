'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Download, FileText, Send, Users, UserCheck } from 'lucide-react';

const reasonsForReferral = [
  'Dental Anxiety',
  'Dental Caries',
  'Dental Anomalies',
  'Dental Trauma',
  'Medically Compromised/Special Needs',
  'Sedation (RA or IV)',
  'Enamel defects',
  'Behavior Management',
  'Acute Dental Infection',
  'Growth and Development',
  'Oral Surgery',
  'General Anaesthesia'
];

export default function ReferralsPage() {
  const [formData, setFormData] = useState({
    // Patient Details
    patientName: '',
    medicalHistory: '',
    dateOfBirth: '',
    patientPhone: '',
    patientEmail: '',
    
    // Referral Details
    referralDetails: '',
    
    // Reasons for Referral
    reasonsForReferral: [] as string[],
    
    // Radiographs
    radiographsTaken: '',
    
    // Referrer Details
    referrerName: '',
    practice: '',
    referrerPhone: '',
    referrerEmail: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleInputChange = (field: string, value: string | string[]) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear status when user starts typing again
    if (submitStatus.type) {
      setSubmitStatus({ type: null, message: '' });
    }
  };

  const handleReasonChange = (reason: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      reasonsForReferral: checked 
        ? [...prev.reasonsForReferral, reason]
        : prev.reasonsForReferral.filter(r => r !== reason)
    }));
  };

  const handleDownloadForm = () => {
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = '/SobiaReferralForms_March2025-1.pdf';
    link.download = 'Referral_Form_i-Care_Paediatric_Dentistry.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      // Prepare the data with proper formatting
      const submissionData = {
        type: 'referral',
        patientDetails: {
          name: formData.patientName,
          medicalHistory: formData.medicalHistory,
          dateOfBirth: formData.dateOfBirth,
          phone: formData.patientPhone,
          email: formData.patientEmail
        },
        referralDetails: formData.referralDetails,
        reasonsForReferral: formData.reasonsForReferral,
        radiographsTaken: formData.radiographsTaken,
        referrerDetails: {
          name: formData.referrerName,
          practice: formData.practice,
          phone: formData.referrerPhone,
          email: formData.referrerEmail
        }
      };

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData),
      });

      if (response.ok) {
        const result = await response.json();
        setSubmitStatus({
          type: 'success',
          message: result.message || 'Referral submitted successfully! We will contact you soon.'
        });
        
        // Reset form after successful submission
        setFormData({
          patientName: '',
          medicalHistory: '',
          dateOfBirth: '',
          patientPhone: '',
          patientEmail: '',
          referralDetails: '',
          reasonsForReferral: [],
          radiographsTaken: '',
          referrerName: '',
          practice: '',
          referrerPhone: '',
          referrerEmail: ''
        });
      } else {
        let errorMessage = 'Failed to submit referral. Please try again.';
        try {
          const result = await response.json();
          errorMessage = result.error || errorMessage;
        } catch {
          if (response.status === 405) {
            errorMessage = 'Service temporarily unavailable. Please contact us directly.';
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-white relative overflow-hidden">
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
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Referrals
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            We welcome referrals from dental colleagues for specailised paediatric dental care. 
            Please complete the form below or download our referral form.
          </p>
          
          {/* Download Form Button */}
          <div className="flex justify-center mb-8">
            <Button 
              onClick={handleDownloadForm}
              className="bg-emerald-600 hover:bg-emerald-700 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
              size="lg"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Referral Form (PDF)
            </Button>
          </div>
        </div>

        {/* Referral Form */}
        <div className="max-w-4xl mx-auto">
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
              <CardTitle className="text-teal-700 flex items-center gap-2">
                <FileText className="w-6 h-6" />
                Referral Form
              </CardTitle>
              <p className="text-gray-600">
                Please complete all sections of this form to ensure we can provide the best care for your patient
              </p>
            </CardHeader>

            <CardContent className="relative z-10">
              <form onSubmit={handleSubmit} className="space-y-8">
                
                {/* Patient Details Section */}
                <div className="bg-teal-50/50 rounded-lg p-6 border border-teal-100">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <Users className="w-5 h-5 text-teal-600" />
                    Patient Details
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <Label htmlFor="patientName" className="text-gray-700">Patient Name *</Label>
                      <Input
                        id="patientName"
                        required
                        value={formData.patientName}
                        onChange={(e) => handleInputChange('patientName', e.target.value)}
                        placeholder="Patient's full name"
                        className="border-gray-300 focus:border-teal-500 focus:ring-teal-500 transition-all duration-300"
                      />
                    </div>
                    <div>
                      <Label htmlFor="dateOfBirth" className="text-gray-700">Date of Birth *</Label>
                      <Input
                        id="dateOfBirth"
                        type="date"
                        required
                        value={formData.dateOfBirth}
                        onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                        className="border-gray-300 focus:border-teal-500 focus:ring-teal-500 transition-all duration-300"
                      />
                    </div>
                  </div>

                  <div className="mb-4">
                    <Label htmlFor="medicalHistory" className="text-gray-700">Medical History</Label>
                    <Textarea
                      id="medicalHistory"
                      value={formData.medicalHistory}
                      onChange={(e) => handleInputChange('medicalHistory', e.target.value)}
                      placeholder="Relevant medical history, medications, allergies, etc."
                      className="min-h-[80px] border-gray-300 focus:border-teal-500 focus:ring-teal-500 transition-all duration-300"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="patientPhone" className="text-gray-700">Phone *</Label>
                      <Input
                        id="patientPhone"
                        type="tel"
                        required
                        value={formData.patientPhone}
                        onChange={(e) => handleInputChange('patientPhone', e.target.value)}
                        placeholder="Patient/Parent phone number"
                        className="border-gray-300 focus:border-teal-500 focus:ring-teal-500 transition-all duration-300"
                      />
                    </div>
                    <div>
                      <Label htmlFor="patientEmail" className="text-gray-700">Email Address</Label>
                      <Input
                        id="patientEmail"
                        type="email"
                        value={formData.patientEmail}
                        onChange={(e) => handleInputChange('patientEmail', e.target.value)}
                        placeholder="Patient/Parent email"
                        className="border-gray-300 focus:border-teal-500 focus:ring-teal-500 transition-all duration-300"
                      />
                    </div>
                  </div>
                </div>

                {/* Referral Details Section */}
                <div className="bg-emerald-50/50 rounded-lg p-6 border border-emerald-100">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Referral Details *
                  </h3>
                  <Textarea
                    required
                    value={formData.referralDetails}
                    onChange={(e) => handleInputChange('referralDetails', e.target.value)}
                    placeholder="Please provide detailed information about the reason for referral, treatment required, urgency, etc."
                    className="min-h-[120px] border-gray-300 focus:border-teal-500 focus:ring-teal-500 transition-all duration-300"
                  />
                </div>

                                {/* Reason for Referral Section */}
                <div className="bg-teal-50/50 rounded-lg p-6 border border-teal-100">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Reason for Referral
                  </h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {reasonsForReferral.map((reason) => (
                      <div key={reason} className="flex items-center space-x-2">
                        <Checkbox
                          id={reason}
                          checked={formData.reasonsForReferral.includes(reason)}
                          onCheckedChange={(checked) => handleReasonChange(reason, checked as boolean)}
                          className="border-gray-300 text-teal-600 focus:ring-teal-500"
                        />
                        <Label 
                          htmlFor={reason} 
                          className="text-sm text-gray-700 cursor-pointer leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {reason}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Radiographs Section */}
                <div className="bg-emerald-50/50 rounded-lg p-6 border border-emerald-100">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Have radiographs been taken and e-mailed? *
                  </h3>
                  <div className="flex gap-6">
                    <div className="flex items-center space-x-2">
                      <input
                        type="radio"
                        id="radiographs-yes"
                        name="radiographs"
                        aria-label="Yes"
                        value="yes"
                        checked={formData.radiographsTaken === 'yes'}
                        onChange={(e) => handleInputChange('radiographsTaken', e.target.value)}
                        className="w-4 h-4 text-teal-600 border-gray-300 focus:ring-teal-500"
                        required
                      />
                      <Label htmlFor="radiographs-yes" className="text-gray-700 cursor-pointer">Yes</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input
                        type="radio"
                        id="radiographs-no"
                        name="radiographs"
                        value="no"
                        aria-label="No"
                        checked={formData.radiographsTaken === 'no'}
                        onChange={(e) => handleInputChange('radiographsTaken', e.target.value)}
                        className="w-4 h-4 text-teal-600 border-gray-300 focus:ring-teal-500"
                        required
                      />
                      <Label htmlFor="radiographs-no" className="text-gray-700 cursor-pointer">No</Label>
                    </div>
                  </div>
                </div>

                {/* Referrer Details Section */}
                <div className="bg-teal-50/50 rounded-lg p-6 border border-teal-100">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <UserCheck className="w-5 h-5 text-teal-600" />
                    Referrer Details
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <Label htmlFor="referrerName" className="text-gray-700">Referrer Name *</Label>
                      <Input
                        id="referrerName"
                        required
                        value={formData.referrerName}
                        onChange={(e) => handleInputChange('referrerName', e.target.value)}
                        placeholder="Dr. Full Name"
                        className="border-gray-300 focus:border-teal-500 focus:ring-teal-500 transition-all duration-300"
                      />
                    </div>
                    <div>
                      <Label htmlFor="practice" className="text-gray-700">Practice *</Label>
                      <Input
                        id="practice"
                        required
                        value={formData.practice}
                        onChange={(e) => handleInputChange('practice', e.target.value)}
                        placeholder="Practice name"
                        className="border-gray-300 focus:border-teal-500 focus:ring-teal-500 transition-all duration-300"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="referrerPhone" className="text-gray-700">Phone *</Label>
                      <Input
                        id="referrerPhone"
                        type="tel"
                        required
                        value={formData.referrerPhone}
                        onChange={(e) => handleInputChange('referrerPhone', e.target.value)}
                        placeholder="Practice phone number"
                        className="border-gray-300 focus:border-teal-500 focus:ring-teal-500 transition-all duration-300"
                      />
                    </div>
                    <div>
                      <Label htmlFor="referrerEmail" className="text-gray-700">Email Address *</Label>
                      <Input
                        id="referrerEmail"
                        type="email"
                        required
                        value={formData.referrerEmail}
                        onChange={(e) => handleInputChange('referrerEmail', e.target.value)}
                        placeholder="Practice email"
                        className="border-gray-300 focus:border-teal-500 focus:ring-teal-500 transition-all duration-300"
                      />
                    </div>
                  </div>
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

                {/* Submit Button */}
      <div className="text-center">
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="bg-teal-600 hover:bg-teal-700 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 px-8 py-3"
                    size="lg"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Submitting Referral...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Submit Referral
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Additional Information */}
        <div className="max-w-4xl mx-auto mt-12">
          <Card className="bg-gradient-to-br from-white to-emerald-50/30 border-emerald-200 shadow-lg">
            <CardHeader>
              <CardTitle className="text-emerald-700">Referral Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">What to expect:</h4>
                  <ul className="space-y-1 text-gray-600 text-sm">
                    <li>• We aim to contact referred patients within 24-48 hours</li>
                    <li>• Urgent cases will be prioritized</li>
                    <li>• A detailed treatment report will be sent back to you</li>
                    <li>• We provide ongoing communication throughout treatment</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Contact Information:</h4>
                  <div className="space-y-1 text-gray-600 text-sm">
                    <p><strong>Phone:</strong> 36230000</p>
                    <p><strong>Email:</strong> icarepaediatricdentistry@gmail.com</p>
                    <p><strong>Address:</strong> Shop 4, 2 Centre Place, Rochedale South QLD 4123</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
} 