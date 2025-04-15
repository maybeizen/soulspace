import { useEffect, useRef, useState } from 'react';

interface DropdownProps {
    label: string | React.ReactNode;
    className?: string;
    onClick?: () => void;
    children: React.ReactNode;
}

export default function Dropdown({ label, className = '', onClick, children }: DropdownProps) {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const toggleDropdown = () => {
        setIsOpen((prev) => !prev);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className={`relative inline-block hover:bg-gray-700 ${className}`} ref={dropdownRef}>
            <button className="flex items-center justify-center" onClick={toggleDropdown}>
                {label}
            </button>

            <div
                className={`absolute left-0 mt-4 w-48 transform rounded border border-gray-700 bg-gray-800 text-white shadow-lg transition-all duration-200 ease-in-out ${
                    isOpen ? 'hover:none scale-100 opacity-100' : 'pointer-events-none scale-95 opacity-0'
                }`}
            >
                {children}
            </div>
        </div>
    );
}
