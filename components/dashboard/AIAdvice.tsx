"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Sprout, Droplet, Scissors, TrendingUp, ThumbsDown, ThumbsUp, Bug } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/useToast";
import { useState } from "react";
import { FeedbackDialog } from "./FeedbackDialog";

type Feedback = {
  id: string
  helpful: string[]
  notHelpful: string[]
} 

export const AIAdvice = () => {
  const { toast } = useToast();
  const [feedback, setFeedback] = useState<Feedback>({
    id: "",
    helpful: [],
    notHelpful: [],
  });

  const handleFeedback = (
    userId: string,
    type: "helpful" | "notHelpful",
  ) => {
    const opposite = type === "helpful" ? "notHelpful" : "helpful"
    const alreadyMarked = feedback[type].includes(userId)
  
    let updated = { ...feedback }
  
    if (alreadyMarked) {
      updated[type] = updated[type].filter(id => id !== userId)
    } else {
      updated[type] = [...updated[type], userId]
      updated[opposite] = updated[opposite].filter(id => id !== userId)
      toast({
        title: type === "helpful"
          ? "Thanks for your feedback!"
          : "Your feedback has been recorded.",
        description: type === "helpful"
          ? "Thank you! Your feedback helps us improve recommendations."
          : "Your feedback has been recorded."
      })
    }
  
    setFeedback(updated)
  }
  
  const advice = [
    {
      type: "Planting",
      icon: Sprout,
      title: "Optimal Planting Window",
      message: "Start wheat planting in the next 7-10 days. Weather conditions are ideal with expected rainfall.",
      priority: "high",
      color: "text-success",
    },
    {
      type: "Irrigation",
      icon: Droplet,
      title: "Water Management",
      message: "Reduce irrigation by 30% this week. Rainfall expected on Tuesday will provide sufficient moisture.",
      priority: "medium",
      color: "text-info",
    },
    {
      type: "Pest Control",
      icon: Bug,
      title: "Pest Control",
      message: "Apply insecticide to wheat crops to prevent pest infestation.",
      priority: "medium",
      color: "text-info",
    },
    {
      type: "Harvesting",
      icon: Scissors,
      title: "Harvest Timing",
      message: "Rice crop ready for harvest in 5-7 days. Monitor moisture levels carefully.",
      priority: "high",
      color: "text-warning",
    },
    {
      type: "Market",
      icon: TrendingUp,
      title: "Selling Strategy",
      message: "Hold rice stock for 2 weeks. Market analysis shows price increase of 8-10% expected.",
      priority: "medium",
      color: "text-accent",
    },
  ];

  const getPriorityColor = (priority: string) => {
    return priority === "high" ? "bg-destructive/10 border-destructive/20" : "bg-muted/50 border-border";
  };

  return (
    <Card className="p-6 shadow-soft">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-primary" />
          AI Recommendations
        </h3>
        <Badge variant="secondary" className="gap-1">
          <span className="w-2 h-2 rounded-full bg-success animate-pulse"></span>
          New
        </Badge>
      </div>

      <div className="space-y-4">
        {advice.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className={`p-4 rounded-lg border ${getPriorityColor(item.priority)} transition-all hover:shadow-md`}
            >
              <div className="flex items-start gap-3">
                <div className={`p-2 rounded-lg bg-white ${item.color}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center gap-2 mb-1">
                    <h4 className="font-semibold text-foreground">{item.title}</h4>
                    {item.priority === "high" && (
                      <Badge variant="destructive" className="text-xs">
                        High Priority
                      </Badge>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">{item.message}</p>
                </div>
              </div>
              <div className="w-max ml-auto flex justify-end gap-2 mt-3 pt-3 border-t border-border/50">
                <FeedbackDialog adviceId={index.toString()} />
                <Button
                  size="icon"
                  variant={feedback.helpful.includes(index.toString()) ? 'default' : 'outline'}
                  className="flex-1 w-9 h-9"
                  onClick={() => handleFeedback(index.toString(), 'helpful')}
                >
                  <ThumbsUp className="w-4 h-4" />
                </Button>
                <Button
                  size="icon"
                  variant={feedback.notHelpful.includes(index.toString()) ? 'destructive' : 'outline'}
                  className="flex-1 w-9 h-9"
                  onClick={() => handleFeedback(index.toString(), 'notHelpful')}
                >
                  <ThumbsDown className="w-4 h-4" />
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
};
