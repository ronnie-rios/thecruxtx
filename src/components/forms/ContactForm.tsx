"use client";

import { useState } from "react";
import { SubmitButton } from "@/components/ui/Button";
import { form, validation } from "@/content/contact";

type Status = "idle" | "pending" | "success" | "error";
type Errors = Partial<Record<string, string>>;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values: Record<string, string>): Errors {
  const errors: Errors = {};
  for (const field of form.fields) {
    const value = values[field.name]?.trim() ?? "";
    if (field.required && !value) {
      errors[field.name] = validation.required;
    } else if (field.type === "email" && value && !EMAIL_PATTERN.test(value)) {
      errors[field.name] = validation.email;
    }
  }
  return errors;
}

const inputClass =
  "w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-sm text-crux-slate transition-colors duration-150 ease-crux placeholder:text-gray-400 focus:border-crux-blue focus:outline-none focus:ring-3 focus:ring-crux-blue/45";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Errors>({});

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const values = Object.fromEntries(
      form.fields.map((f) => [f.name, String(data.get(f.name) ?? "")]),
    );

    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    setStatus("pending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...values,
          [form.honeypotName]: String(data.get(form.honeypotName) ?? ""),
        }),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <p
        role="status"
        className="rounded-sm border border-crux-blue/40 bg-crux-blue/5 px-6 py-8 text-center text-sm text-crux-slate"
      >
        {form.successMessage}
      </p>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="grid grid-cols-1 gap-6 sm:grid-cols-2"
    >
      <p className="text-sm text-crux-gray sm:col-span-2">{form.intro}</p>

      {form.fields.map((field) => {
        const errorId = `${field.name}-error`;
        const hasError = Boolean(errors[field.name]);
        return (
          <div
            key={field.name}
            className={field.half ? "sm:col-span-1" : "sm:col-span-2"}
          >
            <label
              htmlFor={field.name}
              className="mb-2 block text-xs font-semibold uppercase tracking-wider text-crux-slate"
            >
              {field.label}
              {field.required && <span className="text-crux-blue"> *</span>}
            </label>

            {field.type === "textarea" ? (
              <textarea
                id={field.name}
                name={field.name}
                rows={5}
                placeholder={field.placeholder}
                aria-invalid={hasError}
                aria-describedby={hasError ? errorId : undefined}
                className={inputClass}
              />
            ) : (
              <input
                id={field.name}
                name={field.name}
                type={field.type}
                placeholder={field.placeholder}
                aria-invalid={hasError}
                aria-describedby={hasError ? errorId : undefined}
                className={inputClass}
              />
            )}

            {hasError && (
              <p id={errorId} className="mt-2 text-xs text-danger">
                {errors[field.name]}
              </p>
            )}
          </div>
        );
      })}

      {/* Honeypot — visually hidden, ignored by humans, filled by bots. */}
      <div aria-hidden="true" className="absolute left-[-9999px] sm:col-span-2">
        <label htmlFor={form.honeypotName}>Website</label>
        <input
          id={form.honeypotName}
          name={form.honeypotName}
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {status === "error" && (
        <p role="alert" className="text-sm text-danger sm:col-span-2">
          {form.errorMessage}
        </p>
      )}

      <div className="sm:col-span-2">
        <SubmitButton pending={status === "pending"}>
          {status === "pending" ? form.pendingLabel : form.submitLabel}
        </SubmitButton>
      </div>
    </form>
  );
}
