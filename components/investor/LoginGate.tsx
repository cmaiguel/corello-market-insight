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

  if (authed === null) return null;
  if (authed) return <>{children}</>;

  return (
    <div className="min-h-screen bg-[#0F1112] flex flex-col items-center justify-center px-6">

      {/* Card */}
      <div className="w-full max-w-[380px] bg-[#161A1D] rounded-2xl border border-[rgba(255,255,255,0.07)] p-8 shadow-2xl">

        {/* Logo */}
        <div className="flex justify-center mb-6">
          <CorelloLogo size="md" />
        </div>

        {/* Title block */}
        <div className="text-center mb-7">
          <h1 className="text-[#F5C200] font-bold text-2xl">Market Analysis</h1>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <label className="text-white text-sm font-medium">Email</label>
            <input
              type="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-[#0F1112] rounded-lg border border-[rgba(245,194,0,0.3)] text-white text-sm px-4 py-3 outline-none focus:border-[#F5C200] transition-colors placeholder:text-[#4A5259]"
              placeholder="investor@example.com"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-white text-sm font-medium">Password</label>
            <input
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="bg-[#0F1112] rounded-lg border border-[rgba(255,255,255,0.08)] text-white text-sm px-4 py-3 outline-none focus:border-[#F5C200] transition-colors placeholder:text-[#4A5259]"
              placeholder="••••••••"
            />
          </div>

          {error && (
            <p className="text-red-400 text-xs">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="mt-1 bg-[#F5C200] text-[#0F1112] font-bold text-sm py-3 px-6 rounded-lg transition-opacity hover:opacity-90 disabled:opacity-50 cursor-pointer"
          >
            {loading ? "Signing in…" : "Enter"}
          </button>
        </form>
      </div>

      {/* Footer */}
      <p className="text-[#4A5259] text-xs mt-6">
        Corello Inc. © 2026
      </p>
    </div>
  );
}
