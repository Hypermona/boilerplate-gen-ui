"use client";

import { motion } from "framer-motion";
import { GeneratorForm } from "@/components/generator-form";
import { FeatureCards } from "@/components/feature-cards";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      <ThemeToggle />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="container mx-auto px-4 py-16"
      >
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold mb-4 tracking-tight"
          >
            Boilerplate Generator
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg"
          >
            Generate production-ready boilerplate code for your next project
          </motion.p>
        </div>

        <GeneratorForm />
        <FeatureCards />
      </motion.div>
    </div>
  );
}