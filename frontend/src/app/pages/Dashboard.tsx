import { Navbar } from '../components/Navbar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Package, Clock, CheckCircle, TrendingUp } from 'lucide-react';
import { ImageWithFallback } from '../components/ImageWithFallback';

export default function Dashboard() {
  const recentOrders = [
    { id: 'ORD-001', item: 'Navy Blue Suit', status: 'In Progress', date: '2026-03-20' },
    { id: 'ORD-002', item: 'White Dress Shirt', status: 'Completed', date: '2026-03-15' },
    { id: 'ORD-003', item: 'Gray Blazer', status: 'Measuring', date: '2026-03-22' },
  ];

  const stats = [
    { label: 'Active Orders', value: '3', icon: Package, color: 'text-blue-600' },
    { label: 'Completed', value: '12', icon: CheckCircle, color: 'text-green-600' },
    { label: 'Pending', value: '2', icon: Clock, color: 'text-amber-600' },
    { label: 'Total Spent', value: '$4,250', icon: TrendingUp, color: 'text-purple-600' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-serif mb-2">Welcome Back!</h1>
          <p className="text-gray-600">Here's what's happening with your orders today.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <Card key={stat.label}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                      <p className="text-3xl">{stat.value}</p>
                    </div>
                    <Icon className={`w-8 h-8 ${stat.color}`} />
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Recent Orders */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Recent Orders</CardTitle>
              <CardDescription>Your latest tailoring orders and their status</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentOrders.map((order) => (
                  <div key={order.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium">{order.item}</p>
                      <p className="text-sm text-gray-600">Order #{order.id}</p>
                      <p className="text-xs text-gray-500 mt-1">{order.date}</p>
                    </div>
                    <div className="text-right">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs ${
                        order.status === 'Completed' 
                          ? 'bg-green-100 text-green-800' 
                          : order.status === 'In Progress'
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-amber-100 text-amber-800'
                      }`}>
                        {order.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <Button className="w-full mt-4 bg-amber-600 hover:bg-amber-700">
                View All Orders
              </Button>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>Manage your tailoring needs</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full bg-amber-600 hover:bg-amber-700">
                <Package className="w-4 h-4 mr-2" />
                New Order
              </Button>
              <Button variant="outline" className="w-full">
                Schedule Fitting
              </Button>
              <Button variant="outline" className="w-full">
                Browse Fabrics
              </Button>
              <Button variant="outline" className="w-full">
                Contact Tailor
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Featured Section */}
        <div className="mt-8">
          <Card>
            <CardHeader>
              <CardTitle>Featured Collection</CardTitle>
              <CardDescription>Check out our latest fabric arrivals</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="relative h-48 rounded-lg overflow-hidden group cursor-pointer">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1701964619775-b18422290cf9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYWJyaWMlMjB0ZXh0aWxlJTIwcGF0dGVybnN8ZW58MXx8fHwxNzc0NDQ5MDc4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Premium Wool"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <span className="text-white font-medium">Premium Wool</span>
                  </div>
                </div>
                <div className="relative h-48 rounded-lg overflow-hidden group cursor-pointer">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1753162658653-d33c53910d9e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWFzdXJpbmclMjB0YXBlJTIwZmFzaGlvbnxlbnwxfHx8fDE3NzQ0NDkwNzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Fine Cotton"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <span className="text-white font-medium">Fine Cotton</span>
                  </div>
                </div>
                <div className="relative h-48 rounded-lg overflow-hidden group cursor-pointer">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1591944489410-16ec1074a18e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b20lMjBzdWl0JTIwdGFpbG9yfGVufDF8fHx8MTc3NDQ0OTA3OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Silk Blend"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <span className="text-white font-medium">Silk Blend</span>
                  </div>
                </div>
                <div className="relative h-48 rounded-lg overflow-hidden group cursor-pointer">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1630272777562-17735957d8c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YWlsb3IlMjBzaG9wJTIwc2V3aW5nfGVufDF8fHx8MTc3NDQ0OTA3N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Luxury Linen"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <span className="text-white font-medium">Luxury Linen</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
