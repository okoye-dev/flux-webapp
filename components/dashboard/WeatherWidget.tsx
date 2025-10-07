import { Card } from "@/components/ui/card";
import { Cloud, CloudRain, Droplets, Wind, Sun } from "lucide-react";

export const WeatherWidget = () => {
  const weatherData = {
    current: {
      temp: 28,
      condition: "Partly Cloudy",
      humidity: 65,
      windSpeed: 12,
      rainfall: 10,
    },
    forecast: [
      { day: "Mon", icon: Sun, temp: 30, rain: 10 },
      { day: "Tue", icon: CloudRain, temp: 26, rain: 80 },
      { day: "Wed", icon: Cloud, temp: 27, rain: 40 },
      { day: "Thu", icon: Sun, temp: 29, rain: 5 },
    ],
  };

  return (
    <Card className="p-6 shadow-soft space-y-4">
      <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
        <Cloud className="w-5 h-5 text-info" />
        Weather Forecast
      </h3>

      {/* Current Weather */}
      <div className="bg-gradient-to-br from-info/10 to-info/5 rounded-lg p-4">
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-3xl font-bold text-foreground">{weatherData.current.temp}°C</p>
            <p className="text-sm text-muted-foreground">{weatherData.current.condition}</p>
          </div>
          <Cloud className="w-12 h-12 text-info" />
        </div>
        <div className="space-y-3 text-sm">
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-1">
              <Droplets className="w-4 h-4 text-info" />
              Humidity
            </span>
            <span className="font-semibold">{weatherData.current.humidity}%</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-1">
              <Wind className="w-4 h-4 text-info" />
              Wind Speed
            </span>
            <span className="font-semibold">{weatherData.current.windSpeed} km/h</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-1">
              <CloudRain className="w-4 h-4 text-info" />
              Rainfall
            </span>
            <span className="font-semibold">{weatherData.current.rainfall} mm</span>
          </div>
        </div>
      </div>

      <div className="p-3 rounded-lg bg-accent/10 border border-accent/20">
        <p className="text-xs text-foreground">
          💡 <span className="font-semibold">Tip:</span> Partly cloudy with chance of rain today.
        </p>
      </div>

      {/* 4-Day Forecast */}
      <div className="grid grid-cols-4 gap-2">
        {weatherData.forecast.map((day) => {
          const Icon = day.icon;
          return (
            <div key={day.day} className="text-center p-2 rounded-lg hover:bg-muted/50 transition-colors">
              <p className="text-xs font-medium text-muted-foreground mb-1">{day.day}</p>
              <Icon className="w-6 h-6 mx-auto mb-1 text-info" />
              <p className="text-sm font-semibold">{day.temp}°</p>
              <p className="text-xs text-info">{day.rain}%</p>
            </div>
          );
        })}
      </div>
    </Card>
  );
};
