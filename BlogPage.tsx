import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";
import { Card, CardContent, CardHeader } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowLeft, Search, Calendar, Clock, Eye, User, ArrowRight, Bookmark, Share2 } from "lucide-react";

interface BlogPageProps {
  onBack: () => void;
}

export function BlogPage({ onBack }: BlogPageProps) {
  const featuredPost = {
    id: 1,
    title: "Complete Guide to Kitchen Interior Design in 2024",
    excerpt: "Everything you need to know about designing a modern, functional kitchen that reflects your style and maximizes space efficiency.",
    author: "Design Expert Team",
    date: "December 15, 2024",
    readTime: "12 min read",
    views: "15.2k views",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraXRjaGVuJTIwZGVzaWduJTIwbW9kZXJufGVufDF8fHx8MTc1NjczMzk0N3ww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Kitchen Design",
    featured: true
  };

  const blogPosts = [
    {
      id: 2,
      title: "10 Laminate Trends That Will Dominate Indian Homes",
      excerpt: "From wood grain finishes to bold patterns, discover the laminate trends shaping interior design across India.",
      author: "Priya Sharma",
      date: "December 12, 2024",
      readTime: "8 min read",
      views: "12.8k views",
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYW1pbmF0ZSUyMHRyZW5kcyUyMGhvbWV8ZW58MXx8fHwxNzU2NzMzOTUyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      category: "Material Trends"
    },
    {
      id: 3,
      title: "Small Bathroom, Big Impact: Design Ideas for Compact Spaces",
      excerpt: "Maximize every square foot with clever tile choices, smart storage, and space-saving fixtures.",
      author: "Raj Patel",
      date: "December 10, 2024", 
      readTime: "6 min read",
      views: "9.4k views",
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFsbCUyMGJhdGhyb29tJTIwZGVzaWdufGVufDF8fHx8MTc1NjczMzk1N3ww&ixlib=rb-4.1.0&q=80&w=1080",
      category: "Bathroom Design"
    },
    {
      id: 4,
      title: "Living Room Color Schemes: Psychology of Interior Colors",
      excerpt: "Understand how different colors affect mood and create the perfect ambiance for your living space.",
      author: "Dr. Meera Singh",
      date: "December 8, 2024",
      readTime: "10 min read", 
      views: "11.2k views",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaXZpbmclMjByb29tJTIwY29sb3IlMjBzY2hlbWV8ZW58MXx8fHwxNzU2NzMzOTYyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      category: "Color Psychology"
    },
    {
      id: 5,
      title: "Sustainable Materials for Eco-Friendly Home Design",
      excerpt: "Building a beautiful home while caring for the environment - eco-friendly material options.",
      author: "Green Design Collective",
      date: "December 5, 2024",
      readTime: "7 min read",
      views: "8.9k views", 
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY28lMjBmcmllbmRseSUyMG1hdGVyaWFsc3xlbnwxfHx8fDE3NTY3MzM5Njd8MA&ixlib=rb-4.1.0&q=80&w=1080",
      category: "Sustainable Design"
    },
    {
      id: 6,
      title: "Master Bedroom Design: Creating Your Personal Sanctuary",
      excerpt: "Design tips for creating a peaceful, luxurious bedroom that promotes rest and relaxation.",
      author: "Interior Style Studio",
      date: "December 3, 2024",
      readTime: "9 min read",
      views: "13.5k views",
      image: "https://images.unsplash.com/photo-1704428382616-d8c65fdd76f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWRyb29tJTIwZGVzaWduJTIwbWFzdGVyfGVufDF8fHx8MTc1NjczMzk3MXww&ixlib=rb-4.1.0&q=80&w=1080",
      category: "Bedroom Design"
    },
    {
      id: 7,
      title: "Budget-Friendly Home Makeover: ₹50,000 Complete Guide",
      excerpt: "Transform your entire home on a tight budget with smart material choices and DIY techniques.",
      author: "Budget Home Makeover",
      date: "November 30, 2024",
      readTime: "11 min read",
      views: "18.7k views",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwbWFrZW92ZXIlMjBidWRnZXR8ZW58MXx8fHwxNzU2NzMzOTc2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      category: "Budget Design"
    },
    {
      id: 8,
      title: "Tile Installation: Common Mistakes and How to Avoid Them",
      excerpt: "Professional tips from contractors to ensure your tile installation is perfect the first time.",
      author: "Master Contractor Network",
      date: "November 28, 2024",
      readTime: "8 min read",
      views: "10.3k views",
      image: "https://images.unsplash.com/photo-1615971677499-5467cbab01c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aWxlJTIwaW5zdGFsbGF0aW9uJTIwdGlwc3xlbnwxfHx8fDE3NTY3MzM5ODF8MA&ixlib=rb-4.1.0&q=80&w=1080",
      category: "Installation Tips"
    },
    {
      id: 9,
      title: "Modern Indian Home Design: Blending Tradition with Contemporary",
      excerpt: "How to incorporate traditional Indian elements into modern home design for a unique aesthetic.",
      author: "Heritage Design Co.",
      date: "November 25, 2024",
      readTime: "10 min read",
      views: "14.1k views",
      image: "https://images.unsplash.com/photo-1586105251261-72a756497a11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBpbmRpYW4lMjBob21lJTIwZGVzaWdufGVufDF8fHx8MTc1NjczMzk4NXww&ixlib=rb-4.1.0&q=80&w=1080",
      category: "Cultural Design"
    },
    {
      id: 10,
      title: "Storage Solutions: Maximizing Space in Indian Homes",
      excerpt: "Creative storage ideas and built-in solutions for making the most of your home's space.",
      author: "Space Optimization Experts",
      date: "November 22, 2024",
      readTime: "7 min read",
      views: "12.6k views",
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdG9yYWdlJTIwc29sdXRpb25zJTIwaG9tZXxlbnwxfHx8fDE3NTY3MzM5OTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      category: "Storage & Organization"
    },
    {
      id: 11,
      title: "Lighting Design: Setting the Mood in Every Room",
      excerpt: "Master the art of lighting design to create the perfect ambiance for every space in your home.",
      author: "Lighting Design Guild",
      date: "November 20, 2024",
      readTime: "9 min read",
      views: "11.8k views",
      image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaWdodGluZyUyMGRlc2lnbiUyMGhvbWV8ZW58MXx8fHwxNzU2NzMzOTk0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      category: "Lighting Design"
    }
  ];

  const categories = [
    "All Categories",
    "Kitchen Design", 
    "Bathroom Design",
    "Bedroom Design",
    "Living Room Design",
    "Material Trends",
    "Budget Design",
    "Installation Tips",
    "Color Psychology",
    "Sustainable Design"
  ];

  return (
    <div className="min-h-screen bg-white" style={{ marginTop: '112px' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Button
            variant="ghost"
            onClick={onBack}
            className="flex items-center gap-2 text-orange-600 hover:text-orange-700"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Button>
          <div className="flex-1">
            <h1 className="text-4xl font-black text-slate-900">Interior Design Blog</h1>
            <p className="text-slate-600 mt-2">Expert tips, trends, and guides for beautiful homes</p>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1 max-w-2xl">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
            <Input
              placeholder="Search articles, tips, design ideas..."
              className="pl-12 h-12 border-2 border-slate-300 focus:border-orange-600"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto">
            {categories.slice(0, 6).map((category) => (
              <Badge
                key={category}
                variant="outline"
                className="cursor-pointer hover:bg-orange-50 hover:border-orange-600 whitespace-nowrap"
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>

        {/* Featured Article */}
        <Card className="mb-12 overflow-hidden hover:shadow-xl transition-shadow">
          <div className="grid lg:grid-cols-2 gap-0">
            <div className="relative h-80 lg:h-auto">
              <ImageWithFallback
                src={featuredPost.image}
                alt={featuredPost.title}
                className="w-full h-full object-cover"
              />
              <Badge className="absolute top-4 left-4 bg-orange-600 text-white">
                Featured Article
              </Badge>
            </div>
            <div className="p-8 flex flex-col justify-center">
              <Badge variant="outline" className="mb-4 w-fit">
                {featuredPost.category}
              </Badge>
              <h2 className="text-3xl font-black text-slate-900 mb-4 leading-tight">
                {featuredPost.title}
              </h2>
              <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                {featuredPost.excerpt}
              </p>
              <div className="flex items-center justify-between mb-6 text-sm text-slate-500">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    {featuredPost.author}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {featuredPost.date}
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {featuredPost.readTime}
                  </div>
                  <div className="flex items-center gap-1">
                    <Eye className="w-4 h-4" />
                    {featuredPost.views}
                  </div>
                </div>
              </div>
              <Button className="bg-orange-600 hover:bg-orange-700 text-white w-fit">
                Read Full Article
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </Card>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden hover:shadow-xl transition-shadow cursor-pointer group">
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 right-3 flex gap-2">
                  <Button variant="ghost" size="sm" className="bg-white/90 hover:bg-white h-8 w-8 p-0">
                    <Bookmark className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="bg-white/90 hover:bg-white h-8 w-8 p-0">
                    <Share2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              <CardContent className="p-6">
                <Badge variant="outline" className="mb-3">
                  {post.category}
                </Badge>
                <h3 className="font-bold text-slate-900 mb-3 leading-tight group-hover:text-orange-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-slate-500">
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    {post.author}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </div>
                </div>
                <div className="flex items-center justify-between mt-3 text-sm text-slate-500">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </div>
                  <div className="flex items-center gap-1">
                    <Eye className="w-4 h-4" />
                    {post.views}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" className="border-orange-600 text-orange-600 hover:bg-orange-50 px-8">
            Load More Articles
          </Button>
        </div>

        {/* Newsletter Signup */}
        <Card className="mt-16 bg-gradient-to-r from-orange-50 to-orange-100 border-orange-200">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Get Design Tips Delivered Weekly
            </h3>
            <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
              Join 25,000+ homeowners who receive our weekly newsletter with the latest interior design trends, 
              material guides, and exclusive tips from our experts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <Input
                placeholder="Enter your email address"
                className="flex-1 h-12 border-orange-300 focus:border-orange-600"
              />
              <Button className="bg-orange-600 hover:bg-orange-700 text-white px-8 h-12">
                Subscribe
              </Button>
            </div>
            <p className="text-xs text-slate-500 mt-3">
              No spam, unsubscribe anytime. Read our privacy policy.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}