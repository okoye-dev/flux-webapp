import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Wheat, Languages } from "lucide-react";

export const FarmerProfile = () => {
  const farmer = {
    name: "Chukwudi Okonkwo",
    cropType: "Rice & Cassava",
    location: "Benue State, Nigeria",
    language: "Igbo",
  };

  return (
    <Card className="p-6 shadow-soft">
      <div className="flex items-start gap-4">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-white text-2xl font-bold">
          {farmer.name.charAt(0)}
        </div>
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-foreground mb-2">{farmer.name}</h2>
          <div className="flex flex-wrap gap-3">
            <Badge variant="secondary" className="gap-1">
              <Wheat className="w-3 h-3" />
              {farmer.cropType}
            </Badge>
            <Badge variant="outline" className="gap-1">
              <MapPin className="w-3 h-3" />
              {farmer.location}
            </Badge>
            <Badge variant="outline" className="gap-1">
              <Languages className="w-3 h-3" />
              {farmer.language}
            </Badge>
          </div>
        </div>
      </div>
    </Card>
  );
};
