"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { treatments } from "@/lib/data/treatments";
import { site } from "@/lib/data/site";
import { cn } from "@/lib/utils";

type FormValues = {
  name: string;
  phone: string;
  email: string;
  treatment: string;
  preferredDate: string;
  message: string;
};

const inputClass =
  "w-full rounded-xl border border-ink/10 bg-white/70 px-4 py-3 text-sm text-ink placeholder:text-slate/60 outline-none transition-colors focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20";

function buildWhatsAppMessage(data: FormValues) {
  const lines = [
    "Hi, I would like to book an appointment at Sri Geetha Eye Hospital.",
    "",
    `Name: ${data.name}`,
    `Phone: ${data.phone}`,
  ];
  if (data.email) lines.push(`Email: ${data.email}`);
  if (data.treatment) lines.push(`Treatment: ${data.treatment}`);
  if (data.preferredDate) lines.push(`Preferred Date: ${data.preferredDate}`);
  if (data.message) lines.push(`Message: ${data.message}`);
  return lines.join("\n");
}

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>();

  async function onSubmit(data: FormValues) {
    const whatsappUrl = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(buildWhatsAppMessage(data))}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    await new Promise((r) => setTimeout(r, 900));
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 5000);
  }

  return (
    <div className="relative">
      <AnimatePresence>
        {submitted && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mb-6 flex items-center gap-3 rounded-2xl border border-brand-200 bg-brand-50 px-5 py-4 text-sm font-semibold text-brand-700"
          >
            <Icon name="check-circle" className="h-5 w-5 shrink-0" />
            Thank you! We&apos;ve opened WhatsApp with your appointment details. Just hit send to confirm your request.
          </motion.div>
        )}
      </AnimatePresence>

      <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="sm:col-span-1">
          <label className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-ink/70">
            Full Name *
          </label>
          <input
            className={cn(inputClass, errors.name && "border-red-400")}
            placeholder="Your name"
            {...register("name", { required: true })}
          />
        </div>

        <div className="sm:col-span-1">
          <label className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-ink/70">
            Phone Number *
          </label>
          <input
            className={cn(inputClass, errors.phone && "border-red-400")}
            placeholder="+91 98765 43210"
            {...register("phone", { required: true })}
          />
        </div>

        <div className="sm:col-span-2">
          <label className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-ink/70">
            Email Address
          </label>
          <input
            type="email"
            className={inputClass}
            placeholder="you@example.com"
            {...register("email")}
          />
        </div>

        <div className="sm:col-span-1">
          <label className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-ink/70">
            Concerned Treatment
          </label>
          <select className={inputClass} defaultValue="" {...register("treatment")}>
            <option value="" disabled>Select a treatment</option>
            {treatments.map((t) => (
              <option key={t.slug} value={t.name}>{t.name}</option>
            ))}
          </select>
        </div>

        <div className="sm:col-span-1">
          <label className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-ink/70">
            Preferred Date
          </label>
          <input type="date" className={inputClass} {...register("preferredDate")} />
        </div>

        <div className="sm:col-span-2">
          <label className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-ink/70">
            Message
          </label>
          <textarea
            rows={4}
            className={inputClass}
            placeholder="Tell us about your symptoms or concern"
            {...register("message")}
          />
        </div>

        <div className="sm:col-span-2">
          <Button type="submit" size="lg" variant="primary" disabled={isSubmitting} className="w-full sm:w-auto">
            {isSubmitting ? "Submitting..." : "Book Appointment"}
            <Icon name="send" className="h-4 w-4" />
          </Button>
        </div>
      </form>
    </div>
  );
}
