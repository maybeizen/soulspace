import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import SidebarCategory from '../Sidebar/SidebarCategory';
import SidebarItem from '../Sidebar/SidebarItem';

interface Props {
    children: React.ReactNode;
    guildId: string;
}

export default function ManageLayout({ children, guildId }: Props) {
    const sidebarNodes: {
        label: string;
        icon: string;
        children: { label: string; path: string }[];
    }[] = [
        {
            label: 'Manage',
            icon: 'fa-solid fa-cog',
            children: [
                { label: 'Users', path: 'users' },
                { label: 'Roles', path: 'roles' },
                { label: 'Permissions', path: 'permissions' },
                { label: 'Channels', path: 'channels' },
            ],
        },
        {
            label: 'Moderation',
            icon: 'fa-solid fa-shield-halved',
            children: [
                { label: 'Auto Mod', path: 'moderation/automod' },
                { label: 'Bans', path: 'moderation/bans' },
                { label: 'Logs', path: 'moderation/logs' },
            ],
        },
        {
            label: 'Greetings',
            icon: 'fa-solid fa-bell',
            children: [
                { label: 'Welcome', path: 'welcome' },
                { label: 'Goodbye', path: 'goodbye' },
                { label: 'Auto Roles', path: 'autorole' },
            ],
        },
        {
            label: 'Fun & Games',
            icon: 'fa-solid fa-gamepad',
            children: [
                { label: 'Leveling', path: 'leveling' },
                { label: 'XP Rewards', path: 'leveling/rewards' },
                { label: 'Economy', path: 'economy' },
            ],
        },
        {
            label: 'Tickets',
            icon: 'fa-solid fa-ticket',
            children: [
                { label: 'My Panels', path: 'tickets/panels' },
                { label: 'Ticket Options', path: 'tickets/settings' },
                { label: 'Ticket Logs', path: 'tickets/logs' },
            ],
        },
        {
            label: 'Settings',
            icon: 'fa-solid fa-sliders',
            children: [
                { label: 'Prefix & Commands', path: 'settings/prefix' },
                { label: 'Language', path: 'settings/language' },
                { label: 'Bot Permissions', path: 'settings/permissions' },
            ],
        },
    ];

    const currentPath = window.location.pathname;

    return (
        <div className="flex min-h-screen flex-col bg-gray-900 pt-16 text-white">
            <Navbar />

            <main className="mx-auto flex w-full max-w-7xl flex-grow items-center justify-center gap-12">
                <Sidebar>
                    <SidebarItem
                        icon="fa-solid fa-house"
                        label="Dashboard"
                        route={`/guild/${guildId}`}
                        isActive={currentPath === `/guild/${guildId}`}
                    />

                    {sidebarNodes.map((category, index) => (
                        <SidebarCategory
                            key={index}
                            label={category.label}
                            icon={category.icon}
                            childrenNodes={category.children.map((child) => ({
                                type: 'item',
                                label: child.label,
                                path: `/guild/${guildId}/${child.path}`,
                                isActive: currentPath.includes(`/${child.path}`),
                            }))}
                        />
                    ))}
                </Sidebar>

                <div className="h-[75vh] flex-1 overflow-auto rounded-xl bg-gray-800 p-6 shadow-xl">{children}</div>
            </main>
        </div>
    );
}
