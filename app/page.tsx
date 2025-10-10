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
      description:
        "Get personalized farming recommendations based on weather, soil, and market data",
    },
    {
      icon: Cloud,
      title: "Weather Forecasting",
      description:
        "Real-time weather updates and predictions to plan your farming activities",
    },
    {
      icon: TrendingUp,
      title: "Market Insights",
      description:
        "Stay updated with current market prices and trends for better selling decisions",
    },
    {
      icon: Sprout,
      title: "Crop Management",
      description:
        "Track your crops, get alerts, and optimize your farming operations",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="mb-4 text-5xl font-bold text-foreground">
            🌾 Welcome to AgroSense
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-muted-foreground">
            Your AI-powered farming assistant for smarter decisions and better
            harvests
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" onClick={() => router.push("/signin")}>
              Sign In
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => router.push("/signup")}
            >
              Get Started
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="mb-12 text-center text-3xl font-bold text-foreground">
          Everything You Need for Smart Farming
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="p-6 text-center transition-shadow hover:shadow-lg"
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </Card>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Home;
