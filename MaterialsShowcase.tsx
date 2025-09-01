import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogDescription } from "./ui/dialog";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowRight, Star, Eye, ShoppingCart, RotateCcw, Palette, Layers } from "lucide-react";
import { useState } from "react";

export function MaterialsShowcase() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [rotating, setRotating] = useState(false);
  const [zoomedProduct, setZoomedProduct] = useState(null);

  const laminateCollections = {
    wood: {
      name: "Wood Grains",
      products: [
        {
          id: 1,
          name: "Royal Oak Premium",
          code: "WG-001",
          description: "Authentic oak wood grain with natural texture and premium finish",
          image: "https://images.unsplash.com/photo-1554230253-017daba2b631?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kJTIwbGFtaW5hdGUlMjB0ZXh0dXJlJTIwc3F1YXJlfGVufDF8fHx8MTc1NjcyNjUyOHww&ixlib=rb-4.1.0&q=80&w=1080",
          price: "₹299",
          originalPrice: "₹499",
          rating: 4.9,
          thickness: "1.2mm",
          finish: "Matt",
          inStock: true,
          colors: ["#8B4513", "#A0522D", "#D2691E"]
        },
        {
          id: 2,
          name: "Teak Master",
          code: "WG-002", 
          description: "Premium teak wood finish with rich grain patterns",
          image: "https://images.unsplash.com/photo-1743321422085-4aa12f0c7d53?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kJTIwbGFtaW5hdGUlMjB0ZXh0dXJlJTIwc3F1YXJlJTIwcGF0dGVybnxlbnwxfHx8fDE3NTY3MjI3NzB8MA&ixlib=rb-4.1.0&q=80&w=1080",
          price: "₹349",
          originalPrice: "₹599",
          rating: 4.8,
          thickness: "1.5mm",
          finish: "Gloss",
          inStock: true,
          colors: ["#654321", "#8B4513", "#A0522D"]
        }
      ]
    },
    marble: {
      name: "Marble Effects",
      products: [
        {
          id: 3,
          name: "Carrara Elite",
          code: "ME-001",
          description: "Luxurious Carrara marble pattern with authentic veining",
          image: "https://images.unsplash.com/photo-1613427865119-47a9fe8d9506?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJibGUlMjB0aWxlJTIwcGF0dGVybiUyMHNxdWFyZSUyMHRleHR1cmV8ZW58MXx8fHwxNzU2NzIyNzczfDA&ixlib=rb-4.1.0&q=80&w=1080",
          price: "₹399",
          originalPrice: "₹699",
          rating: 4.9,
          thickness: "1.2mm",
          finish: "High Gloss",
          inStock: true,
          colors: ["#F8F8FF", "#E6E6FA", "#D3D3D3"]
        },
        {
          id: 4,
          name: "Nero Marquina",
          code: "ME-002",
          description: "Dramatic black marble with elegant white veining",
          image: "https://images.unsplash.com/photo-1572596116404-98f227c01ac1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwdGlsZXMlMjBzcXVhcmUlMjBwYXR0ZXJuJTIwdGV4dHVyZXxlbnwxfHx8fDE3NTY3MjI3Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080",
          price: "₹449",
          originalPrice: "₹799",
          rating: 4.8,
          thickness: "1.5mm",
          finish: "Satin",
          inStock: true,
          colors: ["#1C1C1C", "#2F2F2F", "#404040"]
        }
      ]
    },
    metallic: {
      name: "Metallic Finishes",
      products: [
        {
          id: 5,
          name: "Brushed Steel",
          code: "MF-001",
          description: "Contemporary brushed steel finish for modern interiors",
          image: "https://images.unsplash.com/photo-1704393671960-899fa36b17a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXRhbGxpYyUyMHRpbGVzJTIwc3F1YXJlJTIwcGF0dGVybiUyMGxhbWluYXRlfGVufDF8fHx8MTc1NjcyMjc3Nnww&ixlib=rb-4.1.0&q=80&w=1080",
          price: "₹549",
          originalPrice: "₹899",
          rating: 4.7,
          thickness: "1.2mm",
          finish: "Brushed",
          inStock: true,
          colors: ["#C0C0C0", "#A9A9A9", "#808080"]
        },
        {
          id: 6,
          name: "Rose Gold Luxe",
          code: "MF-002",
          description: "Premium rose gold finish with subtle shimmer effect",
          image: "https://images.unsplash.com/photo-1731167711006-7f48f9db5119?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZWNvcmF0aXZlJTIwdGlsZXMlMjBzcXVhcmUlMjBtb3NhaWMlMjBwYXR0ZXJufGVufDF8fHx8MTc1NjcyMjc4Mnww&ixlib=rb-4.1.0&q=80&w=1080",
          price: "₹649",
          originalPrice: "₹999",
          rating: 4.9,
          thickness: "1.5mm",
          finish: "Shimmer",
          inStock: true,
          colors: ["#E8B4B8", "#D4A5A9", "#C09699"]
        }
      ]
    }
  };

  const handleRotate360 = (productId) => {
    setRotating(productId);
    setTimeout(() => setRotating(false), 2000);
  };

  const handleZoomToggle = (productId) => {
    setZoomedProduct(zoomedProduct === productId ? null : productId);
  };

  const ProductCard = ({ product, category }) => (
    <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-gradient-to-br from-white to-slate-50">
      <div className="aspect-square relative overflow-hidden">
        <ImageWithFallback
          src={product.image}
          alt={product.name}
          className={`w-full h-full object-cover transition-all duration-700 ${
            zoomedProduct === product.id ? 'scale-150' : 'group-hover:scale-110'
          } ${rotating === product.id ? 'animate-spin' : ''}`}
        />
        
        {/* Interactive Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-4 left-4 right-4 flex gap-2">
            <Button 
              size="sm" 
              variant="secondary" 
              className="flex-1 bg-white/90 text-slate-900 hover:bg-white"
              onClick={() => handleRotate360(product.id)}
            >
              <RotateCcw className="w-4 h-4 mr-1" />
              360° View
            </Button>
            <Button 
              size="sm" 
              variant="secondary" 
              className="bg-white/90 text-slate-900 hover:bg-white"
              onClick={() => handleZoomToggle(product.id)}
            >
              {zoomedProduct === product.id ? '🔍-' : '🔍+'}
            </Button>
            <Dialog>
              <DialogTrigger asChild>
                <Button size="sm" variant="secondary" className="bg-white/90 text-slate-900 hover:bg-white">
                  <Eye className="w-4 h-4" />
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl">
                <DialogTitle className="sr-only">{product.name} - Product Details</DialogTitle>
                <DialogDescription className="sr-only">
                  Detailed view of {product.name} including specifications, pricing, and color options.
                </DialogDescription>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="aspect-square">
                    <ImageWithFallback
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900">{product.name}</h3>
                      <p className="text-slate-600 mt-2">{product.description}</p>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span className="font-medium">{product.rating}</span>
                      </div>
                      <Badge variant="secondary">Code: {product.code}</Badge>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-slate-600">Thickness:</span>
                        <span className="font-medium ml-2">{product.thickness}</span>
                      </div>
                      <div>
                        <span className="text-slate-600">Finish:</span>
                        <span className="font-medium ml-2">{product.finish}</span>
                      </div>
                    </div>

                    <div>
                      <span className="text-slate-600 text-sm">Available Colors:</span>
                      <div className="flex gap-2 mt-2">
                        {product.colors.map((color, idx) => (
                          <div 
                            key={idx}
                            className="w-8 h-8 rounded-full border-2 border-white shadow-lg"
                            style={{ backgroundColor: color }}
                          />
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold text-orange-600">{product.price}</span>
                        <span className="text-slate-400 line-through">{product.originalPrice}</span>
                      </div>
                      <Badge className="bg-red-100 text-red-700">
                        {Math.round(((parseInt(product.originalPrice.slice(1)) - parseInt(product.price.slice(1))) / parseInt(product.originalPrice.slice(1))) * 100)}% OFF
                      </Badge>
                    </div>

                    <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white">
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        {/* Rating & Stock Badge */}
        <div className="absolute top-3 right-3 flex flex-col gap-2">
          <div className="bg-white/95 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1">
            <Star className="w-3 h-3 text-yellow-500 fill-current" />
            <span className="text-xs font-medium">{product.rating}</span>
          </div>
          {product.inStock && (
            <Badge className="bg-green-100 text-green-700 text-xs">In Stock</Badge>
          )}
        </div>

        {/* Discount Badge */}
        <div className="absolute top-3 left-3">
          <Badge className="bg-red-600 text-white animate-pulse">
            {Math.round(((parseInt(product.originalPrice.slice(1)) - parseInt(product.price.slice(1))) / parseInt(product.originalPrice.slice(1))) * 100)}% OFF
          </Badge>
        </div>
      </div>
      
      <CardContent className="p-6">
        <div className="space-y-3">
          <div>
            <h3 className="font-bold text-slate-900 mb-1">{product.name}</h3>
            <p className="text-sm text-slate-600 line-clamp-2">{product.description}</p>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold text-orange-600">{product.price}</span>
              <span className="text-sm text-slate-400 line-through">{product.originalPrice}</span>
            </div>
            <Button size="sm" className="bg-orange-600 hover:bg-orange-700 text-white group-hover:scale-105 transition-transform">
              <ShoppingCart className="w-4 h-4 mr-1" />
              Add
            </Button>
          </div>

          <div className="flex items-center justify-between text-xs text-slate-600">
            <span>Code: {product.code}</span>
            <span>{product.thickness} • {product.finish}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-orange-100 text-orange-700 hover:bg-orange-100 text-lg px-6 py-2">
            <Layers className="w-5 h-5 mr-2" />
            Premium Acrylic Laminates
          </Badge>
          <h2 className="mb-4 text-slate-900 text-4xl lg:text-6xl font-bold">
            Experience Real Textures
          </h2>
          <p className="max-w-3xl mx-auto text-slate-600 text-xl">
            Interactive 360° product viewing with authentic laminate samples. Touch, feel, and visualize in your space.
          </p>
        </div>

        {/* Interactive Product Showcase */}
        <Tabs defaultValue="wood" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-12 bg-white shadow-lg">
            <TabsTrigger value="wood" className="data-[state=active]:bg-orange-600 data-[state=active]:text-white">
              <Palette className="w-4 h-4 mr-2" />
              Wood Grains
            </TabsTrigger>
            <TabsTrigger value="marble" className="data-[state=active]:bg-orange-600 data-[state=active]:text-white">
              Marble Effects
            </TabsTrigger>
            <TabsTrigger value="metallic" className="data-[state=active]:bg-orange-600 data-[state=active]:text-white">
              Metallic
            </TabsTrigger>
          </TabsList>

          {Object.entries(laminateCollections).map(([key, collection]) => (
            <TabsContent key={key} value={key} className="space-y-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{collection.name}</h3>
                <p className="text-slate-600">Premium collection with authentic textures and finishes</p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {collection.products.map((product) => (
                  <ProductCard key={product.id} product={product} category={key} />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* AR Preview Feature */}
        <div className="mt-16 bg-gradient-to-r from-orange-600 to-amber-600 rounded-3xl p-8 text-white text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">🔮 Try AR Preview in Your Space</h3>
            <p className="text-lg mb-6 opacity-90">
              Use your phone camera to see how these laminates will look in your actual room before you buy!
            </p>
            <Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50">
              <Eye className="w-5 h-5 mr-2" />
              Launch AR Camera
            </Button>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white shadow-xl group animate-glow">
            View Complete Catalog
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
}