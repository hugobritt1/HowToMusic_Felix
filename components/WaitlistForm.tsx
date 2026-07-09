"use client";

import { useState } from "react";
import styles from "./WaitlistForm.module.css";

type Status = "idle" | "loading" | "success" | "error";

export function WaitlistForm({ variant = "light" }: { variant?: "light" | "dark" }) {
  const [email, setEmail] = useState("");
  const [instrument, setInstrument] = useState("guitar");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "loading") return;
    setStatus("loading");
    setMessage("");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, instrument }),
      });
      const data = await res.json();
      if (!res.ok) {
        setStatus("error");
        setMessage(data.error || "Something went wrong. Try again.");
        return;
      }
      setStatus("success");
      setMessage(data.message || "You're on the list.");
    } catch {
      setStatus("error");
      setMessage("Network hiccup. Try again in a sec.");
    }
  }

  if (status === "success") {
    return (
      <div className={`${styles.success} ${variant === "dark" ? styles.successDark : ""}`}>
        <div className={styles.successBadge}>You&apos;re in 🎸</div>
        <p className={styles.successCopy}>{message}</p>
        <p className={styles.successSub}>
          We&apos;ll email you the moment full lessons drop. No spam, no filler.
        </p>
      </div>
    );
  }

  return (
    <form
      className={`${styles.form} ${variant === "dark" ? styles.formDark : ""}`}
      onSubmit={onSubmit}
      noValidate
    >
      <div className={styles.row}>
        <div className={styles.inputWrap}>
          <label className={styles.label} htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            placeholder="you@wherever.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.input}
            autoComplete="email"
          />
        </div>
        <div className={styles.inputWrap}>
          <label className={styles.label} htmlFor="instrument">
            Starting with
          </label>
          <select
            id="instrument"
            value={instrument}
            onChange={(e) => setInstrument(e.target.value)}
            className={styles.input}
          >
            <option value="guitar">Guitar</option>
            <option value="piano">Piano</option>
            <option value="both">Both</option>
            <option value="undecided">Not sure yet</option>
          </select>
        </div>
      </div>
      <button
        type="submit"
        className="btn btn-primary"
        disabled={status === "loading"}
      >
        {status === "loading" ? "Joining…" : "Join the waitlist"}
      </button>
      {status === "error" && <p className={styles.error}>{message}</p>}
      <p className={styles.small}>
        No spam. Just a heads-up when lessons open, and the odd behind-the-scenes note.
      </p>
    </form>
  );
}
