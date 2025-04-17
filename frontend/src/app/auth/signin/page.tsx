"use client";

import { useState } from "react";

import Button from "../../../components/Button";
import InputError from "../../../components/Input/InputError";

export default function SignIn() {
  const [error, setError] = useState<string | null>(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Handle login API
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-black px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md space-y-6 rounded-2xl bg-neutral-900 p-8 shadow-xl"
      >
        <h1 className="text-center text-3xl font-semibold text-white">
          Sign in to{" "}
          <span className="bg-gradient-to-r from-violet-500 to-indigo-500 bg-clip-text text-transparent">
            Your Universe
          </span>
        </h1>

        <div className="relative">
          <i className="fas fa-user absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500"></i>
          <input
            id="username"
            name="username"
            type="text"
            placeholder="Username"
            autoComplete="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full rounded-lg border border-neutral-700 bg-neutral-800 py-2 pl-10 pr-3 text-white placeholder-neutral-500 focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-600"
          />
        </div>

        <div className="relative">
          <i className="fas fa-lock absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500"></i>
          <input
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-lg border border-neutral-700 bg-neutral-800 py-2 pl-10 pr-10 text-white placeholder-neutral-500 focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-600"
          />
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-violet-400 focus:outline-none"
          >
            <i
              className={`fas ${showPassword ? "fa-eye-slash" : "fa-eye"}`}
            ></i>
          </button>
        </div>

        {error && (
          <InputError message={error} className="text-sm text-red-400" />
        )}

        <div className="flex items-center justify-between text-sm text-neutral-400">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              className="rounded border-neutral-700 bg-neutral-800 text-violet-500 focus:ring-violet-500"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            Remember me
          </label>
          <a
            href="/forgot-password"
            className="text-violet-400 hover:underline"
          >
            Forgot password?
          </a>
        </div>

        <Button type="submit" fullWidth appearance="primary" size="lg">
          Sign In
        </Button>

        <div className="text-center text-sm text-neutral-400">
          Don’t have an account?{" "}
          <a
            href="/register"
            className="font-medium text-violet-400 hover:underline"
          >
            Join My Universe
          </a>
        </div>
      </form>
    </div>
  );
}
