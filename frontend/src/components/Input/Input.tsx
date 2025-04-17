import InputError from "./InputError";

interface InputProps {
  id?: string;
  name?: string;
  type?: string;
  placeholder?: string;
  autoComplete?: string;
  value?: string | number | readonly string[] | undefined;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string | null;
}

export default function Input({
  id,
  name,
  type = "text",
  placeholder,
  autoComplete,
  value,
  onChange,
  error,
  ...props
}: InputProps) {
  return (
    <div className="flex flex-col gap-1">
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        value={value}
        onChange={onChange}
        className={`block w-full rounded-lg border-2 p-2 text-white shadow-md transition-all ${
          error
            ? "border-red-500 focus:ring-red-400"
            : "border-gray-600 focus:border-indigo-500 focus:ring-indigo-400"
        } bg-gray-800 focus:ring-2`}
        {...props}
      />
      {error && <InputError message={error} className="text-sm text-red-400" />}
    </div>
  );
}
