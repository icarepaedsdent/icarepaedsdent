'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { 
  User, 
  Calendar, 
  FileText, 
  CreditCard, 
  Settings, 
  Bell,
  Shield,
  Clock,
  Phone,
  Mail,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

export default function ParentalPortalPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginData, setLoginData] = useState({ email: '', password: '' });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login
    setIsLoggedIn(true);
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <Card>
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-2xl">Parental Portal</CardTitle>
                <p className="text-gray-600">
                  Access your child's dental records, appointments, and more
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleLogin} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <Input
                      type="email"
                      required
                      value={loginData.email}
                      onChange={(e) => setLoginData(prev => ({ ...prev, email: e.target.value }))}
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Password
                    </label>
                    <Input
                      type="password"
                      required
                      value={loginData.password}
                      onChange={(e) => setLoginData(prev => ({ ...prev, password: e.target.value }))}
                      placeholder="••••••••"
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Sign In
                  </Button>
                </form>
                
                <div className="mt-6 text-center space-y-2">
                  <p className="text-sm text-gray-600">
                    Don't have an account? <a href="#" className="text-blue-600 hover:underline">Contact us to register</a>
                  </p>
                  <p className="text-sm text-gray-600">
                    <a href="#" className="text-blue-600 hover:underline">Forgot your password?</a>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Parental Portal</h1>
            <p className="text-gray-600">Welcome back, Sarah Johnson</p>
          </div>
          <Button variant="outline" onClick={() => setIsLoggedIn(false)}>
            Sign Out
          </Button>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6 text-center">
              <Calendar className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <h3 className="font-semibold text-gray-900">Next Appointment</h3>
              <p className="text-sm text-gray-600">March 15, 2025</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 text-center">
              <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <h3 className="font-semibold text-gray-900">Treatment Progress</h3>
              <p className="text-sm text-gray-600">85% Complete</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 text-center">
              <CreditCard className="w-8 h-8 text-purple-600 mx-auto mb-2" />
              <h3 className="font-semibold text-gray-900">Outstanding Balance</h3>
              <p className="text-sm text-gray-600">$350.00</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 text-center">
              <Bell className="w-8 h-8 text-orange-600 mx-auto mb-2" />
              <h3 className="font-semibold text-gray-900">Notifications</h3>
              <p className="text-sm text-gray-600">3 Unread</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="overview" className="space-y-8">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="appointments">Appointments</TabsTrigger>
            <TabsTrigger value="records">Records</TabsTrigger>
            <TabsTrigger value="billing">Billing</TabsTrigger>
            <TabsTrigger value="communication">Messages</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Emma's Recent Activity</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <div>
                        <p className="font-medium">Cleaning & Checkup</p>
                        <p className="text-sm text-gray-600">February 15, 2025</p>
                      </div>
                    </div>
                    <Badge variant="secondary">Completed</Badge>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-blue-600" />
                      <div>
                        <p className="font-medium">Orthodontic Consultation</p>
                        <p className="text-sm text-gray-600">March 15, 2025</p>
                      </div>
                    </div>
                    <Badge>Upcoming</Badge>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <AlertCircle className="w-5 h-5 text-yellow-600" />
                      <div>
                        <p className="font-medium">Fluoride Treatment</p>
                        <p className="text-sm text-gray-600">Recommended</p>
                      </div>
                    </div>
                    <Badge variant="outline">Pending</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Treatment Plan Progress</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Preventive Care</span>
                      <span>100%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-600 h-2 rounded-full" style={{ width: '100%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Orthodontic Assessment</span>
                      <span>25%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: '25%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Dental Sealants</span>
                      <span>0%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-gray-400 h-2 rounded-full" style={{ width: '0%' }}></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Recent Notifications</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                  <Bell className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <p className="font-medium text-blue-900">Appointment Reminder</p>
                    <p className="text-sm text-blue-700">Don't forget Emma's orthodontic consultation on March 15 at 2:00 PM</p>
                    <p className="text-xs text-blue-600 mt-1">2 days ago</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                  <div>
                    <p className="font-medium text-green-900">Treatment Complete</p>
                    <p className="text-sm text-green-700">Emma's cleaning and checkup has been completed successfully</p>
                    <p className="text-xs text-green-600 mt-1">1 week ago</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="appointments" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">Appointments</h2>
              <Button>
                <Calendar className="w-4 h-4 mr-2" />
                Schedule New
              </Button>
            </div>

            <div className="grid gap-4">
              <Card>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Orthodontic Consultation</h3>
                      <p className="text-gray-600">Dr. Sobia</p>
                      <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          March 15, 2025
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          2:00 PM - 3:00 PM
                        </span>
                      </div>
                    </div>
                    <Badge>Upcoming</Badge>
                  </div>
                  <div className="mt-4 flex gap-2">
                    <Button size="sm" variant="outline">
                      Reschedule
                    </Button>
                    <Button size="sm" variant="outline">
                      Cancel
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Cleaning & Checkup</h3>
                      <p className="text-gray-600">Dr. Sobia</p>
                      <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          February 15, 2025
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          10:00 AM - 11:00 AM
                        </span>
                      </div>
                    </div>
                    <Badge variant="secondary">Completed</Badge>
                  </div>
                  <div className="mt-4">
                    <Button size="sm" variant="outline">
                      View Report
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="records" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">Medical Records</h2>
              <Button variant="outline">
                <FileText className="w-4 h-4 mr-2" />
                Download All
              </Button>
            </div>

            <div className="grid gap-4">
              <Card>
                <CardHeader>
                  <CardTitle>Treatment History</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold">Cleaning & Checkup</h4>
                    <p className="text-sm text-gray-600">February 15, 2025</p>
                    <p className="text-sm text-gray-700 mt-1">
                      Routine cleaning completed. No cavities found. Fluoride treatment applied.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-semibold">Dental Sealants</h4>
                    <p className="text-sm text-gray-600">January 10, 2025</p>
                    <p className="text-sm text-gray-700 mt-1">
                      Sealants applied to molars for cavity prevention.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h4 className="font-semibold">Initial Consultation</h4>
                    <p className="text-sm text-gray-600">December 5, 2024</p>
                    <p className="text-sm text-gray-700 mt-1">
                      Comprehensive examination and oral health assessment completed.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>X-Rays & Images</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
                      <div className="text-center text-gray-500">
                        <FileText className="w-8 h-8 mx-auto mb-2" />
                        <p className="text-sm">Panoramic X-Ray</p>
                        <p className="text-xs">Feb 15, 2025</p>
                      </div>
                    </div>
                    <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
                      <div className="text-center text-gray-500">
                        <FileText className="w-8 h-8 mx-auto mb-2" />
                        <p className="text-sm">Bitewing X-Ray</p>
                        <p className="text-xs">Jan 10, 2025</p>
                      </div>
                    </div>
                    <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
                      <div className="text-center text-gray-500">
                        <FileText className="w-8 h-8 mx-auto mb-2" />
                        <p className="text-sm">Clinical Photos</p>
                        <p className="text-xs">Dec 5, 2024</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="billing" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">Billing & Payments</h2>
              <Button>
                <CreditCard className="w-4 h-4 mr-2" />
                Make Payment
              </Button>
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Account Balance</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-gray-900 mb-2">$350.00</div>
                  <p className="text-gray-600 mb-4">Outstanding balance</p>
                  <Button className="w-full">Pay Now</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Insurance Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="font-medium">Primary Insurance</p>
                    <p className="text-sm text-gray-600">Medibank Private</p>
                  </div>
                  <div>
                    <p className="font-medium">Policy Number</p>
                    <p className="text-sm text-gray-600">MB123456789</p>
                  </div>
                  <div>
                    <p className="font-medium">Coverage</p>
                    <p className="text-sm text-gray-600">80% Basic, 60% Major</p>
                  </div>
                  <Button variant="outline" size="sm">Update Insurance</Button>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Recent Invoices</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">Invoice #2025-001</p>
                      <p className="text-sm text-gray-600">Cleaning & Checkup - February 15, 2025</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">$150.00</p>
                      <Badge variant="secondary">Paid</Badge>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">Invoice #2025-002</p>
                      <p className="text-sm text-gray-600">Orthodontic Consultation - March 15, 2025</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">$200.00</p>
                      <Badge>Pending</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="communication" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">Messages</h2>
              <Button>
                <Mail className="w-4 h-4 mr-2" />
                New Message
              </Button>
            </div>

            <div className="grid gap-4">
              <Card>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="font-semibold text-gray-900">Pre-appointment Instructions</h3>
                      <p className="text-sm text-gray-600">From: Dr. Sobia's Office</p>
                    </div>
                    <span className="text-xs text-gray-500">2 days ago</span>
                  </div>
                  <p className="text-gray-700 mb-3">
                    Hello Sarah, just a reminder about Emma's upcoming orthodontic consultation. 
                    Please arrive 15 minutes early to complete any necessary paperwork...
                  </p>
                  <Button variant="outline" size="sm">
                    Reply
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="font-semibold text-gray-900">Treatment Summary</h3>
                      <p className="text-sm text-gray-600">From: Dr. Sobia</p>
                    </div>
                    <span className="text-xs text-gray-500">1 week ago</span>
                  </div>
                  <p className="text-gray-700 mb-3">
                    Emma's cleaning went very well today. Her oral hygiene has improved significantly. 
                    I've attached some at-home care tips...
                  </p>
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Account Settings</h2>

            <div className="grid lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <User className="w-5 h-5" />
                    Profile Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    <Input defaultValue="Sarah Johnson" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <Input defaultValue="sarah.johnson@email.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone
                    </label>
                    <Input defaultValue="(03) 9876 5432" />
                  </div>
                  <Button>Update Profile</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Bell className="w-5 h-5" />
                    Notification Preferences
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span>Appointment reminders</span>
                    <input type="checkbox" defaultChecked className="rounded" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Treatment updates</span>
                    <input type="checkbox" defaultChecked className="rounded" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Billing notifications</span>
                    <input type="checkbox" defaultChecked className="rounded" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Health tips and newsletters</span>
                    <input type="checkbox" className="rounded" />
                  </div>
                  <Button>Save Preferences</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="w-5 h-5" />
                    Security
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button variant="outline" className="w-full">
                    Change Password
                  </Button>
                  <Button variant="outline" className="w-full">
                    Enable Two-Factor Authentication
                  </Button>
                  <Button variant="outline" className="w-full">
                    Download My Data
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Settings className="w-5 h-5" />
                    Emergency Contacts
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Emergency Contact Name
                    </label>
                    <Input defaultValue="Michael Johnson" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Relationship
                    </label>
                    <Input defaultValue="Father" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <Input defaultValue="(03) 9876 5433" />
                  </div>
                  <Button>Update Contact</Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}