"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { DemoFormData } from "@/lib/types";

interface DemoFormProps {
  onSubmit: (data: DemoFormData) => Promise<void>;
  onCancel: () => void;
}

export function DemoForm({ onSubmit, onCancel }: DemoFormProps) {
  const [formData, setFormData] = useState<DemoFormData>({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    message: "",
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
        message: "",
      });
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: keyof DemoFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="firstName">First Name *</Label>
          <Input
            id="firstName"
            type="text"
            required
            value={formData.firstName}
            onChange={(e) => handleChange("firstName", e.target.value)}
            className="mt-2"
          />
        </div>
        <div>
          <Label htmlFor="lastName">Last Name *</Label>
          <Input
            id="lastName"
            type="text"
            required
            value={formData.lastName}
            onChange={(e) => handleChange("lastName", e.target.value)}
            className="mt-2"
          />
        </div>
      </div>

      <div>
        <Label htmlFor="email">Email *</Label>
        <Input
          id="email"
          type="email"
          required
          value={formData.email}
          onChange={(e) => handleChange("email", e.target.value)}
          className="mt-2"
        />
      </div>

      <div>
        <Label htmlFor="company">Company *</Label>
        <Input
          id="company"
          type="text"
          required
          value={formData.company}
          onChange={(e) => handleChange("company", e.target.value)}
          className="mt-2"
        />
      </div>

      <div>
        <Label htmlFor="message">Message (Optional)</Label>
        <Textarea
          id="message"
          rows={3}
          placeholder="Tell us about your specific requirements..."
          value={formData.message}
          onChange={(e) => handleChange("message", e.target.value)}
          className="mt-2"
        />
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
          {isSubmitting ? "Sending..." : "Send Request"}
        </Button>
      </div>
    </form>
  );
} 