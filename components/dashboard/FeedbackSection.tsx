"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, AlertCircle, Bug, Leaf } from "lucide-react";
import { useToast } from "@/hooks/useToast";

export const FeedbackSection = () => {
  const { toast } = useToast();

  const feedbackOptions = [
    { label: "Planted", icon: Leaf, variant: "default" as const },
    { label: "Harvested", icon: CheckCircle2, variant: "default" as const },
    { label: "Pest Problem", icon: Bug, variant: "destructive" as const },
    { label: "Need Help", icon: AlertCircle, variant: "outline" as const },
  ];

  const handleFeedback = (feedback: string) => {
    toast({
      title: "Feedback Received",
      description: `Your "${feedback}" update has been recorded. Thank you!`,
    });
  };

  return (
    <Card className="p-6 shadow-soft">
      <h3 className="text-lg font-semibold text-foreground mb-4">Quick Feedback</h3>
      <p className="text-sm text-muted-foreground mb-4">
        Let us know about your farming activities to get better recommendations
      </p>

      <div className="grid grid-cols-2 gap-3">
        {feedbackOptions.map((option) => {
          const Icon = option.icon;
          return (
            <Button
              key={option.label}
              variant={option.variant}
              className="h-auto py-4 flex flex-col gap-2"
              onClick={() => handleFeedback(option.label)}
            >
              <Icon className="w-5 h-5" />
              <span className="text-sm">{option.label}</span>
            </Button>
          );
        })}
      </div>
    </Card>
  );
};
