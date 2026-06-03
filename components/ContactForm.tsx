"use client";

import { useState, FormEvent, useEffect, useRef } from "react";

interface Errors {
  name?: string;
  email?: string;
  message?: string;
  token?: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(name: string, email: string, message: string): Errors {
  const errors: Errors = {};
  if (!name.trim()) errors.name = "Name is required";
  if (!email.trim()) errors.email = "Email is required";
  else if (!EMAIL_RE.test(email)) errors.email = "Please enter a valid email";
  if (!message.trim()) errors.message = "Message is required";
  else if (message.trim().length < 10)
    errors.message = "Message must be at least 10 characters";
  return errors;
}

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [token, setToken] = useState("");
  const [turnstileReady, setTurnstileReady] = useState(false);
  const [status, setStatus] = useState<
    "idle" | "sending" | "sent" | "error"
  >("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const widgetRef = useRef<HTMLDivElement>(null);
  const widgetId = useRef<string | undefined>(undefined);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);

    script.onload = () => {
      if (widgetRef.current && window.turnstile) {
        widgetId.current = window.turnstile.render(widgetRef.current, {
          sitekey: process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!,
          callback: (t: string) => {
            setToken(t);
            setTurnstileReady(true);
          },
        });
      }
    };

    return () => {
      if (widgetId.current && window.turnstile) {
        window.turnstile.remove(widgetId.current);
      }
    };
  }, []);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const fieldErrors = validate(name, email, message);
    if (!token) fieldErrors.token = "Security check not ready. Please wait.";
    setErrors(fieldErrors);
    if (Object.keys(fieldErrors).length > 0) return;

    setStatus("sending");
    setErrorMsg("");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message, token }),
    });

    if (res.ok) {
      setStatus("sent");
      setName("");
      setEmail("");
      setMessage("");
      setToken("");
      setTurnstileReady(false);
      setErrors({});
      if (widgetId.current && window.turnstile) {
        window.turnstile.reset(widgetId.current);
      }
    } else {
      setStatus("error");
      const data = await res.json().catch(() => null);
      if (res.status === 429) {
        setErrorMsg("Too many requests. Please wait a moment.");
      } else if (res.status === 403) {
        setErrorMsg("Request blocked.");
      } else if (data?.error) {
        setErrorMsg(data.error);
      } else {
        setErrorMsg("Something went wrong. Try again.");
      }
    }
  }

  if (status === "sent") {
    return (
      <p className="text-green-600 dark:text-green-400">
        Thanks! I&apos;ll get back to you soon.
      </p>
    );
  }

  const canSubmit = status !== "sending" && turnstileReady;

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-md space-y-4">
      <div>
        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded-lg border border-zinc-200 bg-white px-4 py-2.5 text-sm focus:border-indigo-500 focus:outline-none dark:border-zinc-700 dark:bg-zinc-900"
        />
        {errors.name && (
          <p className="mt-1 text-xs text-red-500">{errors.name}</p>
        )}
      </div>
      <div>
        <input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-lg border border-zinc-200 bg-white px-4 py-2.5 text-sm focus:border-indigo-500 focus:outline-none dark:border-zinc-700 dark:bg-zinc-900"
        />
        {errors.email && (
          <p className="mt-1 text-xs text-red-500">{errors.email}</p>
        )}
      </div>
      <div>
        <textarea
          placeholder="Your message"
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full rounded-lg border border-zinc-200 bg-white px-4 py-2.5 text-sm focus:border-indigo-500 focus:outline-none dark:border-zinc-700 dark:bg-zinc-900"
        />
        {errors.message && (
          <p className="mt-1 text-xs text-red-500">{errors.message}</p>
        )}
      </div>
      <div ref={widgetRef} />
      <button
        type="submit"
        disabled={!canSubmit}
        className="w-full rounded-full bg-indigo-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-indigo-600 disabled:opacity-50"
      >
        {!turnstileReady
          ? "Loading security check..."
          : status === "sending"
            ? "Sending..."
            : "Send Message"}
      </button>
      {errors.token && (
        <p className="text-center text-xs text-red-500">{errors.token}</p>
      )}
      {status === "error" && (
        <p className="text-center text-sm text-red-500">{errorMsg}</p>
      )}
    </form>
  );
}
