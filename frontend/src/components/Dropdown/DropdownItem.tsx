import Link from "next/link";

interface DropdownItemProps {
  item: {
    label: string;
    icon: string;
    href: string;
  };
  className?: string;
}

export default function DropdownItem({ item, className }: DropdownItemProps) {
  return (
    <Link
      href={item.href}
      as="button"
      className={`flex w-full cursor-pointer items-center gap-3 px-4 py-2 text-sm transition hover:bg-gray-700 ${className}`}
    >
      <i className={item.icon}></i>
      {item.label}
    </Link>
  );
}
