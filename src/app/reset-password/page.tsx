"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

function ResetPasswordForm() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const email = searchParams.get("email");

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (!email) {
      setError("Invalid or expired password reset link.");
    }
  }, [email]);

  const handleReset = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // Try finding and updating in Students database
    let updated = false;
    const studentsSaved = localStorage.getItem("merkanto_students");
    if (studentsSaved) {
      try {
        const students = JSON.parse(studentsSaved);
        const match = students.find((s: any) => s.email.toLowerCase() === email?.toLowerCase());
        if (match) {
          match.password = password;
          localStorage.setItem("merkanto_students", JSON.stringify(students));
          updated = true;
        }
      } catch (err) {
        console.error(err);
      }
    }

    // Try finding and updating in Admins database if not updated
    if (!updated) {
      const adminsSaved = localStorage.getItem("merkanto_admins");
      if (adminsSaved) {
        try {
          const admins = JSON.parse(adminsSaved);
          const match = admins.find((a: any) => a.email.toLowerCase() === email?.toLowerCase());
          if (match) {
            match.password = password;
            localStorage.setItem("merkanto_admins", JSON.stringify(admins));
            updated = true;
          }
        } catch (err) {
          console.error(err);
        }
      }
    }

    if (updated) {
      setSuccess(true);
    } else {
      setError("Account email not found in our database.");
    }
  };

  return (
    <div className="w-full max-w-md glass-card p-8 border border-primary/20 relative">
      <div className="flex flex-col items-center mb-8">
        <Image src="/images/merkanto_logo_new.png" alt="Merkanto" width={300} height={100} className="h-12 w-auto object-contain mb-2" />
        <span className="uppercase tracking-[0.2em] text-on-surface-variant text-[11px]" style={{ fontFamily: "Geist, monospace" }}>
          ACADEMY SECURE SHELL
        </span>
      </div>

      <h2 className="text-white mb-6 uppercase tracking-widest text-center" style={{ fontFamily: "Geist, monospace", fontSize: "14px" }}>
        Reset Your Password
      </h2>

      <AnimatePresence mode="wait">
        {success ? (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="text-center space-y-6 py-4">
            <span className="material-symbols-outlined text-green-400" style={{ fontSize: "48px" }}>check_circle</span>
            <div className="space-y-2">
              <h3 className="text-white font-bold" style={{ fontFamily: "Hanken Grotesk, sans-serif" }}>Password Updated</h3>
              <p className="text-on-surface-variant text-xs">Your new credentials have been safely encrypted and saved. You can now log into your learning console.</p>
            </div>
            <Link
              href="/login"
              className="block w-full py-3 bg-primary text-background font-bold text-center uppercase tracking-widest hover:brightness-110 transition-all text-xs"
              style={{ fontFamily: "Geist, monospace" }}
            >
              Back to Login
            </Link>
          </motion.div>
        ) : (
          <motion.form initial={{ opacity: 0 }} animate={{ opacity: 1 }} onSubmit={handleReset} className="space-y-5">
            {error && (
              <div className="bg-red-400/10 border border-red-400/20 p-3 text-red-400 text-xs">
                {error}
              </div>
            )}

            <div className="bg-surface-container/30 p-3 border border-outline-variant/10 mb-2">
              <span className="text-on-surface-variant uppercase tracking-wider block text-[9px]" style={{ fontFamily: "Geist, monospace" }}>Account Email Target:</span>
              <span className="text-white text-xs font-bold font-mono">{email || "Unknown"}</span>
            </div>

            <div>
              <label className="text-on-surface-variant uppercase tracking-widest mb-1 block" style={{ fontFamily: "Geist, monospace", fontSize: "9px" }}>New Password *</label>
              <input
                type="password"
                required
                disabled={!email}
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="w-full bg-transparent border-b border-outline-variant/40 focus:border-primary focus:outline-none transition-colors text-white py-1.5 px-0 text-sm"
                placeholder="Enter at least 6 characters"
              />
            </div>

            <div>
              <label className="text-on-surface-variant uppercase tracking-widest mb-1 block" style={{ fontFamily: "Geist, monospace", fontSize: "9px" }}>Confirm Password *</label>
              <input
                type="password"
                required
                disabled={!email}
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)}
                className="w-full bg-transparent border-b border-outline-variant/40 focus:border-primary focus:outline-none transition-colors text-white py-1.5 px-0 text-sm"
                placeholder="Confirm your password"
              />
            </div>

            <button
              type="submit"
              disabled={!email}
              className="w-full py-3 bg-primary text-background font-bold uppercase tracking-widest hover:brightness-110 transition-all text-xs disabled:opacity-50 disabled:cursor-not-allowed"
              style={{ fontFamily: "Geist, monospace" }}
            >
              Save Credentials
            </button>

            <div className="text-center pt-2">
              <Link href="/login" className="text-on-surface-variant hover:text-white transition-colors text-xs uppercase tracking-wider" style={{ fontFamily: "Geist, monospace" }}>
                Cancel
              </Link>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function ResetPasswordPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col justify-center items-center p-4">
      <Suspense fallback={
        <div className="text-on-surface-variant uppercase tracking-widest font-mono text-xs">
          Loading Reset Shell...
        </div>
      }>
        <ResetPasswordForm />
      </Suspense>
    </div>
  );
}
