import { FarmerProfile, WeatherWidget, MarketPrices, AIAdvice, FeedbackSection, AdviceChat } from "@/components/dashboard";

const Index = () => {
  return (
    <div className="mx-auto px-4 py-6 space-y-6">
      {/* Top Section - Farmer Profile */}
      <FarmerProfile />

      {/* Dashboard Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Weather & Market */}
        <div className="lg:col-span-1 space-y-6">
          <WeatherWidget />
          <MarketPrices />
        </div>

        {/* Right Column - AI Advice */}
        <div className="lg:col-span-2 space-y-6">
          <AIAdvice />
          <FeedbackSection />
        </div>
      </div>

      {/* Chat Interface */}
      {/* <AdviceChat /> */}
    </div>
  );
};

export default Index;
