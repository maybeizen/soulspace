"use client";

import Button from "../components/Button";
import { redirect } from "next/navigation";

export default function Home() {
  return (
    <main className="relative flex items-center justify-center min-h-screen mx-auto overflow-hidden text-white">
      <div className="pointer-events-none fixed inset-0 opacity-50 -z-50">
        <div className="sky absolute inset-0 w-full h-full">
          {Array.from({ length: 7 }).map((_, index) => (
            <div key={index} className="star"></div>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center justify-center z-10 text-center space-y-6 max-w-3xl">
        <h1 className="text-5xl sm:text-6xl font-bold tracking-tight leading-tight drop-shadow-md">
          Welcome to{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-indigo-500">
            My Universe
          </span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-300">
          A space for your thoughts, your feelings, your growth. Explore the
          stars and make it your own.
        </p>
        <div className="">
          <Button
            appearance="primary"
            size="md"
            onClick={() => redirect("/auth/signin")}
          >
            <span>Get Started</span>
          </Button>
        </div>
      </div>
    </main>
  );
}
