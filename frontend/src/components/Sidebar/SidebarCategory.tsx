import { useState } from 'react';
import SidebarItem from './SidebarItem';

export interface SidebarNode {
    type: 'category' | 'item';
    label: string;
    icon?: string;
    path?: string;
    children?: SidebarNode[];
}

interface SidebarCategoryProps {
    label: string;
    icon?: string;
    childrenNodes: SidebarNode[];
    level?: number;
}

export default function SidebarCategory({ label, icon, childrenNodes, level = 0 }: SidebarCategoryProps) {
    const [isOpen, setIsOpen] = useState(false);
    const toggleOpen = () => setIsOpen((prev) => !prev);

    return (
        <div className={`mb-2 pl-${level * 4}`}>
            <button
                className="flex w-full items-center justify-between rounded-lg bg-gray-800 px-3 py-2 transition hover:bg-gray-700 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                onClick={toggleOpen}
                aria-expanded={isOpen}
            >
                <div className="flex items-center gap-2">
                    {icon && <i className={`fas ${icon} text-white`}></i>}
                    <span className="font-medium text-white">{label}</span>
                </div>
                <i className={`fas fa-chevron-down text-sm text-white transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}></i>
            </button>

            <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="mt-2 space-y-1 border-l border-gray-700 pl-2">
                    {childrenNodes.map((node, index) => {
                        if (node.type === 'category') {
                            return (
                                <SidebarCategory
                                    key={index}
                                    label={node.label}
                                    icon={node.icon}
                                    childrenNodes={node.children || []}
                                    level={level + 1}
                                />
                            );
                        } else if (node.type === 'item' && node.path) {
                            return (
                                <div key={index} className="pl-4">
                                    <SidebarItem label={node.label} icon={node.icon} route={node.path} isActive={false} />
                                </div>
                            );
                        }
                        return null;
                    })}
                </div>
            </div>
        </div>
    );
}
