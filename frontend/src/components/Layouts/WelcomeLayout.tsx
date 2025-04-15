import Navbar from '../Navbar/Navbar';

export default function WelcomeLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex min-h-screen flex-col bg-gray-900 text-white">
            <Navbar />
            <main className="flex-grow">{children}</main>
        </div>
    );
}
