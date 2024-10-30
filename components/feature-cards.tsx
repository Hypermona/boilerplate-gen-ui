"use client";

import { motion } from "framer-motion";
import { Boxes, Code2, Database } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function FeatureCards() {
  const features = [
    {
      icon: Code2,
      title: "Multiple Frameworks",
      description: "Support for React, Vue, Svelte, and React Native",
    },
    {
      icon: Database,
      title: "Database Options",
      description: "Choose from MongoDB, MySQL, or PostgreSQL",
    },
    {
      icon: Boxes,
      title: "Docker Ready",
      description: "Optional containerization with Docker and Docker Compose",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4 }}
      className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto"
    >
      {features.map((feature, index) => (
        <Card key={index} className="relative overflow-hidden border-2">
          <CardContent className="p-6 text-center">
            <feature.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h3 className="text-lg font-semibold mb-2 tracking-tight">
              {feature.title}
            </h3>
            <p className="text-sm text-muted-foreground">
              {feature.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </motion.div>
  );
}