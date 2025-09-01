import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Progress } from "./ui/progress";
import { Heart, Shield, Truck, Headphones, Users, Award, Clock, IndianRupee, Star, CheckCircle, X } from "lucide-react";
import { useState } from "react";

export function WhyChooseDRI() {
  const [activeComparison, setActiveComparison] = useState('quality');

  const features = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Family-First Approach",
      description: "We understand that your home is where your family creates memories. Every product is chosen with your loved ones in mind.",
      stat: "10,000+",
      statLabel: "Happy Families",
      benefit: "Personalized solutions for every family need"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Quality You Can Trust", 
      description: "15 years of warranty on all products. We stand behind our materials because we believe in quality that lasts.",
      stat: "15 Years",
      statLabel: "Warranty",
      benefit: "Industry's longest warranty period"
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Hassle-Free Delivery",
      description: "Free delivery and installation in your city. Our team handles everything so you can focus on what matters most.",
      stat: "48 Hours",
      statLabel: "Quick Delivery",
      benefit: "Fastest delivery in the industry"
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: "Always Here to Help",
      description: "From design consultation to after-sales support, our friendly team is always ready to assist your home improvement journey.",
      stat: "24/7",
      statLabel: "Support Available",
      benefit: "Round-the-clock customer care"
    }
  ];

  const comparisonData = {
    quality: {
      title: "Quality Standards",
      dri: { score: 95, label: "Premium Grade A+" },
      others: { score: 70, label: "Standard Grade B" },
      features: [
        { feature: "Material Thickness", dri: "1.5mm Premium", others: "0.8mm Standard" },
        { feature: "Finish Quality", dri: "High Gloss UV", others: "Basic Lamination" },
        { feature: "Durability Test", dri: "15+ Years Tested", others: "5-7 Years" },
        { feature: "Warranty", dri: "15 Years", others: "2-3 Years" }
      ]
    },
    pricing: {
      title: "Value for Money",
      dri: { score: 90, label: "Best Value" },
      others: { score: 60, label: "Average Value" },
      features: [
        { feature: "Price Range", dri: "₹199-649/sq ft", others: "₹299-899/sq ft" },
        { feature: "Installation", dri: "FREE", others: "₹50-100/sq ft" },
        { feature: "Design Consultation", dri: "FREE", others: "₹2000-5000" },
        { feature: "Bulk Discounts", dri: "Up to 40%", others: "Up to 15%" }
      ]
    },
    service: {
      title: "Customer Service",
      dri: { score: 98, label: "Exceptional" },
      others: { score: 65, label: "Basic" },
      features: [
        { feature: "Response Time", dri: "< 2 Hours", others: "24-48 Hours" },
        { feature: "Home Visit", dri: "FREE Same Day", others: "Paid, 3-5 Days" },
        { feature: "Installation Team", dri: "Certified Experts", others: "Basic Contractors" },
        { feature: "After Sales", dri: "Lifetime Support", others: "Limited Period" }
      ]
    }
  };

  const testimonialStats = [
    { value: "4.9/5", label: "Customer Rating", icon: <Star className="w-5 h-5" /> },
    { value: "98%", label: "Satisfaction Rate", icon: <Heart className="w-5 h-5" /> },
    { value: "48hrs", label: "Avg Delivery", icon: <Truck className="w-5 h-5" /> },
    { value: "10k+", label: "Happy Homes", icon: <Users className="w-5 h-5" /> }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-orange-600/20 text-orange-400 hover:bg-orange-600/30 text-lg px-6 py-2 border border-orange-600/30">
            <Award className="w-5 h-5 mr-2" />
            Why Choose Dezine Democracy
          </Badge>
          <h2 className="mb-4 text-white text-4xl lg:text-5xl font-bold">
            More than a Material Store,{" "}
            <span className="bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
              A Design Destination
            </span>
          </h2>
          <div className="max-w-3xl mx-auto space-y-3">
            <p className="text-orange-400 text-xl font-medium">
              Where Premium materials meet timeless design.
            </p>
            <p className="text-gray-300 text-lg">
              More than a depot -- A space for Elegance and Individuality.
            </p>
            <p className="text-gray-300 text-lg">
              Crafting homes that are unique as you are.
            </p>
          </div>
        </div>

        {/* Interactive Comparison Tool */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">🥇 See How We Compare</h3>
            <p className="text-gray-300">Interactive comparison with other suppliers</p>
          </div>

          <Tabs value={activeComparison} onValueChange={setActiveComparison} className="w-full">
            <TabsList className="grid w-full max-w-lg mx-auto grid-cols-3 mb-8 bg-gray-800 shadow-lg border border-gray-700">
              <TabsTrigger value="quality" className="data-[state=active]:bg-orange-600 data-[state=active]:text-white text-gray-300 data-[state=inactive]:hover:text-orange-400">
                Quality
              </TabsTrigger>
              <TabsTrigger value="pricing" className="data-[state=active]:bg-orange-600 data-[state=active]:text-white text-gray-300 data-[state=inactive]:hover:text-orange-400">
                Pricing
              </TabsTrigger>
              <TabsTrigger value="service" className="data-[state=active]:bg-orange-600 data-[state=active]:text-white text-gray-300 data-[state=inactive]:hover:text-orange-400">
                Service
              </TabsTrigger>
            </TabsList>

            {Object.entries(comparisonData).map(([key, data]) => (
              <TabsContent key={key} value={key}>
                <Card className="bg-gray-900 shadow-xl border border-gray-700">
                  <CardContent className="p-8">
                    <div className="text-center mb-8">
                      <h4 className="text-xl font-bold text-white mb-4">{data.title}</h4>
                      
                      {/* Score Comparison */}
                      <div className="grid md:grid-cols-2 gap-8 mb-8">
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <span className="font-bold text-orange-600">Dezine Democracy</span>
                            <span className="text-2xl font-bold text-orange-600">{data.dri.score}%</span>
                          </div>
                          <Progress value={data.dri.score} className="h-3" />
                          <p className="text-sm text-orange-600 font-medium">{data.dri.label}</p>
                        </div>
                        
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <span className="font-bold text-gray-400">Others</span>
                            <span className="text-2xl font-bold text-gray-400">{data.others.score}%</span>
                          </div>
                          <Progress value={data.others.score} className="h-3" />
                          <p className="text-sm text-gray-400 font-medium">{data.others.label}</p>
                        </div>
                      </div>
                    </div>

                    {/* Feature Comparison */}
                    <div className="space-y-4">
                      {data.features.map((item, idx) => (
                        <div key={idx} className="grid md:grid-cols-3 gap-4 items-center p-4 bg-gray-800 rounded-lg border border-gray-700">
                          <div className="font-medium text-white">{item.feature}</div>
                          <div className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <span className="text-green-400 font-medium">{item.dri}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <X className="w-4 h-4 text-red-400" />
                            <span className="text-gray-400">{item.others}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        {/* Features Grid with Animation */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="group text-center border border-gray-700 shadow-lg bg-gray-900 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 hover:border-orange-600/50">
              <CardContent className="p-6">
                <div className="mb-4 text-orange-500 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                
                {/* Animated Counter */}
                <div className="mb-4">
                  <div className="text-3xl font-bold text-orange-500 mb-1">{feature.stat}</div>
                  <div className="text-sm text-gray-400">{feature.statLabel}</div>
                </div>
                
                <h3 className="mb-3 text-white">{feature.title}</h3>
                <p className="text-gray-300 mb-4 text-sm">{feature.description}</p>
                
                <div className="bg-orange-600/20 rounded-lg p-3 border border-orange-600/30">
                  <p className="text-xs text-orange-400 font-medium">{feature.benefit}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>



        {/* Trust Indicators */}
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-gray-900 shadow-lg border border-gray-700 overflow-hidden hover:border-orange-600/50 transition-colors">
            <CardContent className="p-6 text-center">
              <div className="bg-green-600/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 border border-green-600/30">
                <Shield className="w-8 h-8 text-green-400" />
              </div>
              <h4 className="font-bold text-white mb-2">15-Year Warranty</h4>
              <p className="text-gray-300 text-sm">Industry's longest warranty on all materials</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 shadow-lg border border-gray-700 overflow-hidden hover:border-orange-600/50 transition-colors">
            <CardContent className="p-6 text-center">
              <div className="bg-blue-600/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 border border-blue-600/30">
                <Clock className="w-8 h-8 text-blue-400" />
              </div>
              <h4 className="font-bold text-white mb-2">48-Hour Delivery</h4>
              <p className="text-gray-300 text-sm">Fastest delivery and installation service</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 shadow-lg border border-gray-700 overflow-hidden hover:border-orange-600/50 transition-colors">
            <CardContent className="p-6 text-center">
              <div className="bg-orange-600/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 border border-orange-600/30">
                <IndianRupee className="w-8 h-8 text-orange-400" />
              </div>
              <h4 className="font-bold text-white mb-2">Best Price Promise</h4>
              <p className="text-gray-300 text-sm">Match any genuine quote or get it for free</p>
            </CardContent>
          </Card>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button size="lg" className="bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white shadow-xl group animate-glow border border-orange-500/30">
            <Heart className="w-5 h-5 mr-2 group-hover:animate-bounce" />
            Join 10,000+ Happy Families
          </Button>
        </div>
      </div>
    </section>
  );
}