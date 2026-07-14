'use client';

import { useState } from "react";

const initialState = {
  name: "",
  email: "",
  company: "",
  role: "",
  budget: "",
  message: "",
  honeypot: "",
};

export function ContactForm() {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");
    setFeedback("");

    const payload = {
      ...form,
      pageUrl: typeof window !== "undefined" ? window.location.href : "",
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.error || "Unable to send your message right now.");
      }

      setStatus("success");
      setFeedback("Thanks — your message was sent. I’ll reply by email.");
      setForm(initialState);
    } catch (error) {
      setStatus("error");
      setFeedback(error instanceof Error ? error.message : "Unable to send your message right now.");
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="text-sm text-slate-300">
          <span className="mb-2 block">Name</span>
          <input
            className="w-full rounded-xl border border-white/10 bg-slate-900/70 px-4 py-3 text-white outline-none"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your name"
            required
          />
        </label>
        <label className="text-sm text-slate-300">
          <span className="mb-2 block">Email</span>
          <input
            className="w-full rounded-xl border border-white/10 bg-slate-900/70 px-4 py-3 text-white outline-none"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="you@company.com"
            required
          />
        </label>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="text-sm text-slate-300">
          <span className="mb-2 block">Company</span>
          <input
            className="w-full rounded-xl border border-white/10 bg-slate-900/70 px-4 py-3 text-white outline-none"
            name="company"
            value={form.company}
            onChange={handleChange}
            placeholder="Company name"
            required
          />
        </label>
        <label className="text-sm text-slate-300">
          <span className="mb-2 block">Role / Reason for contact</span>
          <input
            className="w-full rounded-xl border border-white/10 bg-slate-900/70 px-4 py-3 text-white outline-none"
            name="role"
            value={form.role}
            onChange={handleChange}
            placeholder="Director role, consulting, advisory, architecture review"
            required
          />
        </label>
      </div>
      <label className="block text-sm text-slate-300">
        <span className="mb-2 block">Budget / opportunity type</span>
        <input
          className="w-full rounded-xl border border-white/10 bg-slate-900/70 px-4 py-3 text-white outline-none"
          name="budget"
          value={form.budget}
          onChange={handleChange}
          placeholder="Full-time, contract, advisory, consulting"
        />
      </label>
      <label className="block text-sm text-slate-300">
        <span className="mb-2 block">Message</span>
        <textarea
          className="min-h-36 w-full rounded-xl border border-white/10 bg-slate-900/70 px-4 py-3 text-white outline-none"
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Tell me about your team, timing, and what you need help with."
          required
        />
      </label>
      <input
        className="hidden"
        name="companyWebsite"
        value={form.honeypot}
        onChange={handleChange}
        tabIndex={-1}
        autoComplete="off"
      />
      {feedback ? (
        <p className={`text-sm ${status === "success" ? "text-cyan-300" : "text-rose-300"}`}>{feedback}</p>
      ) : null}
      <button
        className="inline-flex rounded-full border border-cyan-400/70 bg-cyan-500/10 px-5 py-3 text-sm font-semibold text-cyan-200 transition hover:bg-cyan-500/20 disabled:cursor-not-allowed disabled:opacity-60"
        type="submit"
        disabled={status === "submitting"}
      >
        {status === "submitting" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
