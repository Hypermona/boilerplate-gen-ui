"use client";

import { Button } from "@/components/ui/button";
import { Laptop, Phone } from "lucide-react";

interface ProjectTypeSelectorProps {
  projectType: string;
  onProjectTypeChange: (type: string) => void;
}

export function ProjectTypeSelector({
  projectType,
  onProjectTypeChange,
}: ProjectTypeSelectorProps) {
  return (
    <div className="flex justify-center gap-4 mb-8">
      <Button
        variant={projectType === "web" ? "default" : "outline"}
        onClick={() => onProjectTypeChange("web")}
        className="flex gap-2"
      >
        <Laptop className="w-4 h-4" />
        Web
      </Button>
      <Button
        variant={projectType === "mobile" ? "default" : "outline"}
        onClick={() => onProjectTypeChange("mobile")}
        className="flex gap-2"
      >
        <Phone className="w-4 h-4" />
        Mobile
      </Button>
    </div>
  );
}