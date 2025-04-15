import Navbar from '../Navbar/Navbar';

export default function AppLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex min-h-screen flex-col bg-gray-900 pt-16 text-white">
            <Navbar />
            <main className="flex-grow">{children}</main>
        </div>
    );
}
