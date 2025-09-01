import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowLeft, ArrowUp, ArrowDown, MessageSquare, Share2, Bookmark, Eye, Star, TrendingUp, Users, Calendar, Search } from "lucide-react";

interface CommunityPageProps {
  onBack: () => void;
}

export function CommunityPage({ onBack }: CommunityPageProps) {
  const trendingPosts = [
    {
      id: 1,
      title: "Kitchen Renovation on a Budget - Before & After Photos",
      author: "HomeMakerPriya",
      authorAvatar: "P",
      timeAgo: "2 hours ago",
      category: "Kitchen Design",
      upvotes: 234,
      comments: 67,
      views: "2.3k",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraXRjaGVuJTIwcmVub3ZhdGlvbiUyMGJlZm9yZSUyMGFmdGVyfGVufDF8fHx8MTc1NjczMzc3N3ww&ixlib=rb-4.1.0&q=80&w=1080",
      excerpt: "Transformed my 90s kitchen using laminates from Dezine Democracy. Total budget: ₹65,000. Here's how I did it...",
      trending: true,
      featured: true
    },
    {
      id: 2,
      title: "Best Laminate Brands in India - Real User Reviews (2024)",
      author: "DesignGuru_Mumbai", 
      authorAvatar: "D",
      timeAgo: "4 hours ago",
      category: "Material Reviews",
      upvotes: 189,
      comments: 45,
      views: "1.8k",
      excerpt: "After working with 50+ clients, here's my honest comparison of Formica vs Greenlam vs Merino...",
      trending: true
    },
    {
      id: 3,
      title: "Tile Selection Mistakes That Cost Me ₹30,000",
      author: "LearnFromMyMistakes",
      authorAvatar: "L", 
      timeAgo: "6 hours ago",
      category: "Bathroom Design",
      upvotes: 156,
      comments: 32,
      views: "1.2k",
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXRocm9vbSUyMHRpbGVzJTIwbWlzdGFrZXN8ZW58MXx8fHwxNzU2NzMzNzgyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      excerpt: "Don't make these 5 tile selection mistakes I made. Size, finish, and layout matter more than you think..."
    },
    {
      id: 4,
      title: "Living Room Makeover using WPC Wall Panels",
      author: "ModernHomeBangalore",
      authorAvatar: "M",
      timeAgo: "8 hours ago", 
      category: "Living Room",
      upvotes: 98,
      comments: 28,
      views: "856",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaXZpbmclMjByb29tJTIwd2FsbCUyMHBhbmVsc3xlbnwxfHx8fDE3NTY3MzM3ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      excerpt: "Completely changed the feel of my living room with textured wall panels. Installation tips included..."
    },
    {
      id: 5,
      title: "Wardrobe Interior Design - Maximizing Space",
      author: "SpaceOptimizer",
      authorAvatar: "S",
      timeAgo: "12 hours ago",
      category: "Bedroom Design", 
      upvotes: 76,
      comments: 19,
      views: "634",
      excerpt: "Smart storage solutions and laminate choices for small bedroom wardrobes. Real measurements included..."
    },
    {
      id: 6,
      title: "Contractor Horror Stories - Red Flags to Watch",
      author: "HomeBuildingHell",
      authorAvatar: "H",
      timeAgo: "1 day ago",
      category: "Contractor Issues",
      upvotes: 234,
      comments: 89,
      views: "3.2k", 
      excerpt: "After 3 bad experiences, here are the warning signs of problematic contractors...",
      trending: true
    }
  ];

  const categories = [
    { name: "Kitchen Design", count: 1247, icon: "🍳", color: "bg-orange-100 text-orange-800" },
    { name: "Bathroom Design", count: 856, icon: "🛁", color: "bg-blue-100 text-blue-800" },
    { name: "Living Room", count: 1456, icon: "🛋️", color: "bg-green-100 text-green-800" },
    { name: "Bedroom Design", count: 743, icon: "🛏️", color: "bg-purple-100 text-purple-800" },
    { name: "Material Reviews", count: 892, icon: "⭐", color: "bg-yellow-100 text-yellow-800" },
    { name: "Contractor Issues", count: 567, icon: "⚠️", color: "bg-red-100 text-red-800" },
    { name: "Budget Tips", count: 634, icon: "💰", color: "bg-emerald-100 text-emerald-800" },
    { name: "Before & After", count: 1123, icon: "🏠", color: "bg-indigo-100 text-indigo-800" }
  ];

  return (
    <div className="min-h-screen bg-slate-50" style={{ marginTop: '112px' }}>
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
            <h1 className="text-4xl font-black text-slate-900">Dezine Democracy Community</h1>
            <p className="text-slate-600 mt-2">Where homeowners share experiences, tips, and inspiration</p>
          </div>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative max-w-2xl">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
            <Input
              placeholder="Search posts, materials, design ideas..."
              className="pl-12 h-12 border-2 border-slate-300 focus:border-orange-600"
            />
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Community Stats */}
            <Card>
              <CardHeader>
                <h3 className="font-bold text-slate-900">Community Stats</h3>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-orange-600" />
                  <div>
                    <div className="font-bold text-slate-900">45,234</div>
                    <div className="text-sm text-slate-600">Members</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MessageSquare className="w-5 h-5 text-blue-600" />
                  <div>
                    <div className="font-bold text-slate-900">1,234</div>
                    <div className="text-sm text-slate-600">Active Today</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <TrendingUp className="w-5 h-5 text-green-600" />
                  <div>
                    <div className="font-bold text-slate-900">89</div>
                    <div className="text-sm text-slate-600">New Posts</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Categories */}
            <Card>
              <CardHeader>
                <h3 className="font-bold text-slate-900">Popular Categories</h3>
              </CardHeader>
              <CardContent className="space-y-3">
                {categories.map((category) => (
                  <div key={category.name} className="flex items-center justify-between p-2 rounded-lg hover:bg-slate-100 cursor-pointer transition-colors">
                    <div className="flex items-center gap-3">
                      <span className="text-lg">{category.icon}</span>
                      <div>
                        <div className="font-medium text-slate-900">{category.name}</div>
                        <div className="text-sm text-slate-600">{category.count} posts</div>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardContent className="pt-6">
                <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold mb-3">
                  Create New Post
                </Button>
                <Button variant="outline" className="w-full border-orange-600 text-orange-600 hover:bg-orange-50">
                  Join Community Guidelines
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <Tabs defaultValue="trending" className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-6">
                <TabsTrigger value="trending" className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4" />
                  Trending
                </TabsTrigger>
                <TabsTrigger value="new">New</TabsTrigger>
                <TabsTrigger value="popular">Popular</TabsTrigger>
                <TabsTrigger value="saved">Saved</TabsTrigger>
              </TabsList>

              <TabsContent value="trending" className="space-y-6">
                {trendingPosts.map((post) => (
                  <Card key={post.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                    <CardContent className="p-6">
                      <div className="flex gap-4">
                        {/* Voting */}
                        <div className="flex flex-col items-center gap-1 min-w-[50px]">
                          <Button variant="ghost" size="sm" className="p-1 h-8 w-8 hover:bg-orange-100 hover:text-orange-600">
                            <ArrowUp className="w-4 h-4" />
                          </Button>
                          <span className="font-bold text-orange-600">{post.upvotes}</span>
                          <Button variant="ghost" size="sm" className="p-1 h-8 w-8 hover:bg-slate-100">
                            <ArrowDown className="w-4 h-4" />
                          </Button>
                        </div>

                        {/* Content */}
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            {post.trending && (
                              <Badge className="bg-red-500 text-white text-xs">
                                🔥 Trending
                              </Badge>
                            )}
                            {post.featured && (
                              <Badge className="bg-orange-500 text-white text-xs">
                                ⭐ Featured
                              </Badge>
                            )}
                            <Badge variant="outline" className="text-xs">
                              {post.category}
                            </Badge>
                          </div>

                          <h3 className="font-bold text-slate-900 text-lg mb-2 hover:text-orange-600 transition-colors">
                            {post.title}
                          </h3>

                          <p className="text-slate-600 mb-4 leading-relaxed">
                            {post.excerpt}
                          </p>

                          {post.image && (
                            <div className="mb-4">
                              <ImageWithFallback
                                src={post.image}
                                alt={post.title}
                                className="w-full h-48 object-cover rounded-lg"
                              />
                            </div>
                          )}

                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4 text-sm text-slate-500">
                              <div className="flex items-center gap-2">
                                <Avatar className="w-6 h-6">
                                  <AvatarFallback className="text-xs">{post.authorAvatar}</AvatarFallback>
                                </Avatar>
                                <span>{post.author}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                {post.timeAgo}
                              </div>
                            </div>

                            <div className="flex items-center gap-4 text-sm text-slate-500">
                              <div className="flex items-center gap-1">
                                <MessageSquare className="w-4 h-4" />
                                {post.comments}
                              </div>
                              <div className="flex items-center gap-1">
                                <Eye className="w-4 h-4" />
                                {post.views}
                              </div>
                              <Button variant="ghost" size="sm" className="p-1 h-8 w-8">
                                <Share2 className="w-4 h-4" />
                              </Button>
                              <Button variant="ghost" size="sm" className="p-1 h-8 w-8">
                                <Bookmark className="w-4 h-4" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}

                {/* Load More */}
                <div className="text-center pt-6">
                  <Button variant="outline" className="border-orange-600 text-orange-600 hover:bg-orange-50">
                    Load More Posts
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="new">
                <div className="text-center py-12">
                  <MessageSquare className="w-16 h-16 text-slate-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-slate-900 mb-2">New Posts</h3>
                  <p className="text-slate-600">Latest discussions from the community</p>
                </div>
              </TabsContent>

              <TabsContent value="popular">
                <div className="text-center py-12">
                  <Star className="w-16 h-16 text-slate-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Popular Posts</h3>
                  <p className="text-slate-600">Most upvoted posts this week</p>
                </div>
              </TabsContent>

              <TabsContent value="saved">
                <div className="text-center py-12">
                  <Bookmark className="w-16 h-16 text-slate-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Saved Posts</h3>
                  <p className="text-slate-600">Your bookmarked discussions</p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}