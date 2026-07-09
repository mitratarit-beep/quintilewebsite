"use client";

import { useRef, useState } from "react";
import { contact } from "@/lib/content";

type Status = "idle" | "submitting" | "success" | "error";

const MAX_FILE_BYTES = 8 * 1024 * 1024; // 8MB
const ACCEPTED_EXT = [".pdf", ".doc", ".docx"];

const field =
  "w-full bg-[var(--color-bone)] border border-[var(--color-line-strong)] rounded-[6px] px-4 py-3 text-[15px] text-[var(--color-ink)] placeholder:text-[var(--color-flint)] outline-none transition-colors focus:border-[var(--color-navy)] focus:ring-1 focus:ring-[var(--color-navy)]";
const label = "block text-[13px] font-medium mb-2 text-[var(--color-slate)]";

export function ContactForm({ applyingFor }: { applyingFor?: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string>("");
  const [fileName, setFileName] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  function onFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) {
      setFileName("");
      return;
    }
    const ext = file.name.slice(file.name.lastIndexOf(".")).toLowerCase();
    if (!ACCEPTED_EXT.includes(ext)) {
      setError("Please upload a PDF or Word document.");
      e.target.value = "";
      setFileName("");
      return;
    }
    if (file.size > MAX_FILE_BYTES) {
      setError("File is too large — please keep it under 8MB.");
      e.target.value = "";
      setFileName("");
      return;
    }
    setError("");
    setFileName(file.name);
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");

    if (applyingFor && !fileInputRef.current?.files?.length) {
      setStatus("error");
      setError("Please attach your résumé to apply.");
      return;
    }

    setStatus("submitting");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Something went wrong.");
      setStatus("success");
      form.reset();
      setFileName("");
    } catch (err: any) {
      setStatus("error");
      setError(err.message || "Something went wrong. Please email us directly.");
    }
  }

  if (status === "success") {
    return (
      <div className="card" style={{ padding: 40, textAlign: "center" }}>
        <div
          className="mx-auto flex items-center justify-center"
          style={{ width: 52, height: 52, borderRadius: 99, background: "var(--color-sand)", border: "1px solid var(--color-line)" }}
        >
          <span style={{ color: "var(--color-gold-deep)", fontSize: 22 }}>✓</span>
        </div>
        <h3 className="h3 mt-6">Thank you — your message is on its way.</h3>
        <p className="mt-3 text-[15px]" style={{ color: "var(--color-graphite)" }}>
          We typically respond within one business day.
        </p>
        <button className="btn btn-ghost mt-7" onClick={() => setStatus("idle")}>
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="card" style={{ padding: "clamp(24px,4vw,40px)" }} noValidate>
      {/* Honeypot (spam trap) */}
      <input type="text" name="company_website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />

      {applyingFor && (
        <>
          <input type="hidden" name="roleApplied" value={applyingFor} />
          <div
            className="flex items-center gap-2 mb-5"
            style={{
              border: "1px solid var(--color-line-strong)",
              borderRadius: 999,
              padding: "8px 16px",
              width: "fit-content",
              background: "var(--color-cream)",
            }}
          >
            <span style={{ width: 6, height: 6, borderRadius: 99, background: "var(--color-gold)", display: "inline-block" }} />
            <span className="text-[13px]" style={{ color: "var(--color-slate)" }}>
              Applying for <strong style={{ color: "var(--color-ink)" }}>{applyingFor}</strong>
            </span>
          </div>
        </>
      )}

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className={label} htmlFor="name">Full Name *</label>
          <input id="name" name="name" required className={field} placeholder="Jane Doe" />
        </div>
        <div>
          <label className={label} htmlFor="companyName">Company Name</label>
          <input id="companyName" name="companyName" className={field} placeholder="Acme Corp" />
        </div>
        <div>
          <label className={label} htmlFor="email">Email Address *</label>
          <input id="email" name="email" type="email" required className={field} placeholder="jane@company.com" />
        </div>
        <div>
          <label className={label} htmlFor="phone">Phone Number</label>
          <input id="phone" name="phone" type="tel" className={field} placeholder="Optional" />
        </div>
      </div>

      {!applyingFor && (
        <div className="mt-5">
          <label className={label} htmlFor="lookingFor">What are you looking for?</label>
          <select id="lookingFor" name="lookingFor" defaultValue="" className={field}>
            <option value="" disabled>Select an option…</option>
            {contact.lookingForOptions.map((o) => (
              <option key={o} value={o}>{o}</option>
            ))}
          </select>
        </div>
      )}

      <div className="mt-5">
        <label className={label} htmlFor="message">
          {applyingFor ? "Message — tell us about your background *" : "Message — tell us about your need *"}
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className={field}
          style={{ resize: "vertical" }}
          placeholder={
            applyingFor
              ? "A few lines about your experience and why this role is a fit."
              : "A few lines about the role, timing, or challenge you're facing."
          }
        />
      </div>

      <div className="mt-5">
        <label className={label} htmlFor="resume">
          {applyingFor ? "Attach your résumé *" : "Share your résumé (optional)"}
        </label>
        <div
          className="flex items-center justify-between gap-3 cursor-pointer"
          style={{
            border: "1px dashed var(--color-line-strong)",
            borderRadius: 6,
            padding: "14px 16px",
            background: "var(--color-bone)",
          }}
          onClick={() => fileInputRef.current?.click()}
        >
          <span className="text-[14px]" style={{ color: fileName ? "var(--color-ink)" : "var(--color-flint)" }}>
            {fileName || "Upload PDF or Word — up to 8MB"}
          </span>
          <span className="btn btn-ghost" style={{ padding: "8px 14px", fontSize: 13 }}>
            {fileName ? "Change" : "Choose file"}
          </span>
        </div>
        <input
          ref={fileInputRef}
          id="resume"
          name="resume"
          type="file"
          accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
          className="hidden"
          onChange={onFileChange}
        />
      </div>

      {status === "error" && (
        <p className="mt-4 text-[14px]" style={{ color: "#b4402f" }}>
          {error} You can also email us at{" "}
          <a href="mailto:quintileadvisory@quintileadvisory.com" className="ulink underline">quintileadvisory@quintileadvisory.com</a>.
        </p>
      )}

      <div className="mt-7 flex flex-wrap items-center gap-4">
        <button type="submit" className="btn btn-primary" disabled={status === "submitting"}>
          {status === "submitting" ? "Sending…" : "Submit"} <span className="arw">→</span>
        </button>
        <p className="text-[13px]" style={{ color: "var(--color-flint)" }}>
          We typically respond within one business day.
        </p>
      </div>
    </form>
  );
}
