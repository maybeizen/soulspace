import Link from "next/link";

interface SidebarItemProps {
  icon?: string;
  label: string;
  route: string;
  onClick?: () => void;
  isActive?: boolean;
}

export default function SidebarItem({
  icon,
  label,
  route,
  onClick,
  isActive = false,
}: SidebarItemProps) {
  return (
    <Link
      href={route}
      onClick={onClick}
      className={`group mb-1 flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-all ${
        isActive
          ? "bg-gray-700 text-white"
          : "text-gray-300 hover:bg-gray-700 hover:text-white"
      } `}
    >
      {icon && (
        <i
          className={`fas ${icon} text-base transition-transform group-hover:scale-110 ${
            isActive ? "text-white" : "text-gray-400"
          }`}
        ></i>
      )}
      <span>{label}</span>
    </Link>
  );
}
