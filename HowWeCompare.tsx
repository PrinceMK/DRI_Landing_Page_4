import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { CheckCircle, Star, Award, Users, Sparkles, ArrowRight } from "lucide-react";

export function HowWeCompare() {
  const features = [
    {
      icon: <Award className="w-8 h-8 text-orange-600" />,
      title: "Premium Quality Materials",
      description: "Curated collection from top international and Indian brands",
      highlight: "Only authentic, certified products"
    },
    {
      icon: <Users className="w-8 h-8 text-orange-600" />,
      title: "Expert Design Consultation", 
      description: "Professional interior designers guide your material selection",
      highlight: "Free home visits & 3D visualization"
    },
    {
      icon: <Sparkles className="w-8 h-8 text-orange-600" />,
      title: "Complete Project Solutions",
      description: "From materials to installation - we handle everything",
      highlight: "End-to-end home transformation"
    },
    {
      icon: <Star className="w-8 h-8 text-orange-600" />,
      title: "Lifetime Support",
      description: "Ongoing maintenance and replacement assistance",
      highlight: "Your partner for life"
    }
  ];

  const comparisons = [
    {
      feature: "Material Quality",
      us: "Premium grade, certified materials",
      others: "Mixed quality, limited verification",
      advantage: true
    },
    {
      feature: "Design Support", 
      us: "Professional interior designers",
      others: "Basic sales support only",
      advantage: true
    },
    {
      feature: "Installation Service",
      us: "Trained professionals, lifetime warranty",
      others: "Third-party contractors, limited warranty",
      advantage: true
    },
    {
      feature: "Product Range",
      us: "5000+ products across categories",
      others: "Limited selection",
      advantage: true
    },
    {
      feature: "Price Transparency",
      us: "Clear pricing, no hidden costs",
      others: "Hidden charges, last-minute add-ons", 
      advantage: true
    },
    {
      feature: "After-Sales Support",
      us: "Dedicated support team, lifetime assistance",
      others: "Limited post-purchase support",
      advantage: true
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-6 bg-orange-600 text-white text-lg px-8 py-4 rounded-full font-bold uppercase tracking-wide animate-bounce-soft">
            How We Compare
          </Badge>
          <h2 className="mb-6 text-slate-900 text-5xl lg:text-6xl font-black leading-tight tracking-tight">
            More than a Material Store,{" "}
            <span className="gradient-text-orange">
              A Design Destination
            </span>
          </h2>
          
          {/* Two-liner taglines */}
          <div className="space-y-4 max-w-4xl mx-auto">
            <p className="text-2xl text-slate-700 font-medium leading-relaxed">
              Where Premium materials meet timeless design.
            </p>
            <p className="text-xl text-slate-600 leading-relaxed">
              More than a depot — A space for Elegance and Individuality.
            </p>
            <p className="text-lg text-orange-600 font-semibold">
              Crafting homes that are as unique as you are.
            </p>
          </div>
        </div>

        {/* Feature Cards with Motion */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="text-center hover:shadow-xl transition-all duration-300 card-interactive group border-2 border-transparent hover:border-orange-200"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="font-black text-slate-900 mb-3 text-xl">{feature.title}</h3>
                <p className="text-slate-600 mb-4 leading-relaxed">{feature.description}</p>
                <Badge variant="outline" className="text-orange-600 border-orange-600 bg-orange-50">
                  {feature.highlight}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Comparison Table */}
        <Card className="overflow-hidden shadow-2xl border-2 border-orange-200">
          <div className="bg-gradient-to-r from-orange-600 to-orange-500 text-white p-6">
            <h3 className="text-3xl font-black text-center">Why Choose Dezine Democracy?</h3>
            <p className="text-center text-orange-100 mt-2">Side-by-side comparison with traditional material stores</p>
          </div>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="text-left p-6 font-bold text-slate-900 text-lg">Feature</th>
                    <th className="text-center p-6 font-bold text-orange-600 text-lg bg-orange-50">
                      Dezine Democracy
                    </th>
                    <th className="text-center p-6 font-bold text-slate-600 text-lg">
                      Traditional Stores
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisons.map((item, index) => (
                    <tr key={index} className="border-b border-slate-200 hover:bg-slate-50 transition-colors">
                      <td className="p-6 font-semibold text-slate-900">{item.feature}</td>
                      <td className="p-6 text-center">
                        <div className="flex items-center justify-center gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600" />
                          <span className="text-slate-900 font-medium">{item.us}</span>
                        </div>
                      </td>
                      <td className="p-6 text-center">
                        <span className="text-slate-600">{item.others}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-orange-200 max-w-3xl mx-auto">
            <h3 className="text-3xl font-black text-slate-900 mb-4">
              Experience the Difference Today
            </h3>
            <p className="text-slate-600 text-lg mb-6 leading-relaxed">
              Join thousands of homeowners who have transformed their spaces with our premium materials 
              and expert guidance. Your dream home is just a consultation away.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white font-bold px-8 py-4 rounded-full button-hover-grow">
                <Award className="w-5 h-5 mr-2" />
                Book Free Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-orange-600 text-orange-600 hover:bg-orange-50 font-bold px-8 py-4 rounded-full"
              >
                Visit Our Showroom
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}