import { Card } from "@/components/ui/card";
import { TrendingUp, TrendingDown, DollarSign } from "lucide-react";

export const MarketPrices = () => {
  const marketData = [
    { crop: "Rice", price: 2850, change: 5.2, trending: "up" },
    { crop: "Wheat", price: 2100, change: -2.1, trending: "down" },
    { crop: "Cotton", price: 5600, change: 3.8, trending: "up" },
  ];

  return (
    <Card className="p-6 shadow-soft">
      <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
        <span className="text-accent">₦</span>
        Market Prices
      </h3>

      <div className="space-y-3">
        {marketData.map((item) => (
          <div
            key={item.crop}
            className="flex items-center justify-between p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
          >
            <div>
              <p className="font-medium text-foreground">{item.crop}</p>
              <p className="text-sm text-muted-foreground">per quintal</p>
            </div>
            <div className="text-right">
              <p className="font-bold text-foreground">₦{item.price}</p>
              <div
                className={`flex items-center gap-1 text-xs ${
                  item.trending === "up" ? "text-success" : "text-destructive"
                }`}
              >
                {item.trending === "up" ? (
                  <TrendingUp className="w-3 h-3" />
                ) : (
                  <TrendingDown className="w-3 h-3" />
                )}
                <span>{Math.abs(item.change)}%</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 p-3 rounded-lg bg-accent/10 border border-accent/20">
        <p className="text-xs text-foreground">
          💡 <span className="font-semibold">Tip:</span> Rice prices trending up. Good time to consider selling!
        </p>
      </div>
    </Card>
  );
};
