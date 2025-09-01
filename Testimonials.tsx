import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Slider } from "./ui/slider";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Star, ArrowRight, Heart, Home, Calendar, MapPin, Play, Pause } from "lucide-react";
import { useState, useEffect } from "react";

export function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [beforeAfterSlider, setBeforeAfterSlider] = useState([50]); // For before/after comparison

  const transformations = [
    {
      id: 1,
      family: "The Sharma Family",
      location: "Banjara Hills, Hyderabad",
      project: "Complete Kitchen Makeover",
      timeline: "3 days",
      budget: "₹85,000",
      beforeImage: "https://images.unsplash.com/photo-1579618217299-92460380cf99?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbGQlMjBraXRjaGVuJTIwcmVub3ZhdGlvbiUyMGJlZm9yZXxlbnwxfHx8fDE3NTY0Nzc0ODl8MA&ixlib=rb-4.1.0&q=80&w=1080",
      afterImage: "https://images.unsplash.com/photo-1578177154072-bbbd429d496f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWZvcmUlMjBhZnRlciUyMGhvbWUlMjByZW5vdmF0aW9uJTIwa2l0Y2hlbnxlbnwxfHx8fDE3NTY0Nzc0ODB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      testimonial: "Dezine Democracy transformed our outdated kitchen into a modern culinary paradise! The quality of laminates is outstanding and the installation was flawless. Our whole family loves cooking together now!",
      rating: 5,
      materials: ["Acrylic Laminates", "Hardware", "Countertops"],
      savings: "40%",
      featured: true
    },
    {
      id: 2,
      family: "The Patel Family",
      location: "Jubilee Hills, Hyderabad", 
      project: "Living Room Renovation",
      timeline: "2 days",
      budget: "₹65,000",
      beforeImage: "https://images.unsplash.com/photo-1581209410127-8211e90da024?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsaXZpbmclMjByb29tJTIwbWFrZW92ZXJ8ZW58MXx8fHwxNTU2NDc3NDg0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      afterImage: "https://images.unsplash.com/photo-1581209410127-8211e90da024?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsaXZpbmclMjByb29tJTIwbWFrZW92ZXJ8ZW58MXx8fHwxNzU2NDc3NDg0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      testimonial: "We couldn't believe the difference! Dezine Democracy's team understood exactly what we wanted. The wood grain laminates look so real, our guests think it's actual wood. Amazing value for money!",
      rating: 5,
      materials: ["Wood Grain Laminates", "Wall Panels", "Lighting"],
      savings: "35%",
      featured: false
    },
    {
      id: 3,
      family: "The Reddy Family",
      location: "Gachibowli, Hyderabad",
      project: "Master Bedroom Suite",
      timeline: "4 days", 
      budget: "₹1,20,000",
      beforeImage: "https://images.unsplash.com/photo-1594735974070-b678995b9f09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjBoYXBweSUyMGhvbWUlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NTY0Nzc0OTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
      afterImage: "https://images.unsplash.com/photo-1594735974070-b678995b9f09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjBoYXBweSUyMGhvbWUlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NTY0Nzc0OTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
      testimonial: "From consultation to completion, Dezine Democracy exceeded every expectation. The metallic finish laminates add such elegance to our bedroom. It feels like a luxury hotel suite now!",
      rating: 5,
      materials: ["Metallic Laminates", "Wardrobes", "Flooring"],
      savings: "45%",
      featured: false
    }
  ];

  const quickTestimonials = [
    {
      name: "Anita Sharma",
      area: "Madhapur",
      text: "Best investment for our home! Quality is top-notch 👌",
      rating: 5,
      project: "Kitchen Renovation",
      avatar: "AS"
    },
    {
      name: "Raj Patel",
      area: "Hitec City", 
      text: "Professional team, amazing results! Highly recommend Dezine Democracy 🏠",
      rating: 5,
      project: "Complete Home",
      avatar: "RP"
    },
    {
      name: "Priya Reddy",
      area: "Banjara Hills",
      text: "Our dream home is finally reality. Thank you Dezine Democracy team! ❤️",
      rating: 5,
      project: "Living Room",
      avatar: "PR"
    },
    {
      name: "Kumar Singh",
      area: "Kondapur",
      text: "Value for money is incredible. Will definitely recommend! 💯",
      rating: 5,
      project: "Bedroom Makeover",
      avatar: "KS"
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % transformations.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isPlaying, transformations.length]);

  const BeforeAfterSlider = ({ beforeImage, afterImage, family }) => (
    <div className="relative aspect-video overflow-hidden rounded-xl">
      {/* Before Image */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src={beforeImage}
          alt={`${family} - Before`}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 left-4">
          <Badge className="bg-red-600 text-white">BEFORE</Badge>
        </div>
      </div>

      {/* After Image */}
      <div 
        className="absolute inset-0"
        style={{ 
          clipPath: `polygon(${beforeAfterSlider[0]}% 0%, 100% 0%, 100% 100%, ${beforeAfterSlider[0]}% 100%)` 
        }}
      >
        <ImageWithFallback
          src={afterImage}
          alt={`${family} - After`}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4">
          <Badge className="bg-green-600 text-white">AFTER</Badge>
        </div>
      </div>

      {/* Slider Control */}
      <div className="absolute bottom-4 left-4 right-4">
        <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4">
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium text-slate-700">Drag to reveal transformation:</span>
            <Slider
              value={beforeAfterSlider}
              onValueChange={setBeforeAfterSlider}
              max={100}
              step={1}
              className="flex-1"
            />
          </div>
        </div>
      </div>

      {/* Divider Line */}
      <div 
        className="absolute top-0 bottom-0 w-1 bg-white shadow-lg"
        style={{ left: `${beforeAfterSlider[0]}%`, transform: 'translateX(-50%)' }}
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
          <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-20 bg-gradient-to-br from-white via-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-orange-100 text-orange-700 hover:bg-orange-100 text-lg px-6 py-2">
            <Heart className="w-5 h-5 mr-2" />
            Real Home Transformations
          </Badge>
          <h2 className="mb-4 text-slate-900 text-4xl lg:text-5xl font-bold">
            See The{" "}
            <span className="bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
              Magic Happen
            </span>{" "}
            with Dezine Democracy
          </h2>
          <p className="max-w-2xl mx-auto text-slate-600 text-lg">
            Real families, real transformations. Interactive before & after reveals showcasing how Dezine Democracy transforms ordinary homes into extraordinary spaces.
          </p>
        </div>

        {/* Featured Transformation */}
        <div className="mb-16">
          <Card className="overflow-hidden shadow-2xl border-0 bg-gradient-to-br from-white to-slate-50">
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Before/After Interactive Slider */}
                <div className="relative">
                  <BeforeAfterSlider
                    beforeImage={transformations[currentSlide].beforeImage}
                    afterImage={transformations[currentSlide].afterImage}
                    family={transformations[currentSlide].family}
                  />
                </div>

                {/* Transformation Details */}
                <div className="p-8 lg:p-12">
                  <div className="space-y-6">
                    <div>
                      <div className="flex items-center gap-4 mb-4">
                        <h3 className="text-2xl font-bold text-slate-900">
                          {transformations[currentSlide].family}
                        </h3>
                        <div className="flex">
                          {[...Array(transformations[currentSlide].rating)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4 text-slate-600 mb-4">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span className="text-sm">{transformations[currentSlide].location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span className="text-sm">{transformations[currentSlide].timeline}</span>
                        </div>
                      </div>

                      <Badge className="bg-green-100 text-green-700 mb-4">
                        Saved {transformations[currentSlide].savings} on total cost
                      </Badge>
                    </div>

                    <blockquote className="text-lg text-slate-700 italic leading-relaxed">
                      "{transformations[currentSlide].testimonial}"
                    </blockquote>

                    {/* Project Details */}
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-slate-600">Project:</span>
                        <div className="font-medium text-slate-900">{transformations[currentSlide].project}</div>
                      </div>
                      <div>
                        <span className="text-slate-600">Investment:</span>
                        <div className="font-bold text-orange-600">{transformations[currentSlide].budget}</div>
                      </div>
                    </div>

                    {/* Materials Used */}
                    <div>
                      <span className="text-slate-600 text-sm">Materials Used:</span>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {transformations[currentSlide].materials.map((material, idx) => (
                          <Badge key={idx} variant="secondary" className="bg-orange-100 text-orange-700">
                            {material}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white">
                      <Home className="w-4 h-4 mr-2" />
                      Get Similar Transformation
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Carousel Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsPlaying(!isPlaying)}
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            </Button>
            
            <div className="flex gap-2">
              {transformations.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentSlide ? 'bg-orange-600' : 'bg-slate-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Quick Testimonials */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">💬 What Families Are Saying</h3>
            <p className="text-slate-600">Real reviews from real customers</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickTestimonials.map((testimonial, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Avatar className="bg-orange-100">
                        <AvatarFallback className="text-orange-600 font-bold">
                          {testimonial.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium text-slate-900">{testimonial.name}</div>
                        <div className="text-sm text-slate-600">{testimonial.area}</div>
                      </div>
                    </div>

                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                      ))}
                    </div>

                    <p className="text-slate-700 text-sm italic">"{testimonial.text}"</p>

                    <Badge variant="secondary" className="bg-orange-100 text-orange-700 text-xs">
                      {testimonial.project}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white shadow-xl group animate-glow">
            <Heart className="w-5 h-5 mr-2" />
            Start Your Transformation Story
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
}