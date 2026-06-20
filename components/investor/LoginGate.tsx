"use client";

import { useState, useEffect } from "react";
import { CorelloLogo } from "./CorelloLogo";

const AUTH_KEY = "corello_mi_auth";
const VALID_EMAIL = "carlos.maiguel@corello.ai";
const VALID_PASSWORD = "corello123";

interface Props {
  children: React.ReactNode;
}

export function LoginGate({ children }: Props) {
  const [authed, setAuthed] = useState<boolean | null>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setAuthed(sessionStorage.getItem(AUTH_KEY) === "1");
  }, []);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    setTimeout(() => {
      if (email.trim().toLowerCase() === VALID_EMAIL && password === VALID_PASSWORD) {
        sessionStorage.setItem(AUTH_KEY, "1");
        setAuthed(true);
      } else {
        setError("Incorrect email or password.");
      }
      setLoading(false);
    }, 600);
  }

  // Still checking sessionStorage
  if (authed === null) return null;

  // Authenticated — show the page
  if (authed) return <>{children}</>;

  // Login screen
  return (
    <div className="min-h-screen bg-[#0F1112] flex flex-col items-center justify-center px-6 relative overflow-hidden">
      {/* Grid texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(245,194,0,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(245,194,0,0.6) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#F5C200] opacity-[0.04] blur-3xl pointer-events-none" />

      <div className="relative z-10 w-full max-w-sm">
        {/* Logo */}
        <div className="flex justify-center mb-10">
          <CorelloLogo size="md" />
        </div>

        {/* Card */}
        <div className="border border-[rgba(245,194,0,0.12)] bg-[#161A1D] p-8">
          <p className="text-[#F5C200] font-mono text-[10px] uppercase tracking-[0.25em] mb-2">
            Private Access
          </p>
          <h1 className="text-white font-bold text-xl mb-6">
            Sign in to continue
          </h1>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-[#8A9299] text-xs font-mono uppercase tracking-widest">
                Email
              </label>
              <input
                type="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-[#0F1112] border border-[rgba(255,255,255,0.08)] text-white text-sm px-4 py-3 outline-none focus:border-[rgba(245,194,0,0.4)] transition-colors placeholder:text-[#4A5259]"
                placeholder="you@corello.ai"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[#8A9299] text-xs font-mono uppercase tracking-widest">
                Password
              </label>
              <input
                type="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="bg-[#0F1112] border border-[rgba(255,255,255,0.08)] text-white text-sm px-4 py-3 outline-none focus:border-[rgba(245,194,0,0.4)] transition-colors placeholder:text-[#4A5259]"
                placeholder="••••••••"
              />
            </div>

            {error && (
              <p className="text-red-400 text-xs font-mono">{error}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="mt-2 bg-[#F5C200] text-[#0F1112] font-bold text-sm py-3 px-6 transition-opacity hover:opacity-90 disabled:opacity-50 cursor-pointer"
            >
              {loading ? "Signing in…" : "Sign In →"}
            </button>
          </form>
        </div>

        <p className="text-center text-[#2A3035] font-mono text-[10px] mt-6 uppercase tracking-widest">
          corello.ai — confidential
        </p>
      </div>
    </div>
  );
}
