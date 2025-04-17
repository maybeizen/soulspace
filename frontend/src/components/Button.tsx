import { FC, ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  appearance?: "primary" | "secondary" | "text" | "gray" | "success" | "danger";
  onClick?: () => void;
  disabled?: boolean;
  icon?: string | null;
  type?: "button" | "submit" | "reset";
  fullWidth?: boolean;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  rounded?: "sm" | "md" | "lg" | "full";
  className?: string;
  loading?: boolean;
}

const Button: FC<ButtonProps> = ({
  children,
  appearance = "primary",
  onClick,
  disabled = false,
  icon = null,
  type = "button",
  fullWidth = false,
  size = "sm",
  rounded = "md",
  className = "",
  loading = false,
}) => {
  const appearanceStyles = {
    primary: "bg-gradient-to-r from-violet-500 to-indigo-500 text-white",
    secondary:
      "border-2 border-indigo-500 text-indigo-500 bg-transparent hover:bg-indigo-500 hover:text-white",
    text: "text-indigo-500 hover:underline bg-transparent",
    gray: "bg-gray-200 text-gray-800",
    success: "bg-green-500 text-white",
    danger: "bg-red-500 text-white",
  };

  const sizeStyles = {
    xs: "px-2 py-1 text-xs",
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2",
    lg: "px-6 py-3 text-lg",
    xl: "px-8 py-4 text-xl",
  };

  const roundedStyles = {
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    full: "rounded-full",
  };

  const isDisabled = disabled || loading;

  const baseButtonClass = `
        flex
        items-center
        justify-center
        font-medium
        transition
        duration-200
    `.trim();

  const baseClasses = `
        ${baseButtonClass}
        ${appearanceStyles[appearance]}
        ${sizeStyles[size]}
        ${roundedStyles[rounded]}
        ${
          isDisabled
            ? "opacity-50 cursor-not-allowed"
            : "hover:opacity-85 active:scale-95 cursor-pointer"
        }
        ${fullWidth ? "w-full" : ""}
        ${className}
    `.trim();

  return (
    <button
      type={type}
      className={baseClasses}
      onClick={!isDisabled ? onClick : undefined}
      disabled={isDisabled}
    >
      {loading ? (
        <span className="mr-2 inline-block animate-spin">
          <i className="fas fa-spinner" />
        </span>
      ) : icon ? (
        <span className="mr-2">
          <i className={icon} />
        </span>
      ) : null}
      {children}
    </button>
  );
};

export default Button;
