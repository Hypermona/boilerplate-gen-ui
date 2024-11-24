import React from "react";
import { Switch } from "./ui/switch";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectTrigger, SelectValue } from "./ui/select";
import { SelectItem } from "@radix-ui/react-select";
import { Input } from "./ui/input";

type Props = {
  type: "text" | "select" | "switch";
  value: any;
  placeholder?: string;
  label: string;
  options?: { label: string; value: any; type: string }[];
  onChange: (value: any) => void;
};

const Formfield = ({ type, value, placeholder, onChange, label, options }: Props) => {
  switch (type) {
    case "text":
      return;
    case "select":
      return (
        <div className="grid gap-2">
          <Label>{label}</Label>
          <Select value={value} onValueChange={(value) => onChange(value)}>
            <SelectTrigger className="border-2">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {options?.map((o) => (
                <SelectItem value={o.value} key={o.value}>
                  {o.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      );
    case "switch":
      <div className="flex items-center space-x-2">
        <Switch id="container" checked={value} onCheckedChange={(checked) => onChange(checked)} />
        <Label htmlFor="container">{label}</Label>
      </div>;
    default:
      <div className="grid gap-2">
        <Label htmlFor="name">{label}</Label>
        <Input
          id="name"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="border-2"
        />
      </div>;
  }
};

export default Formfield;
