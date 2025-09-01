import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "./ui/dialog";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator, DropdownMenuLabel } from "./ui/dropdown-menu";
import { Menu, Search, ShoppingCart, Heart, MessageCircle, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { ProductPage } from "./ProductPage";

interface HeaderProps {
  onProductPageOpen?: (category: string, subcategory: string) => void;
  currentPage?: string;
  onPageChange?: (page: string) => void;
}

export function Header({ onProductPageOpen, currentPage = "home", onPageChange }: HeaderProps) {
  const [searchItem, setSearchItem] = useState("");
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const searchItems = [
    "Decolam",
    "Acrylic", 
    "ASA sheets",
    "Tiles",
    "Decor",
    "Fittings"
  ];
  
  useEffect(() => {
    let currentIndex = 0;
    let currentText = "";
    let isDeleting = false;
    
    const typeEffect = () => {
      const fullText = searchItems[currentIndex];
      
      if (isDeleting) {
        currentText = fullText.substring(0, currentText.length - 1);
      } else {
        currentText = fullText.substring(0, currentText.length + 1);
      }
      
      setSearchItem(currentText);
      
      let delay = isDeleting ? 50 : 100;
      
      if (!isDeleting && currentText === fullText) {
        delay = 2000;
        isDeleting = true;
      } else if (isDeleting && currentText === "") {
        isDeleting = false;
        currentIndex = (currentIndex + 1) % searchItems.length;
        delay = 500;
      }
      
      setTimeout(typeEffect, delay);
    };
    
    const timer = setTimeout(typeEffect, 1000);
    return () => clearTimeout(timer);
  }, []);

  const laminateCategories = {
    "Shop by Thickness": ["0.8 mm", "0.92 mm", "1 mm", "1.2 mm", "1.5 mm"],
    "Shop by Type": ["Inner laminates", "Decolam", "Acrylic", "ASA Sheets", "PVC", "Thermolaminates", "Compact Laminates"],
    "Shop by Design": ["Staturio/Marble", "Wooden", "Stone", "Digital", "Metallic", "Cane", "Pastel"],
    "Shop by Texture/Finish": ["Suede Finish (SF)", "Matte Finish (MF)", "HG", "Special Tex"],
    "Shop by Application": ["Kitchen", "TV unit", "Wardrobe", "Living Space", "Exterior"],
    "Shop by Brand": ["Formica", "Greenlam", "Merino", "Sunmica", "Century", "Royale Touche"]
  };

  const tileCategories = {
    "Shop by Size": ["12x24 inches", "18x18 inches", "24x24 inches", "12x12 inches", "6x6 inches"],
    "Shop by Type": ["Ceramic", "Porcelain", "Vitrified", "Mosaic", "Natural Stone", "Designer"],
    "Shop by Finish": ["Glossy", "Matte", "Textured", "Polished", "Rustic", "Metallic"],
    "Shop by Application": ["Floor Tiles", "Wall Tiles", "Bathroom", "Kitchen", "Outdoor", "Commercial"],
    "Shop by Design": ["Marble Look", "Wood Look", "Stone Look", "Geometric", "Plain", "Digital Print"],
    "Shop by Brand": ["Kajaria", "Somany", "Nitco", "Johnson", "Orient Bell", "RAK Ceramics"]
  };

  const decorCategories = {
    "Shop by Type": ["Wall Panels", "Decorative Films", "Edge Banding", "Profiles", "Veneers", "Laminates"],
    "Shop by Material": ["PVC", "WPC", "MDF", "Acrylic", "Metal", "Glass"],
    "Shop by Finish": ["3D Textured", "High Gloss", "Matte", "Wooden", "Marble", "Metallic"],
    "Shop by Application": ["Living Room", "Bedroom", "Office", "Commercial", "Retail", "Hospitality"],
    "Shop by Design": ["Modern", "Classic", "Contemporary", "Minimalist", "Luxury", "Industrial"],
    "Shop by Brand": ["Advance", "Spacewood", "Century", "Greenlam", "Merino", "Action Tesa"]
  };

  const buyTrendOptions = [
    "Latest Designs",
    "Trending Colors",
    "New Arrivals",
    "Popular Picks"
  ];

  const onSaleOptions = [
    "Clearance Sale",
    "Festival Offers",
    "Bulk Discounts",
    "Flash Deals"
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg border-b border-slate-200">
      <div className="max-w-7xl mx-auto">
        {/* First Line - Logo, Search, Sign In, Icons */}
        <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
          {/* Logo (Left) - National Geographic Style */}
          <div className="flex items-center">
            <div className="flex items-center cursor-pointer" onClick={() => onPageChange?.("home")}>
              <div className="bg-gradient-to-r from-orange-600 to-amber-600 text-white px-3 py-2 rounded-lg shadow-lg">
                <span className="text-xl font-black tracking-wider">DEZINE</span>
              </div>
              <div className="bg-slate-900 text-orange-400 px-3 py-2 rounded-lg shadow-lg ml-1">
                <span className="text-xl font-black tracking-wider">DEMOCRACY</span>
              </div>
            </div>
          </div>

          {/* Search Bar (Center) */}
          <div className="flex-1 max-w-2xl mx-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <Input
                placeholder={`What are you looking for? ${searchItem}`}
                className="pl-12 h-12 text-lg border-2 border-slate-300 bg-white text-slate-900 focus:border-orange-600 rounded-lg placeholder:text-slate-500"
              />
            </div>
          </div>

          {/* Icons and Sign In (Right) */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="text-slate-600 hover:text-orange-600 hover:bg-slate-100">
              <ShoppingCart className="h-6 w-6" />
            </Button>
            <Button variant="ghost" size="icon" className="text-slate-600 hover:text-orange-600 hover:bg-slate-100">
              <Heart className="h-6 w-6" />
            </Button>
            <Button variant="ghost" size="icon" className="text-slate-600 hover:text-orange-600 hover:bg-slate-100" onClick={() => window.open("https://wa.me/919876543210?text=Hello! I'm interested in your interior design materials.", "_blank")}>
              <MessageCircle className="h-6 w-6" />
            </Button>
            <Dialog open={isSignInOpen} onOpenChange={setIsSignInOpen}>
              <DialogTrigger asChild>
                <Button 
                  variant="outline" 
                  className="border-orange-600 text-orange-600 bg-transparent hover:bg-orange-600 hover:text-white"
                >
                  Sign In
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle className="text-center">Welcome to Dezine Democracy</DialogTitle>
                  <DialogDescription className="text-center text-gray-600">
                    Sign in to access your account and start transforming your home
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4 py-4">
                  <Input placeholder="Email or Phone" type="email" />
                  <Input placeholder="Password" type="password" />
                  <Button className="w-full bg-orange-600 hover:bg-orange-700 mb-4">
                    Sign In
                  </Button>
                  
                  {/* Social Login Options */}
                  <div className="space-y-3">
                    <div className="text-center text-sm text-gray-500 mb-3">Or continue with</div>
                    <div className="grid grid-cols-2 gap-3">
                      <Button variant="outline" className="flex items-center justify-center">
                        <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24">
                          <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                          <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                          <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                          <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                        </svg>
                        Google
                      </Button>
                      <Button variant="outline" className="flex items-center justify-center">
                        <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24">
                          <path fill="currentColor" d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.13997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/>
                        </svg>
                        Apple
                      </Button>
                      <Button variant="outline" className="flex items-center justify-center">
                        <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24">
                          <path fill="currentColor" d="M23.5 12.15c0-1.38-.12-2.4-.36-3.46H12.16v6.54h6.36c-.27 1.45-1.1 3.36-3.15 4.71l5.1 3.95c2.97-2.74 4.68-6.78 4.68-11.74"/>
                          <path fill="currentColor" d="M12.16 24c4.27 0 7.85-1.41 10.47-3.84l-5.1-3.95c-1.41.95-3.22 1.52-5.37 1.52-4.13 0-7.63-2.79-8.88-6.54l-5.27 4.06C1.04 19.82 6.26 24 12.16 24"/>
                          <path fill="currentColor" d="M3.28 14.73c-.32-.95-.5-1.96-.5-3.01s.18-2.06.5-3.01l-5.27-4.06C-2.7 7.06-3 9.48-3 12.16s.3 5.1 1.01 7.51l5.27-4.06"/>
                        </svg>
                        Microsoft
                      </Button>
                      <Button variant="outline" className="flex items-center justify-center">
                        <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24">
                          <path fill="currentColor" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3Z"/>
                        </svg>
                        Instagram
                      </Button>
                    </div>
                  </div>
                  
                  <div className="text-center text-sm text-gray-600">
                    Don't have an account? 
                    <Button variant="link" className="text-orange-600 p-0 ml-1 h-auto">
                      Create Account
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        {/* Second Line - Mega Navigation */}
        <div className="bg-gradient-to-r from-orange-500 via-orange-600 to-orange-500 text-white shadow-lg border-t border-orange-300">
          <div className="px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center justify-center h-14 space-x-8">
              {/* Laminates Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button 
                    variant="ghost" 
                    className="text-white hover:text-orange-200 hover:bg-white/10 h-10 px-4 flex items-center transition-all duration-200 font-bold"
                  >
                    Laminates
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-screen max-w-5xl bg-white border-slate-200">
                  <div className="grid grid-cols-6 gap-4 p-6">
                    {Object.entries(laminateCategories).map(([category, items]) => (
                      <div key={category} className="space-y-2">
                        <DropdownMenuLabel className="text-orange-600 font-semibold text-sm border-b border-slate-200 pb-2">
                          {category}
                        </DropdownMenuLabel>
                        <div className="space-y-1">
                          {items.map((item) => (
                            <DropdownMenuItem 
                              key={item} 
                              className="cursor-pointer text-sm text-slate-700 hover:text-orange-600 hover:bg-slate-100 p-2 rounded"
                              onClick={() => onProductPageOpen?.("Laminates", item)}
                            >
                              {item}
                            </DropdownMenuItem>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Tiles Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button 
                    variant="ghost" 
                    className="text-white hover:text-orange-200 hover:bg-white/10 h-10 px-4 flex items-center transition-all duration-200 font-bold"
                  >
                    Tiles
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-screen max-w-5xl bg-white border-slate-200">
                  <div className="grid grid-cols-6 gap-4 p-6">
                    {Object.entries(tileCategories).map(([category, items]) => (
                      <div key={category} className="space-y-2">
                        <DropdownMenuLabel className="text-orange-600 font-semibold text-sm border-b border-slate-200 pb-2">
                          {category}
                        </DropdownMenuLabel>
                        <div className="space-y-1">
                          {items.map((item) => (
                            <DropdownMenuItem 
                              key={item} 
                              className="cursor-pointer text-sm text-slate-700 hover:text-orange-600 hover:bg-slate-100 p-2 rounded"
                              onClick={() => onProductPageOpen?.("Tiles", item)}
                            >
                              {item}
                            </DropdownMenuItem>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Decor Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button 
                    variant="ghost" 
                    className="text-white hover:text-orange-200 hover:bg-white/10 h-10 px-4 flex items-center transition-all duration-200 font-bold"
                  >
                    Decor
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-screen max-w-5xl bg-white border-slate-200">
                  <div className="grid grid-cols-6 gap-4 p-6">
                    {Object.entries(decorCategories).map(([category, items]) => (
                      <div key={category} className="space-y-2">
                        <DropdownMenuLabel className="text-orange-600 font-semibold text-sm border-b border-slate-200 pb-2">
                          {category}
                        </DropdownMenuLabel>
                        <div className="space-y-1">
                          {items.map((item) => (
                            <DropdownMenuItem 
                              key={item} 
                              className="cursor-pointer text-sm text-slate-700 hover:text-orange-600 hover:bg-slate-100 p-2 rounded"
                              onClick={() => onProductPageOpen?.("Decor", item)}
                            >
                              {item}
                            </DropdownMenuItem>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Buy Trend Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button 
                    variant="ghost" 
                    className="text-white hover:text-orange-200 hover:bg-white/10 h-10 px-4 flex items-center transition-all duration-200 font-bold"
                  >
                    Buy Trend
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-48 bg-white border-slate-200">
                  {buyTrendOptions.map((option) => (
                    <DropdownMenuItem key={option} className="cursor-pointer text-slate-700 hover:text-orange-600 hover:bg-slate-100">
                      {option}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              {/* On Sale - Blinking Red Alert */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button 
                    variant="ghost" 
                    className="text-red-500 hover:text-red-400 hover:bg-slate-200/50 h-10 px-4 flex items-center animate-blink-red transition-all duration-200"
                  >
                    <span className="animate-pulse text-red-500">🚨</span>
                    <span className="animate-blink-red font-black">On Sale</span>
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-48 bg-white border-slate-200">
                  {onSaleOptions.map((option) => (
                    <DropdownMenuItem key={option} className="cursor-pointer text-red-600 font-bold hover:bg-red-50">
                      🔥 {option}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Static Links */}
              <Button 
                variant="ghost" 
                className="text-white hover:text-orange-200 hover:bg-white/10 h-10 px-4 transition-all duration-200 font-bold"
              >
                Browse Catalogue
              </Button>

              <Button 
                variant="ghost" 
                className="text-white hover:text-orange-200 hover:bg-white/10 h-10 px-4 transition-all duration-200 font-bold"
                onClick={() => onPageChange?.("blog")}
              >
                Blog
              </Button>

              <Button 
                variant="ghost" 
                className="text-white hover:text-orange-200 hover:bg-white/10 h-10 px-4 flex items-center transition-all duration-200 font-bold"
                onClick={() => onPageChange?.("community")}
              >
                <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .968-.786 1.754-1.754 1.754a1.754 1.754 0 0 1-1.754-1.754l-.043-.089c-.676.24-1.406.464-2.174.624a1.75 1.75 0 0 1-3.456.009c-.768-.16-1.498-.384-2.174-.624l-.043.089a1.754 1.754 0 0 1-1.754 1.754c-.968 0-1.754-.786-1.754-1.754 0-.968.786-1.754 1.754-1.754.477 0 .899.182 1.207.491 1.194-.856 2.85-1.417 4.674-1.488l.8-3.747-2.597.547a1.25 1.25 0 0 1-2.498-.056c0-.688.562-1.249 1.25-1.249a1.25 1.25 0 0 1 1.25 1.25l.445-.093a1.25 1.25 0 0 1 1.544-.916l.274-.014a1.25 1.25 0 0 1 1.25 1.25z"/>
                </svg>
                Community
              </Button>

              {/* Mobile Menu */}
              <Button className="md:hidden" variant="ghost" size="icon">
                <Menu className="h-6 w-6 text-slate-900" />
              </Button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}