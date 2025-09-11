"use client";


export default function Header() {
    return (
        <header className="bg-transparent text-white Z-50">
            <div className="container mx-auto flex justify-between items-center py-4 px-6">
                <h2 className="text-xl font-bold">EasyOpz</h2>
                <nav className="flex space-x-6 items-center">
                    <a href="#features" className="hover:text-highlight">Features</a>
                    <a href="#pricing" className="hover:text-highlight">Pricing</a>
                    <a href="#about" className="hover:text-highlight">About</a>
                    <button className="bg-secondary px-4 py-2 rounded-md text-white hover:bg-teal-600">
                        Get Started
                    </button>
                </nav>
            </div>
        </header>

    );
}
