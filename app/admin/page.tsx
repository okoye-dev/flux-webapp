"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, MessageSquare, TrendingUp } from "lucide-react";

const Admin = () => {
  const stats = [
    { label: "Total Users", value: "1,234", icon: Users, change: "+12%" },
    { label: "Active Chats", value: "456", icon: MessageSquare, change: "+8%" },
    { label: "Advice Given", value: "8,901", icon: TrendingUp, change: "+23%" },
  ];

  const recentUsers = [
    { name: "Rajesh Kumar", location: "Punjab", crop: "Rice & Wheat", status: "active" },
    { name: "Priya Patel", location: "Gujarat", crop: "Cotton", status: "active" },
    { name: "Amit Singh", location: "Haryana", crop: "Wheat", status: "inactive" },
    { name: "Sunita Devi", location: "Bihar", crop: "Rice", status: "active" },
  ];

  const recentFeedback = [
    { user: "Rajesh Kumar", message: "Very helpful planting advice!", rating: "helpful" },
    { user: "Priya Patel", message: "Market predictions were accurate", rating: "helpful" },
    { user: "Amit Singh", message: "Need more irrigation tips", rating: "not-helpful" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Main Content */}
      <main className="container mx-auto px-4 py-6 space-y-6">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">{stat.label}</p>
                      <p className="text-3xl font-bold text-foreground mt-2">{stat.value}</p>
                      <Badge variant="secondary" className="mt-2">
                        {stat.change}
                      </Badge>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Recent Users & Feedback */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Users */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Users</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentUsers.map((user, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
                    <div>
                      <p className="font-medium text-foreground">{user.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {user.location} • {user.crop}
                      </p>
                    </div>
                    <Badge variant={user.status === "active" ? "default" : "secondary"}>
                      {user.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Feedback */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Feedback</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentFeedback.map((feedback, index) => (
                  <div key={index} className="p-3 rounded-lg bg-muted/30">
                    <div className="flex items-center justify-between mb-2">
                      <p className="font-medium text-foreground">{feedback.user}</p>
                      <Badge variant={feedback.rating === "helpful" ? "default" : "destructive"}>
                        {feedback.rating}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{feedback.message}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Admin;
