import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Clock, Tag, Sparkles, ArrowRight } from "lucide-react";

export function OffersAndLaunches() {
  const offers = [
    {
      type: "LIMITED TIME",
      title: "Up to 40% OFF",
      subtitle: "Premium Tiles Collection",
      description: "Transform your kitchen and bathroom with our exclusive designer tiles",
      image: "https://images.unsplash.com/photo-1722650270197-3f0369d77206?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0aWxlcyUyMGJhdGhyb29tJTIwa2l0Y2hlbnxlbnwxfHx8fDE3NTY0Njk2MDd8MA&ixlib=rb-4.1.0&q=80&w=1080",
      originalPrice: "₹899",
      offerPrice: "₹539",
      validUntil: "5 Days Left",
      isNew: false
    },
    {
      type: "NEW LAUNCH",
      title: "Introducing",
      subtitle: "Luxury Laminate Series",
      description: "Waterproof, scratch-resistant laminates with 15-year warranty",
      image: "https://images.unsplash.com/photo-1722942117261-ec876f53cc5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBsYW1pbmF0ZSUyMGZsb29yaW5nJTIwc2FtcGxlc3xlbnwxfHx8fDE3NTY0Njk2MTF8MA&ixlib=rb-4.1.0&q=80&w=1080",
      originalPrice: "₹1,299",
      offerPrice: "₹999",
      validUntil: "Launch Offer",
      isNew: true
    }
  ];

  const quickOffers = [
    {
      icon: <Tag className="w-5 h-5" />,
      title: "Bundle Deals",
      description: "Save up to ₹5,000 on room packages",
      color: "bg-green-100 text-green-700"
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "Same Day Delivery",
      description: "For orders above ₹25,000",
      color: "bg-blue-100 text-blue-700"
    },
    {
      icon: <Sparkles className="w-5 h-5" />,
      title: "Free Installation",
      description: "On premium product purchases",
      color: "bg-purple-100 text-purple-700"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-orange-50 via-white to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-red-100 text-red-700 hover:bg-red-100 animate-pulse">
            <Sparkles className="w-4 h-4 mr-2" />
            Limited Time Offers
          </Badge>
          <h2 className="mb-4 text-slate-900 text-4xl lg:text-5xl font-bold">🔥 Exclusive Deals Just for You</h2>
          <p className="max-w-2xl mx-auto text-slate-600 text-lg">
            Save big on premium laminates, designer tiles, and quality hardware. Limited stock available!
          </p>
        </div>

        {/* Main Offers */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {offers.map((offer, index) => (
            <Card key={index} className="group overflow-hidden hover:shadow-2xl transition-all duration-300 border-0 shadow-lg">
              <div className="relative">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <ImageWithFallback
                    src={offer.image}
                    alt={offer.subtitle}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                </div>
                
                {/* Badges */}
                <div className="absolute top-4 left-4">
                  <Badge className={`${offer.isNew ? 'bg-green-500' : 'bg-red-500'} text-white hover:${offer.isNew ? 'bg-green-500' : 'bg-red-500'}`}>
                    {offer.type}
                  </Badge>
                </div>
                
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1">
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="w-4 h-4 text-orange-600" />
                    <span className="font-medium text-slate-700">{offer.validUntil}</span>
                  </div>
                </div>

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-1">{offer.title}</h3>
                  <h4 className="text-xl mb-2 text-orange-300">{offer.subtitle}</h4>
                  <p className="text-white/90 mb-4">{offer.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl font-bold text-orange-300">{offer.offerPrice}</span>
                      <span className="text-lg line-through text-white/60">{offer.originalPrice}</span>
                    </div>
                    <Button className="bg-orange-600 hover:bg-orange-700 text-white">
                      Shop Now
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Quick Offers */}
        <div className="grid md:grid-cols-3 gap-6">
          {quickOffers.map((offer, index) => (
            <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full mb-4 ${offer.color}`}>
                  {offer.icon}
                </div>
                <h4 className="font-semibold text-slate-900 mb-2">{offer.title}</h4>
                <p className="text-sm text-slate-600">{offer.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-8 py-6 rounded-2xl shadow-2xl inline-block animate-glow">
            <div className="flex items-center justify-center gap-4 mb-4">
              <Clock className="w-6 h-6 animate-pulse" />
              <span className="text-xl font-bold">Hurry! Offers ending soon!</span>
            </div>
            <Button variant="secondary" size="lg" className="bg-white text-red-600 hover:bg-gray-50 font-bold">
              Shop Now & Save Big
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}