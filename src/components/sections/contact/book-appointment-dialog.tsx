"use client";

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ContactForm } from "@/components/sections/contact/contact-form";

export function BookAppointmentDialog({ children }: { children: React.ReactNode }) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-h-[88vh] w-[calc(100%-2rem)] max-w-2xl overflow-y-auto">
        <DialogTitle>Book Your Appointment</DialogTitle>
        <DialogDescription>
          Fill in your details below — we&apos;ll open WhatsApp with your request ready to send.
        </DialogDescription>
        <div className="mt-6">
          <ContactForm />
        </div>
      </DialogContent>
    </Dialog>
  );
}
