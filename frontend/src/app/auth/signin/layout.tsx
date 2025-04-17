import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign In | My Universe",
  description: "Sign in to your account",
};

export default function SignInLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-black">
      {children}
    </div>
  );
}
