import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Moon, Shield, Heart, CheckCircle, AlertTriangle, Clock } from 'lucide-react';
import Link from 'next/link';

export default function SedationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Moon className="w-8 h-8 text-purple-600" />
              <span className="text-purple-600 font-semibold">Sedation Dentistry</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Comfortable, Anxiety-Free Dental Care
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Our safe and effective sedation options help anxious children feel relaxed and comfortable 
              during dental procedures, ensuring a positive experience for both child and parent.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button size="lg">
                  Discuss Sedation Options
                </Button>
              </Link>
              <Link href="tel:+1234567890">
                <Button size="lg" variant="outline">
                  Call for Consultation
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1584515933487-779824d29309?w=600&h=600&fit=crop"
                alt="Comfortable sedation dentistry for children"
                width={600}
                height={600}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>

        {/* When Sedation is Recommended */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            When Sedation May Be Recommended
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <AlertTriangle className="w-8 h-8 text-red-600" />
                </div>
                <CardTitle className="text-lg">High Anxiety</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Children with severe dental anxiety or phobias who cannot relax during treatment.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-lg">Complex Procedures</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Lengthy or complex dental procedures that require the child to remain still for extended periods.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle className="text-lg">Special Needs</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Children with special healthcare needs who may have difficulty cooperating during treatment.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-purple-600" />
                </div>
                <CardTitle className="text-lg">Multiple Treatments</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  When multiple procedures need to be completed in a single visit for efficiency and comfort.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Sedation Options */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our Sedation Options
          </h2>
          
          <Tabs defaultValue="nitrous" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="nitrous">Nitrous Oxide</TabsTrigger>
              <TabsTrigger value="oral">Oral Sedation</TabsTrigger>
              <TabsTrigger value="iv">IV Sedation</TabsTrigger>
              <TabsTrigger value="general">General Anesthesia</TabsTrigger>
            </TabsList>
            
            <TabsContent value="nitrous" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-center">Nitrous Oxide (Laughing Gas)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">How It Works</h3>
                      <p className="text-gray-600 mb-4">
                        Nitrous oxide is a safe, colorless gas that helps children relax during dental procedures. 
                        It's inhaled through a small mask placed over the nose.
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          <span className="text-sm text-gray-600">Quick onset and recovery</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          <span className="text-sm text-gray-600">Child remains conscious and responsive</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          <span className="text-sm text-gray-600">No needles or injections required</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">Best For</h3>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Mild to moderate anxiety</li>
                        <li>• Routine dental procedures</li>
                        <li>• Children who can follow instructions</li>
                        <li>• First-time dental patients</li>
                      </ul>
                      
                      <h3 className="text-xl font-semibold text-gray-900 mb-4 mt-6">Safety</h3>
                      <p className="text-gray-600">
                        Nitrous oxide has been used safely in dentistry for over 150 years. 
                        Your child will be monitored throughout the procedure.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="oral" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-center">Oral Sedation</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">How It Works</h3>
                      <p className="text-gray-600 mb-4">
                        Oral sedation involves taking a prescribed medication before the appointment. 
                        The child becomes very relaxed but remains conscious.
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          <span className="text-sm text-gray-600">Easy to administer</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          <span className="text-sm text-gray-600">Deeper relaxation than nitrous oxide</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          <span className="text-sm text-gray-600">Child may have little memory of procedure</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">Best For</h3>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Moderate to high anxiety</li>
                        <li>• Longer procedures</li>
                        <li>• Children who won't tolerate nitrous oxide</li>
                        <li>• Multiple procedures in one visit</li>
                      </ul>
                      
                      <h3 className="text-xl font-semibold text-gray-900 mb-4 mt-6">Preparation</h3>
                      <p className="text-gray-600">
                        Your child will need to fast before the appointment and will need supervision 
                        for the rest of the day as the effects wear off.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="iv" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-center">IV Sedation</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">How It Works</h3>
                      <p className="text-gray-600 mb-4">
                        Intravenous sedation delivers medication directly into the bloodstream, 
                        providing deeper sedation while maintaining consciousness.
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          <span className="text-sm text-gray-600">Precise control over sedation level</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          <span className="text-sm text-gray-600">Rapid onset and adjustment</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          <span className="text-sm text-gray-600">Continuous monitoring</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">Best For</h3>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Severe dental anxiety</li>
                        <li>• Complex or lengthy procedures</li>
                        <li>• Children who haven't responded to other sedation</li>
                        <li>• Special needs patients</li>
                      </ul>
                      
                      <h3 className="text-xl font-semibold text-gray-900 mb-4 mt-6">Monitoring</h3>
                      <p className="text-gray-600">
                        Continuous monitoring of vital signs ensures your child's safety throughout 
                        the procedure with a trained anesthesiologist present.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="general" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-center">General Anesthesia</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">How It Works</h3>
                      <p className="text-gray-600 mb-4">
                        General anesthesia puts your child in a controlled state of unconsciousness, 
                        allowing for extensive dental work without any awareness or discomfort.
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          <span className="text-sm text-gray-600">Complete unawareness of procedure</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          <span className="text-sm text-gray-600">Allows for extensive treatment</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          <span className="text-sm text-gray-600">Performed in hospital setting</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">Best For</h3>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Extensive dental treatment needed</li>
                        <li>• Severe behavioral issues</li>
                        <li>• Children with significant special needs</li>
                        <li>• Very young children requiring multiple procedures</li>
                      </ul>
                      
                      <h3 className="text-xl font-semibold text-gray-900 mb-4 mt-6">Safety</h3>
                      <p className="text-gray-600">
                        Performed by a board-certified anesthesiologist in a hospital setting 
                        with full monitoring and emergency capabilities.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Safety and Preparation */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-6 h-6 text-blue-600" />
                Safety First
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                Your child's safety is our top priority. We follow strict protocols and guidelines 
                for all sedation procedures.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span className="text-sm text-gray-600">Comprehensive pre-operative evaluation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span className="text-sm text-gray-600">Continuous monitoring during procedure</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span className="text-sm text-gray-600">Emergency equipment and trained staff</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span className="text-sm text-gray-600">Post-operative care instructions</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="w-6 h-6 text-purple-600" />
                Pre-Appointment Preparation
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                Proper preparation helps ensure a safe and successful sedation experience.
              </p>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-gray-900">Medical History</h4>
                  <p className="text-sm text-gray-600">Complete medical history and current medications</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Fasting Guidelines</h4>
                  <p className="text-sm text-gray-600">Specific instructions about eating and drinking before the appointment</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Transportation</h4>
                  <p className="text-sm text-gray-600">Arrange for someone to drive you and your child home</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Comfort Items</h4>
                  <p className="text-sm text-gray-600">Bring a favorite toy or blanket for comfort</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="bg-purple-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Discuss Sedation Options for Your Child
          </h2>
          <p className="text-xl mb-6 text-purple-100">
            Schedule a consultation to determine the best sedation approach for your child's needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="text-purple-600">
                Schedule Consultation
              </Button>
            </Link>
            <Link href="tel:+1234567890">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600">
                Call: (123) 456-7890
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}