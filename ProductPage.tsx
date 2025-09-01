import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ShoppingCart, Heart, Star, Eye, ArrowLeft, Filter } from "lucide-react";
import { useState } from "react";

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  description: string;
  brand: string;
  specifications: Record<string, string>;
  discount?: number;
}

interface ProductPageProps {
  category: string;
  subcategory: string;
  onBack: () => void;
}

export function ProductPage({ category, subcategory, onBack }: ProductPageProps) {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);
  const [favorites, setFavorites] = useState<Set<number>>(new Set());

  // Mock product data - in real app this would come from API
  const products: Product[] = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    name: `Premium ${subcategory} - Design ${i + 1}`,
    price: Math.floor(Math.random() * 500) + 199,
    originalPrice: Math.floor(Math.random() * 200) + 600,
    rating: 4.2 + Math.random() * 0.8,
    reviews: Math.floor(Math.random() * 500) + 50,
    image: `https://picsum.photos/400/400?random=${i + 1}`,
    description: `High-quality ${subcategory.toLowerCase()} with premium finish and modern design aesthetics.`,
    brand: ["Formica", "Greenlam", "Merino", "Sunmica"][Math.floor(Math.random() * 4)],
    specifications: {
      "Thickness": subcategory.includes("mm") ? subcategory : "1.0mm",
      "Finish": "High Gloss",
      "Material": category === "Laminates" ? "HPL" : category === "Tiles" ? "Ceramic" : "PVC",
      "Application": "Interior",
      "Warranty": "15 Years"
    },
    discount: Math.floor(Math.random() * 30) + 10
  }));

  const toggleFavorite = (productId: number) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(productId)) {
      newFavorites.delete(productId);
    } else {
      newFavorites.add(productId);
    }
    setFavorites(newFavorites);
  };

  return (
    <div className="min-h-screen bg-white pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <Button 
              onClick={onBack}
              variant="outline" 
              className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
            <div>
              <h1 className="text-3xl font-bold text-slate-900">
                {category} - {subcategory}
              </h1>
              <p className="text-slate-600 mt-1">
                {products.length} Products Available
              </p>
            </div>
          </div>
          
          <Button variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-100">
            <Filter className="w-4 h-4 mr-2" />
            Filter & Sort
          </Button>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card 
              key={product.id}
              className="group bg-white border-slate-200 overflow-hidden transition-all duration-500 hover:border-orange-600/50 hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-600/20"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <CardHeader className="p-0 relative">
                <div className="aspect-square overflow-hidden relative">
                  <ImageWithFallback
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Discount Badge */}
                  {product.discount && (
                    <Badge className="absolute top-3 left-3 bg-red-600 text-white animate-pulse">
                      -{product.discount}%
                    </Badge>
                  )}
                  
                  {/* Quick Actions */}
                  <div className={`absolute top-3 right-3 space-y-2 transition-all duration-300 ${
                    hoveredProduct === product.id ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                  }`}>
                    <Button
                      size="icon"
                      variant="secondary"
                      className="w-8 h-8 bg-white/90 hover:bg-white"
                      onClick={() => toggleFavorite(product.id)}
                    >
                      <Heart className={`w-4 h-4 ${favorites.has(product.id) ? 'text-red-500 fill-red-500' : 'text-slate-600'}`} />
                    </Button>
                    <Button
                      size="icon"
                      variant="secondary"
                      className="w-8 h-8 bg-white/90 hover:bg-white"
                    >
                      <Eye className="w-4 h-4 text-slate-600" />
                    </Button>
                  </div>
                  
                  {/* Hover Overlay */}
                  <div className={`absolute inset-0 bg-black/60 flex items-center justify-center transition-all duration-300 ${
                    hoveredProduct === product.id ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <Button className="bg-orange-600 hover:bg-orange-700 text-white transform transition-all duration-300 hover:scale-105">
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="p-4 space-y-3">
                <div className="space-y-1">
                  <Badge variant="outline" className="text-xs border-orange-600/30 text-orange-600">
                    {product.brand}
                  </Badge>
                  <h3 className="font-medium text-slate-900 line-clamp-2 group-hover:text-orange-600 transition-colors">
                    {product.name}
                  </h3>
                </div>
                
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-3 h-3 ${
                        i < Math.floor(product.rating) 
                          ? 'text-yellow-500 fill-yellow-500' 
                          : 'text-slate-300'
                      }`} 
                    />
                  ))}
                  <span className="text-sm text-slate-500 ml-2">
                    ({product.reviews})
                  </span>
                </div>
                
                <div className="flex items-baseline space-x-2">
                  <span className="text-xl font-bold text-orange-600">
                    ₹{product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-slate-500 line-through">
                      ₹{product.originalPrice}
                    </span>
                  )}
                  <span className="text-xs text-slate-500">/sq ft</span>
                </div>
                
                {/* Specifications */}
                <div className="space-y-1 text-xs text-slate-600">
                  <div className="flex justify-between">
                    <span>Thickness:</span>
                    <span className="text-orange-600">{product.specifications.Thickness}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Finish:</span>
                    <span className="text-orange-600">{product.specifications.Finish}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Warranty:</span>
                    <span className="text-green-600">{product.specifications.Warranty}</span>
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="flex space-x-2 pt-2">
                  <Button 
                    className="flex-1 bg-orange-600 hover:bg-orange-700 text-white text-sm h-8"
                  >
                    <ShoppingCart className="w-3 h-3 mr-1" />
                    Add to Cart
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="border-slate-300 text-slate-700 hover:bg-slate-100 h-8 px-3"
                  >
                    Quick Buy
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
          >
            Load More Products
          </Button>
        </div>
      </div>
    </div>
  );
}