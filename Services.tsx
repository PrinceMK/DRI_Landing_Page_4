import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Home, ShoppingBag, ArrowRight, Star, Plus, Sparkles, Timer, Package } from "lucide-react";
import { useState } from "react";

export function Services() {
  const [hoveredRoom, setHoveredRoom] = useState(null);

  const rooms = [
    {
      id: "living",
      name: "Living Room",
      subtitle: "Create your family gathering space",
      image: "https://images.unsplash.com/photo-1705321963943-de94bb3f0dd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsaXZpbmclMjByb29tJTIwaW50ZXJpb3IlMjBkZXNpZ258ZW58MXx8fHwxNzU2NDU0OTE5fDA&ixlib=rb-4.1.0&q=80&w=1080",
      price: "Starting ₹15,999",
      items: ["Wall Panels", "TV Units", "Flooring", "Furniture Fronts"],
      popular: true,
      savings: "Save 40%"
    },
    {
      id: "kitchen",
      name: "Kitchen",
      subtitle: "Where meals become memories",
      image: "https://images.unsplash.com/photo-1744094064448-3bfaac32eaa6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dGlmdWwlMjBraXRjaGVuJTIwZGVzaWduJTIwbW9kZXJufGVufDF8fHx8MTc1NjQ2OTUxMXww&ixlib=rb-4.1.0&q=80&w=1080",
      price: "Starting ₹25,999",
      items: ["Cabinet Doors", "Countertops", "Backsplash", "Hardware"],
      popular: false,
      savings: "Save 35%"
    },
    {
      id: "bedroom",
      name: "Bedroom",
      subtitle: "Your personal sanctuary",
      image: "https://images.unsplash.com/photo-1704428382616-d8c65fdd76f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwYmVkcm9vbSUyMGludGVyaW9yJTIwZGVzaWdufGVufDF8fHx8MTc1NjQ3NzM2NHww&ixlib=rb-4.1.0&q=80&w=1080",
      price: "Starting ₹12,999",
      items: ["Wardrobe Doors", "Headboards", "Flooring", "Accent Walls"],
      popular: false,
      savings: "Save 45%"
    },
    {
      id: "bathroom",
      name: "Bathroom",
      subtitle: "Spa-like luxury at home",
      image: "https://images.unsplash.com/photo-1658760046471-896cbc719c9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBiYXRocm9vbSUyMGRlc2lnbiUyMGx1eHVyeXxlbnwxfHx8fDE3NTY0NzczNzB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      price: "Starting ₹8,999",
      items: ["Wall Tiles", "Vanity Tops", "Shower Panels", "Fixtures"],
      popular: false,
      savings: "Save 50%"
    }
  ];



  const services = [
    {
      icon: <Timer className="w-6 h-6" />,
      title: "Free Home Visit",
      description: "Expert measurement & consultation at your doorstep"
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "3D Visualization",
      description: "See your room transformation before you buy"
    },
    {
      icon: <Package className="w-6 h-6" />,
      title: "Complete Installation",
      description: "Professional fitting with lifetime support"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - IKEA Style */}
        <div className="text-center mb-16">
          <Badge className="mb-6 bg-black text-white text-lg px-8 py-4 rounded-none font-black uppercase tracking-wide">
            <Home className="w-5 h-5 mr-2" />
            Everything Your Dream Home Needs
          </Badge>
          <h2 className="mb-6 text-black text-5xl lg:text-7xl font-black leading-tight tracking-tight">
            Shop by Room,{" "}
            <span className="text-orange-600">
              Transform Your Space
            </span>
          </h2>
          <p className="max-w-4xl mx-auto text-gray-700 text-xl font-medium">
            Just like IKEA revolutionized furniture shopping - we've revolutionized materials shopping! 
            Complete room solutions with everything you need, delivered and installed by experts.
          </p>
        </div>

        {/* Room Shopping Grid - IKEA Style Rectangular Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {rooms.map((room) => (
            <div 
              key={room.id}
              className="group relative overflow-hidden bg-white border-2 border-gray-200 hover:border-orange-600 transition-all duration-300 cursor-pointer card-interactive button-hover-grow"
              onMouseEnter={() => setHoveredRoom(room.id)}
              onMouseLeave={() => setHoveredRoom(null)}
            >
              {/* Popular Badge - IKEA Style */}
              {room.popular && (
                <div className="absolute top-0 right-0 z-20">
                  <div className="bg-red-600 text-white px-4 py-2 font-black text-sm uppercase">
                    <Star className="w-4 h-4 mr-1 inline" />
                    Bestseller
                  </div>
                </div>
              )}

              {/* Savings Badge - IKEA Style */}
              <div className="absolute top-0 left-0 z-20">
                <div className="bg-orange-600 text-white px-4 py-2 font-black text-sm">
                  {room.savings}
                </div>
              </div>

              <div className="aspect-[4/3] relative overflow-hidden">
                <ImageWithFallback
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Interactive Product Tags */}
                {hoveredRoom === room.id && (
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <div className="grid grid-cols-2 gap-3 p-4">
                      {room.items.slice(0, 4).map((item, idx) => (
                        <div key={idx} className="relative">
                          <Button
                            size="sm"
                            className="bg-white text-black hover:bg-orange-600 hover:text-white text-xs font-bold border-2 border-black"
                          >
                            <Plus className="w-3 h-3 mr-1" />
                            {item}
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Product Info - IKEA Style */}
              <div className="p-6 bg-white">
                <h3 className="text-2xl font-black text-black mb-2 uppercase tracking-wide">{room.name}</h3>
                <p className="text-gray-600 mb-4 text-sm font-medium">{room.subtitle}</p>
                <div className="flex items-center justify-between">
                  <div className="text-xl font-black text-black">{room.price}</div>
                  <Button className="bg-orange-600 hover:bg-orange-700 text-white font-bold px-6 py-3 rounded-none button-hover-grow">
                    <ShoppingBag className="w-4 h-4 mr-2" />
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>



        {/* Inspiration Section - IKEA Style */}
        <div className="mt-20 text-center">
          <h3 className="text-4xl font-black text-black mb-6 uppercase tracking-wider">
            Get Inspired by Real Homes
          </h3>
          <p className="text-gray-700 text-lg font-medium mb-8 max-w-3xl mx-auto">
            See how families across India have transformed their spaces with DRI materials. 
            Your dream home is just a click away.
          </p>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-2 border-black text-black hover:bg-black hover:text-white font-black px-8 py-4 rounded-none uppercase tracking-wide"
          >
            Browse Home Ideas
          </Button>
        </div>
      </div>
    </section>
  );
}