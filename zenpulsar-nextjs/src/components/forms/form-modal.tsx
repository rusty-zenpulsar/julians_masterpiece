"use client";

import { X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { DemoForm } from "./demo-form";
import { AccessForm } from "./access-form";
import { DemoFormData, AccessFormData } from "@/lib/types";

interface FormModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: "demo" | "access";
  onDemoSubmit?: (data: DemoFormData) => Promise<void>;
  onAccessSubmit?: (data: AccessFormData) => Promise<void>;
}

export function FormModal({
  isOpen,
  onClose,
  type,
  onDemoSubmit,
  onAccessSubmit,
}: FormModalProps) {
  const title = type === "demo" ? "Request Demo" : "Request Access";

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md w-full mx-auto">
        <DialogHeader className="flex items-center justify-between pb-4 border-b border-zp-border">
          <DialogTitle className="text-2xl font-bold text-zp-dark">
            {title}
          </DialogTitle>
        </DialogHeader>

        <div className="py-2">
          {type === "demo" && onDemoSubmit && (
            <DemoForm onSubmit={onDemoSubmit} onCancel={onClose} />
          )}
          {type === "access" && onAccessSubmit && (
            <AccessForm onSubmit={onAccessSubmit} onCancel={onClose} />
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
} 