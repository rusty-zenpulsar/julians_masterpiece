"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { AccessFormData } from "@/lib/types";
import { offeringOptions } from "@/lib/constants";

interface AccessFormProps {
  onSubmit: (data: AccessFormData) => Promise<void>;
  onCancel: () => void;
}

export function AccessForm({ onSubmit, onCancel }: AccessFormProps) {
  const [formData, setFormData] = useState<AccessFormData>({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    interest: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await onSubmit(formData);
      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        interest: "",
      });
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: keyof AccessFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="accessFirstName">First Name *</Label>
          <Input
            id="accessFirstName"
            type="text"
            required
            value={formData.firstName}
            onChange={(e) => handleChange("firstName", e.target.value)}
            className="mt-2"
          />
        </div>
        <div>
          <Label htmlFor="accessLastName">Last Name *</Label>
          <Input
            id="accessLastName"
            type="text"
            required
            value={formData.lastName}
            onChange={(e) => handleChange("lastName", e.target.value)}
            className="mt-2"
          />
        </div>
      </div>

      <div>
        <Label htmlFor="accessEmail">Email *</Label>
        <Input
          id="accessEmail"
          type="email"
          required
          value={formData.email}
          onChange={(e) => handleChange("email", e.target.value)}
          className="mt-2"
        />
      </div>

      <div>
        <Label htmlFor="accessCompany">Company *</Label>
        <Input
          id="accessCompany"
          type="text"
          required
          value={formData.company}
          onChange={(e) => handleChange("company", e.target.value)}
          className="mt-2"
        />
      </div>

      <div>
        <Label htmlFor="accessInterest">Area of Interest</Label>
        <Select
          value={formData.interest}
          onValueChange={(value) => handleChange("interest", value)}
        >
          <SelectTrigger className="mt-2">
            <SelectValue placeholder="Select an option..." />
          </SelectTrigger>
          <SelectContent>
            {offeringOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="flex space-x-3 pt-4">
        <Button
          type="button"
          variant="outline"
          onClick={onCancel}
          className="flex-1"
          disabled={isSubmitting}
        >
          Cancel
        </Button>
        <Button
          type="submit"
          className="flex-1"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Request Access"}
        </Button>
      </div>
    </form>
  );
} 