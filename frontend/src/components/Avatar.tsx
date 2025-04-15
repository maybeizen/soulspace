interface AvatarProps {
    user: {
        id: number;
        name: string;
        email: string;
        discord_avatar: string | null;
    } | null;
    className?: string;
}

export default function Avatar({ user, className = '' }: AvatarProps) {
    return (
        <>
            {user ? (
                <img src={`${user.discord_avatar}`} alt={user.name} className={`h-8 w-8 rounded-full border border-blue-500 ${className}`} />
            ) : (
                <div className={`h-10 w-10 animate-pulse rounded-full bg-gray-500`}></div>
            )}
        </>
    );
}
