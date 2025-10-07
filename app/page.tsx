"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Sprout, Brain, TrendingUp, Cloud } from "lucide-react";
import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();

  const features = [
    {
      icon: Brain,
      title: "AI-Powered Advice",
      description: "Get personalized farming recommendations based on weather, soil, and market data"
    },
    {
      icon: Cloud,
      title: "Weather Forecasting",
      description: "Real-time weather updates and predictions to plan your farming activities"
    },
    {
      icon: TrendingUp,
      title: "Market Insights",
      description: "Stay updated with current market prices and trends for better selling decisions"
    },
    {
      icon: Sprout,
      title: "Crop Management",
      description: "Track your crops, get alerts, and optimize your farming operations"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-5xl font-bold text-foreground mb-4">
            🌾 Welcome to FarmAdvisor
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Your AI-powered farming assistant for smarter decisions and better harvests
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" onClick={() => router.push("/signin")}>
              Sign In
            </Button>
            <Button size="lg" variant="outline" onClick={() => router.push("/signup")}>
              Get Started
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-foreground text-center mb-12">
          Everything You Need for Smart Farming
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </Card>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Home;
