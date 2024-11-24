"use client";

import { useState } from "react";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ProjectTypeSelector } from "@/components/project-type-selector";
import { FORM_FIELDS } from "@/lib/constants";
import Formfield from "./Formfield";

interface FormData {
  name: string;
  frontend: string;
  backend: string;
  db: string;
  container: boolean;
  compose: boolean;
}

export function GeneratorForm() {
  const { toast } = useToast();
  const [projectType, setProjectType] = useState("web");
  const [isGenerated, setIsGenerated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    frontend: "react",
    backend: "express",
    db: "mongoDB",
    container: false,
    compose: false,
  });

  const handleGenerate = async () => {
    if (!formData.name) {
      toast({
        title: "Error",
        description: "Please enter a project name",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    try {
      const endpoint =
        projectType === "web" ? "/generate/web/fullstack" : "/generate/mobile/fullstack";

      const response = await fetch(endpoint, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsGenerated(true);
        toast({
          title: "Success!",
          description: "Your boilerplate has been generated successfully.",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to generate boilerplate.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleDownload = async () => {
    try {
      const response = await fetch("/download", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: formData.name }),
      });

      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `${formData.name}.zip`;
        a.click();
        window.URL.revokeObjectURL(url);
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to download boilerplate.",
        variant: "destructive",
      });
    }
  };

  return (
    <Card className="max-w-2xl mx-auto border-2">
      <CardHeader>
        <CardTitle className="text-center text-2xl font-bold">Configure Your Project</CardTitle>
      </CardHeader>
      <CardContent>
        <ProjectTypeSelector projectType={projectType} onProjectTypeChange={setProjectType} />

        <div className="space-y-6">
          <div className="grid gap-4">
            {FORM_FIELDS.map((field) => (
              <Formfield
                key={field.name}
                type={field.type}
                label={field.label}
                onChange={(value) => setFormData((prev) => ({ ...prev, [field.name]: value }))}
                options={field.options}
                placeholder={field.placeholder}
                value={formData[field.name]}
              />
            ))}
          </div>

          <div className="flex gap-4">
            <Button onClick={handleGenerate} className="flex-1" disabled={isLoading} size="lg">
              {isLoading ? "Generating..." : "Generate Boilerplate"}
            </Button>
            {isGenerated && (
              <Button onClick={handleDownload} variant="outline" className="flex gap-2" size="lg">
                <Download className="w-4 h-4" />
                Download
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
