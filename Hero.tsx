import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowRight, Home, Heart } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden" style={{ marginTop: '112px' }}>
      {/* Light Orange Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-orange-100 to-orange-200">
        <div className="absolute inset-0 bg-gradient-to-r from-white/40 via-orange-50/30 to-transparent"></div>
      </div>

      {/* 3D Pencil Rendering Watermark - Animated */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="animate-slow-scroll flex items-center justify-center h-full">
          <div className="grid grid-cols-4 gap-12 transform rotate-12">
            {/* Multiple 3D Pencil Rendering Elements */}
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1610650394144-a778795cf585?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzRCUyMGFyY2hpdGVjdHVyYWwlMjBwZW5jaWwlMjByZW5kZXJpbmclMjBza2V0Y2glMjBibHVlcHJpbnR8ZW58MXx8fHwxNzU2NzIyNzY2fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="3D Pencil Rendering 1"
              className="w-40 h-40 object-contain opacity-60 animate-slow-zoom filter grayscale contrast-125"
            />
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1610650394144-a778795cf585?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzRCUyMGFyY2hpdGVjdHVyYWwlMjBwZW5jaWwlMjByZW5kZXJpbmclMjBza2V0Y2glMjBibHVlcHJpbnR8ZW58MXx8fHwxNzU2NzIyNzY2fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="3D Pencil Rendering 2"
              className="w-40 h-40 object-contain opacity-50 animate-pulse-slow filter grayscale contrast-125"
            />
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1610650394144-a778795cf585?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzRCUyMGFyY2hpdGVjdHVyYWwlMjBwZW5jaWwlMjByZW5kZXJpbmclMjBza2V0Y2glMjBibHVlcHJpbnR8ZW58MXx8fHwxNzU2NzIyNzY2fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="3D Pencil Rendering 3"
              className="w-40 h-40 object-contain opacity-40 animate-float filter grayscale contrast-125"
            />
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1610650394144-a778795cf585?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzRCUyMGFyY2hpdGVjdHVyYWwlMjBwZW5jaWwlMjByZW5kZXJpbmclMjBza2V0Y2glMjBibHVlcHJpbnR8ZW58MXx8fHwxNzU2NzIyNzY2fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="3D Pencil Rendering 4"
              className="w-40 h-40 object-contain opacity-70 animate-scale-breath filter grayscale contrast-125"
            />
          </div>
        </div>
      </div>

      {/* Subtle geometric accents */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-orange-300/30 to-orange-400/30 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-orange-200/20 to-orange-300/20 rounded-full blur-3xl animate-slow-zoom"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen">
        <div className="flex items-center justify-center min-h-screen py-16">
          {/* Centered Content */}
          <div className="text-center space-y-8 max-w-5xl">
            {/* Trust indicators */}
            <div className="flex items-center justify-center gap-8 text-slate-700 pt-6">
              <div className="flex items-center gap-2">
                <Home className="w-5 h-5 text-orange-600" />
                <span>10,000+ Happy Homes</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="w-5 h-5 text-red-500" />
                <span>Loved by Families</span>
              </div>
            </div>

            {/* Main heading - Modern Interactive Style */}
            <div className="space-y-6 relative">
              {/* Floating Laminate and Tile Icons */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-10 left-10 w-16 h-16 bg-gradient-to-br from-orange-200 to-orange-300 rounded-lg shadow-lg animate-float opacity-60 transform rotate-12">
                  <div className="w-full h-full bg-gradient-to-br from-amber-100 to-orange-200 rounded-lg border-2 border-orange-300"></div>
                </div>
                <div className="absolute top-20 right-16 w-12 h-12 bg-gradient-to-br from-slate-300 to-slate-400 rounded shadow-lg animate-float opacity-70 transform -rotate-6" style={{animationDelay: '1s'}}></div>
                <div className="absolute bottom-32 left-20 w-14 h-14 bg-gradient-to-br from-orange-300 to-orange-400 rounded-lg shadow-lg animate-float opacity-50 transform rotate-45" style={{animationDelay: '2s'}}></div>
                <div className="absolute bottom-40 right-10 w-10 h-10 bg-gradient-to-br from-slate-200 to-slate-300 rounded shadow-lg animate-float opacity-60 transform -rotate-12" style={{animationDelay: '0.5s'}}></div>
                <div className="absolute top-1/2 left-8 w-8 h-8 bg-gradient-to-br from-orange-400 to-orange-500 rounded-lg shadow-lg animate-float opacity-40 transform rotate-30" style={{animationDelay: '1.5s'}}></div>
                <div className="absolute top-1/3 right-8 w-12 h-12 bg-gradient-to-br from-amber-200 to-orange-300 rounded shadow-lg animate-float opacity-50 transform -rotate-45" style={{animationDelay: '2.5s'}}></div>
              </div>

              <div className="relative z-10">
                <h1 className="text-6xl lg:text-7xl xl:text-8xl font-black text-slate-900 leading-tight tracking-tight animate-slide-in-up">
                  India's Largest{" "}
                  <span className="relative inline-block">
                    <span className="gradient-text-orange animate-shimmer bg-gradient-to-r from-orange-500 via-orange-600 to-orange-500 bg-clip-text text-transparent animate-pulse">
                      Design Collection
                    </span>
                    <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full animate-scale-breath"></div>
                  </span>
                </h1>
                
                <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-slate-800 max-w-4xl mx-auto leading-relaxed animate-slide-in-up" style={{animationDelay: '0.2s'}}>
                  of Laminates and Tiles, crafted for every space
                </h2>
                
                <p className="text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed animate-slide-in-up" style={{animationDelay: '0.4s'}}>
                  Transform your dream home with our premium collection of designer laminates, elegant tiles, and quality hardware. 
                  From contemporary kitchens to luxurious bathrooms - we have everything to bring your vision to life.
                </p>
              </div>
            </div>

            {/* CTA Buttons - Modern Pill-shaped Style */}
            <div className="flex flex-col sm:flex-row gap-4 pt-8 justify-center animate-slide-in-up" style={{animationDelay: '0.6s'}}>
              <div className="text-center">
                <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white border-0 shadow-xl group text-lg px-10 py-4 h-14 font-bold button-hover-grow rounded-full uppercase tracking-wide">
                  Shop Now
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </Button>
                <p className="text-sm text-slate-600 mt-2 font-medium">Explore 5000+ laminates instantly</p>
              </div>
              <div className="text-center">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white text-lg px-10 py-4 h-14 font-bold button-hover-grow rounded-full uppercase tracking-wide"
                >
                  Visit Showroom
                </Button>
                <p className="text-sm text-slate-600 mt-2 font-medium">Touch, feel, experience quality</p>
              </div>
            </div>

            {/* Stats - IKEA rectangular style */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 max-w-3xl mx-auto">
              <div className="bg-white/95 backdrop-blur-sm border-2 border-orange-200 p-6 shadow-lg card-interactive button-hover-grow">
                <div className="text-4xl font-black text-orange-600">15+</div>
                <div className="text-sm font-bold text-slate-700 uppercase tracking-wide">Years of Trust</div>
              </div>
              <div className="bg-white/95 backdrop-blur-sm border-2 border-orange-200 p-6 shadow-lg card-interactive button-hover-grow">
                <div className="text-4xl font-black text-orange-600">10,000+</div>
                <div className="text-sm font-bold text-slate-700 uppercase tracking-wide">Homes Transformed</div>
              </div>
              <div className="bg-white/95 backdrop-blur-sm border-2 border-orange-200 p-6 shadow-lg card-interactive button-hover-grow">
                <div className="text-4xl font-black text-orange-600">500+</div>
                <div className="text-sm font-bold text-slate-700 uppercase tracking-wide">Product Varieties</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}