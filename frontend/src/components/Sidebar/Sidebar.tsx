import React from 'react';

export default function Sidebar({ children }: { children: React.ReactNode }) {
    return (
        <aside className="scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent h-[75vh] w-64 overflow-y-auto rounded-2xl bg-gray-800 p-4 text-white shadow-2xl">
            {children}
        </aside>
    );
}
