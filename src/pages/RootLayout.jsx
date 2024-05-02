import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function RootLayout() {
    return (
        <div className="flex flex-col min-h-screen h-full text-white bg-white text-sm sm:text-base font-nunito">
            <header>
                <nav className="fixed top-0 z-30 w-full md:justify-between md:items-center navbar text-base md:text-sm h-auto shadow-md">
                    <Navbar />
                </nav>
            </header>

            <main className="relative grow mt-16 mb-16 md:mb-4">
                <Outlet />
            </main>

            <footer className="hidden md:block">
                <Footer />
            </footer>
        </div>
    );
}
