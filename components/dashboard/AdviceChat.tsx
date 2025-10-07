"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageSquare, Bot, User } from "lucide-react";
import { useState } from "react";

export const AdviceChat = () => {
  const [messages] = useState([
    {
      type: "bot",
      message: "Hello Rajesh! 👋 Based on weather data and market analysis, I have new recommendations for you.",
      time: "10:30 AM",
    },
    {
      type: "bot",
      message: "🌱 Start wheat planting in the next 7-10 days. Weather conditions are ideal with expected rainfall.",
      time: "10:30 AM",
    },
    {
      type: "user",
      message: "Thank you! What about irrigation?",
      time: "10:32 AM",
    },
    {
      type: "bot",
      message: "💧 Reduce irrigation by 30% this week. Rainfall expected on Tuesday will provide sufficient moisture for your crops.",
      time: "10:32 AM",
    },
    {
      type: "user",
      message: "When should I harvest rice?",
      time: "10:35 AM",
    },
    {
      type: "bot",
      message: "✂️ Your rice crop will be ready for harvest in 5-7 days. Monitor moisture levels carefully. I'll send you a reminder when it's time!",
      time: "10:35 AM",
    },
  ]);

  return (
    <Card className="p-6 shadow-soft">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
          <MessageSquare className="w-5 h-5 text-primary" />
          Advice Chat
        </h3>
        <Button variant="outline" size="sm">
          View All
        </Button>
      </div>

      {/* Chat Messages */}
      <div className="space-y-4 max-h-96 overflow-y-auto mb-4 pr-2">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex gap-3 ${msg.type === "user" ? "flex-row-reverse" : "flex-row"}`}
          >
            {/* Avatar */}
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                msg.type === "bot"
                  ? "bg-primary text-primary-foreground"
                  : "bg-accent text-accent-foreground"
              }`}
            >
              {msg.type === "bot" ? <Bot className="w-4 h-4" /> : <User className="w-4 h-4" />}
            </div>

            {/* Message Bubble */}
            <div
              className={`max-w-[70%] ${
                msg.type === "user" ? "items-end" : "items-start"
              } flex flex-col gap-1`}
            >
              <div
                className={`p-3 rounded-lg ${
                  msg.type === "bot"
                    ? "bg-muted text-foreground"
                    : "bg-primary text-primary-foreground"
                }`}
              >
                <p className="text-sm">{msg.message}</p>
              </div>
              <span className="text-xs text-muted-foreground px-1">{msg.time}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Voice Note Info */}
      <div className="p-3 rounded-lg bg-info/10 border border-info/20 text-sm">
        <p className="text-foreground">
          🎤 <span className="font-semibold">Voice messages available</span> - Listen to advice in your language via WhatsApp
        </p>
      </div>
    </Card>
  );
};
