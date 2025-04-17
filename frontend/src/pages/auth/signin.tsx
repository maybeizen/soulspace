import { useState } from "react";

import Button from "../../components/Button";
import Input from "../../components/Input/Input";
import InputError from "../../components/Input/InputError";

export default function SignIn() {
  const [error, setError] = useState<string | null>(null);
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // backend api call to sign in here
  };

  return (
    <div className="flex h-screen w-full items-center justify-center bg-black">
      <form
        className="w-full max-w-sm space-y-4 rounded-lg bg-neutral-900 p-6 shadow-md"
        onSubmit={handleSubmit}
      >
        <h1 className="text-2xl text-center font-bold text-white">
          Continue to{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-indigo-500">
            Your Universe
          </span>
        </h1>
        <Input
          id="username"
          name="username"
          type="text"
          placeholder="Username"
          autoComplete="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          error={error}
        />
        <Input
          id="password"
          name="password"
          type="password"
          placeholder="Password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={error}
        />
        {error && (
          <InputError message={error} className="text-sm text-red-400" />
        )}
        <Button type="submit" fullWidth appearance="primary" size="lg">
          Sign In
        </Button>
      </form>
    </div>
  );
}
