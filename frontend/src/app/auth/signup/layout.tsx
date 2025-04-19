import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Up | My Universe",
  description: "Sign up for My Universe",
};

export default function SignUpLayout({
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
