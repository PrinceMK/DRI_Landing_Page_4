import { Card, CardContent } from "./ui/card";
import { Progress } from "./ui/progress";
import { Badge } from "./ui/badge";
import { TrendingUp, Users, Star, Heart, Award, CheckCircle } from "lucide-react";
import { useState, useEffect } from "react";

export function LiveCustomerSatisfaction() {
  const [liveMetrics, setLiveMetrics] = useState({
    totalCustomers: 10234,
    activeNow: 47,
    satisfaction: 97.8,
    recentOrders: 123,
    positiveReviews: 99.2
  });

  const [pulseCount, setPulseCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLiveMetrics(prev => ({
        totalCustomers: prev.totalCustomers + Math.floor(Math.random() * 3),
        activeNow: Math.max(20, prev.activeNow + Math.floor(Math.random() * 10) - 5),
        satisfaction: Math.max(95, Math.min(100, prev.satisfaction + (Math.random() * 0.4) - 0.2)),
        recentOrders: prev.recentOrders + Math.floor(Math.random() * 2),
        positiveReviews: Math.max(98, Math.min(100, prev.positiveReviews + (Math.random() * 0.2) - 0.1))
      }));
      setPulseCount(prev => prev + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const metricsData = [
    {
      icon: <Users className="w-5 h-5" />,
      label: "Total Customers",
      value: liveMetrics.totalCustomers.toLocaleString(),
      color: "text-blue-600",
      bgColor: "bg-blue-100",
      change: "+47 today"
    },
    {
      icon: <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />,
      label: "Active Now",
      value: liveMetrics.activeNow.toString(),
      color: "text-green-600",
      bgColor: "bg-green-100",
      change: "Live users"
    },
    {
      icon: <Star className="w-5 h-5" />,
      label: "Satisfaction",
      value: `${liveMetrics.satisfaction.toFixed(1)}%`,
      color: "text-orange-600",
      bgColor: "bg-orange-100",
      change: "4.9/5 avg"
    },
    {
      icon: <CheckCircle className="w-5 h-5" />,
      label: "Orders Today",
      value: liveMetrics.recentOrders.toString(),
      color: "text-purple-600",
      bgColor: "bg-purple-100",
      change: "Real-time"
    },
    {
      icon: <Heart className="w-5 h-5" />,
      label: "Happy Customers",
      value: `${liveMetrics.positiveReviews.toFixed(1)}%`,
      color: "text-red-600",
      bgColor: "bg-red-100",
      change: "Love rate"
    }
  ];

  const recentActivity = [
    { name: "Priya Sharma", location: "Mumbai", action: "Ordered kitchen laminates", time: "2 min ago" },
    { name: "Raj Patel", location: "Delhi", action: "Booked home consultation", time: "5 min ago" },
    { name: "Sneha Kumar", location: "Bangalore", action: "Left 5-star review", time: "8 min ago" },
    { name: "Amit Singh", location: "Pune", action: "Completed bathroom makeover", time: "12 min ago" }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-gradient-to-r from-orange-600 to-red-600 text-white text-lg px-6 py-2">
            <TrendingUp className="w-4 h-4 mr-2" />
            Live Metrics Dashboard
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-black text-black mb-4">
            Real-Time Customer{" "}
            <span className="text-orange-600">Satisfaction</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See what our customers are saying and doing right now - updated every few seconds
          </p>
        </div>

        {/* Live Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-12">
          {metricsData.map((metric, index) => (
            <Card key={index} className="relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-lg ${metric.bgColor} group-hover:scale-110 transition-transform`}>
                    <div className={metric.color}>
                      {metric.icon}
                    </div>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {metric.change}
                  </Badge>
                </div>
                <div className="space-y-2">
                  <div className={`text-3xl font-black ${metric.color}`}>
                    {metric.value}
                  </div>
                  <div className="text-sm font-medium text-gray-600">
                    {metric.label}
                  </div>
                </div>
                {/* Pulse animation for active metrics */}
                {index === 1 && (
                  <div className="absolute top-2 right-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-ping"></div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Interactive Progress Bars */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold text-black mb-6 flex items-center">
                <Award className="w-6 h-6 text-orange-600 mr-2" />
                Customer Satisfaction Breakdown
              </h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">Product Quality</span>
                    <span className="text-sm font-bold text-orange-600">98.5%</span>
                  </div>
                  <Progress value={98.5} className="h-3 progress-animated" />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">Installation Service</span>
                    <span className="text-sm font-bold text-orange-600">97.2%</span>
                  </div>
                  <Progress value={97.2} className="h-3 progress-animated" />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">Customer Support</span>
                    <span className="text-sm font-bold text-orange-600">99.1%</span>
                  </div>
                  <Progress value={99.1} className="h-3 progress-animated" />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">Value for Money</span>
                    <span className="text-sm font-bold text-orange-600">96.8%</span>
                  </div>
                  <Progress value={96.8} className="h-3 progress-animated" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold text-black mb-6 flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse mr-3"></div>
                Live Customer Activity
              </h3>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4">
                      {activity.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-medium text-gray-900">
                        {activity.name} from {activity.location}
                      </div>
                      <div className="text-xs text-gray-600">{activity.action}</div>
                    </div>
                    <div className="text-xs text-gray-500">{activity.time}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>


      </div>
    </section>
  );
}